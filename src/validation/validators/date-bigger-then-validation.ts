import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class DateBiggerThenValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldCompare: string
  ) { }

  validate(input: any): object | null {
    let error = null
    let err = false

    const date = new Date(input[this.field])
    const dateCompare = new Date(input[this.fieldCompare])

    if (date < dateCompare) {
      err = true
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