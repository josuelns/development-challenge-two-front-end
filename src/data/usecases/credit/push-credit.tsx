import { ApiClient  } from '@/data/protocols/api'
import { PushCredit } from '@/domain/usecases/credit'

export class RemotePushCredit implements PushCredit {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async push (params: PushCredit.Params): Promise<PushCredit.Model> {
    return await this.ApiClient.credit.pushCredit(params)
  }
}