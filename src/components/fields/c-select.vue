<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CSelect',

  mixins: [FieldMixin],

  computed: {
    options() {
      return this.field.options || []
    },
  },

  data() {
    return {
      value: '',
    }
  },

  render() {
    return (
      <el-select v-model={this.value} placeholder="请选择">
        {this.options.map((opt) => {
          return (
            <el-option
              key={opt.value}
              label={opt.label}
              value={opt.value}
            ></el-option>
          )
        })}
      </el-select>
    )
  },
}
</script>
