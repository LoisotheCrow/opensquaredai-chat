import { Configuration, OpenAIApi } from "openai";
import type { ReactNode} from "react";
import { useEffect, useState} from "react";
import { useCallback } from "react";
import { createContext, useContext } from "react";
import { requestAIResponse } from "../../api";
import { useSettings } from "./SettingsProvider";

export interface ChatMessage {
  ai: boolean;
  message: string;
}

export interface ChatProviderProps {
  chat: ChatMessage[];
  prompt: string;
  setPrompt: (newPrompt: string) => void;
  setChat: (newChat: ChatMessage[]) => void;
  loading: boolean;
  setLoading: (newState: boolean) => void;
  submitPrompt: () => void;
}

const ChatProviderContext = createContext<ChatProviderProps>({
  chat: [],
  prompt: '',
  loading: false,
  setPrompt: () => null,
  setChat: () => null,
  submitPrompt: () => null,
  setLoading: () => null,
});

const ChatProvider = ({
  children,
  chat,
  loading,
  setLoading,
  setPrompt,
  setChat,
  prompt,
}: Omit<ChatProviderProps, 'submitPrompt'> & { children: ReactNode }) => {
  const [settings] = useSettings();
  const [openAiApi, setOpenAiApi] = useState(null);

  useEffect(() => {
    const configuration = new Configuration({
      apiKey: settings.apiKey,
    });
    const openai = new OpenAIApi(configuration);
  
    setOpenAiApi(openai);
  }, [settings.apiKey]);

  const waitForResponse = useCallback(async (lastPrompt: string) => {
    const buildExtendedPrompt = () => chat.reduce(
      (acc, next) => acc + (next.ai ? '\nAI: ' : '\nHuman: ') + next.message,
      'Don\'t include Human: or AI: in your responses.',
    );

    const response = await requestAIResponse(openAiApi, buildExtendedPrompt() + '\nHuman: ' + lastPrompt + '\nAI: ', settings);

    setChat([...chat, { ai: false, message: lastPrompt }, { ai: true, message: response }]);
    setLoading(false);
  }, [openAiApi, settings, setChat, chat, setLoading]);

  const submitPrompt = useCallback(() => {
    setChat([...chat, { ai: false, message: prompt }]);
    setLoading(true);

    waitForResponse(prompt);

    setPrompt('');
  }, [setChat, setPrompt, prompt, chat, waitForResponse, setLoading]);

  return (
    <ChatProviderContext.Provider value={{ chat, submitPrompt, setPrompt, prompt, setChat, loading, setLoading }}>
      {children}
    </ChatProviderContext.Provider>
  );
}

const useChat = (): Omit<ChatProviderProps, 'setChat'> => {
  const context = useContext(ChatProviderContext);

  if (!context) {
    throw new Error('useChat must be used within a ChatProvider');
  }

  return {
    chat: context.chat,
    loading: context.loading,
    prompt: context.prompt,
    setPrompt: context.setPrompt,
    submitPrompt: context.submitPrompt,
    setLoading: context.setLoading,
  };
}

export { ChatProvider, useChat };
