module.exports = (plop) => {
  plop.setGenerator('field', {
    description: '新建字段组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名称？',
        default: '',
      },
    ],
    actions: function (data) {
      data.upperName = data.name
        .toLowerCase()
        .replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
      return [
        {
          type: 'add',
          path: 'src/components/fields/c-{{name}}.vue',
          templateFile: 'hbs/field.hbs',
          data,
        },
        {
          type: 'modify',
          path: 'src/components/fields/index.js',
          transform: (content, data) => {
            let i = 0
            let str = ''
            str = content.replace(/(\n\n)/g, function (word) {
              i++
              if (i === 1) {
                return `\nimport C${data.upperName} from './c-${data.name}'\n\n`
              }
              return word
            })
            const arr = str.split('\n')
            arr.splice(
              arr.length - 1,
              0,
              `Vue.component('C${data.upperName}', C${data.upperName})`
            )
            return arr.join('\n')
          },
          data,
        },
      ]
    },
  })
}
