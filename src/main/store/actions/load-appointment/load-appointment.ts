import { LoadAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export function loadAppointmentRequest(): {
    type: string
} {
    return {
        type: types.LOAD_APPOINTMENT_REQUEST,
    }
}

export function loadAppointmentSuccess(response: LoadAppointment.Model): {
    type: string
    payload: LoadAppointment.Model
} {
    return {
        type: types.LOAD_APPOINTMENT_SUCCESS,
        payload: response
    }
}
export function loadAppointmentFailure(response: LoadAppointment.Model): {
    type: string
    payload: LoadAppointment.Model
} {
    return {
        type: types.LOAD_APPOINTMENT_FAILURE,
        payload: response
    }
}