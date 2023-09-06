import bgImage from '../../assets/imgs/BlankPaper.png';
import Image from "next/image";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <div className="w-full h-screen p-12 pt-2 relative flex justify-center">
      <p className="text-vintage-blue/100 drop-shadow-text font-pacifico w-[70%] text-center tracking-wider leading-7">
        {children}
      </p>
    </div>
  )
}