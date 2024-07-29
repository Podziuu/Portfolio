import Experiences from "@/components/Experiences";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {useTranslations} from 'next-intl';

export default function Home({params: {lang}}: any) {
  const t = useTranslations('Navbar');
  const keys = ['About', "Projects", "Approach", "Contact"];

  const navLinks = keys.map((key) => {
    return {
      name: t(`${key}.title`),
      link: t(`${key}.link`)
    }
  })

  return (
    <main className="relative bg-black-100 flex justify-center overflow-clip items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navLinks} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
