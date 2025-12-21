import RoomCard from "../components/RoomCard";

import deluxe from "../assets/deluxe.jpg";
import queen from "../assets/queen.jpg";
import single from "../assets/single.jpg";

export default function Rooms() {
  return (
    <section className="px-12 py-20 bg-[#F8F9FA] min-h-screen">
      <h2 className="text-3xl font-semibold mb-10 text-gray-800">
        Our Rooms
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RoomCard
          name="Premium Valley View"
          price="3500"
          image={deluxe}
          description="Spacious room with balcony and stunning valley view"
        />

        <RoomCard
          name="Luxury Queen Room"
          price="2800"
          image={queen}
          description="Elegant room with forest-facing windows"
        />

        <RoomCard
          name="Budget Single Room"
          price="1500"
          image={single}
          description="Ideal for solo travellers"
        />

        <RoomCard
          name="Ashwin Inn"
          price="700"
          image={deluxe}
          description="Comfortable budget stay"
        />
         <RoomCard
          name=" Noharks Inn Room"
          price="1500"
          image={single}
          description="Ideal for solo travellers"
        />
      </div>
    </section>
  );
}
