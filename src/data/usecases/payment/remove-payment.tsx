import { ApiClient  } from '@/data/protocols/api'
import { RemovePayment } from '@/domain/usecases/payment'

export class RemoteRemovePayment implements RemovePayment {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async remove (params: RemovePayment.Params): Promise<RemovePayment.Model> {
    return await this.ApiClient.payment.removePayment(params)
  }
}