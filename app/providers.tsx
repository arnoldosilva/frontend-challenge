import { PropsWithChildren } from "react";
import GlobalStyles from "@/styles/global";

const createProviders = ({ children }: PropsWithChildren) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default createProviders;
