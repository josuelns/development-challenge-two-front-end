import { ApiClient  } from '@/data/protocols/api'
import { OrderAppointment } from '@/domain/usecases/appointment'

export class RemoteOrderAppointment implements OrderAppointment {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async order (params: OrderAppointment.Params): Promise<OrderAppointment.Model> {
    return await this.ApiClient.orderAppointment(params)
  }
}