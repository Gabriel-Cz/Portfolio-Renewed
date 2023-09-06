import { LangType } from "@/types";
import { useCallback, useState } from "react";

export const useLang = () => {
  const [lang, setLang] = useState<LangType>('eng');

  const handleLang = useCallback(
    (customLang: LangType) => setLang(customLang),
    []
  );

  return {
    lang,
    handleLang
  }
}