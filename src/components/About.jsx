import React from "react";
import { motion } from "framer-motion";
import { Tilt } from 'react-tilt'
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn(("rigth","spring", 0.5 * index, 0.7))}
        className="w-full items-center  green-pink-gradient p-1 rounded-20px shadow-card">
          <div options={{max: 45, scale:1, speed:450}}
            className="bg-tertiary rounded-20px py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
            <img src={icon} alt="title"  className="w-16 h-16 object-contain"/>
            <h3>
              {title}
            </h3>

          </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

      <motion.p 
        variants={fadeIn("","",0.1,1)}
        className="mt-4 justify-start text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am skilled software developer with experience in Javascript, Java and python , and expertise 
        in framework like react, next.js, node.js and three.js. I am also intrested in game development.
        And I love bringing ideas to reallity by making interactive websites.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">

        {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}

      </div>
		</>
	);
};

export default About;
