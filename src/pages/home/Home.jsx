import css from "./Home.module.css"
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className={css.container}>
    <motion.h1 
      className={css.heading} 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Welcome to PhoneBook!
    </motion.h1>
    <motion.p 
      className={css.paragraph} 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
     Save and manage your contacts easily and securely. Log in or
     register to start using the app.
    </motion.p>
    <motion.img
      src="https://cdn-icons-png.flaticon.com/512/3059/3059590.png"
      alt="PhoneBook Icon"
      className={css.image}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    />
    
  </div>

  );
};

export default HomePage;
