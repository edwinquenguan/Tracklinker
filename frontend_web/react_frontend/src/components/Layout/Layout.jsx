import Header from "./Header";
import Aside from "./Aside";

export default function Layout({children}){
    return(
        // Container 
        <div className="w-[100%] h-[100%] grid grid-cols-[15%_85%] grid-rows-[8%_92%]">
            <Aside />
            <Header />
            <main className="p-8">
                {children}
            </main>
        </div>
    );
}