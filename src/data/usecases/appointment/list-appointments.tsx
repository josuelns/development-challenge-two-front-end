import { AppointmentModel } from '@/domain/models/appointment'
import { ListAppointment } from '@/domain/usecases/appointment'

export class RemoteListAppointments implements ListAppointment {
  list (data: Array<AppointmentModel>): Array<AppointmentModel>  {
    return data
  }
}