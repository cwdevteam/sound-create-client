"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import CreateButton from "./CreateButton";
import { useProjectProvider } from "@/context/ProjectProvider";
import ImageSelect from "./ImageSelect";
import UploadButton from "./UploadButton";

const SoundTokenForm = () => {
  const { setName, setDescription } = useProjectProvider();

  return (
    <div className="flex flex-col gap-8 max-w-md flex-1">
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="name">Title:</Label>
        <Input
          type="text"
          name="name"
          id="name"
          required
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="description">Description:</Label>
        <Textarea
          name="description"
          id="description"
          required
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <UploadButton />
      <ImageSelect />
      <div className="grid w-full items-center gap-2">
        <Label htmlFor="tokenPrice">Price per token (ETH):</Label>
        <Input
          type="text"
          name="tokenPrice"
          id="tokenPrice"
          defaultValue="0"
          inputMode="decimal"
          pattern="^\d+(\.\d+)?$"
          required
        />
      </div>
      <CreateButton />
    </div>
  );
};

export default SoundTokenForm;
