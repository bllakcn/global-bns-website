import Link from "next/link";

export const services = [
  {
    slug: "service_1",
    name: "Service 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum. Dolorem labore, eos esse delectus omnis voluptates beatae minima eaque excepturi minus obcaecati debitis, ea nisi! Expedita exercitationem facere vitae.",
  },
  {
    slug: "service_2",
    name: "Service 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum. Dolorem labore, eos esse delectus omnis voluptates beatae minima eaque excepturi minus obcaecati debitis, ea nisi! Expedita exercitationem facere vitae.",
  },
  {
    slug: "service_3",
    name: "Service 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum. Dolorem labore, eos esse delectus omnis voluptates beatae minima eaque excepturi minus obcaecati debitis, ea nisi! Expedita exercitationem facere vitae.",
  },
  {
    slug: "service_4",
    name: "Service 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum. Dolorem labore, eos esse delectus omnis voluptates beatae minima eaque excepturi minus obcaecati debitis, ea nisi! Expedita exercitationem facere vitae.",
  },
  {
    slug: "service_5",
    name: "Service 5",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum. Dolorem labore, eos esse delectus omnis voluptates beatae minima eaque excepturi minus obcaecati debitis, ea nisi! Expedita exercitationem facere vitae.",
  },
  {
    slug: "service_6",
    name: "Service 6",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum. Dolorem labore, eos esse delectus omnis voluptates beatae minima eaque excepturi minus obcaecati debitis, ea nisi! Expedita exercitationem facere vitae.",
  },
];

const ServicesSummary = () => {
  return (
    <div className="bg-primary-100 w-11/12 min-h-screen mx-auto p-12 md:p-24 rounded-t-lg z-10 drop-shadow-lg">
      <h2 className="font-extrabold text-4xl text-center py-5">Services</h2>
      <p className="p-2 max-w-4xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum.
        Dolorem labore, eos esse delectus omnis voluptates beatae minima eaque
        excepturi minus obcaecati debitis, ea nisi! Expedita exercitationem
        facere vitae.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-3 py-8 justify-center items-center">
        {services.map((service) => (
          <Link href={`/services/${service.slug}`} key={service.slug}>
            <li className="p-5 border border-primary-300 rounded-lg hover:shadow-lg transition-all">
              <h3 className="font-semibold text-xl">{service.name}</h3>
              <p className="p-1">{service.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ServicesSummary;
