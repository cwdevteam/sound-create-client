export const uploadFile = async (file: File) => {
  try {
    const data = new FormData();
    data.set("file", file);
    const res = await fetch("/api/ipfs", {
      method: "POST",
      body: data,
    });
    const json = await res.json();
    const { cid } = json;
    return { cid, uri: `ipfs://${cid}` };
  } catch (error) {
    console.error(error);
    return { cid: null, uri: null };
  }
};
