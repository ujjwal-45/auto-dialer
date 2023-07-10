'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer ,textVariant } from '@/utils/motion'
import { Balancer } from 'react-wrap-balancer'

import { Yeseva_One } from 'next/font/google';

const ubuntu = Yeseva_One({ weight: ['400'], subsets: ['latin'] });


const HomePage = () => {
    return (
      <div>

        <div className="relative">
          <Image
            src="/bg_2_image.jpg"
            alt="home image"
            width={1600}
            height={400}
            quality={100}
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25}}
            className="absolute inset-0 flex flex-col items-start ml-5 mt-10 px-10 py-6  ">
            <motion.h1 variants={textVariant(0.8)} className=" text-[30px] mt-10 px-5 text-zinc-100"> <Balancer> <span className='text-teal-100 text-4xl'>Intuitive Auto Dialer for Seamless Customer Engagement</span>, revolutionizing the way you connect and build meaningful relationships!
            </Balancer></motion.h1>
          </motion.div>
        </div>
      </div>
    );
}

export default HomePage