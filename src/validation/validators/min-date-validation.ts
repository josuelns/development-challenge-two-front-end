import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class MinDateValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly minData: Date
  ) { }

  validate(input: any): object | null {
    let error = null
    let err = false

    if (input[this.field].length > 0) {
      const date = new Date(input[this.field])
      const dateCompare = this.minData

      if (date < dateCompare) {
        err = true
      }
    }
    if (err) {
      console.log('tenho erro')
      error = {
        fieldName: this.field,
        type: 'InvalidField',
        message: RequiredFieldError + 'm d'
      }
    }

    return error
  }
} 