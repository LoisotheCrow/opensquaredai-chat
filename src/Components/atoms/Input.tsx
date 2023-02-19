import type { ChangeEventHandler} from "react";
import { useCallback } from "react";

export type InputPropsInternal = {
  value: string;
  onChange: (newValue: string) => void;
  name: string;
  id?: string;
  className?: string;
  label: string;
  tabIndex?: number[];
};

export type InputProps = InputPropsInternal & Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  keyof InputPropsInternal
>;

const Input = ({
  value,
  onChange,
  label,
  name,
  id = name,
  className = '',
  tabIndex = [0, 0],
  ...otherProps
}: InputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    onChange(e.target.value);
  }, []);

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label ? (
        <label
          tabIndex={tabIndex.length > 1 ? tabIndex[0] : 0}
          className="text-xs"
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
      <input
        id={id}
        name={name}
        type="text"
        className="p-1 text-xs rounded-sm w-full text-gray-900"
        value={value}
        onChange={handleChange}
        tabIndex={tabIndex.length > 1 ? tabIndex[1] : tabIndex[0]}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
