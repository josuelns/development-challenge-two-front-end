import { ApiClient  } from '@/data/protocols/api'
import { AddPayment } from '@/domain/usecases/payment'

export class RemoteAddPayment implements AddPayment {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async add (params: AddPayment.Params): Promise<AddPayment.Model> {
    return await this.ApiClient.payment.addPayment(params)
  }
}