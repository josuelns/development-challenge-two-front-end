import { FieldValidation } from '@/validation/protocols'
import { RequiredFieldError } from '@/validation/errors'

export class RequireFieldValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: any): object | null{
    let error = null
    
    if(!input[this.field] && input[this.field].length === 0){
      error = {
        fieldName: this.field,
        type: 'RequiredField',
        message: RequiredFieldError
      }
    }

    return  error
  }
} 