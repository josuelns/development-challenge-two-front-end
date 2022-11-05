import { DoctorResponseModel } from '@/domain/models/doctor'

export interface EditDoctor {
  edit: (params: EditDoctor.Params) => Promise<EditDoctor.Model>
}

export namespace EditDoctor {
  export type Params = {
    def: any, 
  }

  export type Model = DoctorResponseModel
}