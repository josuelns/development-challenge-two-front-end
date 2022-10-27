import { AddAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export interface AddAppointmentState {
  params: AddAppointment.Params;
  loading: boolean;
  error: string;
}

const initialState: AddAppointmentState = {
  params: {
    title: "",
    started_date: Date.now().toString(),
    ending_date: Date.now().toString()
  },
  loading: false,
  error: "",
};

export const AddAppointmentReducer = (
  state = initialState,
  action: {
    type: string;
    payload: AddAppointment.Model;
  }
) => {
  switch (action.type) {
    case types.ADD_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
        params: action.payload,
        error: ''
      };
    case types.ADD_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        params: action.payload,
        error: ''
      };
    case types.ADD_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};
