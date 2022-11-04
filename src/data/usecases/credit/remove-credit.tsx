import { ApiClient  } from '@/data/protocols/api'
import { RemoveCredit } from '@/domain/usecases/credit'

export class RemoteRemoveCredit implements RemoveCredit {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async remove (params: RemoveCredit.Params): Promise<RemoveCredit.Model> {
    return await this.ApiClient.credit.removeCredit(params)
  }
}