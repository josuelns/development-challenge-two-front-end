import { InstanceDatabaseClient  } from '@/data/protocols/instance-database'
import { EditAppointment } from '@/domain/usecases/appointment'

export class RemoteEditAppointment implements EditAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient<unknown>
  ) {}

  async edit (params: EditAppointment.Params): Promise<EditAppointment.Model> {
    return await this.InstanceDatabaseClient.editAppointment(params)
  }
}