import { ApiClient  } from '@/data/protocols/api'
import { EditAppointment } from '@/domain/usecases/appointment'

export class RemoteEditAppointment implements EditAppointment {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async edit (params: EditAppointment.Params): Promise<EditAppointment.Model> {
    return await this.ApiClient.editAppointment(params)
  }
}