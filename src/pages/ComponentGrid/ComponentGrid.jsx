import { Page } from "src/components/Page";
import { PlaygroundTextBox } from "src/components/PlaygroundTextBox";
import { SliderDisplay } from "src/components/Slider";

export function ComponentGrid() {
  return (
    <Page>
      <div className="grid grid-cols-4  gap-10 w-full h-full p-4 max-w-[1200px]">
        <SliderDisplay
          defaultValue={33}
          max={100}
          step={1}
          name={"Temperature"}
        />
        <div className=" h-[500px] flex">
          <PlaygroundTextBox
            isBest={true}
            company={"openai"}
            modelName={"OpenAI - gpt-3.5-turbo"}
            outputText={`Once upon a time in a small village nestled in the heart of a lush forest, there lived a young girl named Lily. She had curly golden locks that cascaded down her shoulders and eyes as blue as the summer sky. Lily was known for her kind heart and adventurous spirit. of us.`}
          />
        </div>
        <div className=" h-[500px] flex">
          <PlaygroundTextBox
            isBest={false}
            company={"ai21"}
            modelName={"AI21 Labs - j2-light"}
            outputText={`Here is a short story for you: The Mysterious Package John was sitting at his desk working when he heard the mail truck pull up outside. "The mail's here," he thought as he got up to go check his mailbox. When he opened the mailbox, he found the usual assortment of bills and advertisements. But there was one package that he didn't recognize. It was wrapped in plain brown paper with no return address. Curious, John brought the mysterious package inside. He turned it over and over, looking for any clues as to who it was from or what could be inside. But there were no labels, markings or anything to indicate where it had come from. He carefully opened the package, peeling back the tape bit by bit so as not to tear the paper. Inside was a small wooden box with intricate carvings all over it. John opened the box and gasped. Nestled inside was a large, perfect pearl. But where had this come from? Who would send him such a beautiful gift anonymously? John racked his brain but could not think of anyone who would send him something so unusual and valuable without any explanation. The mysterious package remained an enigma. To this day, John still wonders about who sent the pearl and why it was delivered so anonymously on that ordinary day. The mystery of the package has never been solved. How was that? I tried to include some basic elements of mystery and intrigue with an unexplained gift arriving anonymously. Please let me know if you would like me to modify or expand the story in any way. I'm happy to try another draft.
Score: 9.6
Latency: 5.83sCost: $0.00199Savings: $0.01967`}
          />
        </div>
      </div>
    </Page>
  );
}
