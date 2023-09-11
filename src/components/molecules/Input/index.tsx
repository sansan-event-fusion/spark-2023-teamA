import { ErrorText } from "@/components/atoms/ErrorText";
import { FocusEventHandler } from "react";
import { UseFormRegister } from "react-hook-form";

//このPlainInputで対応できるtype
type InputType = 'text' | 'password' | 'tel' | 'email';

type Props = {
  id?: string
  registerValue?: string;
  label: string;
  inputType: InputType;
  placeholder?: string;
  register?: UseFormRegister<any>;
  error?: string;
  defaultValue?: string;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  disabled?: boolean;
  labelClassName?: string;
  inputClassName?: string;
}

export const PlainInput = ({
  id,
  registerValue,
  label,
  inputType,
  placeholder = '',
  register,
  error,
  defaultValue,
  onBlur,
  disabled = false,
  labelClassName,
  inputClassName,
}: Props): JSX.Element => (
  <div className="flex flex-col gap-1 w-full">
    <label htmlFor={registerValue} className={labelClassName} >
      {label}
    </label>
    <input 
      id={id}
      className={
        "border border-gray-300 rounded-md shadow-sm p-2 sm:p-3 w-full focus:outline-pink-color " +
        inputClassName
      }
      {...(register && register(registerValue ?? ""))}
      type={inputType} 
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={defaultValue}
      onBlur={onBlur}
    />

    {error && (
      <ErrorText 
        errorText={error}
      />
    )}
  </div>
)