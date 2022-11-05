import { AuthenticationResponseModel } from '@/domain/models/Authentication'

export interface SignOutAuthentication {
  signOut: (params: SignOutAuthentication.Params) => Promise<SignOutAuthentication.Model>
}

export namespace SignOutAuthentication {
  export type Params = {
    def: any, 
  }

  export type Model = AuthenticationResponseModel
}