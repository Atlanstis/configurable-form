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
            {
              label: 'radio 2',
              value: '2',
            },
          ],
        },
        {
          type: 'checkbox',
          prop: 'checkbox',
          label: 'checkbox',
          options: [
            {
              label: 'checkbox 1',
              value: '1',
            },
            {
              label: 'checkbox 2',
              value: '2',
            },
          ],
        },
        {
          type: 'inputNumber',
          prop: 'inputNumber',
          label: 'inputNumber',
        },
        {
          type: 'select',
          prop: 'select',
          label: 'select',
          options: [
            {
              label: 'select 1',
              value: '1',
            },
            {
              label: 'select 2',
              value: '2',
            },
          ],
        },
        {
          type: 'switch',
          prop: 'switch',
          label: 'switch',
        },
        {
          type: 'timePicker',
          prop: 'timePicker',
          label: 'timePicker',
        },
        {
          type: 'datePicker',
          prop: 'datePicker',
          label: 'datePicker',
        },
        {
          type: 'dateTimePicker',
          prop: 'dateTimePicker',
          label: 'dateTimePicker',
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
