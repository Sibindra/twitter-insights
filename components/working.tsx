import QuestionsAnimation from "@/components/animations/questions.animation";
import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import questions from "@/lib/fetchs/questions";

export default function Working() {
  return (
    <Container className="flex flex-col p-4 h-1/2 flex-wrap">
      <div className="flex justify-center items-center ">
        <h1 className=" font-bold text-4xl">Still have many questions ?</h1>
      </div>

      <div className=" flex my-10 flex-wrap">
        <div className="flex-1 flex items-center justify-center">
          <QuestionsAnimation className=" w-80 h-80" />
        </div>

        <div className="flex-1 flex items-center">
          <Accordion type="single" collapsible className="w-full">
            {questions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{question.question}</AccordionTrigger>
                <AccordionContent>{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Container>
  );
}
