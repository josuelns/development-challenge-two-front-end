import { ApiClient  } from '@/data/protocols/api'
import { RemovePromotion } from '@/domain/usecases/promotion'

export class RemoteRemovePromotion implements RemovePromotion {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async remove (params: RemovePromotion.Params): Promise<RemovePromotion.Model> {
    return await this.ApiClient.promotion.removePost(params)
  }
}