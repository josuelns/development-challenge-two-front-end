import { MoviesResponseModel } from '@/domain/models/movie'

export interface RemoveMovie {
  remove: (params: RemoveMovie.Params) => Promise<RemoveMovie.Model>
}

export namespace RemoveMovie {
  export type Params = {
    def: any, 
  }

  export type Model = MoviesResponseModel
}