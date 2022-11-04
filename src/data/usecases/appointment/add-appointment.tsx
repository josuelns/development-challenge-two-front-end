import { ApiClient  } from '@/data/protocols/api'
import { AddAppointment } from '@/domain/usecases/appointment'

export class RemoteAddAppointment implements AddAppointment {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async add (params: AddAppointment.Params): Promise<AddAppointment.Model> {
    return await this.ApiClient.addAppointment(params)
  }
}