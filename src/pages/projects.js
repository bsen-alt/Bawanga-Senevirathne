import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon, LinkArrow } from '@/components/icons'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import projectOdessy from '../../public/images/projects/pr1-1.jpg'
import projectOil from '../../public/images/projects/hair-oil.png'
import pr5 from '../../public/images/projects/pr5.jpg'
import pr3 from '../../public/images/projects/pr3.jpg'
import gif1 from '../../public/images/projects/gif1.gif'
import gif2 from '../../public/images/projects/gif2.gif'
import gif3 from '../../public/images/projects/gif3.gif'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import { useState } from 'react'


const FramerImage = motion(Image);

const FeaturedProject = ({type,title,summary,img,link,github}) => {
    return(
        <article className='w-full flex flex-col sm:inline-block items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark shadow-2xl p-12 dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <Link href={link} target='_blank' 
            className='w-full xs:w-full cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={img} alt={title} className='w-full h-auto xs:w-full '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
            </Link>

            <div className='w-full flex flex-col items-start text-left justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                {/* <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span> */}
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl xs:text-2xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank'><GithubIcon className="w-8 dark:w-8 xs:w-10"/></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-white dark:text-dark 
                    sm:px-4 sm:text-base'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}


const DescProject = ({title,summary,img,link,github}) => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
      };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const [isHovering1, setIsHovering1] = useState(false);

    const handleMouseOver1 = () => {
        setIsHovering1(true);
      };

    const handleMouseOut1 = () => {
        setIsHovering1(false);
    };

    const [isHovering2, setIsHovering2] = useState(false);

    const handleMouseOver2 = () => {
        setIsHovering2(true);
      };

    const handleMouseOut2 = () => {
        setIsHovering2(false);
    };


    return(
        <article className='w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark shadow-2xl p-12 dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <Link href={link} target='_blank' 
            className='w-full xs:w-full cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={img} alt={title} className='w-full h-auto xs:w-full '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
            </Link>

            <div className='w-full flex flex-col items-start text-left justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                {/* <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span> */}
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl xs:text-2xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>

                
                <div className='mt-2 flex items-center gap-4'>
                    <Link href={github} target='_blank'><GithubIcon className="w-8 dark:w-8 xs:w-10"/></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-white dark:text-dark 
                    sm:px-4 sm:text-sm sm:text-center'>Visit Project</Link>
                    <div className='flex gap-3 sm:hidden'>
                        {isHovering && (
                            <Image src={gif1} alt="BawaSen" className="w-[300px] absolute mt-12 z-20 h-auto lg:hidden md:w-full"/>
                        )}
                        <p className='bg-slate-400 py-2 px-3 rounded-md text-light cursor-pointer'
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}>GIF 1</p>
                        

                        <p className='bg-slate-400 py-2 px-3 rounded-md text-light cursor-pointer'
                        onMouseOver={handleMouseOver1}
                        onMouseOut={handleMouseOut1}>GIF 2</p>
                        {isHovering1 && (
                            <Image src={gif2} alt="BawaSen" className="w-[300px] absolute mt-12 z-20 h-auto lg:hidden md:w-full"/>
                        )}

                        <p className='bg-slate-400 py-2 px-3 rounded-md text-light cursor-pointer'
                        onMouseOver={handleMouseOver2}
                        onMouseOut={handleMouseOut2}>GIF 3</p>
                        {isHovering2 && (
                            <Image src={gif3} alt="BawaSen" className="w-[300px] absolute mt-12 z-20 h-auto lg:hidden md:w-full"/>
                        )}
                        
                    </div>
                    <div>
                        <Link
                        href="/pong_rep.pdf"
                        className='bg-orange-400 py-3 px-3 rounded-md text-light font-semibold cursor-pointer'
                        download={true}
                        target='_blank'>Report
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

const OngoingProject = ({type,title,summary,img,link,github,dataset,proposal}) => {
    return(
        <article className='w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark shadow-2xl p-12 dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <Link href={link} target='_blank' 
            className='w-full xs:w-full cursor-pointer overflow-hidden rounded-lg '>
                <FramerImage src={img} alt={title} className='w-full h-auto xs:w-full '
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
            </Link>

            <div className='w-full flex flex-col items-start text-left justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                {/* <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span> */}
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl xs:text-2xl font-bold dark:text-light'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='flex gap-6'>
                    <Link href={dataset} target='_blank' className='bg-orange-500 text-light py-2 px-3 rounded-md sm:py-1 items-center text-center'>Dataset</Link>
                    <Link href={proposal} target='_blank' className='bg-pink-500 text-light py-2 px-3 rounded-md sm:py-1 items-center text-center' download={true}>Sample Proposal</Link>
                </div>
                
                {/* <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank'><GithubIcon className="w-8 dark:w-8 xs:w-10"/></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-white dark:text-dark 
                    sm:px-4 sm:text-base'>Visit Project</Link>
                </div> */}
            </div>
        </article>
    )
}




const Project = ({title,type,img,link,github}) =>{
    return(
        <article className='w-full flex flex-col items-center justify-between relative rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 rounded-br-2xl xs:p-4'>

            {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/> */}
            <Link href={link} target='_blank' 
            className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
        
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base'>Visit</Link>
                    <Link href={github} target='_blank'><GithubIcon className="w-8 dark:w-8 md:w-6"/></Link>
                    
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Bawanga Senevirathne | Projects</title>
            <meta name='description' content='any description'/>
        </Head>
        <TransitionEffect/>

        <main className='w-full mb-16 felx flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Triumphs Knowledge!"
                className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-6 sm:col-span-12'>
                        <FeaturedProject
                            title="Tour Management System"
                            summary="A system for introducing foriegners in Sri Lanka about the touring and tour sections, and to indtroduce new customize tours that suits everybody. This system also allows to book a tour (booking is in demo-mode)."
                            link="https://odessysite.web.app/"
                            type="Featured Project"
                            img={projectOdessy}
                            github="/"
                        />
                        

                    </div>

                    <div className='col-span-6 sm:col-span-12'>
                        <FeaturedProject
                                title="Social media content for SURYADIVYA HAIR OIL"
                                summary="Social media content creation for a upcomming hair oil brand in Sri Lanka - SURYADIVYA HAIR OIL. I was responsible for the creation of social media posts and graphics in the facebook page. "
                                link="https://www.facebook.com/profile.php?id=100089663672282"
                                type="Featured Project"
                                img={projectOil}
                                github="/"
                            />
                    </div>


                    <div className='col-span-6 sm:col-span-12'>
                        <DescProject
                                title="Python AI Pong game"
                                summary="Pong Game with AI using NEAT (NeuroEvolution of Augmenting Topologies) "
                                link=""
                                type=""
                                img={pr3}
                                github="https://github.com/bsen-alt/Python-pong-AI.git"
                            />
                    </div>
                </div>



                <AnimatedText text="Ongoing Projects"
                className='mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>

                <div className='grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0  mt-12'>
                    <div className='col-span-6 sm:col-span-12'>
                            <OngoingProject
                                    title="Disease Identification web application with Machine Learning"
                                    summary="Empower Yourself: Identify diseases based on symptoms. Get informed insights for better health."
                                    link=""
                                    type="Featured Project"
                                    img={pr5}
                                    github="/"
                                    dataset="https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset"
                                    proposal="/pp-p5ml.pdf"
                                />
                        </div>
                </div>
                


            </Layout>


        </main>
    </>
  )
}

export default projects