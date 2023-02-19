import type { ChangeEventHandler} from "react";
import { useCallback } from "react";
import tabIndeces from "../../constants/tabIndeces";

export interface TextFieldProps {
  value: string;
  onChange: (newValue: string) => void;
  width?: string;
}

const TextField = ({ value, onChange, width = 'w-full' }: TextFieldProps) => {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback((e) => {
    onChange(e.target.value);
  }, [onChange]);

  return (
    <textarea
      tabIndex={tabIndeces.MAIN_INPUT}
      className={`${width} h-full p-2 resize-none rounded`}
      value={value}
      onChange={handleChange}
    />
  );
}

export default TextField;
