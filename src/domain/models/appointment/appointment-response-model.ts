import { AppointmentModel } from "./appointment-model"

export type AppointmentResponseModel = {
  data: Array<AppointmentModel>
  statusCode: string
  error: Array<Error>
}