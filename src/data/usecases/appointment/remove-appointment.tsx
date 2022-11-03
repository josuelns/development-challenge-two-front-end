import { InstanceDatabaseClient  } from '@/data/protocols/instance-database'
import { RemoveAppointment } from '@/domain/usecases/appointment'

export class RemoteRemoveAppointment implements RemoveAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient<unknown>
  ) {}

  async remove (params: RemoveAppointment.Params): Promise<RemoveAppointment.Model> {
    return await this.InstanceDatabaseClient.removeAppointment(params)
  }
}