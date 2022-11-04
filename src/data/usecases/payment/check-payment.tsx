import { ApiClient  } from '@/data/protocols/api'
import { CheckPayment } from '@/domain/usecases/payment'

export class RemoteCheckPayment implements CheckPayment {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async check (params: CheckPayment.Params): Promise<CheckPayment.Model> {
    return await this.ApiClient.payment.checkPayment(params)
  }
}