import { AppointmentModel } from '@/domain/models'

export interface LoadAppointment {
  load: () => Promise<LoadAppointment.Model>
}

export namespace LoadAppointment {
  export type Model = Array<AppointmentModel>
}