import {PatientResponseModel } from '@/domain/models/patient'

export interface ViewPatient {
  view: (params: ViewPatient.Params) => Promise<ViewPatient.Model>
}

export namespace ViewPatient {
  export type Params = {
    def: any, 
  }

  export type Model = PatientResponseModel
}