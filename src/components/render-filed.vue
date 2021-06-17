<script>
import _ from 'lodash'
import { hasOwnProperty, isArray, isNullOrUndefined, isFunction } from '@/utils'
import { SUPPORT_EVENT, SUPPORT_SIZE, TAG_TYPE } from '@/constants'

// 映射成 el 标识
const ELE_TAG_MAPPING = {
  [TAG_TYPE.INPUT]: 'el-input',
  [TAG_TYPE.RADIO]: 'el-radio-group',
  [TAG_TYPE.CHECKBOX]: 'el-checkbox-group',
  [TAG_TYPE.INPUT_NUMBER]: 'el-input-number',
  [TAG_TYPE.SELECT]: 'el-select',
  [TAG_TYPE.SWITCH]: 'el-switch',
}

// 设置在 attrs 的属性
const ELE_TAG_ATTRS = {
  [TAG_TYPE.INPUT]: ['placeholder'],
}

const ELE_CHILD_TAG = {
  radio: (type) => {
    if (isNullOrUndefined(type) || type === 'radio') {
      return 'el-radio'
    } else if (type === 'radio-button') {
      return 'el-radio-button'
    }
    return undefined
  },
  checkbox: (type) => {
    if (isNullOrUndefined(type) || type === 'checkbox') {
      return 'el-checkbox'
    } else if (type === 'checkbox-button') {
      return 'el-checkbox-button'
    }
    return undefined
  },
  select: 'el-option',
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
        // 防止与双向绑定的值冲突，双向绑定失效
        if (hasOwnProperty(objProps, 'value')) {
          delete objProps.value
        }
        Object.assign(props, objProps)
      }
      // 全局设置组件 size
      if (SUPPORT_SIZE.includes(this.type)) {
        props.size = this.size
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

    // 处理子节点
    handleChildren(h) {
      const children = []
      if (hasOwnProperty(ELE_CHILD_TAG, this.type)) {
        const { childType, options } = this.field
        const childTag = ELE_CHILD_TAG[this.type]
        const tag = isFunction(childTag) ? childTag(childType) : childTag
        if (isNullOrUndefined(tag)) return []
        if (['radio', 'checkbox'].includes(this.type)) {
          Array.isArray(options) &&
            options.forEach((option) => {
              const props = option.props || {}
              children.push(
                this.createElement(
                  h,
                  tag,
                  {},
                  {
                    props: {
                      label: option.value,
                      ...props,
                    },
                    key: option.value,
                  },
                  [option.label]
                )
              )
            })
        } else if (this.type === 'select') {
          Array.isArray(options) &&
            options.forEach((option) => {
              const props = option.props || {}
              children.push(
                this.createElement(
                  h,
                  tag,
                  {},
                  {
                    props: {
                      label: option.label,
                      value: option.value,
                      ...props,
                    },
                    key: option.value,
                  },
                  []
                )
              )
            })
        }
      }
      return children
    },

    createElement(h, tag, on, props, children = []) {
      return h(
        tag,
        {
          ...props,
          on,
        },
        [...children]
      )
    },
  },

  render: function (h) {
    if (hasOwnProperty(ELE_TAG_MAPPING, this.type)) {
      const onEvent = this.handleEvent()
      const props = this.handleProps()
      const slots = this.handleSlots(h)
      const children = this.handleChildren(h)
      return this.createElement(h, ELE_TAG_MAPPING[this.type], onEvent, props, [
        ...slots,
        ...children,
      ])
    }
    return h('div')
  },
}
</script>
