import React from "react";
import { Dropdown, DropdownProps } from "primereact/dropdown";
import "./DropdownInputField.scss";
import LabelErrorWrapper, { WrapperProps } from "../LabelErrorWrapper";

type ComponentsProps = DropdownProps & {
  label?: string;
  wrapperOptions?: WrapperProps;
  error?: string;
  isRequired?: boolean;
  tooltip?: string;
};

const DropdownInputField: React.FC<ComponentsProps> = (
  props: ComponentsProps
): JSX.Element => {
  const {
    options,
    onChange,
    id,
    style,
    label,
    error,
    isRequired,
    name,
    showClear,
    required,
    editable,
    value,
    placeholder,
    className,
    scrollHeight = "200px",
    disabled,
    wrapperOptions,
    tooltip,
  } = props;

  return (
    <div className="DropdownInputField" data-testid="DropdownInputField">
      <LabelErrorWrapper
        {...{ label, id, error, isRequired, tooltip, ...wrapperOptions }}
      >
        <Dropdown
          options={options}
          value={value}
          id={id}
          style={style}
          editable={editable}
          name={name}
          required={required}
          showClear={showClear}
          className={`${className} ${error ? "p-invalid" : ""}`}
          disabled={disabled}
          onChange={onChange}
          scrollHeight={scrollHeight}
          placeholder={placeholder}
        />
      </LabelErrorWrapper>
    </div>
  );
};

DropdownInputField.defaultProps = {
  label: "",
  error: "",
  isRequired: false,
  wrapperOptions: {},
};

export default DropdownInputField;
