import { InstanceDatabaseClient  } from '@/data/protocols/instance-database'
import { SearchAppointment } from '@/domain/usecases/appointment'

export class RemoteSearchAppointment implements SearchAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient<unknown>
  ) {}

  async search (params: SearchAppointment.Params): Promise<SearchAppointment.Model> {
    return await this.InstanceDatabaseClient.searchAppointment(params)
  }
}