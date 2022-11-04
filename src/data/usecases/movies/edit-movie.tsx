import { ApiClient  } from '@/data/protocols/api'
import { EditMovie } from '@/domain/usecases/movies'

export class RemoteEditMovie implements EditMovie {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async edit (params: EditMovie.Params): Promise<EditMovie.Model> {
    return await this.ApiClient.movie.editMovie(params)
  }
}