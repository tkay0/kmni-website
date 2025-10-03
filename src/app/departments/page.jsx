import { DepartmentCardKMNI } from "@/components/department-card";

export default function Departments() {
  return (
    <>
      <h1 className="text-green-700 text-4xl md:text-5xl font-bold py-10 flex justify-center">DEPARTMENTS</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto px-8">
        <DepartmentCardKMNI
          image="/choir.jpg"
          title="Choir"
          description="Leading the body of Christ in uplifting moments of worship and praise."
        />
        <DepartmentCardKMNI
          image="/usher2.jpg"
          title="Protocol & Ushers"
          description="Spirit filled Ushers and Protocol team that ensures a welcoming and orderly environment for all attendees."
        />
        <DepartmentCardKMNI
          image="/media.jpg"
          title="Media"
          description="Capturing the glorious moments of our services and events through photography and videography."
        />
        <DepartmentCardKMNI
          image="/sound.jpg"
          title="Technical"
          description="Mixing sound to create a spirit-filled atmosphere."
        />
        <DepartmentCardKMNI
          image="/war.jpg"
          title="Prayer Warriors"
          description="Making tremendous power available, dynamic in its working, through prayer."
        />
        <DepartmentCardKMNI
          image="/women.jpg"
          title="Women's Ministry"
          description="Vibrant women impacting lives through faith, fellowship, and service."
        />
        <DepartmentCardKMNI
          image="/children.jpg"
          title="Children's Ministry"
          description="Nurturing young hearts and minds in the love of Christ."
        />
        <DepartmentCardKMNI
          image="/youth-pic.jpg"
          title="Youth Ministry"
          description="Empowering the next generation to live boldly for Christ."
        />
        <DepartmentCardKMNI
          image="/welfare.jpg"
          title="Welfare Department"
          description="Caring for the needs of our church family and community."
        />
      </div>
    </>

  );
}