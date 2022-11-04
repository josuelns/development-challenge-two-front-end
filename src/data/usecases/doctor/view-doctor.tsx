import { ApiClient  } from '@/data/protocols/api'
import { ViewDoctor } from '@/domain/usecases/doctor'

export class RemoteViewDoctor implements ViewDoctor {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async view (params: ViewDoctor.Params): Promise<ViewDoctor.Model> {
    return await this.ApiClient.doctor.viewDoctor(params)
  }
}