<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CCheckbox',

  mixins: [FieldMixin],

  data() {
    return {
      value: [],
    }
  },

  computed: {
    options() {
      return this.field.options || []
    },
  },

  render() {
    return (
      <el-checkbox-group v-model={this.value}>
        {this.options.map((opt) => {
          return (
            <el-checkbox key={opt.value} label={opt.value}>
              {opt.label}
            </el-checkbox>
          )
        })}
      </el-checkbox-group>
    )
  },
}
</script>
