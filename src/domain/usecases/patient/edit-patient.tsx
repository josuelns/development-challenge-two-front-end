import {PatientResponseModel } from '@/domain/models/patient'

export interface EditPatient {
  edit: (params: EditPatient.Params) => Promise<EditPatient.Model>
}

export namespace EditPatient {
  export type Params = {
    def: any, 
  }

  export type Model = PatientResponseModel
}