import { getAllCompanyService } from "@/utils/get-contentful-data";
import Image from "next/image";
import Link from "next/link";

export default async function CompanyServicesSection() {
  const services = await getAllCompanyService();

  return (
    <section className="px-4 md:px-24 mt-24">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold">Advanced Steel Machinery for Superior Operations</h1>
          {services?.map((item) => (
            <ul key={item.slug as string} className="list-disc pl-5 mt-2">
              <li className="mt-2">
                <h4 className="text-base md:text-lg font-semibold">
                  {item.title as string}
                </h4>
                <p className="text-sm md:text-base font-normal mt-1">
                  {item.description as string}
                </p>
              </li>
            </ul>
          ))}
          <Link href="/product">
            <button className="bg-[#414141] text-white mt-4 px-4 py-2 rounded-md font-semibold transition-transform transform hover:scale-110">
              View Product
            </button>
          </Link>
        </div>
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
          <Image
            src="/product1.svg"
            alt="product1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
          <Image
            src="/product2.svg"
            alt="product2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
          <Image
            src="/product3.svg"
            alt="product3"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
