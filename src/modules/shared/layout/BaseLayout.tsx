import { ReactElement, ReactNode } from "react";

import Footer from "@/types/components/Footer/Footer";

type BaseLayoutProps = {
  header?: ReactElement;
  children: ReactNode;
  footer?: ReactElement;
};

export const BaseLayout = ({
  header = <></>,
  footer = <Footer />,
  children,
}: BaseLayoutProps) => {
  return (
    <div id="app">
      {header}
      {children}
      {footer}
    </div>
  );
};
