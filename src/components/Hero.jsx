import { useTypewriter ,Cursor } from 'react-simple-typewriter'
const Hero = () => {
  const [text] = useTypewriter({
    words: ['BTC', 'BTB', 'SASS'],
    loop: {},
    typeSpeed: 120,
    
  })
  return (
    <div className="text-white border border-red-200">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="text-4xl font-bold md:text-7xl md:py-6 sm:text-6xl">
          Grow with data.
        </h1>
        <div className="">
          <p className="text-xl font-bold md:text-5xl sm:text-4xl">
            Fast ,flexible financing for {text}
            <span><Cursor /></span>
          </p>
        </div>
        <p className='mt-4 text-xl font-bold text-gray-500 md:text-2xl'>Monitor your data analytics to increased revenue for BTC ,BTB, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium  my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
