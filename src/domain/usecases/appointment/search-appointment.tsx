import { AppointmentResponseModel } from '@/domain/models/appointment'

export interface SearchAppointment {
  search: (params: SearchAppointment.Params) => Promise<SearchAppointment.Model>
}

export namespace SearchAppointment {
  export type Params = {
    title: string, 
    started_date: string, 
    ending_date: string,
  }

  export type Model = AppointmentResponseModel
}