import { ApiClient  } from '@/data/protocols/api'
import { ActiveAuthetication } from '@/domain/usecases/authentication'

export class RemoteActiveAuthentication implements ActiveAuthentication {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async active (params: ActiveAuthetication.Params): Promise<ActiveAuthetication.Model> {
    return await this.ApiClient.authentication.active(params)
  }
}