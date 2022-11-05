import { CreditResponseModel } from '@/domain/models/credit'

export interface RemoveCredit {
  remove: (params: RemoveCredit.Params) => Promise<RemoveCredit.Model>
}

export namespace RemoveCredit {
  export type Params = {
    def: any, 
  }

  export type Model = CreditResponseModel
}