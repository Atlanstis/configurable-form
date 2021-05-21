<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CRadio',

  mixins: [FieldMixin],

  data() {
    return {
      value: '',
    }
  },

  computed: {
    options() {
      return this.field.options || []
    },
  },

  render() {
    return (
      <el-radio-group v-model={this.value}>
        {this.options.map((opt) => {
          return (
            <el-radio key={opt.value} label={opt.value}>
              {opt.label}
            </el-radio>
          )
        })}
      </el-radio-group>
    )
  },
}
</script>
