import { AddAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export function addAppointmentRequest(params: AddAppointment.Params): {
    type: string
    payload: AddAppointment.Params
} {
    return {
        type: types.ADD_APPOINTMENT_REQUEST,
        payload: params
    }
}
export function addAppointmentSuccess(response: AddAppointment.Model): {
    type: string
    payload: AddAppointment.Model
} {
    return {
        type: types.ADD_APPOINTMENT_SUCCESS,
        payload: response
    }
}
export function addAppointmentFailure(response: AddAppointment.Model): {
    type: string
    payload: AddAppointment.Model
} {
    return {
        type: types.ADD_APPOINTMENT_FAILURE,
        payload: response
    }
}