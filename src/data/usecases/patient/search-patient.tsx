import { ApiClient  } from '@/data/protocols/api'
import { SearchPatient } from '@/domain/usecases/patient'

export class RemoteSearchPatient implements SearchPatient {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async search (params: SearchPatient.Params): Promise<SearchPatient.Model> {
    return await this.ApiClient.patient.searchPatient(params)
  }
}