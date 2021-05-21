<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CRadio',

  mixins: [FieldMixin],

  render() {
    return <el-radio-group></el-radio-group>
  },
}
</script>
