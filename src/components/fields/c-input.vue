<script>
import FieldMixin from '@/mixins/field-mixin.js'

export default {
  name: 'CInput',

  mixins: [FieldMixin],

  data() {
    return {
      value: '',
    }
  },

  render() {
    return <el-input v-model={this.value} size={this.size}></el-input>
  },
}
</script>
