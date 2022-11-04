import { AppointmentModel } from '@/domain/models/appointment'

export interface SearchDateIntervalAppointment {
  dateInterval: (params: SearchDateIntervalAppointment.Params) => Promise<SearchDateIntervalAppointment.Model>
}

export namespace SearchDateIntervalAppointment {
  export type Params = {
    started_date: string, 
    ending_date: string,
  }

  export type Model = Array<AppointmentModel>
}