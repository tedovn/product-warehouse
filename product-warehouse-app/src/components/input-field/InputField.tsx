import React from "react";
import { InputText as PInputField } from "primereact/inputtext";
import "./InputField.scss";
import LabelErrorWrapper, { WrapperProps } from "../LabelErrorWrapper";

type ComponentProps = React.PropsWithChildren<{
  placeholder?: string;
  id?: string;
  name?: string;
  label?: string;
  error?: any;
  isRequired?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  value?: string | number;
  autoFocus?: boolean;
  className?: string;
  type?: string;
  style?: object;
  min?: string | number;
  max?: string | number;
  onInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  wrapperOptions?: WrapperProps;
}>;

const InputField: React.FC<ComponentProps> = (
  props: ComponentProps
): JSX.Element => {
  const {
    placeholder,
    value,
    error,
    className,
    disabled,
    isRequired,
    readOnly,
    label,
    type,
    style,
    id,
    name,
    min,
    max,
    onInput,
    onChange,
    onFocus,
    onBlur,
    autoFocus,
    wrapperOptions,
  } = props;

  return (
    <div className="InputField" data-testid="InputField">
      <LabelErrorWrapper
        {...{ label, id, error, isRequired, ...wrapperOptions }}
      >
        <PInputField
          readOnly={readOnly}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={onChange}
          style={style}
          autoFocus={autoFocus}
          onBlur={onBlur}
          onFocus={onFocus}
          onInput={onInput}
          className={`${className} ${error ? "p-invalid" : ""}`}
          type={type}
          min={min}
          max={max}
        />
      </LabelErrorWrapper>
    </div>
  );
};

InputField.defaultProps = {
  label: "",
  error: "",
  isRequired: false,
};

export default InputField;
