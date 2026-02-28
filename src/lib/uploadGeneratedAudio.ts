import { utapi } from "./uploadthing-server";

export async function uploadGeneratedAudio(
  replicateUrl: string
) {
  /**
   * 1️⃣ Download audio from replicate
   */
  const response = await fetch(replicateUrl);

  if (!response.ok) {
    throw new Error("Failed to download audio");
  }

  const blob = await response.blob();

  /**
   * 2️⃣ Convert Blob → File
   */
  const file = new File(
    [blob],
    `generated-${Date.now()}.wav`,
    {
      type: blob.type || "audio/wav",
    }
  );

  /**
   * 3️⃣ Upload to UploadThing
   */
  const uploaded = await utapi.uploadFiles(file);

  if (!uploaded.data?.url) {
    throw new Error("UploadThing upload failed");
  }

  /**
   * ✅ Permanent URL
   */
  return uploaded.data.url;
}