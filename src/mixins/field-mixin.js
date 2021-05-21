export default {
  inject: ['size'],

  props: {
    field: {
      type: Object,
      default: () => ({}),
    },
  },
}
