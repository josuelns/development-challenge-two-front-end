import { ApiClient  } from '@/data/protocols/api'
import { SearchPost } from '@/domain/usecases/post'

export class RemoteSearchPost implements SearchPost {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async search (params: SearchPost.Params): Promise<SearchPost.Model> {
    return await this.ApiClient.post.searchPost(params)
  }
}