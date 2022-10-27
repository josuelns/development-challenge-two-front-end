import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class NotEqualDateValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly fieldCompare: string
  ) {}

  validate(input: any): object | null {
    let error = null
    let err = false

    console.log('entrei em date compare')
    if (input[this.field].length > 0 && input[this.fieldCompare].length > 0) {
      
      const date = new Date(input[this.field])

      const dateYear = date.getFullYear()
      const dateMonth = date.getMonth()
      const dateDay = date.getDay()
      const dateHour = date.getHours()
      const dateMinute = date.getMinutes()

      const dateCompare = new Date(input[this.fieldCompare])

      const dateYearCompare = dateCompare.getFullYear()
      const dateMonthCompare = dateCompare.getMonth()
      const dateDayCompare = dateCompare.getDay()
      const dateHourCompare = dateCompare.getHours()
      const dateMinuteCompare = dateCompare.getMinutes()

      if (dateYear === dateYearCompare && dateMonth === dateMonthCompare && dateDay === dateDayCompare && dateHour === dateHourCompare && dateMinute === dateMinuteCompare) {
        err = true
      }

    }
    if (err) {
      error = {
        fieldName: this.field,
        type: 'InvalidField',
        message: RequiredFieldError
      }
    }

    return error
  }
} 