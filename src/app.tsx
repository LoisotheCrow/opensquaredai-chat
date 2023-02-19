import * as React from 'react';
import { useState } from 'react';
import type { ChatMessage, Settings} from './Components';
import { ChatWindow} from './Components';
import { ChatProvider} from './Components';
import { Footer, Header, SettingsProvider } from './Components';
import apiDefaults from './constants/apiDefaults';
import tabIndeces from './constants/tabIndeces';

const App: React.FC = () => {
  const [settings, setSettings] = useState<Partial<Settings>>({ apiKey: apiDefaults.apiKey });
  const [prompt, setPrompt] = useState<string>('');
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <ChatProvider chat={chat} prompt={prompt} setPrompt={setPrompt} setChat={setChat} loading={loading} setLoading={setLoading}>
      <SettingsProvider setSettings={setSettings} settings={settings}>
        <Header />
        <main tabIndex={tabIndeces.MAIN} className="w-full h-full">
          <ChatWindow />
        </main>
        <Footer />
      </SettingsProvider>
    </ChatProvider>
  );
}

export default App;
