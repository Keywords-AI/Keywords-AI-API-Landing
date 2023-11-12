import { Page } from "src/app/components/Page";
import { SliderDisplay } from "src/app/components/Slider";

export function ComponentGrid() {
  return (
    <Page>
      <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full p-4 max-w-[1200px]">
        <SliderDisplay
          defaultValue={33}
          max={100}
          step={1}
          name={"Temperature"}
        />
      </div>
    </Page>
  );
}
