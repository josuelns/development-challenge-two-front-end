import { MoviesResponseModel } from '@/domain/models/movie'

export interface ViewMovie {
  view: (params: ViewMovie.Params) => Promise<ViewMovie.Model>
}

export namespace ViewMovie {
  export type Params = {
    def: any, 
  }

  export type Model = MoviesResponseModel
}