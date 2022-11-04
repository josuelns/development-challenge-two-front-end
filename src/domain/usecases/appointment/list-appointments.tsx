import { AppointmentResponseModel } from '@/domain/models/appointment'

export interface ListAppointment {
  list: (params: ListAppointment.Params) => ListAppointment.Model
}

export namespace ListAppointment {
  export type Params = AppointmentResponseModel
  export type Model = AppointmentResponseModel
}