"use client";
import { useEffect, type FC } from "react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { IconVideo } from "@tabler/icons-react";

interface Props {}

const QuickChatCalButton: FC<Props> = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "quick-chat" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Button
      data-cal-namespace="quick-chat"
      data-cal-link="nisarg-bhatt/quick-chat"
      data-cal-config='{"layout":"month_view","theme":"light"}'
      variant="default"
      type="button"
    >
      <IconVideo /> Quick Chat
    </Button>
  );
};

export default QuickChatCalButton;
