<template>
  <div class="home">
    <configurable-form :size="'small'" :fields="fields"></configurable-form>
  </div>
</template>

<script>
import ConfigurableForm from '@/components/configurable-form'

export default {
  name: 'Home',

  components: {
    ConfigurableForm,
  },

  data() {
    return {
      fields: [
        {
          type: 'input',
          prop: 'input',
          label: 'input',
        },
        {
          type: 'radio',
          prop: 'radio',
          label: 'radio',
          options: [
            {
              label: 'radio 1',
              value: '1',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.home {
  width: 1000px;
  margin: 100px auto;
}
</style>
