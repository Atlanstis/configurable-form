<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CInputNumber',

  mixins: [FieldMixin],

  data() {
    return {
      value: 0,
    }
  },

  render() {
    return (
      <el-input-number v-model={this.value} size={this.size}></el-input-number>
    )
  },
}
</script>
