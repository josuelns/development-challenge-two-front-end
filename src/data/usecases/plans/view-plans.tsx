import { ApiClient  } from '@/data/protocols/api'
import { ViewPlans } from '@/domain/usecases/plans'

export class RemoteViewPlans implements ViewPlans {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async view (params: ViewPlans.Params): Promise<ViewPlans.Model> {
    return await this.ApiClient.plans.viewPlans(params)
  }
}