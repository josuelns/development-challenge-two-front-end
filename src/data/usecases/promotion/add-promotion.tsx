import { ApiClient  } from '@/data/protocols/api'
import { AddPromotion } from '@/domain/usecases/promotion'

export class RemoteAddPromotion implements AddPromotion {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async add (params: AddPromotion.Params): Promise<AddPromotion.Model> {
    return await this.ApiClient.promotion.addPromotion(params)
  }
}