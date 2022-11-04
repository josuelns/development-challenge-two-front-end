import { ApiClient  } from '@/data/protocols/api'
import { ViewAppointmentsDashboard } from '@/domain/usecases/dashboard'

export class RemoteViewAppointmentsDashboard implements ViewAppointmentsDashboard {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async viewAppointmentsDashboard (params: ViewAppointmentsDashboard.Params): Promise<ViewAppointmentsDashboard.Model> {
    return await this.ApiClient.dashboard.viewAppointmentsDashboard(params)
  }
}