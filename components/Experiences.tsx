import React from "react";
import { Button } from "./ui/MovingBorders";
import {useTranslations} from 'next-intl'

const Experiences = () => {
  const t = useTranslations("Experiences");
  const keys = ["experience1", "experience2"];

  const workExperience = keys.map((key) => {
    return {
      id: Number(t(`${key}.id`)),
      thumbnail: t(`${key}.thumbnail`),
      title: t(`${key}.title`),
      desc: t(`${key}.desc`),
    }
  })

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        {t("title1")} <span className="text-purple">{t("title2")}</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map(({ id, thumbnail, title, desc }) => (
          <Button
            key={id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={thumbnail}
                alt={thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">{desc}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
