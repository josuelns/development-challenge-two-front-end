import { MoviesResponseModel } from '@/domain/models/movie'

export interface EditMovie {
  edit: (params: EditMovie.Params) => Promise<EditMovie.Model>
}

export namespace EditMovie {
  export type Params = {
    def: any, 
  }

  export type Model = MoviesResponseModel
}