import { ApiClient  } from '@/data/protocols/api'
import { ViewPromotion } from '@/domain/usecases/promotion'

export class RemoteViewPromotion implements ViewPromotion {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async view (params: ViewPromotion.Params): Promise<ViewPromotion.Model> {
    return await this.ApiClient.promotion.viewPost(params)
  }
}