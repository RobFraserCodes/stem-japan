'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from "@/config/site";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white pt-16">
            <div className="px-4 py-5 md:px-8">
                <div className="max-w-lg mx-auto text-center">
                    <h2 className='uppercase font-title'>{siteConfig.name}</h2>
                    <p className="mt-4 font-thin">
                    {siteConfig.name} is an initiative aimed at enriching the educational journey of young minds from the Scottish Highlands. 
                    Your support helps us fuel curiosity, enhance learning, and shape the innovators of tomorrow. 
                    Join us as we embark on this incredible adventure from the beautiful Highlands to the Land of the Rising Sun.
                    </p>
                </div>
                <ul className="items-center justify-center mt-8 mx-auto space-y-5 sm:flex sm:space-x-4 sm:space-y-0 font-medium">
                    {
                        siteConfig.mainNav.map((item, idx) => (
                            <li className="">
                                <a key={idx} href={item.href} className='hover:text-zinc-300'>
                                    { item.title }
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className="mt-8 items-center justify-between sm:flex">
                    <div className="mt-4 sm:mt-0 font-thin text-sm">
                        <div>
                            <Image
                                alt="Logo for the Turing Scheme UK."
                                src="/Turing-Scheme-beneficiary-logo_Aligned_RGB_72_transparent_digital.png"
                                height={80}
                                width={200} />
                        </div>
                        <div>
                            &copy; 2023 {siteConfig.name}, all rights reserved. Website developed by <a href="https://robfraser.dev" className="font-semibold text-zinc-400 hover:text-zinc-300">Rob Fraser Dev</a>.
                        </div>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <ul className="flex items-center space-x-4">
                            <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                <a href="javascript:void()">
                                    svg
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
