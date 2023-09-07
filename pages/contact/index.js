// components
import Circles from "/components/Circles";
import Link from "next/link";

// icons
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

// framer
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <div className="h-[100vh] bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text */}
        <div className="flex flex-col w-full max-w-[700px] text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Entre em <span className="text-accent">contato.</span>
          </motion.h2>

          {/* Icons */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex justify-center gap-6"
          >
            <Link
              href="https://www.linkedin.com/in/paulo-roberto-128b5a254/"
              target="blank"
              passHref
            >
              <FaLinkedinIn
                size={40}
                className="hover:text-accent transition-all duration-300 cursor-pointer"
              />
            </Link>
            <Link
              href="https://github.com/pauloabrantesii"
              target="blank"
              passHref
            >
              <VscGithub
                size={40}
                className="hover:text-accent transition-all duration-300 cursor-pointer"
              />
            </Link>
            <Link
              href="https://instagram.com/paulo_abrantesii"
              target="blank"
              passHref
            >
              <FaInstagram
                size={40}
                className="hover:text-accent transition-all duration-300 cursor-pointer"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
