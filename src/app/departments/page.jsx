import { DepartmentCardKMNI } from "@/components/department-card";

export default function Departments() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8 max-w-6xl mx-auto">
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

    </div>
  );
}