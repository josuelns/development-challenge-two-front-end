import { ApiClient  } from '@/data/protocols/api'
import { ViewPatientsDashboard } from '@/domain/usecases/dashboard'

export class RemoteViewPatientsDashboard implements ViewPatientsDashboard {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async viewPatientsDashboard (params: ViewPatientsDashboard.Params): Promise<ViewPatientsDashboard.Model> {
    return await this.ApiClient.dashboard.viewPatientsDashboard(params)
  }
}