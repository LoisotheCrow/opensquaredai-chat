import { useCallback } from "react";
import tabIndeces from "../../constants/tabIndeces";
import Input from "../atoms/Input";
import type { Settings} from "../context/SettingsProvider";
import { useSettings } from "../context/SettingsProvider";

const SettingsPanel = () => {
  const [settings, setSettings] = useSettings();

  const handleTextChange = useCallback((key: keyof Settings) => (value: string) => {
    setSettings({ ...settings, [key]: value });
  }, [setSettings, settings]);

  return (
    <section
      aria-label="Settings"
      tabIndex={tabIndeces.SETTINGS_PANEL}
      className="grid grid-cols-4 grid-rows-2 w-full bg-gray-700 text-white p-4 gap-4 items-center"
    >
      <Input
        name="APIKey"
        label="API Key"
        className="col-span-2"
        value={settings.apiKey || ''}
        onChange={handleTextChange('apiKey')}
        tabIndex={tabIndeces.SETTINGS_API}
      />
    </section>
  );
}

export default SettingsPanel;
