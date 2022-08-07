import { Checkbox as PCheckbox, CheckboxProps } from "primereact/checkbox";
import React from "react";

interface ComponentProps extends CheckboxProps {
  name?: string;
}

const Checkbox: React.FC<ComponentProps> = (
  props: ComponentProps
): JSX.Element => {
  const { disabled, checked, onChange, name, inputId = "checkbox", id } = props;
  return (
    <div className="Checkbox" data-testid="Checkbox">
      <PCheckbox
        id={id}
        name={name}
        inputId={inputId}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;
