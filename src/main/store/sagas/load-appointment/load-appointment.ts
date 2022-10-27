import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { LoadAppointment } from '~/domain/usecases'
import { loadAppointmentFailure, loadAppointmentSuccess, listAppointmentRequest } from '../../actions'

import * as types from '../../types'

import {
    makeRemoteLoadAppointment
} from '~/main/factories/usecases'

let response: LoadAppointment.Model 

const loadAppointmentRequest = async (): Promise<LoadAppointment.Model> => {
    const LoadAppointment = makeRemoteLoadAppointment
    try {
        const data = await LoadAppointment.load()
        response = data
        return data
    }
    catch (error) {
        console.log(error)
        return response
    }
}

export function* loadAppointmentData() {
    try {
        yield call(loadAppointmentRequest)
        yield put(loadAppointmentSuccess(response))
        yield put(listAppointmentRequest(response))
        
    } catch (error) {
        yield put(loadAppointmentFailure(response))
    }
}

export const loadAppointmentSaga = all(
    [takeLatest(types.LOAD_APPOINTMENT_REQUEST, loadAppointmentData)]
)