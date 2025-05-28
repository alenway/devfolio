"use client";

import { useColorTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";

const colorThemes = [
  { name: "Default", value: "default" },
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Purple", value: "purple" },
  { name: "Orange", value: "orange" },
];

export function ColorThemeSelector() {
  const { colorTheme, setColorTheme } = useColorTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Palette className="h-5 w-5" />
          <span className="sr-only">Change color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {colorThemes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setColorTheme(theme.value as any)}
            className="flex items-center gap-2"
          >
            <span
              className="h-4 w-4 rounded-full"
              style={{
                backgroundColor:
                  theme.value === "default"
                    ? "hsl(0 0% 9%)"
                    : theme.value === "blue"
                    ? "hsl(220 70% 50%)"
                    : theme.value === "green"
                    ? "hsl(150 60% 40%)"
                    : theme.value === "purple"
                    ? "hsl(270 70% 60%)"
                    : "hsl(30 100% 50%)",
              }}
            />
            <span>{theme.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}