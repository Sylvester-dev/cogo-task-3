import MobileNav from "./components/mobileNav";
import Sidebar from "./components/sidebar";
import PageHeader from "./components/pageHeader";
import InfoForm from "./components/infoForm";
import ProfileForm from "./components/profileForm";


const App = () => {
  return (
    <div className="flex">
       <Sidebar />
         <div className="relative bg-gray-25 w-full overflow-hidden flex flex-col items-start justify-start">
         <MobileNav />
         <main className="self-stretch flex flex-col pt-0 px-0 pb-12 items-start justify-start gap-[32px]">
          <PageHeader />
          <InfoForm />
          <div className="h-0.5 w-full bg-[#EAECF0]"></div>
          <ProfileForm />
         </main>
       </div>
    </div>
  );
};

export default App;
