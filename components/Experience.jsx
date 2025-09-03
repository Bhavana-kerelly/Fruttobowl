"use client";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    id: 1,
    title: "Subscription Plans 300ml",
    image: "/subscription-300.png", // replace with your actual image
    link: "/subscriptions/300ml",
  },
  {
    id: 2,
    title: "Subscription Plans 500ml",
    image: "/subscription-500.png",
    link: "/subscriptions/500ml",
  },
  {
    id: 3,
    title: "Next Day Extras 300ml",
    image: "/next-day-extra.png",
    link: "/extras/300ml",
  },
  {
    id: 4,
    title: "SIP & Celebrate",
    image: "/sip-celebrate.png",
    link: "/celebrate",
  },
];

export default function Experience() {
  return (
    <section className="py-12 px-6 text-center bg-[#9c8b9e]">
      {/* Heading */}
      <h2 className="text-2xl font-bold mb-2 text-[#ece7ee]">
        "Choose Your SIPURB Experience!"
      </h2>
      <p className="italic text-[#493e50] mb-10">
        "Subscriptions, Extras & Celebrations – Freshness for Every Occasion!"
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4  justify-items-center pl-40 pr-40 ">
        {experiences.map((exp) => (
          <Link key={exp.id} href={exp.link}>
            <div className="p-2 w-45 bg-white rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer w-44 h-44 flex flex-col items-center justify-center">
              <div className=" aspect-square flex items-center justify-center">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  width={140}
                  height={140}
                  className="object-contain"
                />
              </div>
              <h3 className="mt-3 text-sm font-medium">{exp.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
