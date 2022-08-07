import { Tooltip } from 'primereact/tooltip';
import React from 'react';
import './index.scss';

type LabelPosition = 'top' | 'left';

type ComponentProps = React.PropsWithChildren<{
  children: React.ReactNode;
  label?: string;
  labelPosition?: LabelPosition;
  isRequired?: boolean;
  tooltip?: string;
  id?: string;
  error?: string;
  marginBottom?: string | number;
}>;

export type WrapperProps = Pick<ComponentProps, 'labelPosition' | 'marginBottom'>;

const LabelErrorWrapper: React.FC<ComponentProps> = (props: ComponentProps): JSX.Element => {
  const { children, label, labelPosition, id, error, isRequired, tooltip, marginBottom } = props;

  const labelView = labelPosition === 'top' ? 'verticalView' : 'horizontalView';

  return (
    <div
      className={`koda-LabelErrorWrapper ${labelView} ${error ? 'hasError' : ''}`}
      data-testid="koda-LabelErrorWrapper"
      style={{ marginBottom }}
    >
      {label && (
        <div className={`label-wrapper ${labelView}`}>
          <label htmlFor={id}>{label}</label>
          {isRequired && <span className="required-mark">&nbsp;*</span>}
          {tooltip && (
            <>
              <i className={`pi pi-info-circle ${id}`} />
              <Tooltip target={`.${id}`} position="top" id={`${id}-tooltip`} className="koda-LabelErrorWrapper-tooltip">
                {tooltip}
              </Tooltip>
            </>
          )}
        </div>
      )}
      <div>
        {children}
        {error && <small className="p-error">{error}</small>}
      </div>
    </div>
  );
};

LabelErrorWrapper.defaultProps = {
  labelPosition: 'top',
  marginBottom: '',
};

export default LabelErrorWrapper;
