"use client";

import { uploadFile } from "@/lib/ipfs/uploadToIpfs";
import { Button } from "@/components/ui/button";
import { FilePlusIcon } from "@radix-ui/react-icons";
import { useProjectProvider } from "@/context/ProjectProvider";

const UploadButton = () => {
  const { setAnimationUrl } = useProjectProvider();

  const handleFileChange = async (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const { uri } = await uploadFile(file);
      setAnimationUrl(uri);
    }
  };

  return (
    <div>
      <Button
        size="icon"
        onClick={() => document.getElementById("fileUpload")?.click()}
      >
        <FilePlusIcon className="h-4 w-4" />
      </Button>
      <input
        type="file"
        id="fileUpload"
        style={{ display: "none" }}
        accept=".mp3, .wav, .aif, .aiff"
        onChange={handleFileChange}
      />
    </div>
  );
};

export default UploadButton;
