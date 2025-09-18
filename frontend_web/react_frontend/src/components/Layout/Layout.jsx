import Aside from "./Aside";

export default function Layout({children}){
    return(
        // Container 
        <div className="w-full h-full grid grid-cols-[15%_85%] grid-rows-1">
            <Aside />
            <main className="min-w-full max-h-full px-1 py-4 dark:bg-black">
                {children}
            </main>
        </div>
    );
}