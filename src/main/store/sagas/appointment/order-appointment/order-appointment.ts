import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { OrderAppointment } from '~/domain/usecases'
import { listAppointmentRequest, orderAppointmentFailure, orderAppointmentSuccess } from '../../actions'
import * as types from '../../types'
import {
    makeRemoteOrderAppointment
} from '~/main/factories/usecases'

let response: OrderAppointment.Model 

const orderAppointmentRequest = async (params: OrderAppointment.Params) => {
    const orderAppointment = makeRemoteOrderAppointment
    try {
        const data = await orderAppointment.order({...params})
        response = data
        return data
    }
    catch (error) {
        console.log(error)
        return response
    }
}

export function* orderAppointmentData(action: { type: string, payload: OrderAppointment.Params }) {
    try {
        yield call(orderAppointmentRequest, action.payload)
        yield put(orderAppointmentSuccess(response))
        yield put(listAppointmentRequest(response))
    } catch (error) {
        yield put(orderAppointmentFailure(response))
    }
}

export const orderAppointmentSaga = all([takeLatest(types.ORDER_APPOINTMENT_REQUEST, orderAppointmentData)])