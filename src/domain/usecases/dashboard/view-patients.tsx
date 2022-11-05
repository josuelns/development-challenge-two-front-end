import { DashboardResponseModel } from '@/domain/models/dashboard'

export interface ViewPatientsDashboard {
  viewPatients: (params: ViewPatientsDashboard.Params) => Promise<ViewPatientsDashboard.Model>
}

export namespace ViewPatientsDashboard {
  export type Params = {
    def: any, 
  }

  export type Model = DashboardResponseModel
}