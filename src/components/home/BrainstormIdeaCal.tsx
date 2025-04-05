import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, type FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@components/ui/button";

interface Props {}

const BrainstormIdeaCal: FC<Props> = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "brainstorm-idea" });
      cal("ui", { hideEventTypeDetails: false, layout: "column_view" });
    })();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Brainstorm Idea Meet</Button>
      </DialogTrigger>
      <DialogContent className="max-h-9/12 overflow-y-auto">
        <Cal
          namespace="brainstorm-idea"
          calLink="nisarg-bhatt/brainstorm-idea"
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "column_view" }}
        />
      </DialogContent>
    </Dialog>
  );
};

export default BrainstormIdeaCal;
