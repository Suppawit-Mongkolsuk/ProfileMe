export default function NavSection() {
  return (
    <nav className="flex flex-col space-y-6 mt-32">
      {[
        { id: 'about', label: 'ABOUT' },
        { id: 'projects', label: 'PROJECTS' },
        { id: 'Skills', label: 'SKILL' },
      ].map((item, i) => (
        <a
          key={i}
          href={`#${item.id}`}
          className="group flex items-center gap-4 text-gray-400 hover:text-white transition-all duration-300"
        >
          {/* เส้นด้านหน้า */}
          <span className="w-10 h-[1px] bg-gray-600 group-hover:bg-white transition-all duration-300 group-hover:w-14"></span>
          {/* ข้อความ */}
          <span className="tracking-[2px] text-sm font-semibold group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
            {item.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
