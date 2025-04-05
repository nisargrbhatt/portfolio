import { type FC } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { AvatarImageProps } from "@radix-ui/react-avatar";

interface Props {
  src: AvatarImageProps["src"];
  alt: AvatarImageProps["alt"];
  fallbackText: string;
}

const AvatarComponent: FC<Props> = ({ src, alt, fallbackText }) => {
  return (
    <Avatar>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarComponent;
