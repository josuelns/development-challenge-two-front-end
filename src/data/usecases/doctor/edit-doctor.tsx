import { ApiClient  } from '@/data/protocols/api'
import { EditDoctor } from '@/domain/usecases/doctor'

export class RemoteEditDoctor implements EditDoctor {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async edit (params: EditDoctor.Params): Promise<EditDoctor.Model> {
    return await this.ApiClient.doctor.editDoctor(params)
  }
}