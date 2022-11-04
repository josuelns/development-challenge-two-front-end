import { ApiClient  } from '@/data/protocols/api'
import { SearchDoctor } from '@/domain/usecases/doctor'

export class RemoteSearchDoctor implements SearchDoctor {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async search (params: SearchDoctor.Params): Promise<SearchDoctor.Model> {
    return await this.ApiClient.doctor.searchDoctor(params)
  }
}