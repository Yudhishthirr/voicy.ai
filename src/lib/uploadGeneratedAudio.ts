import { UTApi } from "uploadthing/server";

const utapi = new UTApi();

export async function uploadGeneratedAudio(
  replicateUrl: string
) {

  // 1️⃣ Fetch audio
  const res = await fetch(replicateUrl);
  console.log("get this infromateion feth of this upload file on cloud");
  console.log(res)

  if (!res.ok) {
    throw new Error("Failed to fetch replicate audio");
  }

  const blob = await res.blob();

  // 2️⃣ Create File
  const file = new File(
    [blob],
    `tts-${Date.now()}.wav`,
    { type: "audio/wav" }
  );
  console.log("fie is created you need to uploaded it ");

  // 3️⃣ Upload
  const uploaded = await utapi.uploadFiles(file);
  console.log("upload thngs data");
  console.log(uploaded);
  
  if (uploaded.error) {
    throw new Error(uploaded.error.message);
  }

  return uploaded.data.url;
}