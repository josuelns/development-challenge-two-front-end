import { ApiClient  } from '@/data/protocols/api'
import { AddPost } from '@/domain/usecases/post'

export class RemoteAddPost implements AddPost {
  constructor (
    private readonly ApiClient: ApiClient<unknown>
  ) {}

  async add (params: AddPost.Params): Promise<AddPost.Model> {
    return await this.ApiClient.post.addPost(params)
  }
}