<script>
import './fields'

export default {
  name: 'ConfigurableForm',

  props: {
    size: {
      type: String,
      default: 'small',
    },
    labelWidth: {
      type: String,
      default: '120px',
    },
    fields: {
      type: Array,
      default: () => [],
    },
  },

  provide() {
    return {
      size: this.size,
    }
  },

  render() {
    return (
      <el-form labelWidth={this.labelWidth}>
        {this.fields.map((field) => {
          const { type } = field
          let fieldEl = null
          switch (type) {
            case 'input':
              fieldEl = <c-input></c-input>
              break
            case 'radio':
              fieldEl = <c-radio></c-radio>
              break
            default:
              return null
          }
          return (
            <el-form-item
              key={field.prop}
              label={`${field.label}：`}
              prop={field.prop}
            >
              {fieldEl}
            </el-form-item>
          )
        })}
      </el-form>
    )
  },
}
</script>
