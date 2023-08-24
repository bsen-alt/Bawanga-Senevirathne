import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) =>{

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark  text-light  py-3 px-6 shadow-dark  cursor-pointer absolute dark:text-dark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{scale:1.05} }
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y ,transition:{duration:1.5}}}
            transition={{duration:1.5}}
            viewport={{once:true}} //for one time animation when scroll
            >
                {name}
            </motion.div>
    )
}


const QASkill = ({name, x, y}) =>{

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-qadark  text-light  py-3 px-6 shadow-qadark  cursor-pointer absolute dark:text-qadark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-qadark xs:dark:text-light xs:font-bold'
            whileHover={{scale:1.05} }
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y ,transition:{duration:1.5}}}
            transition={{duration:1.5}}
            viewport={{once:true}} //for one time animation when scroll
            >
                {name}
            </motion.div>
    )
}


const MLSkill = ({name, x, y}) =>{

    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-mldark  text-light  py-3 px-6 shadow-mldark  cursor-pointer absolute dark:text-mldark dark:bg-light
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-mldark xs:dark:text-light xs:font-bold'
            whileHover={{scale:1.05} }
            initial={{x:0, y:0}}
            whileInView={{x:x, y:y ,transition:{duration:1.5}}}
            transition={{duration:1.5}}
            viewport={{once:true}} //for one time animation when scroll
            >
                {name}
            </motion.div>
    )
}


const SkillPro = ({img}) =>{

    return(
        <motion.div className='items-center justify-center  w-32 overflow-hidden rounded-full hover:cursor-pointer border border-black dark:border-white'
            
            >
                <motion.img
                whileHover={{scale:1.4} }
                whileInView={{transition:{duration:1.5}}}
                transition={{duration:0.4}}
                //for one time animation when scroll
                 className='bg-dark dark:bg-light' src={img}/>
            </motion.div>
    )
}





const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <h3 className='text-2xl w-full text-center mt-12'>Professional Skills</h3>
        {/* <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[70vw]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>

            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-me text-dark p-8 shadow-dark   cursor-pointer dark:text-dark dark:bg-me lg:p-6 md:p-4 xs:text-xs xs:p-2'
            whileHover={{scale:1.05}}
            >
                ME
            </motion.div>

            <Skill name="HTML" x="-25vw" y="2vw"/>
            <Skill name="CSS" x="-5vw" y="-6vw"/>
            <Skill name="JAVASCRIPT" x="20vw" y="6vw"/>
            <Skill name="ReactJS" x="-0vw" y="12vw"/>
            <Skill name="NextJS" x="-20vw" y="-15vw"/>
            <Skill name="UI Design" x="15vw" y="-12vw"/>
            <Skill name="Web Desgin" x="27vw" y="-15vw"/>
            <Skill name="Figma" x="0vw" y="-20vw"/>
            <Skill name="Firebase" x="-25vw" y="18vw"/>
            <Skill name="Tailwind CSS" x="18vw" y="18vw"/>

            <QASkill name="Collaboration" x="18vw" y="-5vw"/>
            <QASkill name="Problem Solving" x="4vw" y="-15vw"/>
            <QASkill name="Statistics" x="-27vw" y="-5vw"/>

            <MLSkill name="ML Fundamentals" x="-6vw" y="-10vw"/>
            <MLSkill name="Algorithms" x="-10vw" y="3vw"/>
            <MLSkill name="Creativity" x="30vw" y="0vw"/>
            
        </div> */}


            <div className='grid grid-cols-4 gap-x-2 gap-y-4 mt-16 px-96 mx-32 justify-center items-center'>
                <SkillPro img="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"/>
                <SkillPro img="https://miro.medium.com/v2/resize:fit:632/1*5QD8DKhOjRe-gcYjozlLNQ.png"/>
                <SkillPro img="https://th.bing.com/th/id/R.1f27d28017b7708d3f46fd8d1af4a383?rik=9XeWFvGi6xxgXw&riu=http%3a%2f%2fwww.annarpack.com%2fwp-content%2fuploads%2f2017%2f11%2freact_js.png&ehk=5orBxlR2x0NksKQKKlhMlpZMgIEZNnUsAZm%2ba7RXQbU%3d&risl=&pid=ImgRaw&r=0"/>
                <SkillPro img="https://www.drupal.org/files/project-images/nextjs-drupal.jpg"/>

                <SkillPro img="https://global-uploads.webflow.com/5e684b7990d58376cf857cf2/5edeaf0e19badb462696823e_logo-js.jpg"/>
                <SkillPro img="https://andriandev.com/wp-content/uploads/2023/03/Firebase.png"/>
                <SkillPro img="https://coralogix.com/wp-content/uploads/2018/04/Coralogix-Nodejs-integration.jpg"/>
                <SkillPro img="https://logodix.com/logo/2090013.jpg"/>

                <SkillPro img="https://brandlogos.net/wp-content/uploads/2021/11/visual-studio-code-logo.png"/>
                <SkillPro img="https://www.pngrepo.com/png/303251/512/mysql-logo.png"/>
                <SkillPro img="https://cdn-icons-png.flaticon.com/512/919/919830.png"/>
                <SkillPro img="https://andriandev.com/wp-content/uploads/2023/03/Firebase.png"/>

                <SkillPro img="https://www.researchgate.net/profile/Hamed-Baghal-Ghaffari/publication/357203295/figure/fig9/AS:1104459803426816@1640335145379/b-Plots-of-2-dimension-CPSWFs-for-k-1-c-1-n-1-e2-part_Q640.jpg"/>
                <SkillPro img="https://cdn0.iconfinder.com/data/icons/data-analytics-orchid-vol-1/256/Decision_Tree-512.png"/>
                <SkillPro img="https://res.cloudinary.com/teepublic/image/private/s--icprYYZz--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1483724016/production/designs/1051833_1.jpg"/>
                <SkillPro img="https://thumbs.dreamstime.com/b/icon-regression-return-regression-242587449.jpg"/>


            </div>

            


            <h3 className='text-2xl w-full text-center mt-12'>Personal Skills</h3>
            <div className='grid grid-cols-4 gap-x-2 gap-y-4 mt-16 px-96 mx-32 justify-center items-center'>
                <SkillPro img="https://th.bing.com/th/id/OIP.Aqf9sSlHdf1TuOJs3mLFTQHaHa?pid=ImgDet&rs=1"/>
                <SkillPro img="https://primary-careers.careersandenterprise.co.uk/sites/default/files/styles/logo_square/public/2020-08/3%20Problem%20Solving%20NS.png?itok=dh6nhvJE"/>
                <SkillPro img="https://www.dlf.pt/dfpng/maxpng/136-1364971_time-management-png.png"/>
                <SkillPro img="https://www.youth-social-action.careersandenterprise.co.uk/sites/default/files/2019-06/5a9813fa3c7b7d0001a3d3bd_7%20Leadership-p-500.png"/>
            </div>
            
    </>
  )
}

export default Skills