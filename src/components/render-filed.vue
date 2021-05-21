<script>
const TAG_MAPPING = {
  input: 'c-input',
  radio: 'c-radio',
  select: 'c-select',
  checkbox: 'c-checkbox',
  inputNumber: 'c-input-number',
  switch: 'c-switch',
  timePicker: 'c-time-picker',
  datePicker: 'c-date-picker',
  dateTimePicker: 'c-date-time-picker',
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
  },

  render: function (createElement) {
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
