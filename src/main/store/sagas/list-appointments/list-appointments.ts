import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { ListAppointment } from '~/domain/usecases'
import { listAppointmentFailure, listAppointmentSuccess } from '../../actions'
import * as types from '../../types'
import {
    makeRemoteRemoteListAppointments
} from '~/main/factories/usecases'

let response: ListAppointment.Model

const ListAppointmentRequest = async (params: ListAppointment.Params) => {
    const ListAppointment = makeRemoteRemoteListAppointments
    response = ListAppointment.list(params)
    return response
}

export function* ListAppointmentData(action: { type: string, payload: ListAppointment.Params }) {
    try {
        yield call(ListAppointmentRequest, action.payload)
        yield put(listAppointmentSuccess(response))
    } catch (error) {
        yield put(listAppointmentFailure(response))
    }
}

export const listAppointmentSaga = all([takeLatest(types.LIST_APPOINTMENTS_REQUEST, ListAppointmentData)])