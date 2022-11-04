import { ApiClient  } from '@/data/protocols/api'
import { AddPatient } from '@/domain/usecases/patient'

export class RemoteAddPatient implements AddPatient {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async add (params: AddPatient.Params): Promise<AddPatient.Model> {
    return await this.ApiClient.patient.addPatient(params)
  }
}