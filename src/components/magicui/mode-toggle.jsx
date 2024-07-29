import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/magicui/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="none"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="text-black dark:hidden dark:text-white" />
      <Moon className="hidden text-black dark:block dark:text-white" />
    </Button>
  );
}
