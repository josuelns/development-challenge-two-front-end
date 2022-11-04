import { ApiClient  } from '@/data/protocols/api'
import { RemoveDoctor } from '@/domain/usecases/doctor'

export class RemoteRemoveDoctor implements RemoveDoctor {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async remove (params: RemoveDoctor.Params): Promise<RemoveDoctor.Model> {
    return await this.ApiClient.doctor.removeDoctor(params)
  }
}