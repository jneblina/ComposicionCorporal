import { Josefin_Sans } from 'next/font/google'

const josefin = Josefin_Sans({ subsets: ['latin'], weight:["400"] })

function Home(){
  return (
    <div className="bg-primary h-screen w-full p-4">
      <h1 className={`${josefin.className} text-white text-5xl text-center mt-4`}> Home </h1>
    </div>
  );
}

export default Home;