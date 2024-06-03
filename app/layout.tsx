import React from "react";
import StyledComponentsRegistry from "@/lib/registry";
import Providers from "./providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          {children}
          {/* <Providers>{children}</Providers> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
