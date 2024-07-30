import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
// import { gridItems } from "@/data";
import {useTranslations} from 'next-intl'

const Grid = () => {
  const t = useTranslations('Grid');
  const keys = ['first', "second", "third", "fourth", "fifth", "sixth"];

  const gridItems = keys.map((key) => {
    return {
      id: Number(t(`${key}.id`)),
      title: t(`${key}.title`),
      description: t(`${key}.description`),
      className: t(`${key}.className`),
      imgClassName: t(`${key}.imgClassName`),
      titleClassName: t(`${key}.titleClassName`),
      img: t(`${key}.img`),
      spareImg: t(`${key}.spareImg`)
    }
  })

  return <section id="about">
    <BentoGrid className="w-full py-20">
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
            <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                buttonCta={t('buttonCta')}
                buttonAfterCta={t('buttonAfterCta')}
            />
        ))}
    </BentoGrid>
  </section>;
};

export default Grid;
