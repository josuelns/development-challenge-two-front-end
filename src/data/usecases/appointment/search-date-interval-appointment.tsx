import { InstanceDatabaseClient  } from '@/data/protocols/instance-database'
import { SearchDateIntervalAppointment } from '@/domain/usecases/appointment'

export class RemoteSearchDateIntervalAppointment implements SearchDateIntervalAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient<unknown>
  ) {}

  async dateInterval (params: SearchDateIntervalAppointment.Params): Promise<SearchDateIntervalAppointment.Model> {
    return await this.InstanceDatabaseClient.searchByDateIntervalAppointment(params)
  }
}