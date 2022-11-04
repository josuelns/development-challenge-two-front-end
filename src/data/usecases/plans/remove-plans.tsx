import { ApiClient  } from '@/data/protocols/api'
import { RemovePlans } from '@/domain/usecases/plans'

export class RemoteRemovePlans implements RemovePlans {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async remove (params: RemovePlans.Params): Promise<RemovePlans.Model> {
    return await this.ApiClient.plans.removePlans(params)
  }
}