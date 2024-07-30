import { Credit, defaultCredit } from "@/types/projectMetadataForm";
import { useState } from "react";

const useProject = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [animationUrl, setAnimationUrl] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [ethPrice, setEthPrice] = useState<string>("");
  const [credits, setCredits] = useState<Credit[]>([defaultCredit]);

  console.log("SWEETS PROJECT", name, description, animationUrl, image);
  return {
    credits,
    setCredits,
    name,
    setName,
    description,
    setDescription,
    animationUrl,
    setAnimationUrl,
    ethPrice,
    setEthPrice,
    image,
    setImage,
  };
};

export default useProject;
