import { ReactNode, useState, useEffect } from "react";
import { Container } from "./styles";

interface TextProps {
  children: ReactNode;
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
  disablebackground?: "true" | "false";
}

export interface Font extends TextProps {
  fontSize: string;
}

export const Text = ({
  children,
  size = "1",
  disablebackground,
}: TextProps) => {
  const [fontsize, setFontsize] = useState<string>("12px");

  useEffect(() => {
    if (size === "1") {
      setFontsize("12px");
    } else if (size === "2") {
      setFontsize("13px");
    } else if (size === "3") {
      setFontsize("14px");
    } else if (size === "4") {
      setFontsize("15px");
    } else if (size === "5") {
      setFontsize("16px");
    } else if (size === "6") {
      setFontsize("17px");
    } else if (size === "7") {
      setFontsize("18px");
    }
  }, [size]);

  return (
    <Container fontSize={fontsize} disablebackground={disablebackground}>
      {children}
    </Container>
  );
};
