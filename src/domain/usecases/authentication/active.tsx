import { AuthenticationResponseModel } from '@/domain/models/Authentication'

export interface ActiveAuthentication {
  active: (params: ActiveAuthentication.Params) => Promise<ActiveAuthentication.Model>
}

export namespace ActiveAuthentication {
  export type Params = {
    def: any, 
  }

  export type Model = AuthenticationResponseModel
}