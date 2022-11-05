import { CreditResponseModel } from '@/domain/models/credit'

export interface PushCredit {
  push: (params: PushCredit.Params) => Promise<PushCredit.Model>
}

export namespace PushCredit {
  export type Params = {
    def: any, 
  }

  export type Model = CreditResponseModel
}