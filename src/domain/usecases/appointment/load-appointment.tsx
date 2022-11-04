import { AppointmentResponseModel } from '@/domain/models/appointment'

export interface LoadAppointment {
  load: () => Promise<LoadAppointment.Model>
}

export namespace LoadAppointment {
  export type Model = AppointmentResponseModel
}