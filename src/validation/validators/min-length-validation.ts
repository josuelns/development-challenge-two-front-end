import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly minLength : number
    ) {}

  validate (input: any): object | null {
    let error = null

    if(input[this.field] && input[this.field].length < this.minLength){
      error = {
        fieldName: this.field,
        type: 'InvalidField',
        message: RequiredFieldError
      }
    }

    return  error
  }
} 