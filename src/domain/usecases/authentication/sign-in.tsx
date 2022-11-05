import { AuthenticationResponseModel } from '@/domain/models/Authentication'

export interface SignInAuthentication {
  signIn: (params: SignInAuthentication.Params) => Promise<SignInAuthentication.Model>
}

export namespace SignInAuthentication {
  export type Params = {
    def: any, 
  }

  export type Model = AuthenticationResponseModel
}