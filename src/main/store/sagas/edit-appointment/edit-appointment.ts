import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { EditAppointment } from '~/domain/usecases'
import { editAppointmentFailure, editAppointmentSuccess, loadAppointmentRequest } from '../../actions'
import * as types from '../../types'
import {
    makeRemoteEditAppointment
} from '~/main/factories/usecases'

let response: EditAppointment.Model 

const editAppointmentRequest = async (params: EditAppointment.Params) => {
    const EditAppointment = makeRemoteEditAppointment
    try {
        const data = await EditAppointment.edit({...params})
        response = data
        return data
    }
    catch (error) {
        console.log(error)
        return response
    }
}

export function* editAppointmentData(action: { type: string, payload: EditAppointment.Params }) {
    try {
        yield call(editAppointmentRequest, action.payload)
        yield put(editAppointmentSuccess(response))
        yield put(loadAppointmentRequest())
    } catch (error) {
        yield put(editAppointmentFailure(response))
    }
}

export const editAppointmentSaga = all([takeLatest(types.EDIT_APPOINTMENT_REQUEST, editAppointmentData)])