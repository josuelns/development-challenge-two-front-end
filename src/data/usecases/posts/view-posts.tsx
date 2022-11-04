import { ApiClient  } from '@/data/protocols/api'
import { ViewPost } from '@/domain/usecases/post'

export class RemoteViewPost implements ViewPost {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async view (params: ViewPost.Params): Promise<ViewPost.Model> {
    return await this.ApiClient.post.viewPost(params)
  }
}