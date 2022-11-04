import { AppointmentEditModel } from '@/domain/models/appointment'

export interface EditAppointment {
  edit: (params: EditAppointment.Params) => Promise<EditAppointment.Model>
}

export namespace EditAppointment {
  export type Params = {
    id: string,
    title: string, 
    started_date: string, 
    ending_date: string,
  }

  export type Model = AppointmentEditModel
}