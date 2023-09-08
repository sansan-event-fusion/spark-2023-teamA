import { ErrorText } from "@/components/atoms/ErrorText";
import { FocusEventHandler } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

//このPlainInputで対応できるtype
type InputType = 'text' | 'password' | 'tel' | 'email';

type ValidationRules = {
  required?: string;
  minLength?: { value: number; message: string };
  pattern?: { value: RegExp; message: string };
};

type Props = {
  registerValue: string;
  label: string;
  inputType: InputType;
  placeholder?: string;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors<FieldValues>;
  error?: string;
  rules?: ValidationRules;
  defaultValue?: string;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  disabled?: boolean;
  labelClassName?: string;
  inputClassName?: string;
}

export const PlainInput = ({
  registerValue,
  label,
  inputType,
  placeholder = '',
  register,
  errors,
  error,
  rules,
  defaultValue,
  onBlur,
  disabled = false,
  labelClassName,
  inputClassName
}: Props): JSX.Element => (
  <div className="flex flex-col gap-1 m-2 w-full">
    <label htmlFor={registerValue} className={labelClassName} >
      {label}
    </label>
    <input 
      className={
        "border border-gray-300 rounded-md shadow-sm p-2 sm:p-3 w-full focus:outline-pink-color " +
        inputClassName
      }
      type={inputType} 
      id={registerValue}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={defaultValue}
      {...((register && registerValue) && register(registerValue, rules))}
      onBlur={onBlur}
    />

    {error && (
      <ErrorText 
        errorText={error}
      />
    )}
    {/* {errors && errors[registerValue] && (
      <ErrorText 
        errorText={errors[registerValue]?.message as string}
      />
    )} */}
  </div>
)