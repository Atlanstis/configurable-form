import _ from 'lodash'

const is = _.curry((type, val) => {
  return Object.prototype.toString.call(val) === `[object ${type}]`
})

export const isFunction = is('Function')

export const isNullOrUndefined = (val) => {
  return val === null || val === undefined
}

export const hasOwnProperty = (value, key) => {
  return Object.prototype.hasOwnProperty.call(value, key)
}
