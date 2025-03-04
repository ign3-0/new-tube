import { z } from "zod";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
// import { from } from "svix/dist/openapi/rxjsStub";

export const appRouter = createTRPCRouter({
  hello: protectedProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      console.log({ dbUser: opts.ctx.user });

      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
