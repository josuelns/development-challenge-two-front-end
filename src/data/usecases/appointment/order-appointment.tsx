import { InstanceDatabaseClient  } from '@/data/protocols/instance-database'
import { OrderAppointment } from '@/domain/usecases/appointment'

export class RemoteOrderAppointment implements OrderAppointment {
  constructor (
    private readonly InstanceDatabaseClient: InstanceDatabaseClient<unknown>
  ) {}

  async order (params: OrderAppointment.Params): Promise<OrderAppointment.Model> {
    return await this.InstanceDatabaseClient.orderAppointment(params)
  }
}