import { MoviesResponseModel } from '@/domain/models/movie'

export interface SearchMovie {
  search: (params: SearchMovie.Params) => Promise<SearchMovie.Model>
}

export namespace SearchMovie {
  export type Params = {
    def: any, 
  }

  export type Model = MoviesResponseModel
}