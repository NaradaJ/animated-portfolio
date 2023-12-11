import React, { useState } from 'react';
import Links from './Links';
import Togglebutton from './Togglebutton';
import './sidebar.scss';
import { motion, spring } from 'framer-motion';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
      clipPath: 'circle(700px at 50px 50px)',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      clipPath: 'circle(30px at 50px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className={`sidebar ${open ? 'open' : ''}`} animate={open ? 'open' : 'closed'} variants={variants}>
      <div className="bg">
        <Links />
        {/* You may want to replace the next <motion.div/> with your specific content */}
        <motion.div />
        <Togglebutton setOpen={setOpen} />
      </div>
    </motion.div>
  );
};

export default Sidebar;
