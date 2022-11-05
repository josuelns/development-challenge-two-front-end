import { DashboardResponseModel } from '@/domain/models/dashboard'

export interface ViewAppointmentsDashboard {
  viewAppointments: (params: ViewAppointmentsDashboard.Params) => Promise<ViewAppointmentsDashboard.Model>
}

export namespace ViewAppointmentsDashboard {
  export type Params = {
    def: any, 
  }

  export type Model = DashboardResponseModel
}