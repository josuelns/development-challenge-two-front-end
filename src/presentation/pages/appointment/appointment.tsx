import React, { useEffect } from "react";

import {
  AppointmentFormCard, 
  AppointmentFormCreateAndSearch, 
  AppointmentFormOrder
} from "./components";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, loadAppointmentRequest, RootState } from "@/main/store";
import { ListAppointmentState } from "@/main/store/reducers/list-appointments";

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
const useAppDispatch = () => useDispatch<AppDispatch>()

const AppointmentPage: React.FC = () => {
  const dispatch = useAppDispatch()
  const appointmentsState: ListAppointmentState = useAppSelector(state => state.ListAppointments as ListAppointmentState)

  useEffect(() => {
    dispatch(loadAppointmentRequest())
  }, [])

  return (
    <div className="appointmentWrap">
      <section className="appointmentHeader">
        <h1>Agendamentos</h1>
      </section>
      <div className="AppointmentFormWrap">
        <AppointmentFormCreateAndSearch />
      </div>
      <div className="AppointmentFormOrderWrap">
        <AppointmentFormOrder/>
      </div>
      <ul>
        {appointmentsState?.appointment.map((item, key) => {
          return (
            <AppointmentFormCard
              key={item.id}
              Appointment={item}
            />
          )
        })
        }
      </ul>
    </div>
  );
}

export default AppointmentPage