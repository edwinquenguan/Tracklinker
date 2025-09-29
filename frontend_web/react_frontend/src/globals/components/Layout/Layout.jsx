import Aside from "./Aside";

export default function Layout({avatarOnClick, children}){
    return(
        // Container 
        <div className="w-full h-full grid grid-cols-1
        xl:grid-cols-[270px_85%] xl:grid-rows-1
        md:grid-cols-[130px_1fr] md:grid-rows-1
        sm:grid-rows-[1fr_100px]">
            <Aside 
            avatarOnClick={avatarOnClick}
            />
            <main className="min-w-full max-h-full px-1 py-4 dark:bg-black overflow-hidden">
                {children}
            </main>
        </div>
    );
}