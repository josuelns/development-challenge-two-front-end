import { SearchDateIntervalAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export function searchDateIntervalAppointmentRequest(params: SearchDateIntervalAppointment.Params): {
    type: string
    payload: SearchDateIntervalAppointment.Params
} {
    return {
        type: types.SEARCH_APPOINTMENT_REQUEST,
        payload: params
    }
}
export function searchDateIntervalAppointmentSuccess(response: SearchDateIntervalAppointment.Model): {
    type: string
    payload: SearchDateIntervalAppointment.Model
} {
    return {
        type: types.SEARCH_APPOINTMENT_SUCCESS,
        payload: response
    }
}
export function searchDateIntervalAppointmentFailure(response: SearchDateIntervalAppointment.Model): {
    type: string
    payload: SearchDateIntervalAppointment.Model
} {
    return {
        type: types.SEARCH_APPOINTMENT_FAILURE,
        payload: response
    }
}