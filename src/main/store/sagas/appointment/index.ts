import { all } from 'redux-saga/effects'

import {addAppointmentSaga} from './appointment/add-appointment'
import {editAppointmentSaga} from './appointment/edit-appointment'
import {loadAppointmentSaga} from './load-appointment'
import {orderAppointmentSaga} from './order-appointment'
import {removeAppointmentSaga} from './remove-appointment'
import {searchAppointmentSaga} from './search-appointment'
import {listAppointmentSaga} from './appointment/list-appointments'
import {searchDateIntervalAppointmentSaga} from './search-date-interval-appointment'

export default function* rootSaga(): Generator<any> {
    return yield all([
        addAppointmentSaga,
        editAppointmentSaga,
        loadAppointmentSaga,
        orderAppointmentSaga,
        removeAppointmentSaga,
        searchAppointmentSaga,
        listAppointmentSaga,
        searchDateIntervalAppointmentSaga
    ])
}