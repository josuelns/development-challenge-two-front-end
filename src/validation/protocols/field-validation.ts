export interface FieldValidation {
    field: string
    validate: (inpsut: any) => object | null
  }