import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";



const Navbar = () => {
  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 2,
        duration: 1
        
      },
    },
  };

  const textVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="navbar">
      Navbar
      {/* <Sidebar/> */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="wrapper">
        <motion.span variants={textVariants} style={{ display: 'inline-block' }}>
          NArada Kasun
        </motion.span>
        <div className="social">
          <a href="#"><img src="/facebook.png" alt=""/></a>
          <a href="#"><img src="/instagram.png" alt=""/></a>
          <a href="#"><img src="/youtube.png" alt=""/></a>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
