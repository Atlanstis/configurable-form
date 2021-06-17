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
          props: {
            clearable: true,
            placeholder: 'test',
          },
          default: '222',
          slots: [
            {
              slotName: 'append',
              formatter: () => {
                return <el-button icon="el-icon-search"></el-button>
              },
            },
          ],
          on: {
            change: (value) => {
              console.log('change', value)
            },
            blur: (value) => {
              console.log('blur', value)
            },
            focus: (value) => {
              console.log('focus', value)
            },
            input: (value) => {
              console.log('input', value)
            },
            clear: (value) => {
              console.log('clear', value)
            },
          },
        },
        {
          type: 'radio',
          prop: 'radio',
          label: 'radio',
          default: '1',
          options: [
            {
              label: 'radio 1',
              value: '1',
              props: {
                border: true,
              },
            },
            {
              label: 'radio 2',
              value: '2',
            },
          ],
          on: {
            input: (value) => {
              console.log('input', value)
            },
            change: (value) => {
              console.log('change', value)
            },
          },
        },
        {
          type: 'radio',
          prop: 'radio2',
          label: 'radio2',
          childType: 'radio-button',
          default: '2',
          options: [
            {
              label: 'radio 1',
              value: '1',
              props: {
                disabled: true,
              },
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
          on: {
            change: (val) => {
              console.log('change', val)
            },
          },
          options: [
            {
              label: 'checkbox 1',
              value: '1',
              props: {
                border: true,
              },
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
          props: {
            precision: 2,
            min: 0,
            max: 10,
          },
          on: {
            change: (val) => {
              console.log('change', val)
            },
            blur: (value) => {
              console.log('blur', value)
            },
            focus: (value) => {
              console.log('focus', value)
            },
          },
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
          default: '0',
          props: {
            'active-value': '1',
            'inactive-value': '0',
            'active-text': '按月付费',
            'inactive-text': '按年付费',
          },
          on: {
            change: (val) => {
              console.log('change', val)
            },
          },
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
  width: 400px;
  margin: 100px auto;
}
</style>
