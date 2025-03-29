import { categoriesRouter } from "@/modules/categories/server/procedures";
import { studioRouter } from "@/modules/studio/server/procedures";
import { VideosRouter } from "@/modules/videos/server/procedure";
import { videoViewsRouter } from "@/modules/video-views/server/procedure";

import { createTRPCRouter, protectedProcedure } from "../init";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: VideosRouter,
  videoViews: videoViewsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
