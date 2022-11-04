import { ApiClient  } from '@/data/protocols/api'
import { ViewMovie } from '@/domain/usecases/movies'

export class RemoteViewMovie implements ViewMovie {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async view (params: ViewMovie.Params): Promise<ViewMovie.Model> {
    return await this.ApiClient.movie.viewMovie(params)
  }
}