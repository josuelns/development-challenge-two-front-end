import { DoctorResponseModel } from '@/domain/models/doctor'

export interface ViewDoctor {
  view: (params: ViewDoctor.Params) => Promise<ViewDoctor.Model>
}

export namespace ViewDoctor {
  export type Params = {
    def: any, 
  }

  export type Model = DoctorResponseModel
}