"use client";

import { Loader2Icon, PlusCircleIcon } from "lucide-react";
import { toast } from "sonner";

import { trpc } from "@/trpc/client";
import { Button } from "@/components/ui/button";
import { ResponsiveModal } from "@/components/responsive-modal";

import { StudioUploader } from "./studio-uploader";

export const StudioUploadModal = () => {
  const utils = trpc.useUtils();
  const create = trpc.videos.create.useMutation({
    onSuccess: () => {
      toast.success("Video Created");
      utils.studio.getMany.invalidate();
    },
    onError: () => {
      toast.error("Something went wrong");
    },
  });

  return (
    <>
      <ResponsiveModal
        title="Upload a Video"
        open={!!create.data?.url}
        onOpenChange={() => create.reset()}
      >
        {create.data?.url ? (
          <StudioUploader endpoint={create.data?.url} onSuccess={() => {}} />
        ) : (
          <Loader2Icon />
        )}
      </ResponsiveModal>
      <Button
        variant={"secondary"}
        onClick={() => create.mutate()}
        disabled={create.isPending}
      >
        {create.isPending ? (
          <Loader2Icon className="animate-spin" />
        ) : (
          <PlusCircleIcon />
        )}
        Create
      </Button>
    </>
  );
};
