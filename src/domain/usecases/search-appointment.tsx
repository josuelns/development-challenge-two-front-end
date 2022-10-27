import { AppointmentModel } from '@/domain/models'

export interface SearchAppointment {
  search: (params: SearchAppointment.Params) => Promise<SearchAppointment.Model>
}

export namespace SearchAppointment {
  export type Params = {
    title: string, 
    started_date: string, 
    ending_date: string,
  }

  export type Model = Array<AppointmentModel>
}