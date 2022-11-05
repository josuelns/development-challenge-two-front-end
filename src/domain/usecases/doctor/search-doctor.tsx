import { DoctorResponseModel } from '@/domain/models/doctor'

export interface SearchDoctor {
  search: (params: SearchDoctor.Params) => Promise<SearchDoctor.Model>
}

export namespace SearchDoctor {
  export type Params = {
    def: any, 
  }

  export type Model = DoctorResponseModel
}