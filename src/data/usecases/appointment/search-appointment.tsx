import { ApiClient  } from '@/data/protocols/api'
import { SearchAppointment } from '@/domain/usecases/appointment'

export class RemoteSearchAppointment implements SearchAppointment {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async search (params: SearchAppointment.Params): Promise<SearchAppointment.Model> {
    return await this.ApiClient.searchAppointment(params)
  }
}