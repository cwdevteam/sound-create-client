export const uploadFile = async (file: File) => {
  try {
    console.log("SWEETS UPLOADING");
    const data = new FormData();
    data.set("file", file);
    const res = await fetch("/api/ipfs", {
      method: "POST",
      body: data,
    });
    console.log("SWEETS FINISHED CALLING POST /api/ipfs");
  } catch (error) {
    console.error(error);
  }
};
