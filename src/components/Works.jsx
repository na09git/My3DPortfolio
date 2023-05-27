import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const Projects = ((inedx, name, description,
    tags, image, source_code_link)) => {
    return ( <
        motion.div variants = {
            fadeIn("up", "spring",
                index * 0.5, 0.75)
        } >
        <
        Tilt option = {
            {
                max: 45,
                scale: 1,
                speed: 450
            }
        }
        className = "bg-tertiary p-5 rounded-2xl sm: w - [360 px] w - full " >
        <
        div className = "relative w-full h-[230px]" >
        <
        img src = { image }
        alt = { name }
        className = "w-full h-full object-cover rounded-2xl" /
        >
        <
        div className = "absolute inset-0 flex 
        justify - end m - 3 card - img_hover "> <
        div onclick = {
            () => window.open(source_code_link, "_blank")
        }
        className - "black-gradient w-10 h-10 
        ruonded - full items - center cursor - pointer " > <
        img src = { github }
        alt = "github"; className = "w-1/2 h-1/2
        object - contain " / > < /
        div > < /
        div > < /
        div >


        <
        div className = "mt-5" >
        <
        h3 className = "text-white font-bold text- [24 px]
        "> {name}
    } < /h3> <
    p className = "mt-2 text-secondary text- [14 px]
    "> { description } < /p> < /
    div >
        <
        div className = "mt-4 flex flex-wrap gap-2" > {
            tags.map(() => ( <
                p key = { tag.name }
                className = { `text-[14px] ${tag.color}` } > #{ tag.name } <
                /p>
            ))
        } <
        /div> < /
    Tilt > < /
    motion.div >
)
}

const Works = () => {
    return ( <
        >
        <
        motion.div variants = { textVariant() } >
        <
        p className = { styles.sectionSubText } >
        My Work < /p> <
        h2 className = { styles.sectionHeadText } >
        Project. < /h2>  < /
        motion.div >
        <
        div className = "w-full flex" >
        <
        motion.p variants = { fadeIn("", "", 0.1, 1) }
        className = "mt-3 text-secondary text- [17 px] max - w - 3 xl leading - [30 px]" >
        JUMJ Is One Of The Most Popular University Jama 'a In Ethiopia And Its Also Among The Oldest And It Has Long History ,And Had Done Great Works And Doing Now For The Musli Umma And The Country As Whole 

        <
        /motion.p> < /
        div >

        <
        div className = "mt-20 flex-wrap gap-7" > {
            projects.map((project, index) => ( <
                projectCard key = { `project-${index}` }
                index = { index } {.. / project }
                />
            ))
        } <
        /div> < / >

    )
}

export default Works