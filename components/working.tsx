import QuestionsAnimation from "./animations/questions.animation";
import Container from "./container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Working() {
  return (
    <Container className="flex flex-col p-4 h-1/2 flex-wrap">
      <div className="flex justify-center items-center ">
        <h1 className=" font-bold text-4xl">
          Still have many questions ?
        </h1>
      </div>

      <div className=" flex my-10 flex-wrap">
        <div className="flex-1 flex items-center justify-center">
          <QuestionsAnimation className=" w-80 h-80" />
        </div>

        <div className="flex-1 flex items-center">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Insights ?</AccordionTrigger>
              <AccordionContent defaultChecked>....</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Why Insights ?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Where do you get twitter Data from ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                Where do you get twitter Data from ?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Container>
  );
}
