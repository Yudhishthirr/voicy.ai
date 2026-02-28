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
        text,
        audio_prompt: dataURI, // ✅ OPTION 3 DATA URI
        exaggeration: 0.5,
        cfg: 0.5,
      },
    }
  );

  /**
   * Replicate returns audio URL
   */
  return {
    audioUrl: output,
  };
}