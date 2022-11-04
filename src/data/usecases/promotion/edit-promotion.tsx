import { ApiClient  } from '@/data/protocols/api'
import { EditPromotion } from '@/domain/usecases/promotion'

export class RemoteEditPromotion implements EditPromotion {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async edit (params: EditPromotion.Params): Promise<EditPromotion.Model> {
    return await this.ApiClient.promotion.editPromotion(params)
  }
}