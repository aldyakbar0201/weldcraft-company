import { getWeldcraftTeam } from "@/utils/get-contentful-data";
import Image from "next/image";

interface TeamMember {
  name: string;
  slug: string;
  title: string;
  expertise: string;
  contact: string;
  description: string;
  teamPhoto: string;
}

interface TeamSectionProps {
  title: string;
  team?: TeamMember[];
}

export default async function AboutPage() {
  const teamWE = await getWeldcraftTeam();
  return (
    <section className="pt-16 min-h-screen">
      <div className="bg-[#F8F8F8] h-full flex justify-center items-center">
        <h1 className="px-6 py-12 text-4xl font-semibold text-center text-gray-800">
          About WeldCraft Company
        </h1>
      </div>

      <div className="px-6 md:px-24 flex flex-col justify-center items-center mt-12 mb-10">
        <div className="flex flex-col gap-5 w-full max-w-3xl text-center">
          <p className="text-lg text-white">
            For over 9 years, WeldCraft Company has been at the forefront of the
            welding and metal fabrication industry, dedicated to delivering
            precision, strength, and innovation in every project. We specialize
            in structural welding, custom fabrication, and repair services,
            tailored to meet the unique demands of our clients.
          </p>
          <p className="text-lg text-text-white">
            Our mission is to build with integrity, ensuring that every weld,
            cut, and finish exceeds expectations. With a passionate team of
            certified welders and craftsmen, we are committed to creating
            durable, high-quality solutions that stand the test of time.
          </p>
          <span className="text-blue-500 font-semibold">
            &quot;Since 2018, WeldCraft Company has successfully completed over
            100 projects, serving industries of all sizes and scopes!&quot;
          </span>
          <p className="text-lg text-text-white">
            From large-scale industrial structures to intricate custom designs,
            our expertise enables us to tackle complex challenges with precision
            and reliability. At WeldCraft, we embrace the latest technologies
            and industry best practices to deliver exceptional craftsmanship
            while prioritizing safety and efficiency. We are proud to be a
            trusted partner in bringing your vision to life, transforming raw
            materials into finished masterpieces. Let WeldCraft Company join you
            in building a future of strength, innovation, and unparalleled
            quality. Together, we forge excellence!
          </p>
        </div>

        <TeamSection title="WeldCraft Team" team={teamWE} />

        <div className="flex flex-col mt-12 justify-center items-center w-full max-w-3xl text-center">
          <h1 className="px-6 py-12 text-4xl font-medium text-white">
            WeldCraft Company
          </h1>
          <p className="text-lg text-white">
            At WeldCraft Company, we foster a culture rooted in craftsmanship,
            innovation, and teamwork. Our crew shares a deep passion for
            precision and quality, driving our mission to deliver exceptional
            welding and metal fabrication solutions that stand the test of time.
            <br />
            <br />
            We believe in empowering our team through ongoing training,
            certification programs, and opportunities for professional growth.
            Our open and collaborative environment encourages creativity,
            problem-solving, and the exchange of expertise, ensuring every voice
            contributes to our collective success.
            <br />
            <br />
            Safety and work-life balance are core to our values; we prioritize
            creating a supportive workplace where our team can excel both on and
            off the job. At WeldCraft Company, we don’t just weld metals; we
            forge strong connections, build lasting legacies, and cultivate a
            community committed to excellence, respect, and a shared vision for
            the future
          </p>
        </div>
      </div>
    </section>
  );
}

function TeamSection({ title, team }: TeamSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-12 w-full">
      <h2 className="mt-12 text-2xl font-semibold">{title}</h2>
      <div className="flex flex-wrap justify-center gap-10 mt-5">
        {team?.length ? (
          team.map((item) => (
            <div
              key={item.slug}
              className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg w-[300px]"
            >
              <div className="relative w-[100px] h-[100px] mb-4">
                <Image
                  src={item.teamPhoto}
                  alt="Team Photo"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <span className="text-xl font-semibold">{item.name}</span>
              <span className="text-sm text-gray-600">{item.title}</span>
              <p className="text-base text-gray-700">{item.description}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No team members available.</p>
        )}
      </div>
    </div>
  );
}
