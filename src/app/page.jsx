import { ServiceCard } from "@/components/service-card";
import { Quote, } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/pastors-pic.jpg)' }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 z-10" />

        {/* Hero Content - centered and above overlay */}
        <div className="relative z-20 flex items-center justify-center h-full px-4 pt-20">
          <div className="text-center text-white max-w-5xl">
            <h1 className="mb-6 text-4xl lg:text-6xl font-bold tracking-wide">
              KINGDOM MISSION NETWORK INTERNATIONAL
            </h1>
            <h2 className="mb-5 text-xl lg:text-4xl font-semibold">
              Welcome Home
            </h2>
          </div>
        </div>
      </div>

      {/* Impacting Lives Section */}
      <div className="bg-gradient-to-br from-green-500 to-green-900 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <Quote className="w-32 h-32 text-white fill-white/80" />
          <h2 className="text-4xl lg:text-5xl font-bold text-left mb-8 text-white mt-5">IMPACTING LIVES, RAISING CHAMPIONS!</h2>
          <div className="prose prose-lg mx-auto text-white/90 text-left max-w-none">
            <p className="mb-6 text-lg font-medium">
              At Kingdom Mission Network International, you learn more than just the letters of the Word; We are dedicated to imparting and impacting you by the Spirit of the Word
            </p>
          </div>
        </div>
      </div>

      {/* Pastor Section */}
      <div className="bg-base-200 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <Image
              src="/daddy-photo.jpg"
              alt="Head Pastor"
              height={400}
              width={400}
              className="object-contain rounded-xl shadow-2xl shadow-black"
            />
            <div>
              <h1 className="text-3xl lg:text-5xl font-bold mb-6">General Overseer,<br /> Kingdom Missions Network International</h1>
              <p className="text-lg max-w-3xl">
                Rev. Gideon Agyemang Osei is a seasoned minister, author, and the visionary founder of Kingdom Mission Network International. With over two decades of ministry experience, he is passionate about church planting, discipleship, and raising leaders for kingdom advancement. Under his dynamic leadership, KMNI continues to transform lives and communities across nations through the power of the Gospel.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Encounter Jesus Section */}
      <div className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-left mb-8 mt-5">Encounter Jesus!</h2>
          <div className="prose prose-lg mx-auto text-left max-w-none">
            <p className="mb-6 text-lg">
              Kingdom Mission Network International is a place of the word, love, and power. You can join us to worship in person or online via our Facebook Channel. Click the button below to get assistance.
            </p>
            <Link href="/worship">
              <button className="rounded bg-green-700 px-6 py-2 text-white cursor-pointer hover:bg-green-400 active:bg-green-600 transition-all duration-200 ease-in-out active:scale-95">
                WORSHIP WITH US
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-100 py-20 px-4">  {/* Added px-4 here */}
        <div className="container mx-auto max-w-7xl">  {/* Changed to max-w-7xl for better grid */}
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
            Our Weekly Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Sunday Service"
              image="/preaching.jpg"
              time="8:00 AM"
              description="Join us for our Sunday service."
            />
            <ServiceCard
              title="Tuesday Teaching Service"
              image="/service-photo.jpg"
              time="6:00 PM"
              description="Dive deep into God's Word and grow in faith."
            />
            <ServiceCard
              title="Wednesday Liberty Hour"
              image="/warfare.png"
              time="10:00 AM"
              description="Intense Prayer Session."
            />
            <ServiceCard
              title="Thursday Youth Service"
              image="/praise.jpg"
              time="6:00 PM"
              description="Empowering the next Generation."
            />
            <ServiceCard
              title="Friday Miracle Service"
              image="/jake.png"
              time="6:00 PM"
              description="Experience God's divine presence."
            />
          </div>
        </div>
      </div>

      {/* Department Section */}
      <div className="bg-gradient-to-br from-yellow-500 to-yellow-700 px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-8 text-white mt-5">Join A Department</h2>
          <div className="prose prose-lg mx-auto text-white/90 text-center max-w-none">
            <p className="mb-6 text-lg font-medium">
              There’s a place for you to serve in God’s house. Join one of several service departments and join us as helpers of the work of God.
            </p>
            <Link href="/departments">
              <button className="rounded bg-white px-6 py-2 text-black cursor-pointer hover:opacity-90 active:opacity-75 transition-all duration-200 ease-in-out active:scale-95">
                JOIN A DEPARTMENT
              </button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}