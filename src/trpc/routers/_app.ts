import { categoriesRouter } from "@/modules/categories/server/procedures";
import { studioRouter } from "@/modules/studio/server/procedures";

import { createTRPCRouter, protectedProcedure } from "../init";
import { VideosRouter } from "@/modules/videos/server/procedure";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: VideosRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
