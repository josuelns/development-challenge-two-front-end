import { AppointmentModel } from '@domain/models';
import { SearchDateIntervalAppointment } from '@domain/usecases'
import * as types from '@main/store/types';

export interface SearchDateIntervalAppointmentState {
  params: SearchDateIntervalAppointment.Params;
  appointments: Array<AppointmentModel>;
  loading: boolean;
  error: string;
}

const initialState: SearchDateIntervalAppointmentState = {
  params: {
    started_date: "",
    ending_date: "",
  },
  appointments: [],
  loading: false,
  error: "",
};

export const SearchDateIntervalAppointmentReducer = (
  state = initialState,
  action: {
    type: string;
    payload: SearchDateIntervalAppointment.Model;
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
