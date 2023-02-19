import type { OpenAIApi } from "openai";
import type { Settings } from "../Components";
import apiDefaults from "../constants/apiDefaults";

export const requestAIResponse = async (api: OpenAIApi, prompt: string, settings: Partial<Settings>) => {
  const {
    model = apiDefaults.model,
    temperature = apiDefaults.temperature,
    max_tokens = apiDefaults.max_tokens,
    top_p = apiDefaults.top_p,
    frequency_penalty = apiDefaults.frequency_penalty,
    presence_penalty = apiDefaults.presence_penalty,
    stop = apiDefaults.stop,
  } = settings;

  const response = await api.createCompletion({
    model,
    prompt: prompt,
    temperature,
    max_tokens,
    top_p,
    frequency_penalty,
    presence_penalty,
    stop,
  });

  return response.data?.choices[0]?.text;
};

