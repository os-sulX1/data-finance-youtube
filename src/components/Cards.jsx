import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-2xl hover:scale-105">
          <img
            className="w-20 mx-auto bg-white"
            src={Single}
            alt="Single Image"
          />
          <h2 className="py-8 mx-auto text-2xl font-bold text-center">
            Single user
          </h2>
          <p className="text-4xl font-bold text-center">149$</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 mt-8 border-b">1 Granted User</p>
            <p className="py-2 mx-8 mt-8 border-b">Send up to 2 GB</p>
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto ml-4 my-6 px-6 py-3">
              Start Trial
            </button>
          </div>
        </div>
        {/**Second div  */}
        <div className="flex flex-col w-full p-4 my-8 duration-300 rounded-lg shadow-2xl bg-gray-50 hover:scale-105 md:my-0">
          <img
            className="w-20 mx-auto bg-transparent"
            src={Double}
            alt="Double Image"
          />
          <h2 className="py-8 mx-auto text-2xl font-bold text-center">
            Double user
          </h2>
          <p className="text-4xl font-bold text-center">149$</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 mt-8 border-b">1 Granted User</p>
            <p className="py-2 mx-8 mt-8 border-b">Send up to 2 GB</p>
            <button className="text-[#00df9a] bg-black rounded-md font-medium w-[200px] mx-auto ml-4 my-6 px-6 py-3">
              Start Trial
            </button>
          </div>
        </div>
        {/**Third  div*/}
        <div className="flex flex-col w-full p-4 my-4 duration-300 rounded-lg shadow-2xl hover:scale-105">
          <img
            className="w-20 mx-auto bg-white"
            src={Triple}
            alt="Triple Image"
          />
          <h2 className="py-8 mx-auto text-2xl font-bold text-center">
            Triple user
          </h2>
          <p className="text-4xl font-bold text-center">149$</p>
          <div className="font-medium text-center">
            <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
            <p className="py-2 mx-8 mt-8 border-b">1 Granted User</p>
            <p className="py-2 mx-8 mt-8 border-b">Send up to 2 GB</p>
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] mx-auto ml-4 my-6 px-6 py-3">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
