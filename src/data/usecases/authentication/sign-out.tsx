import { ApiClient  } from '@/data/protocols/api'
import { SignOutAuthetication } from '@/domain/usecases/authentication'

export class RemoteSignOutAuthentication implements SignOutAuthentication {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async signOut (params: SignOutAuthetication.Params): Promise<SignOutAuthetication.Model> {
    return await this.ApiClient.authentication.signOut(params)
  }
}