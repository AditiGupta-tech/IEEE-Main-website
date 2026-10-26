// Placeholder people + photos (randomuser.me). Swap in the real team later.
// ring: purple | teal | orange   |   society: IEEE SIGNAL | WIE SIGNAL
// lit: turns the little corner LED yellow

const photo = (n) => `https://randomuser.me/api/portraits/women/${n}.jpg`;

export const team = [
  { role: "CHAIRPERSON", name: "Aarohi Mehta", society: "IEEE SIGNAL", image: photo(44), ring: "purple" },
  { role: "CHAIRPERSON", name: "Naina Kapoor", society: "WIE SIGNAL", image: photo(68), ring: "teal" },
  { role: "VICE CHAIRPERSON", name: "Tanvi Arora", society: "IEEE SIGNAL", image: photo(12), ring: "orange" },
  { role: "VICE CHAIRPERSON", name: "Ishita Rao", society: "WIE SIGNAL", image: photo(26), ring: "teal", lit: true },

  { role: "GENERAL SECRETARY", name: "Meera Sethi", society: "IEEE SIGNAL", image: photo(33), ring: "purple" },
  { role: "GENERAL SECRETARY", name: "Kavya Nair", society: "WIE SIGNAL", image: photo(55), ring: "teal" },
  { role: "TREASURER", name: "Sanya Bhatia", society: "IEEE SIGNAL", image: photo(75), ring: "purple" },
  { role: "SPONSORSHIP HEADS", name: "Diya & Rhea Malhotra", society: "WIE SIGNAL", image: photo(90), ring: "orange" },

  { role: "DESIGN HEADS", name: "Pooja, Ananya & Leela", society: "IEEE SIGNAL", image: photo(17), ring: "purple" },
  { role: "EVENT HEADS", name: "Surbhi, Tara & Neha", society: "WIE SIGNAL", image: photo(5), ring: "teal" },
  { role: "PR HEADS", name: "Mitali & Kiara Oberoi", society: "IEEE SIGNAL", image: photo(63), ring: "orange" },
  { role: "OUTREACH HEAD", name: "Radhika Soni", society: "WIE SIGNAL", image: photo(82), ring: "teal" },

  { role: "CONTENT HEAD", name: "Vaani Chopra", society: "IEEE SIGNAL", image: photo(39), ring: "purple" },
  { role: "TECHNICAL HEADS", name: "Shreya & Nandini Bose", society: "IEEE SIGNAL", image: photo(48), ring: "purple", lit: true },
  { role: "MEDIA HEAD", name: "Zoya Khan", society: "WIE SIGNAL", image: photo(21), ring: "teal" },
  { role: "MEMBERSHIP & RESEARCH HEADS", name: "Aditi & Pihu Verma", society: "WIE SIGNAL", image: photo(71), ring: "teal" },
];
