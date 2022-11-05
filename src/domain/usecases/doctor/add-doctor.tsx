import { DoctorResponseModel } from '@/domain/models/doctor'

export interface AddDoctor {
  add: (params: AddDoctor.Params) => Promise<AddDoctor.Model>
}

export namespace AddDoctor {
  export type Params = {
    def: any, 
  }

  export type Model = DoctorResponseModel
}