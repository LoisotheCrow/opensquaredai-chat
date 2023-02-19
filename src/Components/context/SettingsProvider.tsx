import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export interface Settings {
  apiKey: string;
  model: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  stop: string[],
}

export interface SettingsProviderProps {
  settings: Partial<Settings>;
  setSettings: (newSettings: Partial<Settings>) => void;
}

const SettingsProviderContext = createContext<SettingsProviderProps>({
  settings: {},
  setSettings: () => null,
});

const SettingsProvider = ({ settings, children, setSettings }: SettingsProviderProps & { children: ReactNode }) => (
  <SettingsProviderContext.Provider value={{ setSettings, settings }}>
    {children}
  </SettingsProviderContext.Provider>
);

const useSettings = (): [Partial<Settings>, (newSettings: Partial<Settings>) => void] => {
  const context = useContext(SettingsProviderContext);

  if (!context) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }

  return [context.settings, context.setSettings];
}

export { SettingsProvider, useSettings };
