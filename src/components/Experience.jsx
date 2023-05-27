import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import { motion } from 'frammer-motion';

import 'react-vertical-timeline-component/style.
min.css ';
import { styles } from "../styles";
import { experiences } from "../constants";
import { Sectionwrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) = > ( <
    VerticalTimelineElement contentStyle = {
        { background: '#1d1836', color: #fff }
    }
    contentArrayStyle = {
        { borderRight: '7px solid #232631' }
    }
    date = { experience.date }
    iconStyle = {
        { background: experience.iconBG }
    }
    icon = { <
        div className = "flex justify-content
        items - center w - full h - full "> <
        img
        src = { experience.icon }
        alt = { experience.company_name }
        className = "w-[60%] h-[60%]
        object - contain " / > < /
        div >
    } >
    <
    div >
    <
    h3 className = "text-white text-[24px]
    font - bold ">{experience.title}</h3> <
    p className = "text-secondary text-[16px] 
    font - semibold " style={{margin:0}}> { experience.company_name } < /p> < /
    div >

    <
    ul className = "mt-s list-disc ml-s space-y-2" > {
        experience.points.map((point, index) => ( <
            li key = { `experience-point-${index}` }
            className = "text-white-100 text-[14px]
            pl - 1 tracking - wider "> { point } < /
            li >

        ))
    } <
    /ul>

    <
    /    VerticalTimelineElement >
)

const Experience = () => {
        return ( < >
            <
            motion.div variants = { textVariant() } >
            <
            p className = { styles.sectionSubText } >
            What I have done so far < /p> <
            h2 className = { styles.sectionHeadText } >
            Work Experience. < /h2>  < /
            motion.div >
            <
            div className = "mt-20 flex flex-col" >
            <
            VerticalTimeLine > {
                experiences.map {
                    (experience, index) => ( <
                        ExperienceCard key = { index }
                        experience = { experience }
                        />
                    )
                } <
                /VerticalTimeLine>

                <
                /div> < / >
            )
        }

        export default SectionWrapper(Experience, "work")