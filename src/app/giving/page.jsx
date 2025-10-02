import Image from "next/image";

export default function Giving() {
  return (
    <div>
      <p className="text-center text-black pt-20 font-semi-bold text-2xl md:text-3xl">THANK YOU FOR YOUR SUPPORT!</p>
      <p className="text-center text-green-600 pt-5 pb-15 font-bold text-4xl md:text-4xl">ELECTRONIC GIVING OPTIONS</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-x-10 gap-y-6">
        <div className="flex flex-col text-green-600 font-semibold items-center justify-center">
          <Image
            src="/momo.jpeg"
            width={200}
            height={200}
            alt="Mobile Money"
          />
          <p>MOBILE MONEY NUMBER</p>
          <p>0538858883</p>
        </div>

        <div className="flex flex-col text-green-600 font-semibold items-center justify-center">
          <Image
            src="/gt-bank.jpeg"
            width={200}
            height={200}
            alt="Mobile Money"
          />
          <p>Bank: <span className="font-bold">GT Bank</span></p>
          <p>Bank transfer: <span className="font-bold">Kmni</span></p>
          <p>Account number: <span className="font-bold">2222222222</span></p>
          <p>Branch: <span className="font-bold">Madina</span></p>

        </div>

      </div>

    </div>


  );
}