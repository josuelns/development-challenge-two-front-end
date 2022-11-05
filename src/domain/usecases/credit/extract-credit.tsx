import { CreditResponseModel } from '@/domain/models/credit'

export interface ExtractCredit {
  extract: (params: ExtractCredit.Params) => Promise<ExtractCredit.Model>
}

export namespace ExtractCredit {
  export type Params = {
    def: any, 
  }

  export type Model = CreditResponseModel
}