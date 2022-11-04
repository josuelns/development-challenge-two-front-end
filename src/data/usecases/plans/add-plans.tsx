import { ApiClient  } from '@/data/protocols/api'
import { AddPlans } from '@/domain/usecases/plans'

export class RemoteAddPlans implements AddPlans {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async add (params: AddPlans.Params): Promise<AddPlans.Model> {
    return await this.ApiClient.plans.addPlans(params)
  }
}