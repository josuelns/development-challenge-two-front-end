import { ApiClient  } from '@/data/protocols/api'
import { AddDoctor } from '@/domain/usecases/doctor'

export class RemoteAddDoctor implements AddDoctor {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async add (params: AddDoctor.Params): Promise<AddDoctor.Model> {
    return await this.ApiClient.doctor.addDoctor(params)
  }
}