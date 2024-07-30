import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
import {useTranslations} from 'next-intl'
import { link } from "fs";

const RecentProjects = () => {
  const t = useTranslations("RecentProjects");
  const keys = ["project1", "project2"];
  const iconListKey = ["project1icons", "project2icons"];

  const projectsInfo = keys.map((key) => {
    return {
      id: Number(t(`${key}.id`)),
      title: t(`${key}.title`),
      des: t(`${key}.des`),
      img: t(`${key}.img`),
      link: t(`${key}.link`),
    }
  })

  const projectsIcons = iconListKey.map((key) => {
    return [t(`${key}.icon1`), t(`${key}.icon2`), t(`${key}.icon3`), t(`${key}.icon4`)]
  })

  const projects = projectsInfo.map((project, index) => {
    return {
      ...project,
      iconLists: projectsIcons[index]
    }
  })

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        {t('title1')}{" "}
        <span className="text-purple">{t('title2')}</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image src="/bg.png" alt="bg-img" fill={true} />
                </div>
                <Image width={464} height={300} src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{transform: `translateX(-${5 * index * 2}px)`}}
                    >
                      <Image width={48} height={48} src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">{t('cta')}</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
