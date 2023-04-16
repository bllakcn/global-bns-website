import { GetStaticProps } from "next";
import { services } from "../components/ServicesSummary/ServicesSummary";
import { ServiceType } from "../types/service";

type ServiceDetailProps = {
  service: ServiceType;
};

const ServiceDetail = ({ service }: ServiceDetailProps) => {
  return (
    <div className="min-h-screen flex justify-center items-start pt-52 px-2 md:px-24">
      <main className="bg-primary-100 w-full md:px-24 rounded-t-lg shadow-lg">
        <article className="p-5">
          <h1 className="font-bold text-4xl py-5">{service.name}</h1>
          <p className=" text-lg">{service.description}</p>
          <hr className="w-full bg-primary-300 h-0.5 rounded-full my-5" />
          <p className="py-5">{service.content}</p>
        </article>
      </main>
    </div>
  );
};

export default ServiceDetail;
const paths = services.map((service) => ({ params: { slug: service.slug } }));

export const getStaticPaths = () => {
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ service: ServiceType }> = ({
  params,
}) => {
  return {
    props: {
      service: services.filter((service) => service.slug === params?.slug)[0],
    },
  };
};
