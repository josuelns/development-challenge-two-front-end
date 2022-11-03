import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { RemoveAppointment } from '~/domain/usecases'
import { loadAppointmentRequest, removeAppointmentFailure, removeAppointmentSuccess } from '../../actions'
import * as types from '../../types'
import {
    makeRemoteRemoveAppointment
} from '~/main/factories/usecases'

let response: RemoveAppointment.Model 

const RemoveAppointmentRequest = async (params: RemoveAppointment.Params) => {
    const RemoveAppointment = makeRemoteRemoveAppointment
    try {
        const data = await RemoveAppointment.remove({...params})
        response = data
        return data
    }
    catch (error) {
        console.log(error)
        return response
    }
}

export function* RemoveAppointmentData(action: { type: string, payload: RemoveAppointment.Params }) {
    try {
        yield call(RemoveAppointmentRequest, action.payload)
        yield put(removeAppointmentSuccess(response))
        yield put(loadAppointmentRequest())
    } catch (error) {
        yield put(removeAppointmentFailure(response))
    }
}

export const removeAppointmentSaga = all([takeLatest(types.REMOVE_APPOINTMENT_REQUEST, RemoveAppointmentData)])