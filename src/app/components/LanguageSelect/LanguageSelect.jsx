import { ArrowDown } from "../icons";
import "./LanguageSelect.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function LanguageSelect({
  languages,
  currentLanguage,
  setCurrentLanguage,
}) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="flex justify-center items-center gap-xxs">
          <p className="text-sm-regular text-center text-gray-4">
            {currentLanguage}
          </p>
          <ArrowDown />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[150px] rounded-sm p-xxs bg-gray-black">
          {languages.map((language) => (
            <DropdownMenu.Item
              key={language.name}
              className="text-gray-white"
              onClick={() => setCurrentLanguage(language.name)}
            >
              {language.name}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
