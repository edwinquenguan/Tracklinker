import Header from "./Header";
import Aside from "./Aside";

export default function Layout({children}){
    return(
        // Container 
        <div className="w-full h-full grid grid-cols-[15%_85%] grid-rows-[6%_94%]">
            <Aside />
            <Header />
            <main className="w-full h-full p-6 dark:bg-black">
                {children}
            </main>
        </div>
    );
}