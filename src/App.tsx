import './App.css';
import Aboutme from './components/AboutME';
import Cardprops from './components/Card';
import { FcCommandLine } from 'react-icons/fc';
import NavSection from './components/navbar';
import Contact from './components/Contact';
import Iconslanguage from './components/language';
import { motion } from 'framer-motion';

export function App() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }} // เริ่มต้นจางและเลื่อนลง
      animate={{ opacity: 1, y: 0 }} // ค่อยๆ ปรากฏและเลื่อนขึ้น
      transition={{ duration: 0.8, ease: 'easeOut' }} // ความเร็วและความนุ่มของ motion
    >
      <div className="flex justify-between gap-4 flex-col md:flex-row top-15 ">
        {/* ซ้าย */}
        <aside className="md:w-1/3 lg:w-1/4 md:sticky top-20 self-start h-fit space-y-10">
          <div className="text-left space-y-2">
            <div className="text-4xl font-bold text-white sm:text-2xl">
              <h1>Supawich</h1>
              <h1>Mongkolsuk</h1>
            </div>
            <div className="text-white/50 flex items-center gap-2">
              <FcCommandLine className="text-2xl" />
              <span className="text-lg">Computer Engineer</span>
            </div>
          </div>
          <div className="hidden md:block">
            <NavSection />
          </div>
          <div>
            <Contact />
          </div>
        </aside>

        {/* ขวา */}
        <div className="overflow-visible">
          <section id="about" className="mt-10 mb-10">
            <Aboutme />
          </section>
          <section id="projects" className="flex flex-col gap-y-6">
            {' '}
            {/* ผลงานที่เคยทำา */}
            <Cardprops
              subtitle="2023"
              title="Building a Water Vending Machine System using Python"
              description="This project uses the Python programming language to create an automatic water vending machine, with the output displayed on the VS Code terminal. The purpose of this project is to practice using various Python commands during the first year of study."
              tags={['Python', 'Github']}
            />
            <Cardprops
              subtitle="2023-2024"
              title="Developing a Car Rental Website using C#"
              description="This project was developed using the C# programming language, focusing on the study of Object-Oriented Programming (OOP). It is a website designed for managing car rentals on a daily or weekly basis."
              tags={['C#', 'Github']}
            />
            <Cardprops
              subtitle="2024"
              title="Build a blinking light circuit"
              description="In this project, we built a blinking light circuit with different delay times for each light. We studied how to use electronic components such as resistors, transistors, and capacitors, as well as how current flows through the circuit. The result is that the lights on the left and right sides blink alternately, turning on and off at different times."
            />
            <Cardprops
              subtitle="2024"
              title="Create a LiveBot to Check the Multi-Day Weather Forecast"
              description="This project was developed using the Python programming language and Webhook technology. Users can ask questions via the LINE application about the weather conditions in their province. The LineBot retrieves data from the Meteorological Department’s API to provide accurate responses. It can display information such as rainfall amount, the probability of rain, and potential weather events like storms."
              tags={['C#', 'Github', 'Webhook']}
            />
            <Cardprops
              subtitle="2025"
              title="MovieX — Movie Ticket Booking Website"
              description="This project was developed using the React TypeScript framework, along with Tailwind CSS for styling and responsive design. The website includes both user and admin functionalities.
On the user side, users can purchase and reserve movie tickets, view showtimes, and watch movie trailers.
On the admin side, administrators can add new movies and manage showtimes."
              tags={['React', 'Tailwind', 'TypeScript', 'Radix', 'Gitub']}
            />
          </section>
          <section id="Skills">
            <Iconslanguage />
          </section>
        </div>
      </div>
    </motion.main>
  );
}
