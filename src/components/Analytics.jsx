import Laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className="w-full px-4 py-16 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="Laptop photo"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl">
            {" "}
            Mange Sata Analytics Centrally{" "}
          </h1>
          <p className="text-[#00df9a] font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            nesciunt, consequuntur excepturi, maxime doloribus repudiandae at,
            eius perspiciatis velit beatae aperiam. Eligendi a explicabo error
            dolore maxime, id at nulla.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0">
            Get Started 
          </button>
        </div>
      </div>
    </div>
  );
};
 

export default Analytics;
