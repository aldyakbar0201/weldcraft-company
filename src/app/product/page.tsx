import TestimonialSection from "@/components/testimonial";
import Image from "next/image";

export default function ProductPage() {
  return (
    <section className="pt-16 min-h-screen">
      <div className="bg-[#F8F8F8] h-full w-full flex justify-center items-center">
        <h1 className="px-6 md:px-24 py-12 text-4xl font-medium text-gray-800">
          Our Services
        </h1>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2 text-black">
              Custom Metal Fabrication
            </h3>
            <p className="text-gray-700">
              Transforming raw materials into precision-engineered components is
              our specialty. From intricate designs to large-scale industrial
              needs, we provide tailored metal fabrication solutions that meet
              your exact specifications. Quality, strength, and durability—every
              time.
            </p>
            <h4 className="font-semibold mt-4 text-black">
              Pricing: Contact for Quote
            </h4>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2 text-black">
              Structural Welding
            </h3>
            <p className="text-gray-700">
              Whether it is commercial construction or heavy industrial
              projects, our certified welders deliver structural welding
              services you can trust. We ensure safety, stability, and precision
              in every weld, adhering to the highest industry standards.
            </p>
            <h4 className="font-semibold mt-4 text-black">
              Pricing: Contact for Quote
            </h4>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2 text-black">
              Equipment Repair and Maintenance
            </h3>
            <p className="text-gray-700">
              Keep your machinery running smoothly with our repair and
              maintenance services. From welding repairs to preventive
              maintenance, we minimize downtime and maximize efficiency.
              Reliable solutions to keep your operations on track.
            </p>
            <h4 className="font-semibold mt-4 text-black">
              Pricing: From $500
            </h4>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-12">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative w-full h-64">
            <Image
              src="/product1.svg"
              alt="Product 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/product2.svg"
              alt="Product 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-full h-64">
            <Image
              src="/product3.svg"
              alt="Product 3"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      <TestimonialSection />
    </section>
  );
}
