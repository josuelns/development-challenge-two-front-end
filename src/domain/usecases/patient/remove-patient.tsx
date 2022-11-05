import {PatientResponseModel } from '@/domain/models/patient'

export interface RemovePatient {
  remove: (params: RemovePatient.Params) => Promise<RemovePatient.Model>
}

export namespace RemovePatient {
  export type Params = {
    def: any, 
  }

  export type Model = PatientResponseModel
}