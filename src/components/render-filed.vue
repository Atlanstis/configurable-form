<script>
import { hasOwnProperty } from '@/utils'
import { SUPPORT_EVENT } from '@/constants'

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
    value: {},
  },

  render: function (createElement) {
    if (hasOwnProperty(ELE_TAG_MAPPING, this.type)) {
      const self = this
      const onEvent = {
        input: function (event) {
          self.$emit('input', event)
        },
      }
      if (hasOwnProperty(SUPPORT_EVENT, this.type)) {
        SUPPORT_EVENT[this.type].forEach((eventName) => {
          onEvent[eventName] = function (...value) {
            self.$emit(eventName, ...value)
          }
        })
      }
      return createElement(ELE_TAG_MAPPING[this.type], {
        props: {
          value: this.value,
        },
        on: onEvent,
      })
    }
    const tag = TAG_MAPPING[this.type]
    if (tag) {
      return createElement(tag, {
        props: {
          field: this.field,
        },
      })
    }
    return createElement('div')
  },
}
</script>
