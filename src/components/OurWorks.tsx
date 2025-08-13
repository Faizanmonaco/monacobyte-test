import Image from "next/image";

export default function OurWorks() {
  const works = [
    {
      title: "Lead Generation AI",
      description:
        "Increased leads by 230% for a real estate client using an AI sales assistant.",
      img: "/placeholders/work1.jpg",
    },
    {
      title: "Customer Support Automation",
      description:
        "Reduced response time from 24 hours to instant replies for an e-commerce brand.",
      img: "/placeholders/work2.jpg",
    },
    {
      title: "Appointment Booking AI",
      description:
        "Handled 90% of booking requests without human involvement for a service business.",
      img: "/placeholders/work3.jpg",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-white 900">
            Our Works
          </h2>
          <p className="mt-4 text-lg text-white 600">Case Studies</p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {works.map((work, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={work.img}
                alt={work.title}
                width={500}
                height={300}
                className="object-cover w-full h-64 transform group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-colors duration-300"></div>

              {/* Text Content */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className="text-2xl font-semibold">{work.title}</h3>
                <p className="mt-2 text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}