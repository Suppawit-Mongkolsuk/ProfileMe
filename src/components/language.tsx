// Icons.tsx
import {
  SiPython,
  SiC,
  SiReact,
  SiTypescript,
  SiGithub,
  SiCanva,
} from 'react-icons/si';
import { FaFileWord, FaFileExcel } from 'react-icons/fa6';

export default function Iconslanguage() {
  const items = [
    { label: 'Python', icon: SiPython, color: '#3776AB' },
    { label: 'C#', icon: SiC, color: '#A8B9CC' },
    { label: 'React', icon: SiReact, color: '#61DAFB' },
    { label: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { label: 'GitHub', icon: SiGithub, color: '#f1502f' },
    { label: 'Word', icon: FaFileWord, color: '#2B579A' },
    { label: 'Excel', icon: FaFileExcel, color: '#217346' },
    { label: 'Canva', icon: SiCanva, color: '#00C4CC' },
  ];

  return (
    <div className="max-w-[500px] md:max-w-[630px] lg:max-w-[710px] mt-24 mb-16">
      <h1 className="text-left text-2xl font-semibold mb-4">My Skills</h1>
      <div className="flex flex-wrap gap-6 ">
        {items.map(({ label, icon: Icon, color }) => (
          <div
            key={label}
            className="flex items-center gap-2 rounded-xl  py-2 hover:scale-105 transition"
            title={label}
          >
            <Icon className="text-2xl md:text-3xl" style={{ color }} />
            <span className="hidden sm:inline text-sm md:text-base">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
