import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { SearchDateIntervalAppointment } from '~/domain/usecases'
import {  searchDateIntervalAppointmentSuccess,searchDateIntervalAppointmentFailure, loadAppointmentRequest } from '../../actions'
import * as types from '../../types'
import {
    makeRemoteSearchDateIntervalAppointment
} from '~/main/factories/usecases'

let response: SearchDateIntervalAppointment.Model

const searchDateIntervalAppointmentRequest = async (params: SearchDateIntervalAppointment.Params) => {
    const searchDateIntervalAppointment = makeRemoteSearchDateIntervalAppointment
    const load = async () => {
        response = await searchDateIntervalAppointment.dateInterval({...params})
    }
    await load()
    return response
}

export function* searchDateIntervalAppointmentData(action: { type: string, payload: SearchDateIntervalAppointment.Params }) {
    try {
        yield call(searchDateIntervalAppointmentRequest,action.payload)
        yield put(searchDateIntervalAppointmentSuccess(response))
        yield put(loadAppointmentRequest())
    } catch (error) {
        yield put(searchDateIntervalAppointmentFailure(response))
    }
    return response
}

export const searchDateIntervalAppointmentSaga = all([takeLatest(types.SEARCH_APPOINTMENT_REQUEST, searchDateIntervalAppointmentData)])