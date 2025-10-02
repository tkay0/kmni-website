import { Church, MapPin, MessageCircleMore } from "lucide-react";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 min-h-screen items-center">

      <div className="flex flex-col items-center gap-5">
        <MapPin size={80} />
        <h1 className="text-xl font-bold">Digital Address</h1>
        <p>23 Baobab St. GM-018-7423</p>
      </div>

      <div className="flex flex-col items-center gap-5">
        <Church size={80} />
        <h1 className="text-xl font-bold">Postal Adress</h1>
        <p>GP 2727, Accra, Ghana</p>
      </div>

      <div className="flex flex-col items-center gap-5">
        <MessageCircleMore size={80} />
        <h1 className="text-xl font-bold">General Enquires</h1>
        <div>
          <p>+233 24 235 4555</p>
          <p>kmnghana@gmail.com</p>
        </div>

      </div>

    </div>
  );
}