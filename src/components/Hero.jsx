import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputerCanvas } from './canvas';
const Hero = () => {
    return ( <
        section className = "relativew-full h-screen mx-auto" >
        <
        div className = { `${styles.paddingX}
        absolute inset-0 top-[120px] max-7x1
         mx-auto flex flex-row items-start gap-5` } >
        <
        div className = "flex flex-col justify-center
        items - center mt - 5 ">  <
        div className = "w-5 h-5 rounded-full bg - [#915eff]" / >
        <
        div className = "w-1 sm:h-80 h-40 violet-gradient" / >

        <
        div >
        <
        h1 className = { `${styles.heroHeadText} text-white` } > Hi, I 'm <span className="text-[#915eff]">Anamart</span></h1>  <
        p className = { `${styles.heroSubText} mt-2 text-white-100` } > I developed 3 D visuals, user < br className = "sm-block hidden" / > interfaces and web applications < /p> < /
        div >

        <
        /div>  < /
        div >
        <
        ComputerCanvas / >
        <
        div className = "absolute xs-buttom-10 bottom - 32 w - full flex justify - center items - center " > < a href = "#about" >
        <
        div className = "w-[35px] h-[64px]
        rounded - 3 x1 border - 4 border - secondary flex justify - center items - start p - 2 "> 

        <
        motion.dev animate = {
            { y: { 0, 24, 0 } }
        }
        transition = {
            {
                duration: 1.5,
                repeat: infinity,
                repeatType: 'loop'
            }
        }
        className = "w-3 h-3 rounded-full 
        bg - secondary mb - 1 " / >

        <
        /div> < /
        a >


        <
        /div> < /
        section >
    )
}

export default Hero