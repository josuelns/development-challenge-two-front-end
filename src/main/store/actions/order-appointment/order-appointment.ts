import { OrderAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export function orderAppointmentRequest(params: OrderAppointment.Params): {
    type: string
    payload: OrderAppointment.Params
} {
    return {
        type: types.ORDER_APPOINTMENT_REQUEST,
        payload: params
    }
}
export function orderAppointmentSuccess(response: OrderAppointment.Model): {
    type: string
    payload: OrderAppointment.Model
} {
    return {
        type: types.ORDER_APPOINTMENT_SUCCESS,
        payload: response
    }
}
export function orderAppointmentFailure(response: OrderAppointment.Model): {
    type: string
    payload: OrderAppointment.Model
} {
    return {
        type: types.ORDER_APPOINTMENT_FAILURE,
        payload: response
    }
}