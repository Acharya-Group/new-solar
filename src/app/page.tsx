import { Hero } from "@/components/sections/home/Hero";
import { About } from "@/components/sections/home/About";
import { WhySolar } from "@/components/sections/home/WhySolar";
import { CalculateSavings } from "@/components/sections/home/CalculateSavings";
import { PanelCompanies } from "@/components/sections/home/PanelCompanies";
import { ChooseSystem } from "@/components/sections/home/ChooseSystem";
import { WhereToUseSolar } from "@/components/sections/home/WhereToUseSolar";
import { NeoBenefits } from "@/components/sections/home/NeoBenefits";
import { FreeConsultation } from "@/components/sections/home/FreeConsultation";
import { SuccessStories } from "@/components/sections/home/SuccessStories";
import { FAQ } from "@/components/sections/home/FAQ";
import { Projects } from "@/components/sections/home/Projects";
import { GridComparison } from "@/components/sections/home/GridComparison";
import { ExpertConsultation } from "@/components/sections/home/ExpertConsultation";
import { SuccessRate } from "@/components/sections/home/SuccessRate";
import { InstallationProcess } from "@/components/sections/home/InstallationProcess";
import { Contact } from "@/components/sections/home/Contact";

export default function HomePage() {
  return (
    <>
    <Hero />                
      <SuccessRate />           
      <About />              
      <WhySolar />         
      <WhereToUseSolar />      
      <ChooseSystem />        
      <GridComparison />       
      <CalculateSavings />     
      <NeoBenefits />         
      <InstallationProcess />   
      <Projects />            
      <SuccessStories />        
      <FAQ />                 
      <FreeConsultation />     
      <ExpertConsultation />  
      <Contact />   
    </>
  );
}
