import Header from "./Header";
import Aside from "./Aside";

export default function Layout({children}){
    return(
        // Container 
        <div className="w-[100%] h-[100%] grid grid-cols-[15%_85%] grid-rows-[6%_94%]">
            <Aside />
            <Header />
            <main className="p-8">
                {children}
            </main>
        </div>
    );
}