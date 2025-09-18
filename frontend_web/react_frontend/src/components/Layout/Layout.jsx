import Aside from "./Aside";

export default function Layout({children}){
    return(
        // Container 
        <div className="w-full h-full grid grid-cols-[15%_85%] grid-rows-[6%_94%]">
            <Aside />
            <main className="w-full h-full px-1 py-4 dark:bg-black">
                {children}
            </main>
        </div>
    );
}