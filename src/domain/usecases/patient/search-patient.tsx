import {PatientResponseModel } from '@/domain/models/patient'

export interface SearchPatient {
  search: (params: SearchPatient.Params) => Promise<SearchPatient.Model>
}

export namespace SearchPatient {
  export type Params = {
    def: any, 
  }

  export type Model = PatientResponseModel
}