import { LoadAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export interface LoadAppointmentState {
  loading: boolean;
  error: string;
}

const initialState: LoadAppointmentState = {
  loading: false,
  error: "",
};

export const LoadAppointmentReducer = (
  state = initialState,
  action: {
    type: string;
    payload: LoadAppointment.Model
  }
) => {
  switch (action.type) {
    case types.LOAD_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case types.LOAD_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        params: action.payload,
        error: ''
      };
    case types.LOAD_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};
