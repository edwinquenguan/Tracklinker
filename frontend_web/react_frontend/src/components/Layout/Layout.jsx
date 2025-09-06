import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";

export default function Layout(){
    return(
        // Container 
        <div 
        className="w-[100%] h-[100%] grid grid-cols-[10%_90%] grid-rows-[15%_85%]">
            <Aside />
            <Header />
            <Main/>
        </div>
    );
}