import { ApiClient  } from '@/data/protocols/api'
import { RecoverAuthetication } from '@/domain/usecases/authentication'

export class RemoteRecoverAuthentication implements RecoverAuthentication {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async recover (params: RecoverAuthetication.Params): Promise<RecoverAuthetication.Model> {
    return await this.ApiClient.authentication.recover(params)
  }
}