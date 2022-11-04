import { ApiClient  } from '@/data/protocols/api'
import { RemovePost } from '@/domain/usecases/post'

export class RemoteRemovePost implements RemovePost {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async remove (params: RemovePost.Params): Promise<RemovePost.Model> {
    return await this.ApiClient.post.removePost(params)
  }
}