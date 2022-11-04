import { ApiClient  } from '@/data/protocols/api'
import { EditPatient } from '@/domain/usecases/patient'

export class RemoteEditPatient implements EditPatient {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async edit (params: EditPatient.Params): Promise<EditPatient.Model> {
    return await this.ApiClient.patient.editPatient(params)
  }
}