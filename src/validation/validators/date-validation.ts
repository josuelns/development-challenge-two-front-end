import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class DateValidation implements FieldValidation {
  constructor (
    readonly field: string
  ) {}

  validate (input: any): object | null{
    let error = null

    if(input[this.field].length > 0){
      const date = new Date(input[this.field])
      if(date.toDateString() === 'Invalid Date' ){
        error = {
          fieldName: this.field,
          type: 'InvalidDate',
          message: RequiredFieldError
        }
      }
    }

    return  error
  }
} 