import { ApiClient  } from '@/data/protocols/api'
import { AddCredit } from '@/domain/usecases/credit'

export class RemoteAddCredit implements AddCredit {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async add (params: AddCredit.Params): Promise<AddCredit.Model> {
    return await this.ApiClient.credit.addCredit(params)
  }
}