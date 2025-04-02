import { categoriesRouter } from "@/modules/categories/server/procedures";
import { studioRouter } from "@/modules/studio/server/procedures";
import { VideosRouter } from "@/modules/videos/server/procedure";
import { videoViewsRouter } from "@/modules/video-views/server/procedure";
import { videoReactionsRouter } from "@/modules/video-reactions/server/procedure";
import { subscriptionsRouter } from "@/modules/subscriptions/server/procedure";

import { createTRPCRouter } from "../init";
import { subscriptionRelations } from "@/db/schema";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  subscriptions: subscriptionsRouter,
  videos: VideosRouter,
  videoViews: videoViewsRouter,
  videoReactions: videoReactionsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
