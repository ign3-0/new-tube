import { HydrateClient, trpc } from "@/trpc/server";

import { StudioView } from "@/modules/studio/ui/views/studio-view";
import { Default_Limit } from "@/constants";

const Page = async () => {
  void trpc.studio.getMany.prefetchInfinite({
    limit: Default_Limit,
  });

  return (
    <HydrateClient>
      <StudioView />
    </HydrateClient>
  );
};

export default Page;
