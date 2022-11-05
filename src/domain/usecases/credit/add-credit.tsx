import { CreditResponseModel } from '@/domain/models/credit'

export interface AddCredit {
  add: (params: AddCredit.Params) => Promise<AddCredit.Model>
}

export namespace AddCredit {
  export type Params = {
    def: any, 
  }

  export type Model = CreditResponseModel
}