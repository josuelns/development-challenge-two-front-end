import { ApiClient  } from '@/data/protocols/api'
import { RemoveMovie } from '@/domain/usecases/movies'

export class RemoteRemoveMovie implements RemoveMovie {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async remove (params: RemoveMovie.Params): Promise<RemoveMovie.Model> {
    return await this.ApiClient.movie.removeMovie(params)
  }
}