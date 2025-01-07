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

export default async function TeamPage() {
  const teamWE = await getWeldcraftTeam();
  return (
    <section className="pt-16 min-h-screen">
      <div className="bg-black h-full w-full flex justify-center items-center">
        <h1 className="px-6 py-12 text-2xl sm:text-3xl md:text-4xl font-medium text-white">
          Our Teams
        </h1>
      </div>
      <div>
        <TeamSection title="WeldCraft Team" team={teamWE} />
      </div>
    </section>
  );
}

function TeamSection({ title, team }: TeamSectionProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-12 w-full px-4 sm:px-8">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-6 mt-5 mb-10">
        {team?.map((item) => (
          <div
            key={item.slug}
            className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-lg w-full sm:w-[350px] md:w-[450px] lg:w-[500px]"
          >
            <div className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] mb-4">
              <Image
                src={item.teamPhoto}
                alt={`${item.name} Photo`}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-1 text-center">
              <span className="text-base sm:text-lg md:text-xl text-black font-semibold">
                {item.name}
              </span>
              <span className="text-sm text-black">{item.title}</span>
              <span className="text-sm text-black">{item.expertise}</span>
              <a
                href={`mailto:${item.contact}`}
                className="text-sm text-blue-400 underline"
              >
                {item.contact}
              </a>
              <p className="text-sm sm:text-base text-black mt-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
