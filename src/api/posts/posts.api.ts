import RouterInstance, { RouterContext } from 'koa-router';
import { ApiPath, PostApiPath } from '../../common/enums';
import { IDataService } from '../../common/interfaces';

type Args = {
  Router: typeof RouterInstance;
  postsService: Partial<IDataService<unknown>>;
};

const initPostsApi = ({ Router, postsService }: Args): RouterInstance => {
  const router = new Router({
    prefix: ApiPath.POSTS,
  });

  router.get(PostApiPath.ROOT, async (ctx: RouterContext) => {
    ctx.body = await postsService.findAll?.();
  });

  router.get(PostApiPath.$ID, async (ctx: RouterContext) => {
    const { params } = ctx;

    ctx.body = await postsService.findOne?.(params.id);
  });

  return router;
};

export { initPostsApi };
