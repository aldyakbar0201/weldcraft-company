
import CompanyOverviewSection from "@/components/companyOverview";
import CompanyServicesSection from "@/components/companyServices";
import HeroSection from "@/components/hero";
import OurCustomerSection from "@/components/ourCustomer";
import TestimonialSection from "@/components/testimonial";

export default function Home() {
  return (
    <section>
      <HeroSection />
     <CompanyOverviewSection/>
     <CompanyServicesSection/>
     <OurCustomerSection/>
     <TestimonialSection/>
    </section>
  );
}

