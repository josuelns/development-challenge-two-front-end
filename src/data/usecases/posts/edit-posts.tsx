import { ApiClient  } from '@/data/protocols/api'
import { EditPost } from '@/domain/usecases/post'

export class RemoteEditPost implements EditPost {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async edit (params: EditPost.Params): Promise<EditPost.Model> {
    return await this.ApiClient.post.editPost(params)
  }
}