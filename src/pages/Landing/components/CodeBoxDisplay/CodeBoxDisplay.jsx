import "./CodeBoxDisplay.css";
import { CodeViewer } from "src/components/CodeViewer";
export function CodeBoxDisplay() {
  return (
    <div className="flex-col max-w-[800px] items-center w-full rounded-lg border border-gray-3 bg-gradient-in shadow-purple">
      <CodeViewer />
    </div>
  );
}
