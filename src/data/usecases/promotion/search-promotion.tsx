import { ApiClient  } from '@/data/protocols/api'
import { SearchPromotion } from '@/domain/usecases/promotion'

export class RemoteSearchPromotion implements SearchPromotion {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async search (params: SearchPromotion.Params): Promise<SearchPromotion.Model> {
    return await this.ApiClient.promotion.searchPost(params)
  }
}