import { InstanceDatabaseClient  } from '@/data/protocols/instance-database'
import { LoadAppointment } from '@/domain/usecases'

export class RemoteLoadAppointment implements LoadAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient<unknown>
  ) {}

  async load (): Promise<LoadAppointment.Model> {
    return await this.InstanceDatabaseClient.loadAppointment()
  }
}