<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CTimePicker',

  mixins: [FieldMixin],

  data() {
    return {
      value: '',
    }
  },

  render() {
    return (
      <el-time-select
        v-model={this.value}
        size={this.size}
        picker-options={{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }}
        placeholder="选择时间"
      ></el-time-select>
    )
  },
}
</script>
