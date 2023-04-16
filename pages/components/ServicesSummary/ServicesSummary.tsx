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
    {
      id: 5,
      name: "Service 5",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      name: "Service 6",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

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
          <li
            key={service.id}
            className="p-5 border border-primary-300 rounded-lg hover:shadow-lg transition-all"
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
