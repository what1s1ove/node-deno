import { Oak } from '../../dependencies.ts';
import { ApiPath, PostApiPath } from '../../common/enums/index.ts';
import { IDataService } from '../../common/interfaces/index.ts';
import { Post } from '../../common/types/index.ts';

type Args = {
  prefix: string;
  Router: typeof Oak.Router;
  postsService: Partial<IDataService<Post>>;
};

const initPostsApi = ({ prefix, Router, postsService }: Args): Oak.Router => {
  const router = new Router({
    prefix: `${prefix}${ApiPath.POSTS}`,
  });

  router.get(PostApiPath.ROOT, async (ctx: Oak.RouterContext) => {
    ctx.response.body = await postsService.findAll?.();
  });

  router.get(PostApiPath.$ID, async (ctx: Oak.RouterContext) => {
    const { params } = ctx;

    ctx.response.body = await postsService.findOne?.(<string>params.id);
  });

  return router;
};

export { initPostsApi };
