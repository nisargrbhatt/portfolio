import type { FC } from "react";
import { IconLocation, IconMail } from "@tabler/icons-react";
import QuickChatCalButton from "./QuickChatCalButton";

interface Props {}

const Contact: FC<Props> = () => {
  return (
    <section id="contact" className="py-12">
      <div className="container px-4 md:px-6">
        <div className="animate-on-scroll flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-h2">Get In Touch</h2>
            <p className="font-p">
              I'm currently available for freelance work and full-time
              positions. If you have a project that needs coding or a position
              to fill, contact me.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 py-2 sm:flex-row">
          <div className="flex items-center gap-1">
            <IconMail width={16} height={16} />

            <span>nisargrbhatt@gmail.com</span>
          </div>
          <div className="flex items-center gap-1">
            <IconLocation width={16} height={16} />

            <span>Gujarat, India</span>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <QuickChatCalButton />
        </div>
      </div>
    </section>
  );
};

export default Contact;
