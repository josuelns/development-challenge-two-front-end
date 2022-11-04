import { ApiClient  } from '@/data/protocols/api'
import { ViewDoctorsDashboard } from '@/domain/usecases/dashboard'

export class RemoteViewDoctorsDashboard implements ViewDoctorsDashboard {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async viewDoctorsDashboard (params: ViewDoctorsDashboard.Params): Promise<ViewDoctorsDashboard.Model> {
    return await this.ApiClient.dashboard.viewDoctorsDashboard(params)
  }
}