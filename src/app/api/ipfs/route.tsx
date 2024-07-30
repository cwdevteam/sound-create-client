import saveFile from "@/lib/ipfs/saveFile";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  console.log("SWEETS body", data);
  const file: File | null = data.get("file") as unknown as File;
  console.log("SWEETS body", data);
  data.append("file", file);
  data.append("pinataMetadata", JSON.stringify({ name: "File to upload" }));
  const response = await saveFile(data);
  console.log("SWEETS RESPONSE", response);
  return Response.json({ hello: "world" }, { status: 200 });
}
