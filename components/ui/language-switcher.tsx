'use client'

import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (newLang: string) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon" title={`Language: ${i18n.language.toUpperCase()}`} className="bg-muted/30">
          <span className="font-mono text-[10px] uppercase tracking-wider">{i18n.language}</span>
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChange('en')}>
          <span>English</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange('ar')}>
          <span>العربية</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChange('tr')}>
          <span>Türkçe</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
