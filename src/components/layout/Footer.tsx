import type { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  IconMail,
  IconBrandX,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";

const Footer: FC = () => {
  const links = [
    { name: <IconBrandX />, url: "https://x.com/nisarg_2001", label: "X Link" },
    {
      name: <IconMail />,
      url: "mailto:nisargrbhatt@gmail.com",
      label: "Email Link",
    },
    {
      name: <IconBrandLinkedin />,
      url: "https://www.linkedin.com/in/nisarg-r-bhatt",
      label: "LinkedIn Link",
    },
    {
      name: <IconBrandGithub />,
      url: "https://github.com/nisargrbhatt",
      label: "Github Link",
    },
  ];

  return (
    <footer className="container mx-auto w-full border-t border-r border-l border-neutral-200 py-4">
      <div className="flex items-center justify-center gap-2 tracking-tight">
        {links.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            aria-label={link.label}
          >
            <Button variant={"ghost"}>{link.name}</Button>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
