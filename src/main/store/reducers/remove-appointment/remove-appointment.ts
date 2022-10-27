import { RemoveAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export interface RemoveAppointmentState {
  params: RemoveAppointment.Params;
  loading: boolean;
  error: string;
}

const initialState: RemoveAppointmentState = {
  params: {
    id: ""
  },
  loading: false,
  error: "",
};

export const RemoveAppointmentReducer = (
  state = initialState,
  action: {
    type: string;
    payload: RemoveAppointment.Model;
  }
) => {
  switch (action.type) {
    case types.REMOVE_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
        params: action.payload,
        error: ''
      };
    case types.REMOVE_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        params: action.payload,
        error: ''
      };
    case types.REMOVE_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};
