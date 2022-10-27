import { OrderAppointment } from '@domain/usecases'
import * as types from '@main/store/types'

export interface OrderAppointmentState {
  params: OrderAppointment.Params;
  loading: boolean;
  error: string;
}

const initialState: OrderAppointmentState = {
  params: {
    title: false,
    started_date: false,
    ending_date: false
  },
  loading: false,
  error: "",
};

export const OrderAppointmentReducer = (
  state = initialState,
  action: {
    type: string;
    payload: OrderAppointment.Params;
  }
) => {
  switch (action.type) {
    case types.ORDER_APPOINTMENT_REQUEST:
      return {
        ...state,
        loading: true,
        params: action.payload,
        error: ''
      };
    case types.ORDER_APPOINTMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        params: action.payload,
        error: ''
      };
    case types.ORDER_APPOINTMENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default: return state
  }
};
