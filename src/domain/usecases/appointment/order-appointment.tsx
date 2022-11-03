import { AppointmentModel } from '@/domain/models'

export interface OrderAppointment {
  order: (params: OrderAppointment.Params) => Promise<OrderAppointment.Model>
}

export namespace OrderAppointment {
  export type Params = {
    title: boolean, 
    started_date: boolean, 
    ending_date: boolean,
  }

  export type Model = Array<AppointmentModel>
}