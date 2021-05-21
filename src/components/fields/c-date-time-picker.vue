<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CDateTimePicker',

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
        type="datetime"
        placeholder="选择日期时间"
      ></el-date-picker>
    )
  },
}
</script>
