import React from "react";
import Content from "../Content";
import Footer from "../Footer";
import Header from "../Header";

type ComponentProps = React.PropsWithChildren<{
  children?: React.ReactNode;
  style?: object;
  className?: string;
}>;

const Page: React.FC<ComponentProps> = (props: ComponentProps): JSX.Element => {
  const { children, style, className } = props;
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Page;
