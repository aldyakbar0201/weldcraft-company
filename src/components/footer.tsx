import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#131448] px-6 py-12 text-white">
      <div className="container mx-auto">
        {/* Konten Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {/* WeldCraft Information */}
          <div className="flex flex-col">
            <div className=" flex gap-4">
              <Link href="/">
                <div className="relative w-10 h-10 "><Image
                  src="/weldcraft-White.svg"
                  alt="weldcraft Logo"
                  fill
                  className="object-cover"
                /></div>
              </Link>
              <h3 className="text-2xl font-semibold mb-4 text-center">WeldCraft</h3>
            </div>

            <p className="text-sm leading-relaxed">
              Our technical teams are trained in fabrication, installation,
              testing and on-site services ensure optimal value for our clients,
              fostering enduring relationships built on satisfaction and
              reliability.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:underline">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <div className="text-sm">
              <p className="mb-2">
                <span className="font-bold">Office & Marketing</span>
                <br />
                4517 Washington Ave. Manchester, Kentucky 39495
              </p>
              <p>
                <span className="font-bold">Workshop</span>
                <br />
                3891 Ranchview Dr. Richardson, California 62639
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-xl font-semibold mb-4" id="contact">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>
                📞 <a href="tel:(808)555-0111">(808) 555-0111</a>,
                <a href="tel:(208)555-0112">(208) 555-0112</a>
              </p>
              <p>
                📧
                <a href="mailto:info@weldcraft.com" className="hover:underline">
                  info@weldcraft.com
                </a>
              </p>
              <p>
                📧
                <a href="mailto:alex@weldcraft.com" className="hover:underline">
                  alex@weldcraft.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm text-neutral-300">
          <p>&copy; 2025 WeldCraft. All Rights Reserved.</p>
          <p>
            Client work and info are client property. Contact us to collaborate.
          </p>
        </div>
      </div>
    </footer>
  );
}
