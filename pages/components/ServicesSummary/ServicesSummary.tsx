const ServicesSummary = () => {
  const services = [
    {
      id: 1,
      name: "Service 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Service 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Service 3",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      name: "Service 4",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="">
      <h2 className="font-extrabold text-3xl text-center py-5">Services</h2>
      <p className="p-2 max-w-4xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum.
        Dolorem labore, eos esse delectus omnis voluptates beatae minima eaque
        excepturi minus obcaecati debitis, ea nisi! Expedita exercitationem
        facere vitae.
      </p>
      <ul className="flex flex-wrap flex-col sm:flex-row gap-3 py-8 justify-center items-center">
        {services.map((service) => (
          <li
            key={service.id}
            className="p-5 border border-primary-300 rounded-lg shadow-lg hover:shadow-none"
          >
            <h3 className="font-semibold text-xl">{service.name}</h3>
            <p className="p-1">{service.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesSummary;
