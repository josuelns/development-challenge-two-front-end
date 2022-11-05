import { MoviesResponseModel } from '@/domain/models/movie'

export interface AddMovie {
  add: (params: AddMovie.Params) => Promise<AddMovie.Model>
}

export namespace AddMovie {
  export type Params = {
    def: any, 
  }

  export type Model = MoviesResponseModel
}