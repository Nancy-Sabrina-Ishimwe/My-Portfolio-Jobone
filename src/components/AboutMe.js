import aboutMeImg from "../images/aboutme.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

const AboutMe = ({ name }) => {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const staggerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const paragraphVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="about">
      <div className="aboutContainer container">
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-6"
            ref={ref}
            initial={{ x: "-10vw", opacity: 0, scale: 0.5 }}
            animate={inView ? { x: 0, opacity: 1, scale: 1 } : { x: "-10vw", opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.img src={aboutMeImg} alt={name} />
          </motion.div>
          <div className="personalInfo col-12 col-lg-6">
            <motion.div className="contentContainer" variants={staggerVariants}>
              <motion.h4 variants={paragraphVariants}>Hellooo! 👋🏻</motion.h4>
              <motion.h5 variants={paragraphVariants}>I'm a passionate Software Developper willing to work for you.</motion.h5>
              <motion.div
                className="contentDescription"
                variants={staggerVariants}
                initial="initial"
                animate={inView ? "animate" : "initial"}
              >
                <motion.p variants={paragraphVariants}>
                  I’ve always been fascinated by the power of codes and the creativity that it brings which inspire, inform and
                  especially entertain many things through the solutions being delivered to the users or the problem assigned. 
                   This why I’ve dedicated my career into the work of creativity and building softwares that connect with the clients needs 
                   on a deep level. Whether I’m coding for a website, application, or a brand, my goal is always the same: to create content that satisfy the needs of my audience 
                   and leaves a lasting impression.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                  Here, I do work on  <span style={{ color: "white" }}> problem-solving </span>
                  and embrace the real-world challenges, all while relentlessly pursuing a{" "}
                  <span style={{ color: "white" }}> working environment</span> as a graduate from the Davis College/Akilah Campus. 
                  So here I am, still learning a bits of real-life, all while crafting my own success story.
                </motion.p>
                <br />
                <motion.p variants={paragraphVariants}>
                 "Be so happy that, when other people look at you, they become happy too."words from one Anonymous writer.
                  When code isn't my only focus, I'm doing culinary,Bakery and Pastry, and learning to perform well in every duties that I'm given..
                  During my free time, I do my best, seeking films and ingredients that use in improving my well standard ife of living.
                </motion.p>
              </motion.div>
              <NavLink to="/portfolio">
                <motion.button className="btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
                  <p>View Portfolio</p>
                  <div>
                    <FiArrowUpRight whileHover={{ scale: 4 }} className="arrow-icon" />
                  </div>
                </motion.button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
