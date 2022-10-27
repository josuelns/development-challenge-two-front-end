import { ListAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export function listAppointmentRequest(params: ListAppointment.Params): {
    type: string
    payload: ListAppointment.Params
} {
    return {
        type: types.LIST_APPOINTMENTS_REQUEST,
        payload: params
    }
}
export function listAppointmentSuccess(response: ListAppointment.Model): {
    type: string
    payload: ListAppointment.Model
} {
    return {
        type: types.LIST_APPOINTMENTS_SUCCESS,
        payload: response
    }
}
export function listAppointmentFailure(response: ListAppointment.Model): {
    type: string
    payload: ListAppointment.Model
} {
    return {
        type: types.LIST_APPOINTMENTS_FAILURE,
        payload: response
    }
}