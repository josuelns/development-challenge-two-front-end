import { InstanceDatabaseClient  } from '@/data/protocols/instance-database'
import { AddAppointment } from '@/domain/usecases'

export class RemoteAddAppointment implements AddAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient<unknown>
  ) {}

  async add (params: AddAppointment.Params): Promise<AddAppointment.Model> {
    return await this.InstanceDatabaseClient.addAppointment(params)
  }
}