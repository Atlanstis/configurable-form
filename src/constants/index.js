export const TAG_TYPE = {
  INPUT: 'input',
  RADIO: 'radio',
  CHECKBOX: 'checkbox',
  INPUT_NUMBER: 'inputNumber',
  SELECT: 'select',
  SWITCH: 'switch',
  TIME_PICKER: 'timePicker',
  DATE_PICKER: 'datePicker',
  DATE_TIME_PICKER: 'dateTimePicker',
}

export const SUPPORT_EVENT = {
  [TAG_TYPE.INPUT]: ['input', 'blur', 'focus', 'change', 'clear'],
  [TAG_TYPE.RADIO]: ['input', 'change'],
  [TAG_TYPE.CHECKBOX]: ['input', 'change'],
  [TAG_TYPE.INPUT_NUMBER]: ['input', 'blur', 'focus', 'change'],
  [TAG_TYPE.SELECT]: ['input'],
  [TAG_TYPE.SWITCH]: ['input', 'change'],
}

export const SUPPORT_SIZE = [
  TAG_TYPE.INPUT,
  TAG_TYPE.RADIO,
  TAG_TYPE.CHECKBOX,
  TAG_TYPE.INPUT_NUMBER,
  TAG_TYPE.SELECT,
]
