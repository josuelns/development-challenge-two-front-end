import { ApiClient  } from '@/data/protocols/api'
import { ExtractCredit } from '@/domain/usecases/credit'

export class RemoteExtractCredit implements ExtractCredit {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async extract (params: ExtractCredit.Params): Promise<ExtractCredit.Model> {
    return await this.ApiClient.credit.extractCredit(params)
  }
}