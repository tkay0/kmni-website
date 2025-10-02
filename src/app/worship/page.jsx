import Logo from "@/components/kmni-logo";
import Link from "next/link";

export default function Worship() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">

            {/* Left Side - Info (2 columns) */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              <div className="flex flex-col mb-4 gap-1">
                <Logo />
                <div className="text-3xl font-bold text-green-700">Worship With Us</div>
              </div>

              <div className="space-y-4 text-gray-700">
                <p><strong>Venue:</strong> KMNI Auditorium</p>
                <div>
                  <p><strong>Sunday Service:</strong></p>
                  <p>Sundays | 9AM | In Person and Online</p>
                </div>
                <div>
                  <p><strong>Teaching Service:</strong></p>
                  <p>Tuesdays | 6PM | In-Person</p>
                </div>
                <div>
                  <p><strong>Liberty Hour:</strong></p>
                  <p>Wednesdays | 10AM | In-Person</p>
                </div>
                <div>
                  <p><strong>Youth Service:</strong></p>
                  <p>Thursdays | 6PM | In-Person</p>
                </div>
                <div>
                  <p><strong>Miracle Service:</strong></p>
                  <p>Fridays | 6PM | In-Person</p>
                </div>
              </div>
            </div>

            {/* Right Side - Map (3 columns) */}
            <div className="lg:col-span-3 h-[400px] lg:h-[500px]">
              <iframe
                title="Church Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.293072514865!2d-0.17445282525405553!3d5.670699294310815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9ceb951bdec1%3A0x4be60f9df1752e93!2sKingdom%20Missions%20Network!5e0!3m2!1sen!2sgh!4v1759379379603!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Join Online Button - Full Width */}
          <div className="bg-gray-50 p-10 text-center">
            <Link href="https://web.facebook.com/kingdommissionnetworkint">
              <button className="bg-green-600 text-white py-3 px-8 rounded-full font-bold hover:bg-green-400 active:scale-95 active:bg-green-500 transition-colors duration-300 cursor-pointer">
                JOIN ONLINE
              </button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}