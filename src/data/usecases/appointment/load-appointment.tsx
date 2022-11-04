import { ApiClient  } from '@/data/protocols/api'
import { LoadAppointment } from '@/domain/usecases/appointment'

export class RemoteLoadAppointment implements LoadAppointment {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async load (): Promise<LoadAppointment.Model> {
    return await this.ApiClient.loadAppointment()
  }
}