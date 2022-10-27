import { AppointmentModel } from '@/domain/models'

export interface ListAppointment {
  list: (params: ListAppointment.Params) => ListAppointment.Model
}

export namespace ListAppointment {
  export type Params = Array<AppointmentModel>
  export type Model = Array<AppointmentModel>
}