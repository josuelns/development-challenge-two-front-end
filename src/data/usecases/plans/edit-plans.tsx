import { ApiClient  } from '@/data/protocols/api'
import { EditPlans } from '@/domain/usecases/plans'

export class RemoteEditPlans implements EditPlans {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async edit (params: EditPlans.Params): Promise<EditPlans.Model> {
    return await this.ApiClient.plans.editPlans(params)
  }
}