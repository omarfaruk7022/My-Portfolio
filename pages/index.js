import Navbar from "@/Components/Common/Navbar";
import FixedDetails from "@/Components/Home/FixedDetails";
import TabRouting from "@/Components/Home/TabRouting";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="px-0  lg:px-36   grid grid-cols-12 md:gap-10 justify-between lg:mt-[100px]">
        <div className="col-span-12 lg:col-span-4  lg:block  h-screen lg:sticky lg:top-36 mb-36">
          <FixedDetails />
        </div>
        <div className="col-span-12 lg:col-span-8">
          <TabRouting /> 
        </div>
      </div>
    </>
  );
}
