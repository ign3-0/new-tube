import { studioRouter } from "@/modules/studio/server/procedures";
import { VideosRouter } from "@/modules/videos/server/procedure";
import { commentsRouter } from "@/modules/comments/server/procedure";
import { categoriesRouter } from "@/modules/categories/server/procedures";
import { videoViewsRouter } from "@/modules/video-views/server/procedure";
import { subscriptionsRouter } from "@/modules/subscriptions/server/procedure";
import { videoReactionsRouter } from "@/modules/video-reactions/server/procedure";
import { commentReactionsRouter } from "@/modules/comment-reactions/server/procedure";

import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  subscriptions: subscriptionsRouter,
  videos: VideosRouter,
  videoViews: videoViewsRouter,
  videoReactions: videoReactionsRouter,
  comments: commentsRouter,
  commentReactions: commentReactionsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
