import { EditAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export function editAppointmentRequest(params: EditAppointment.Params): {
    type: string
    payload: EditAppointment.Params
} {
    return {
        type: types.EDIT_APPOINTMENT_REQUEST,
        payload: params
    }
}
export function editAppointmentSuccess(response: EditAppointment.Model): {
    type: string
    payload: EditAppointment.Model
} {
    return {
        type: types.EDIT_APPOINTMENT_SUCCESS,
        payload: response
    }
}
export function editAppointmentFailure(response: EditAppointment.Model): {
    type: string
    payload: EditAppointment.Model
} {
    return {
        type: types.EDIT_APPOINTMENT_FAILURE,
        payload: response
    }
}