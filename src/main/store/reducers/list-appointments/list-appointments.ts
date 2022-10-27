import { ListAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export interface ListAppointmentState {
  appointment: ListAppointment.Params;
  loading: boolean;
  error: string;
}

const initialState: ListAppointmentState = {
  appointment: [],
  loading: false,
  error: "",
};

export const ListAppointmentsReducer = (
  state = initialState,
  action: {
    type: string;
    payload: ListAppointment.Model;
  }
) => {
  switch (action.type) {
    case types.LIST_APPOINTMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        params: action.payload,
        error: ''
      };
    case types.LIST_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        appointment: action.payload,
        error: ''
      };
    case types.LIST_APPOINTMENTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};
