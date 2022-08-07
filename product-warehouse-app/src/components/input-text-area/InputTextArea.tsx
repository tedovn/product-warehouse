import React from "react";
import {
  InputTextarea as PInputTextarea,
  InputTextareaProps as PInputTextareaprops,
} from "primereact/inputtextarea";
import "./InputTextArea.scss";
import LabelErrorWrapper, { WrapperProps } from "../LabelErrorWrapper";

interface InputTextAreaProps extends PInputTextareaprops {
  label?: string;
  error?: string;
  wrapperOptions?: WrapperProps;
}

const InputTextArea = (props: InputTextAreaProps) => {
  const {
    value,
    onChange,
    id,
    name,
    label,
    error,
    rows,
    cols,
    placeholder,
    wrapperOptions,
  } = props;
  return (
    <div className="InputTextArea" data-testid="InputTextArea">
      <LabelErrorWrapper {...{ id, label, error, ...wrapperOptions }}>
        <PInputTextarea
          autoResize
          value={value}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          rows={rows}
          cols={cols}
          className={`${error ? "p-invalid" : ""}`}
        />
      </LabelErrorWrapper>
    </div>
  );
};

InputTextArea.defaultProps = {
  label: "",
  error: "",
  wrapperOptions: {},
};

export default InputTextArea;
