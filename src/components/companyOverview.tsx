import { getAllCompanyOverview } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function CompanyOverviewSection() {
  const overview = await getAllCompanyOverview();

  return (
    <section className="px-4 md:px-24 mt-24 pb-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="relative w-full md:w-1/2 h-[280px] md:h-[500px]">
          <Image
            src="/img1.svg"
            alt="WeldCraft Welder"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:w-1/2 h-[320px] md:h-[700px]">
          <Image
            src="/img2.svg"
            alt="WeldCraft Welder"
            fill
            className="object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-semibold">WeldCraft</h1>
          {overview?.map((item) => (
            <ul key={item.slug as string} className="list-disc pl-5 mt-2">
              <li className="mt-2">
                <h4 className="text-base lg:text-sm font-semibold">
                  {item.title as string}
                </h4>
                <p className="text-sm lg:text-xs font-normal mt-1">
                  {item.description as string}
                </p>
              </li>
            </ul>
          ))}
          <div className="mt-2 mb-10">
            <span className="text-sm">
              We are a welder company that is ready to serve in any condition
              and in any terrain, ready to serve with a happy heart.
            </span>
            <Link href="/about">
              <span className="mt-4 text-sm pl-1 font-semibold">
                See more...
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
