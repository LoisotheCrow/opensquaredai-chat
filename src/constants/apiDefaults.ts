import type { Settings } from "../Components";

const apiDefaults: Partial<Settings> = {
  apiKey: process.env.API_KEY || '',
  model: process.env.MODEL || 'text-davinci-003',
  temperature: process.env.TEMPERATURE ? parseFloat(process.env.TEMPERATURE) : 0.9,
  max_tokens: process.env.MAX_TOKENS ? parseFloat(process.env.MAX_TOKENS) : 1000,
  top_p: process.env.TOP_P ? parseFloat(process.env.TOP_P) : 1,
  frequency_penalty: process.env.FREQ_PEN ? parseFloat(process.env.FREQ_PEN) : 0.0,
  presence_penalty: process.env.PRES_PEN ? parseFloat(process.env.PRES_PEN) : 0.6,
  stop: ['Human:', 'AI:'],
}

export default apiDefaults;
