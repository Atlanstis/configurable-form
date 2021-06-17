<script>
import './fields'
import RenderFiled from './render-filed'
import { isObject, isArray, hasOwnProperty } from '@/utils'
import { SUPPORT_EVENT, TAG_TYPE } from '@/constants'

const FIELD_DEFAULT_VAL = {
  [TAG_TYPE.INPUT]: '',
  [TAG_TYPE.RADIO]: '',
  [TAG_TYPE.SELECT]: '',
  [TAG_TYPE.CHECKBOX]: [],
  [TAG_TYPE.INPUT_NUMBER]: 0,
  [TAG_TYPE.SWITCH]: '',
  [TAG_TYPE.TIME_PICKER]: '',
  [TAG_TYPE.DATE_PICKER]: '',
  [TAG_TYPE.DATE_TIME_PICKER]: '',
}

export default {
  name: 'ConfigurableForm',

  components: {
    RenderFiled,
  },

  props: {
    size: {
      type: String,
      default: 'small',
    },
    labelWidth: {
      type: String,
      default: '120px',
    },
    fields: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      formData: {},
      defaultData: {},
    }
  },

  provide() {
    return {
      size: this.size,
    }
  },

  created() {
    this.dataInit()
  },

  methods: {
    dataInit() {
      if (!Array.isArray(this.fields)) return
      let formData = {}
      let defaultData = {}
      this.fields.map((field) => {
        let val
        if (hasOwnProperty(field, 'default')) {
          val = field.default
        } else {
          val = hasOwnProperty(FIELD_DEFAULT_VAL, field.type)
            ? FIELD_DEFAULT_VAL[field.type]
            : undefined
        }
        formData[field.prop] = val
        defaultData[field.prop] = val
      })
      this.formData = formData
      this.defaultData = defaultData
    },
  },

  render() {
    return (
      <el-form labelWidth={this.labelWidth}>
        {this.fields.map((field) => {
          const { type, on, prop } = field
          // 注册监听事件
          const onEvent = {}
          if (isObject(on) && isArray(SUPPORT_EVENT[type])) {
            for (let eventName in on) {
              if (SUPPORT_EVENT[type].includes(eventName)) {
                onEvent[eventName] = (...value) => {
                  on[eventName](...value)
                }
              }
            }
          }
          const props = {
            type,
            field,
            size: this.size,
          }
          const fieldEl = (
            <render-filed
              v-model={this.formData[prop]}
              props={props}
              on={onEvent}
            ></render-filed>
          )
          return (
            <el-form-item
              key={field.prop}
              label={`${field.label}：`}
              prop={field.prop}
            >
              {fieldEl}
            </el-form-item>
          )
        })}
      </el-form>
    )
  },
}
</script>
