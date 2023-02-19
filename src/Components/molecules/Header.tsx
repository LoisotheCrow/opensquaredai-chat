import { useCallback, useState } from "react";
import { CaretDown, CaretUp } from "phosphor-react";
import SettingsPanel from "./SettingsPanel";
import tabIndeces from "../../constants/tabIndeces";
import { useSettings } from "../context/SettingsProvider";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [settings] = useSettings();

  const toggleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <header
      className="w-full "
    >
      <button
        tabIndex={tabIndeces.HEADER_CONTROL}
        className="w-full h-10 bg-gray-800 flex flex-row px-4 py-2 justify-center gap-4 select-none items-center text-gray-300 relative"
        onClick={toggleOpen}
        aria-label="Expands and collapses the settings menu"
      >
        {!settings.apiKey ? (
          <h5 className="absolute left-4 top-1/2 translate-y-[-50%] text-gray-300" tabIndex={tabIndeces.HEADER_WARNING} role="alert">
            Warning: no API Key provided.
          </h5>
        ) : null}
        <h1>Settings</h1>
        {open ? (
          <CaretUp
            weight="bold"
          />
        ) : (
          <CaretDown
            weight="bold"
          />
        )}
      </button>
      {open ? <SettingsPanel /> : null}
    </header>
  );   
}

export default Header;
