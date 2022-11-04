import { ApiClient  } from '@/data/protocols/api'
import { SearchDateIntervalAppointment } from '@/domain/usecases/appointment'

export class RemoteSearchDateIntervalAppointment implements SearchDateIntervalAppointment {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async dateInterval (params: SearchDateIntervalAppointment.Params): Promise<SearchDateIntervalAppointment.Model> {
    return await this.ApiClient.searchByDateIntervalAppointment(params)
  }
}