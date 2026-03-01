import Replicate from "replicate";
import { readFile, writeFile } from "node:fs/promises";

interface TextToSpeechArgumrts{
  text: string;
  voiceSampleUrl: string;
}

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});


async function urlToDataURI(url: string) {

  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  return `data:audio/wav;base64,${base64}`;
}


export async function TextToSpeech({text,voiceSampleUrl}:TextToSpeechArgumrts) {
 
  const dataURI = await urlToDataURI(voiceSampleUrl);

 
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
  console.log(output?.url());
  console.log(typeof output?.url());


  const audioUrl = output.url();

  return {
    url: audioUrl,
  };
}

export async function DummyTextToSpeech({
  text,
  voiceSampleUrl,
}: TextToSpeechArgumrts) {

  console.log("⚡ Dummy TTS running (DEV MODE)");
  console.log("Text:", text);
  console.log("Voice:", voiceSampleUrl);

  // fake delay like real AI generation
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return {
    url: "https://ef04l1zo39.ufs.sh/f/y26BqbmUg6SoLWrwaG93z2RQELm1HGDJvqIsXbPfnAepd3Ut",
  };
}