import { AppointmentRemoveModel } from '@/domain/models/appointment'

export interface RemoveAppointment {
  remove : (params: RemoveAppointment.Params) => Promise<RemoveAppointment.Model>
}

export namespace RemoveAppointment {
  export type Params = {
    id: string,
  }

  export type Model = AppointmentRemoveModel
}