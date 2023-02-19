import ChatMessage from "../atoms/ChatMessage";
import TextField from "../atoms/TextField";
import { useChat } from "../context/ChatProvider";
import { useSettings } from "../context/SettingsProvider";

const ChatWindow = () => {
  const { chat, setPrompt, prompt, submitPrompt, loading } = useChat();
  const [settings] = useSettings();

  console.log('loading', loading);
  console.log('disabled', !settings.apiKey || loading)

  return (
    <section className="w-full h-full flex flex-col p-4 gap-4 bg-gray-600">
      <div className="w-full h-[85%] flex flex-col p-2 gap-2 rounded bg-gray-800 overflow-scroll">
        {chat.map((message, index) => <ChatMessage key={index} {...message} />)}
      </div>
      <div className="w-full h-[15%] flex flex-row gap-1">
        <TextField value={prompt} onChange={setPrompt} width="w-[80%]" />
        <button
          className="h-full w-[20%] rounded bg-gray-800 text-l text-gray-300"
          onClick={submitPrompt}
          disabled={!settings.apiKey || loading}
        >
          Submit
        </button>
      </div>
    </section>
  );
}

export default ChatWindow;
