import { AppointmentModel } from '@domain/models'
import { SearchAppointment } from '@domain/usecases'
import * as types from '@main/store/types';

export interface SearchAppointmentState {
  params: SearchAppointment.Params;
  appointments: Array<AppointmentModel>;
  loading: boolean;
  error: string;
}

const initialState: SearchAppointmentState = {
  params: {
    title: "",
    started_date: "",
    ending_date: "",
  },
  appointments: [],
  loading: false,
  error: "",
};

export const SearchAppointmentReducer = (
  state = initialState,
  action: {
    type: string;
    payload: SearchAppointment.Model;
  }
) => {
  switch (action.type) {
    case types.SEARCH_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
        params: action.payload,
        error: ''
      };
    case types.SEARCH_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          appointments: action.payload
        },
        error: ''
      };
    case types.SEARCH_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};
