<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CInput',

  mixins: [FieldMixin],

  render() {
    return <el-input size={this.size}></el-input>
  },
}
</script>
