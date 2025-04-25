import {BigTextName} from "./BigTextName";

export const HeroHeader = ()=> {
    return (
        <div className="grid z-2 mt-30 lg:mt-10 relative">
         <div className="col-start-1 col-end-13 pt-small flex gap-4 flex-col">
            <BigTextName />
         </div>
       </div>
    )
}
