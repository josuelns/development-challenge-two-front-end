import {PatientResponseModel } from '@/domain/models/patient'

export interface AddPatient {
  add: (params: AddPatient.Params) => Promise<AddPatient.Model>
}

export namespace AddPatient {
  export type Params = {
    def: any, 
  }

  export type Model = PatientResponseModel
}