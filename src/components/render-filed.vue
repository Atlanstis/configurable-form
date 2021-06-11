<script>
import _ from 'lodash'
import { hasOwnProperty, isArray } from '@/utils'
import { SUPPORT_EVENT, SUPPORT_SIZE } from '@/constants'

const TAG_MAPPING = {
  radio: 'c-radio',
  select: 'c-select',
  checkbox: 'c-checkbox',
  inputNumber: 'c-input-number',
  switch: 'c-switch',
  timePicker: 'c-time-picker',
  datePicker: 'c-date-picker',
  dateTimePicker: 'c-date-time-picker',
}

const ELE_TAG_MAPPING = {
  input: 'el-input',
}

// 设置在 attrs 的属性
const ELE_TAG_ATTRS = {
  input: ['placeholder'],
}

export default {
  props: {
    type: {
      type: String,
      default: '',
    },
    field: {
      type: Object,
      default: () => ({}),
    },
    size: {
      type: String,
      default: '',
    },
    value: {},
  },

  methods: {
    // 处理监听事件
    handleEvent() {
      const onEvent = {}
      const { type } = this
      if (isArray(SUPPORT_EVENT[type])) {
        SUPPORT_EVENT[type].forEach((eventName) => {
          onEvent[eventName] = (...value) => {
            this.$emit(eventName, ...value)
          }
        })
      }
      return onEvent
    },

    // 处理 props 与 attrs
    handleProps() {
      const props = {
        value: this.value,
      }
      const attrs = {}
      if (hasOwnProperty(this.field, 'props')) {
        const objProps = _.cloneDeep(this.field.props)
        // 寻找设置在 attrs 的属性
        if (hasOwnProperty(ELE_TAG_ATTRS, this.type)) {
          ELE_TAG_ATTRS[this.type].forEach((attr) => {
            if (hasOwnProperty(objProps, attr)) {
              attrs[attr] = objProps[attr]
              delete objProps[attr]
            }
          })
        }
        // 全局设置组件 size
        if (SUPPORT_SIZE.includes(this.type)) {
          props.size = this.size
        }
        // 防止与双向绑定的值冲突，双向绑定失效
        if (hasOwnProperty(objProps, 'value')) {
          delete objProps.value
        }
        Object.assign(props, objProps)
      }
      return { props, attrs }
    },

    // 处理插槽
    handleSlots(h) {
      let slots = []
      const { slots: fieldSLots } = this.field
      if (Array.isArray(fieldSLots)) {
        slots = fieldSLots.map((slot) => {
          return h('template', { slot: slot.slotName }, [slot.formatter()])
        })
      }
      return slots
    },
  },

  render: function (h) {
    if (hasOwnProperty(ELE_TAG_MAPPING, this.type)) {
      const onEvent = this.handleEvent()
      const props = this.handleProps()
      const slots = this.handleSlots(h)
      return h(
        ELE_TAG_MAPPING[this.type],
        {
          ...props,
          on: onEvent,
        },
        [...slots]
      )
    }
    const tag = TAG_MAPPING[this.type]
    if (tag) {
      return h(tag, {
        props: {
          field: this.field,
        },
      })
    }
    return h('div')
  },
}
</script>
