"use client";

import { PlusCircleIcon, PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export const StudioUploadModal = () => {
  return (
    <Button variant={"secondary"}>
      <PlusCircleIcon />
      Create
    </Button>
  );
};
