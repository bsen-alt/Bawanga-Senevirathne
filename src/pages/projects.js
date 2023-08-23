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
import pr6 from '../../public/images/projects/pr6.png'
import pr from '../../public/images/projects/pr.png'
import pr7 from '../../public/images/projects/pr7.png'
import pr3 from '../../public/images/projects/pr3.jpg'
import gif1 from '../../public/images/projects/gif1.gif'
import gif2 from '../../public/images/projects/gif2.gif'
import gif3 from '../../public/images/projects/gif3.gif'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
import { useState } from 'react'


const FramerImage = motion(Image);

const Project = ({img,title,desc,stack,link,github,no_link,tag}) =>{
    return(
        <article className='w-full flex sm:flex-col items-center justify-between bg-light dark:bg-dark  mt-24 sm:mt-6 border border-solid border-dark dark:border-light px-4 py-4 sm:px-2 sm:py-3 rounded-2xl'>

{/* border border-solid border-dark dark:border-light shadow-2xl*/}
            {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/> */}
            <Link href={link} target='_blank' 
            className='w-full cursor-pointer overflow-hidden rounded-xl'>
                <FramerImage src={img} alt={title} className='w-full'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between px-8 sm:px-2'>
                <div className='w-full flex sm:flex-col items-center justify-between'>
                    <Link href={link} target='_blank' className='sm:mt-2'>
                        <h2 className='text-2xl sm:text-xl font-bold'>{title}</h2>
                    </Link>
                    <p className='bg-dark text-light px-2 py-1 rounded-lg text-sm dark:bg-light dark:text-dark my-2'>{tag}</p>
                </div>
                <p className='sm:text-sm'>{desc}</p>
                <span className='text-primary dark:text-primaryDark font-bold mt-4 sm:text-sm'>{stack}</span>
                
                <div className='flex gap-4 font-semibold mt-4'>
                    <Link href={link} target='_blank' className='border border-solid border-dark dark:border-light px-4 py-2 rounded-lg'> Visit</Link>
                    <Link href={github} target='_blank' className='flex border border-solid border-dark dark:border-light px-4 py-2 rounded-lg'><GithubIcon className="text-2xl"/>&nbsp;Source</Link>
                    <p className='text-sm font-light text-red-800'>{no_link}</p>
                </div>
            </div>
        </article>
    )
}


const ProjectR = ({img,title,desc,stack,link,github,no_link,tag}) =>{
    return(
        <article className='w-full flex sm:flex-col items-center justify-between   bg-light dark:bg-dark  mt-24 border border-solid border-dark dark:border-light px-4 py-4 sm:px-2 sm:py-3 rounded-2xl'>

{/* border border-solid border-dark dark:border-light shadow-2xl*/}
            {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/> */}
            <div className='w-full flex flex-col items-start justify-between px-8 sm:px-2'>
            <div className='w-full flex sm:flex-col items-center justify-between'>
                    <Link href={link} target='_blank' className='sm:mt-2'>
                        <h2 className='text-2xl font-bold sm:text-xl'>{title}</h2>
                    </Link>
                    <p className='bg-dark text-light px-2 py-1 rounded-lg text-sm dark:bg-light dark:text-dark my-2'>{tag}</p>
                </div>
                <p className='sm:text-sm'>{desc}</p>
                <span className='text-primary dark:text-primaryDark font-bold mt-4 sm:text-sm'>{stack}</span>
                
                <div className='flex sm:flex-col gap-4 font-semibold mt-4 items-center'>
                    <div className='flex gap-4'>
                        <Link href={link} target='_blank' className='border border-solid border-dark dark:border-light px-4 py-2 rounded-lg'> Visit</Link>
                        <Link href={github} target='_blank' className='flex border border-solid border-dark dark:border-light px-4 py-2 rounded-lg'><GithubIcon className="text-2xl"/>&nbsp;Source</Link>
                    </div>
                    <p className='text-sm font-light text-red-800 dark:text-red-300 sm:my-2'>{no_link}</p>
                </div>
            </div>

            <Link href={link} target='_blank' 
            className='w-full cursor-pointer overflow-hidden rounded-xl'>
                <FramerImage src={img} alt={title} className='w-full'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
            </Link>

            
        </article>
    )
}

const ProjectOng = ({img,title,desc,stack,tag,report,dataset}) =>{
    return(
        <article className='w-full flex sm:flex-col items-center justify-between   bg-light dark:bg-dark  mt-24 border-solid border border-dark dark:border-light px-4 py-4 sm:px-2 sm:py-3 rounded-2xl'>

{/* border border-solid border-dark dark:border-light shadow-2xl*/}
            {/* <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/> */}
            <Link href={""} target='_blank' 
            className='w-full cursor-pointer overflow-hidden rounded-xl'>
                <FramerImage src={img} alt={title} className='w-full'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"/>
            </Link>

            <div className='w-full flex flex-col items-start justify-between px-8 sm:px-2'>
                <div className='w-full flex sm:flex-col items-center justify-between gap-4'>
                    <h2 className='text-2xl font-bold sm:mt-2 sm:text-xl'>{title}</h2>
                    <div className='w-full flex  items-center justify-between'>
                        <p className='bg-dark text-light px-2 py-1 rounded-lg text-sm dark:bg-light dark:text-dark my-2'>{tag}</p>
                    </div>
                </div>
                <p className='sm:text-sm'>{desc}</p>
                <span className='text-primary dark:text-primaryDark font-bold mt-4 sm:text-sm'>{stack}</span>
                
                <div className='flex gap-4 font-semibold mt-4'>
                    {/* <Link href={link} target='_blank' className='border border-solid border-dark dark:border-light px-4 py-2 rounded-lg'> Report</Link> */}
                    <Link href={report} target='_blank' className='border border-solid border-dark dark:border-light px-4 py-2 rounded-lg sm:py-1 items-center text-center' download={true}>Proposal</Link>
                    <Link href={dataset} target='_blank' className='border border-solid border-dark dark:border-light px-4 py-2 rounded-lg sm:py-1 items-center text-center'>Dataset</Link>
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

                <div className=' gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 px-72 sm:px-2'>

                    <ProjectR
                            title="Bawanga Senevirathne - portfolio"
                            desc="This is my own portfolio 🤩"
                            link="/#"
                            stack="NextJS ⋅ Vercel ⋅ Framer Motion ⋅ Tailwind"
                            img={pr}
                            github="/"
                            tag="Web.Dev."
                            no_link="/"
                        />

                    <Project
                            title="OdessyLanka"
                            desc="A system for introducing foriegners in Sri Lanka about the touring and tour sections, and to indtroduce new customize tours that suits everybody. This system also allows to book a tour (booking is in demo-mode)."
                            link="https://odessysite.web.app/"
                            stack="React ⋅ Tailwind ⋅ Redux ⋅ Firebase ⋅ Stripe ⋅ Vite"
                            img={projectOdessy}
                            github="/"
                            tag="Web.Dev."
                        />

                    <ProjectR
                            title="Suryadivya"
                            desc="Social media content creation for a upcomming hair oil brand in Sri Lanka - SURYADIVYA HAIR OIL. I was responsible for the creation of social media posts and graphics in the facebook page."
                            link="https://www.facebook.com/profile.php?id=100089663672282"
                            stack="Adobe Photoshop ⋅ Illustrator ⋅ Vector graphics ⋅ creative Design"
                            img={projectOil}
                            github="/"
                            tag="Desgin"
                            no_link="No source code available"
                        />

                    <Project
                            title="Sentiment Analysis  Web application"
                            desc="This application demonstrates the sentiment analysis of input texts from user, and to analyze the polarity and subjectivity to be able to determine if the input is positive, negative or neutral, using technologies such as vaderSentiment, Streamlit, pandas, altair and textBlob"
                            link="https://sentiment-analysis-text-bawanga.streamlit.app/"
                            stack="Python ⋅ Streamlit ⋅ Vader ⋅ Pandas ⋅ Altair"
                            img={pr7}
                            github="https://github.com/bsen-alt/Sentiment-analysis-web-app-E.git"
                            tag="ML"
                        />


                    <ProjectR
                            title="Dataset analyze and Classifier app (Python)"
                            desc="xplore different Datasets and Classifiers with Streamlit and Scikit-learn. This project demonstrates how python based machine learning projects can be built into web applications with the functionality"
                            link="https://ml-app-cls-data-bawanga.streamlit.app/"
                            stack="Python ⋅ Streamlit ⋅ Scikit-learn ⋅ Matplotlib ⋅ Numpy"
                            img={pr6}
                            github="https://github.com/bsen-alt/Streamlit-App-Learn.git"
                            tag="ML"
                        />


                    <Project
                            title="Python AI Pong game"
                            desc="Pong Game with AI using NEAT (NeuroEvolution of Augmenting Topologies)"
                            link=""
                            stack="Python ⋅ NEAT ⋅ Pygame ⋅ Pickle"
                            img={gif1}
                            github="https://github.com/bsen-alt/Python-pong-AI.git"
                            tag="ML"
                        />
                </div>



                <AnimatedText text="Ongoing Projects"
                className='mt-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl '/>

                <div className='px-72 sm:px-2'>
                    <ProjectOng
                            title="MediSynth"
                            desc="Disease Identification web application with Machine Learning"
                            stack="Python ⋅ Kaggle "
                            img={pr5}
                            github=""
                            tag="ML"
                            report="/pp-p5ml.pdf"
                            dataset="https://www.kaggle.com/datasets/itachi9604/disease-symptom-description-dataset"
                        />
                </div>         

            </Layout>


        </main>
    </>
  )
}

export default projects