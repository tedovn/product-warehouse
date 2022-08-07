import React from "react";
import "./style.scss";

type ComponentProps = React.PropsWithChildren<{
  children?: React.ReactNode;
}>;

const Content: React.FC = (props: ComponentProps): JSX.Element => {
  const { children } = props;
  return (
    <div className="content" role="main">
      {children}
    </div>
  );
};

export default Content;
