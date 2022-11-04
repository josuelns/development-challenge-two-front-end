import { ApiClient  } from '@/data/protocols/api'
import { RemoveAppointment } from '@/domain/usecases/appointment'

export class RemoteRemoveAppointment implements RemoveAppointment {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async remove (params: RemoveAppointment.Params): Promise<RemoveAppointment.Model> {
    return await this.ApiClient.removeAppointment(params)
  }
}