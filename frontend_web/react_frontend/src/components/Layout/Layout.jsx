import Aside from "./Aside";

export default function Layout({children}){
    return(
        // Container 
        <div className="w-full h-full grid grid-rows-[1fr_80px] grid-cols-1
        xl:grid-cols-[270px_85%]
        md:grid-cols-[130px_1fr]">
            <Aside />
            <main className="min-w-full max-h-full px-1 py-4 dark:bg-black">
                {children}
            </main>
        </div>
    );
}