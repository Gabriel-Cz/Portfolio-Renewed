import { LangType } from "@/types";

const getButtonBg = (currentLang: LangType, lang: LangType) => {
  return currentLang === lang ? 'bg-[#41B5E7] text-slate-50' : '';
}

interface SwitchProps {
  onChange: (lang: LangType) => void;
  currentLang: LangType;
}
export const Switch: React.FC<SwitchProps> = ({
  onChange,
  currentLang
}) => {
  return (
    <div className="w-[129px] h-[39px] bg-white/50 rounded-[100px] shadow-md grid grid-cols-2 px-[3px] py-[3px] items-center">
      <div
        onClick={() => onChange('eng')}
        className={`text-center flex items-center justify-center text-base h-full rounded-l-[100px] font-bold ${getButtonBg(currentLang, 'eng')}`}
      >
          ENG 
        </div>
      <div
        onClick={() => onChange('esp')}
        className={`text-center flex items-center justify-center text-base h-full font-bold rounded-r-[100px] ${getButtonBg(currentLang, 'esp')}`}
      >
          ESP
      </div>
    </div>
  )
}