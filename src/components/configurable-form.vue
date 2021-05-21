<script>
import './fields'
import RenderFiled from './render-filed'

export default {
  name: 'ConfigurableForm',

  components: {
    RenderFiled,
  },

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
          const fieldEl = (
            <render-filed type={type} field={field}></render-filed>
          )
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
