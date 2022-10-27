import { AppointmentModel } from '@/domain/models'
import { ListAppointment } from '@/domain/usecases'

export class RemoteListAppointments implements ListAppointment {
  list (data: Array<AppointmentModel>): Array<AppointmentModel>  {
    return data
  }
}