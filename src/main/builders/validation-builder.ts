import { FieldValidation } from '@/validation/protocols'

import { 
  RequireFieldValidation,  
  MinLengthValidation,
  MaxLengthValidation,
  DateValidation,
  MinDateValidation,
  NotEqualDateValidation,
  DateBiggerThenValidation 
} from '@/validation/validators'

export class ValidationBuilder {
  private constructor (
    private readonly fieldName: string,
    private readonly validations: FieldValidation[]
  ) {}

  static field (fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  required (): ValidationBuilder {
    this.validations.push(new RequireFieldValidation(this.fieldName))
    return this
  }

  minLentgh (length: number): ValidationBuilder {
    this.validations.push(new MinLengthValidation(this.fieldName, length))
    return this
  }

  maxLentgh (length: number): ValidationBuilder {
    this.validations.push(new MaxLengthValidation(this.fieldName, length))
    return this
  }

  date (): ValidationBuilder {
    this.validations.push(new DateValidation(this.fieldName))
    return this
  }
  
  minDate (min: Date): ValidationBuilder {
    this.validations.push(new MinDateValidation(this.fieldName, min))
    return this
  }

  notEqualDate (compare: string): ValidationBuilder {
    this.validations.push(new NotEqualDateValidation(this.fieldName, compare))
    return this
  }

  biggerThen (compare: string): ValidationBuilder {
    this.validations.push(new DateBiggerThenValidation(this.fieldName, compare))
    return this
  }

  build (): FieldValidation[] {
    return this.validations
  }
}