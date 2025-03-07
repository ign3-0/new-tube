"use client";

import { Default_Limit } from "@/constants";
import { trpc } from "@/trpc/client";

export const VideosSection = () => {
  const [data] = trpc.studio.getMany.useSuspenseInfiniteQuery(
    {
      limit: Default_Limit,
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );

  return <div className="">{JSON.stringify(data)}</div>;
};
