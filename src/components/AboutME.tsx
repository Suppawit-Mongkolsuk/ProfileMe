import { FcGraduationCap } from 'react-icons/fc';

export default function Aboutme() {
  return (
    <div className="max-w-[500px] md:max-w-[630px] lg:max-w-[710px] text-left text-gray-400 text-base text-ld md:text-sm leading-relaxed space-y-5  md:px-0">
      <p>
        <span className="font-semibold text-white">
          I’m a Computer Engineering
        </span>{' '}
        student passionate about designing and building modern, responsive web
        applications that merge creativity with technical precision. I enjoy
        turning ideas into interactive, user-centered interfaces that feel
        smooth, accessible, and visually consistent across devices.
      </p>
      <p>
        My favorite work lies where design meets code — crafting seamless
        experiences that balance aesthetics and performance.
      </p>
      <p>
        Currently, I’m developing MOVIX, a movie ticket booking web application
        built with React, TypeScript, and Tailwind CSS. I focus on creating a
        polished, responsive UI with clean architecture, dynamic admin–user
        interaction, and smooth animations for an engaging movie-booking
        experience.
      </p>
      <div className="py-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FcGraduationCap className="text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-white">
                Dhurakij Pundit University
              </h3>
              <p className="text-gray-400">B.Eng in Computer Engineering</p>
              <p className="text-gray-500 text-sm">2023 — Present</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FcGraduationCap className="text-3xl" />
            <div>
              <h3 className="text-lg font-semibold text-white">
                Anurajaprasit School
              </h3>
              <p className="text-gray-400">Science–Mathematics Program</p>
              <p className="text-gray-500 text-sm">2020 — 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
