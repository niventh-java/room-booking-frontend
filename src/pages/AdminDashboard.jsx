import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [contacts, setContacts] = useState([]);
  const [roomBookings, setRoomBookings] = useState([]);

  // 🔹 Load contact enquiries
  useEffect(() => {
    fetch("http://localhost:8080/api/bookings")
      .then(res => res.json())
      .then(data => setContacts(data))
      .catch(err => console.error(err));
  }, []);

  // 🔹 Load room bookings
  useEffect(() => {
    fetch("http://localhost:8080/api/room-bookings")
      .then(res => res.json())
      .then(data => setRoomBookings(data))
      .catch(err => console.error(err));
  }, []);

  // 🔹 WhatsApp reply (common)
  const sendWhatsAppReply = (phone, message) => {
    const cleanPhone = phone.replace(/\D/g, "");
    const url = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="p-10 space-y-12">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* ================= CONTACT ENQUIRIES ================= */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Contact Enquiries</h2>

        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Type</th>
              <th className="border p-2">Message</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map(c => (
              <tr key={c.id}>
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.email}</td>
                <td className="border p-2">{c.phone}</td>
                <td className="border p-2">{c.enquiryType}</td>
                <td className="border p-2">{c.message}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() =>
                      sendWhatsAppReply(
                        c.phone,
                        `Hello ${c.name}, 🌿
Thank you for contacting Dazzling Villa.
We received your enquiry and will get back to you shortly.

— Dazzling Villa`
                      )
                    }
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Reply WhatsApp
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= ROOM BOOKINGS ================= */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Room Bookings</h2>

        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Name</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Check-In</th>
              <th className="border p-2">Check-Out</th>
              <th className="border p-2">Guest Type</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {roomBookings.map(r => (
              <tr key={r.id}>
                <td className="border p-2">{r.name}</td>
                <td className="border p-2">{r.phone}</td>
                <td className="border p-2">{r.checkIn}</td>
                <td className="border p-2">{r.checkOut}</td>
                <td className="border p-2">{r.guestType}</td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() =>
                      sendWhatsAppReply(
                        r.phone,
                        `Hello ${r.name}, 🌿
Your room booking request has been received.

Check-in: ${r.checkIn}
Check-out: ${r.checkOut}

We will confirm availability shortly.
— Dazzling Villa`
                      )
                    }
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Reply WhatsApp
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
