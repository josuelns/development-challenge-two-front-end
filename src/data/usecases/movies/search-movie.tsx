import { ApiClient  } from '@/data/protocols/api'
import { SearchMovie } from '@/domain/usecases/movies'

export class RemoteSearchMovie implements SearchMovie {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async search (params: SearchMovie.Params): Promise<SearchMovie.Model> {
    return await this.ApiClient.movie.searchMovie(params)
  }
}