import "./CodeBoxDisplay.css";
import { CodeViewer } from "src/components/CodeViewer";
export function CodeBoxDisplay() {
  return (
    <div className="flex-col max-w-[800px] items-center w-full rounded-lg shadow-purple">
      <CodeViewer />
    </div>
  );
}
