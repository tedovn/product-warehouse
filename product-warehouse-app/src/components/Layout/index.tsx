import React from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";

import "./style.scss";

type ComponentProps = React.PropsWithChildren<{
  children?: React.ReactNode;
  style?: object;
  className?: string;
}>;

const Page: React.FC<ComponentProps> = (props: ComponentProps): JSX.Element => {
  const { children, style, className } = props;
  return (
    <div className={`layout ${className || ""} `} style={style}>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default Page;
