<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CDatePicker',

  mixins: [FieldMixin],

  data() {
    return {
      value: '',
    }
  },

  render() {
    return (
      <el-date-picker
        v-model={this.value}
        size={this.size}
        type="date"
        placeholder="选择日期"
      ></el-date-picker>
    )
  },
}
</script>
