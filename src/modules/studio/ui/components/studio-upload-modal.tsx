"use client";

import { Loader2Icon, PlusCircleIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc/client";

export const StudioUploadModal = () => {
  const utils = trpc.useUtils()
  const create = trpc.videos.create.useMutation({
    onSuccess: () => {
      toast.success("Video Created")
      utils.studio.getMany.invalidate()
    },
    onError: () => {
      toast.error("Something went wrong")
    }
  });

  return (
    <Button
      variant={"secondary"}
      onClick={() => create.mutate()}
      disabled={create.isPending}
    >
      {create.isPending ? <Loader2Icon className="animate-spin" /> : <PlusCircleIcon />}
      Create
    </Button>
  );
};
