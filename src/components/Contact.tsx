import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { SiLine } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="flex space-x-6 sm:mt-32">
      <motion.a
        href="https://www.facebook.com/suppawit.mongkonsuk.2024?locale=th_TH"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, color: '#1877F2' }}
        transition={{ duration: 0.3 }}
        className="hover:drop-shadow-[0_0_6px_#1877F2] text-xl lg:text-3xl"
      >
        <FaFacebook />
      </motion.a>

      <motion.a
        href="https://www.instagram.com/title_supp/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, color: '#E4405F' }}
        transition={{ duration: 0.3 }}
        className="hover:drop-shadow-[0_0_6px_#E4405F] text-xl lg:text-3xl"
      >
        <FaInstagram />
      </motion.a>

      <motion.a
        href="https://line.me"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, color: '#00C300' }}
        transition={{ duration: 0.3 }}
        className="hover:drop-shadow-[0_0_6px_#00C300] text-xl lg:text-3xl"
      >
        <SiLine />
      </motion.a>

      <motion.a
        href="https://github.com/Suppawit-Mongkolsuk"
        target="_blank"
        whileHover={{ scale: 1.2, color: '#f1502f' }}
        transition={{ duration: 0.3 }}
        className="hover:drop-shadow-[0_0_6px_#f1502f] text-xl lg:text-3xl"
      >
        <FaGithub />
      </motion.a>
    </div>
  );
}
