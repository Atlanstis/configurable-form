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
      ]
    },
  })
}
