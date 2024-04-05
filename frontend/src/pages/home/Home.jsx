import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex w-[97.5%] h-[80%]  sm:h-[450px] md:w-[85%] md:h-[550px] lg:h-[550px] xl:h-[600px] xl:w-[1000px] justify-center rounded-lg overflow-hidden bg-gradient-to-l from-slate-900 to-purple-900">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};
export default Home;
