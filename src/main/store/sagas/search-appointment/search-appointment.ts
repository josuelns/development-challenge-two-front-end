import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { SearchAppointment } from '~/domain/usecases'
import { listAppointmentRequest, searchAppointmentFailure, searchAppointmentSuccess } from '../../actions'
import * as types from '../../types'
import {
    makeRemoteSearchAppointment
} from '~/main/factories/usecases'

let response: SearchAppointment.Model

const searchAppointmentRequest = async (params: SearchAppointment.Params) => {
    const searchAppointment = makeRemoteSearchAppointment
    const load = async () => {
        response = await searchAppointment.search({...params})
    }
    await load()
    return response
}

export function* searchAppointmentData(action: { type: string, payload: SearchAppointment.Params }) {
    try {
        yield call(searchAppointmentRequest,action.payload)
        yield put(searchAppointmentSuccess(response))
        yield put(listAppointmentRequest(response))
    } catch (error) {
        yield put(searchAppointmentFailure(response))
    }
}

export const searchAppointmentSaga = all([takeLatest(types.SEARCH_APPOINTMENT_REQUEST, searchAppointmentData)])