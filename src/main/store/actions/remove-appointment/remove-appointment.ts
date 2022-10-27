import { RemoveAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export function removeAppointmentRequest(params: RemoveAppointment.Params): {
    type: string
    payload: RemoveAppointment.Params
} {
    return {
        type: types.REMOVE_APPOINTMENT_REQUEST,
        payload: params
    }
}
export function removeAppointmentSuccess(response: RemoveAppointment.Model): {
    type: string
    payload: RemoveAppointment.Model
} {
    return {
        type: types.REMOVE_APPOINTMENT_SUCCESS,
        payload: response
    }
}
export function removeAppointmentFailure(response: RemoveAppointment.Model): {
    type: string
    payload: RemoveAppointment.Model
} {
    return {
        type: types.REMOVE_APPOINTMENT_FAILURE,
        payload: response
    }
}