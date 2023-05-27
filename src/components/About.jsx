import React from 'react'
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
const ServiceCard = ({ index, title, icon }) => {
    return ( <
        Tilt className = "xs:w-[250px] w-full" >
        <
        motion.div variants = {
            fadeIn("right,"
                spring " ,0.5*
                index, 0.75)
        }
        className = "w-full green-pick-gradiet p- [1 px] rounded - [20 px] shadow - card "

        >
        <
        div options = {
            {
                max: 45,
                scale: 1,
                speed: 450
            }
        }
        className = "bg-tertiary rounded-[20px]
        py - 5 px - 12 min - h - [280 px] flex justify - evenly items - center flex - col "> <
        img src = { Icon }
        alt = { title }
        className = "w-15 h-16 object-contain" / >
        <
        h3 className = "text-white text-[20px] font-bold
        text - center ">{title}</> < /
        div > < /
        motion.div > < /
        Tilt >
    )
}
const About = () => {
    return ( <
        >
        <
        motion.div variants = { textVariant() } >
        <
        p className = { styles.sectionSubText } >
        Introduction < /p> <
        h2 className = { styles.sectionHeadText } >
        Overview < /h2> < /
        motion.div > <
        motion.p variants = { fadeIn("", "", 0.1, 1) }
        className = "mt-4 text-secondary text-[17px]"
        max - w - 3 x1 leading - [30 px] >

        JUMJ Is One Of The Most Popular University Jama 'a In Ethiopia And Its Also Among The Oldest And It Has Long History ,And Had Done Great Works And Doing Now For The Musli Umma And The Country As Whole < /
        motion.p >

        <
        div className = "mt-20 flex flex-wrap gap-10" > {
            services.map((service, index) => ( <
                serviceCard key = { service.title }
                index = { index } {...service }
            ))
        } <
        /div> < / >
    )
}

export default SectionWrapper(About, "about")