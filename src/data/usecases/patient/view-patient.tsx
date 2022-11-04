import { ApiClient  } from '@/data/protocols/api'
import { ViewPatient } from '@/domain/usecases/patient'

export class RemoteViewPatient implements ViewPatient {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async view (params: ViewPatient.Params): Promise<ViewPatient.Model> {
    return await this.ApiClient.patient.viewPatient(params)
  }
}