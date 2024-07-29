import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";
import {useTranslations} from 'next-intl'

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className="w-full mb-[100px] md:mb-7 pb-10 " id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={1920}
          height={1080}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[50vw]">
          {t('title1')} <span className="text-purple">{t('accent')}</span> {t('title2')}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {t('cta')}
        </p>
        <a href="mailto:bartekpodemski@gmail.com">
          <MagicButton
            title={t('button')}
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6 md:gap-0">
        <p className="md:text-base test-sm md:font-normal font-light">
          Copyright © 2024 Bartosz
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map(({ id, img, link }) => (
            <a
              href={link}
              key={id}
              className="w-10 h-10 flex justify-center items-center cursor-pointer backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              target="_blank"
            >
              <Image src={img} alt={id} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
