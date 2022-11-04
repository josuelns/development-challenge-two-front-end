import { ApiClient  } from '@/data/protocols/api'
import { SignInAuthetication } from '@/domain/usecases/authentication'

export class RemoteSignInAuthentication implements SignInAuthentication {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async signIn (params: SignInAuthetication.Params): Promise<SignInAuthetication.Model> {
    return await this.ApiClient.authentication.signIn(params)
  }
}