import api from "@/lib/axios";

/**
 * Create Voice Clone
 */
export const createVoiceClone = async (data: {
  voiceName: string;
  voiceSampleUrl: string;
//   clonedVoiceId: string;
  duration?: number;
}) => {
  const response = await api.post("/clone-voice", data);
  return response.data;
};

/**
 * Get User Voices
 */
export const getUserVoices = async () => {
  const response = await api.get("/clone-voice");
  return response.data.voices;
};

export const generateVoice = async (data: {
  text: string;
  voiceId: string;
  voiceSampleUrl: string;
}) => {
  const response = await api.post(
    "/text-to-voice",
    data
  );

  return response.data;
};


export const getUserGenratedVoices = async () => {
  const response = await api.get("/text-to-voice");
  // console.log(response.data)
  return response.data || [];
};

