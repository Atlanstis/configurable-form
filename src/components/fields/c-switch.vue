<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CSwitch',

  mixins: [FieldMixin],

  data() {
    return {
      value: '',
    }
  },

  render() {
    return (
      <el-switch
        v-model={this.value}
        active-color="#13ce66"
        inactive-color="#ff4949"
      ></el-switch>
    )
  },
}
</script>
