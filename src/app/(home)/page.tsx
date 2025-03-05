import { HydrateClient, trpc } from "@/trpc/server";
// 4.10.52

export default async function Home() {
  void trpc.categories.getMany.prefetch();

  return (
    <HydrateClient>

    </HydrateClient>
  );
}
