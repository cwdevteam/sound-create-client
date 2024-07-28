"use client";

import { Button } from "@/components/ui/button";
import useSoundCreate from "@/hooks/useSoundCreate";

const CreateButton = () => {
  const { createEdition, isPending } = useSoundCreate();

  return (
    <div>
      <Button
        variant="outline"
        className="cursor-pointer"
        type="button"
        disabled={isPending}
        onClick={() => createEdition()}
      >
        Create
      </Button>
    </div>
  );
};

export default CreateButton;
