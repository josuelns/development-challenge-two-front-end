import { ApiClient  } from '@/data/protocols/api'
import { AddMovie } from '@/domain/usecases/movies'

export class RemoteAddMovie implements AddMovie {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async add (params: AddMovie.Params): Promise<AddMovie.Model> {
    return await this.ApiClient.movie.addMovie(params)
  }
}