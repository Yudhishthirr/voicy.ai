import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

/**
 * Convert file URL → Data URI
 */
async function urlToDataURI(url: string) {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();

  const base64 = Buffer.from(buffer).toString("base64");

  return `data:audio/wav;base64,${base64}`;
}

/**
 * ✅ REAL TEXT TO SPEECH
 */
export async function TextToSpeech({
  text,
  voiceSampleUrl,
}: {
  text: string;
  voiceSampleUrl: string;
}) {
  /**
   * Convert voice sample
   * UploadThing URL → Data URI
   */
  const dataURI = await urlToDataURI(voiceSampleUrl);

  /**
   * Replicate Prediction
   */
  const output = await replicate.run(
    "resemble-ai/chatterbox",
    {
      input: {
        prompt:text,
        audio_prompt: dataURI, // ✅ OPTION 3 DATA URI
        exaggeration: 0.5,
        cfg: 0.5,
      },
    }
  );
  console.log("replicate reuslt");
  console.log(output);
  console.log(typeof output);
  /**
   * Replicate returns audio URL
   */

  let audioUrl: string | null = null;

  if (Array.isArray(output)) {
    audioUrl = String(output[0]);
  } else if (typeof output === "string") {
    audioUrl = output;
  } else if (output && typeof output === "object") {
    audioUrl = String(output);
  }

  if (!audioUrl || audioUrl === "[object Object]") {
    throw new Error("Replicate returned invalid URL");
  }

  return {
    audioUrl: output,
  };
}