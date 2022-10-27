import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { AddAppointment } from '@domain/usecases'
import { addAppointmentFailure, addAppointmentSuccess, loadAppointmentRequest } from '@main/store/actions'
import * as types from '@main/store/types'
import {
    makeRemoteAddAppointment
} from '@main/factories/usecases'

let response: AddAppointment.Model 

const addAppointmentRequest = async (params: AddAppointment.Params) => {
    const addAppointment = makeRemoteAddAppointment
    try {
        const data = await addAppointment.add({...params})
        response = data
        return data
    }
    catch (error) {
        console.log(error)
        return response
    }
}

export function* addAppointmentData(action: { type: string, payload: AddAppointment.Params }) {
    try {
        yield call(addAppointmentRequest, action.payload)
        yield put(addAppointmentSuccess(response))
        yield put(loadAppointmentRequest())
    } catch (error) {
        yield put(addAppointmentFailure(response))
    }
}

export const addAppointmentSaga = all([takeLatest(types.ADD_APPOINTMENT_REQUEST, addAppointmentData)])