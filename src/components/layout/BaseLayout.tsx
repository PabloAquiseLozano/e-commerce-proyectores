import React from "react";
import { HeaderLayout } from "@/components/layout/HeaderLayout.tsx";
import { FooterLayout } from "@/components/layout/FooterLayout.tsx";

interface Props {
  children: React.ReactNode;
}

export const BaseLayout = ({ children }: Props) => {
  return (
    <div className="w-full h-auto h-min-[100svh]">
      <HeaderLayout />
      <main>{children}</main>
      <FooterLayout />
    </div>
  );
};
