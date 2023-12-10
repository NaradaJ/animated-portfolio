import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {
    // State to manage the open/closed state
    const [open, setOpen] = useState(false);

    // Variants for animation
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <div className="course">
            {/* Animated box */}
            <motion.div
                className="box"
                variants={variants}
                initial="hidden" // Initial animation state
                animate={open ? "visible" : "hidden"} // Conditional animation based on 'open' state
                transition={{ duration: 0.5 }} // Animation duration
            >
            </motion.div>

            {/* Button to toggle the 'open' state */}
            <button onClick={() => setOpen((prev) => !prev)}>Click</button>
        </div>
    );
};

export default Test;
