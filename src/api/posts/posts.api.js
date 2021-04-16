const { ApiPath, PostApiPath } = require('../../common/enums');

const initPostsApi = ({ Router, services }) => {
  const { post: postService } = services;

  const router = new Router({
    prefix: ApiPath.POSTS,
  });

  router.get(PostApiPath.ROOT, async (ctx) => {
    ctx.body = await postService.findAll();
  });

  router.get(PostApiPath.$ID, async (ctx) => {
    const { params } = ctx;

    ctx.body = await postService.findOne(params.id);
  });

  return router;
};

module.exports = {
  initPostsApi,
};
