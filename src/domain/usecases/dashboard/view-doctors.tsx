import { DashboardResponseModel } from '@/domain/models/dashboard'

export interface ViewDoctorsDashboard {
  viewDoctors: (params: ViewDoctorsDashboard.Params) => Promise<ViewDoctorsDashboard.Model>
}

export namespace ViewDoctorsDashboard {
  export type Params = {
    def: any, 
  }

  export type Model = DashboardResponseModel
}