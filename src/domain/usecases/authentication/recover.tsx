import { AuthenticationResponseModel } from '@/domain/models/Authentication'

export interface RecoverAuthentication {
  recover: (params: RecoverAuthentication.Params) => Promise<RecoverAuthentication.Model>
}

export namespace RecoverAuthentication {
  export type Params = {
    def: any, 
  }

  export type Model = AuthenticationResponseModel
}