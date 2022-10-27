import { EditAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export interface EditAppointmentState {
  params: EditAppointment.Params;
  loading: boolean;
  error: string;
}

const initialState: EditAppointmentState = {
  params: {
    id: "",
    title: "",
    started_date: Date.now().toString(),
    ending_date: Date.now().toString()
  },
  loading: false,
  error: "",
};

export const EditAppointmentReducer = (
  state = initialState,
  action: {
    type: string;
    payload: EditAppointment.Model;
  }
) => {
  switch (action.type) {
    case types.EDIT_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
        params: action.payload,
        error: ''
      };
    case types.EDIT_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        params: action.payload,
        error: ''
      };
    case types.EDIT_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};
