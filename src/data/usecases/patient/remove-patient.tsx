import { ApiClient  } from '@/data/protocols/api'
import { RemovePatient } from '@/domain/usecases/patient'

export class RemoteRemovePatient implements RemovePatient {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async remove (params: RemovePatient.Params): Promise<RemovePatient.Model> {
    return await this.ApiClient.patient.removePatient(params)
  }
}