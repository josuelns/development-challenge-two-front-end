import { 
  AddAppointment, 
  EditAppointment, 
  LoadAppointment, 
  OrderAppointment, 
  RemoveAppointment, 
  SearchAppointment, 
  SearchDateIntervalAppointment 
} from "@/domain/usecases/appointment"

export interface InstanceDatabaseClient<T> {
  getClient: () => Promise<T | undefined>
  addAppointment: (params: AddAppointment.Params) => Promise<AddAppointment.Model>
  editAppointment: (params: EditAppointment.Params) => Promise<EditAppointment.Model>
  orderAppointment: (params: OrderAppointment.Params) => Promise<OrderAppointment.Model>
  removeAppointment: (params: RemoveAppointment.Params) => Promise<RemoveAppointment.Model>
  searchAppointment: (params: SearchAppointment.Params) => Promise<SearchAppointment.Model>
  searchByDateIntervalAppointment: (params: SearchDateIntervalAppointment.Params) => Promise<SearchDateIntervalAppointment.Model>
  loadAppointment: () => Promise<LoadAppointment.Model>
}
