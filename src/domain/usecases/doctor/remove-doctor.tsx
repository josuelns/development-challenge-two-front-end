import { DoctorResponseModel } from '@/domain/models/doctor'

export interface RemoveDoctor {
  remove: (params: RemoveDoctor.Params) => Promise<RemoveDoctor.Model>
}

export namespace RemoveDoctor {
  export type Params = {
    def: any, 
  }

  export type Model = DoctorResponseModel
}