import Logo from "@/components/kmni-logo";
import MessageCard from "@/components/message-card";
import Link from "next/link";

export default function Messages() {
  return (
    <>
      <div className="flex flex-col items-center py-5">
        <p className="text-green-700 text-4xl md:text-5xl font-bold flex justify-center">MESSAGES</p>
        <p className="text-center max-w-2xl mt-5">Listen to powerful teachings from our Man of God, Rev Gideon Agyemang Osei on topics such as Spiritual Warfare, Prayer, Christian Living, Faith, Righteousness, Love and More</p>
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl px-10">
        <MessageCard
          title="Signs of the end times"
          message="Explore the biblical signs indicating the end times and how to prepare spiritually for these events."
        />
        <MessageCard
          title="Faith has no reverse gear"
          message="Learn how to maintain unwavering faith in God, even in challenging circumstances, and move forward in your spiritual journey."
        />
        <MessageCard
          title="Altars"
          message="Discover the significance of altars in your spiritual journey and how to build a strong foundation with God."
        />
        <MessageCard
          title="The will of God"
          message="Understand how to discern and follow God's will in your life for a fulfilling spiritual walk."
        />
        <MessageCard
          title="Breaking the Power of Delay"
          message="Learn strategies to overcome delays in your life and move forward with purpose and determination."
        />
        <MessageCard
          title="The Mystery of the 9th month"
          message="Uncover the spiritual significance of the 9th month and how to position yourself for breakthroughs and blessings."
        />
      </div>
      <Link href="https://web.facebook.com/kingdommissionnetworkint" className="flex justify-center my-10">
        <button className="bg-green-600 text-white py-3 px-8 rounded-full font-bold hover:bg-green-400 active:scale-95 active:bg-green-500 transition-colors duration-300 cursor-pointer">
          MORE MESSAGES
        </button>
      </Link>

    </>
  );
}