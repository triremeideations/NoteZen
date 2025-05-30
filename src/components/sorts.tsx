// import { useContext } from "react";
// import { paneActiveContext } from "@/contexts/PaneContext";

// function useCurrentPaneContext(){
//     const ctx = useContext(paneActiveContext);
//     if(!ctx){
//         throw new Error('must use PaneContext within PaneActiveProvider')
//     }
//     return ctx;
// }

// const {
//     isHomeShowing, setIsHomeShowing,
//     isZenShowing, setIsZenShowing,
//     isChecklistShowing, setIsChecklistShowing,
//     isNotebookShowing, setIsNotebookShowing,
//     isQuicknoteShowing, setIsQuicknoteShowing,
//     isKnobsbarShowing, setIsKnobsbarShowing
// } = useCurrentPaneContext();


// export class PaneStates {

//     constructor(){}

//     isHome():boolean{
//         return isHomeShowing;
//     }
//     isZen():boolean{
//         return isZenShowing;
//     }
//     isChecklist():boolean{
//         return isChecklistShowing;
//     }
//     isNotebook():boolean{
//         return isNotebookShowing;
//     }
//     isQuicknote():boolean{
//         return isQuicknoteShowing;
//     }
//     isKnobsbar():boolean{
//         return isKnobsbarShowing;
//     }

//     hideAll():void
//     {
//         setIsHomeShowing(false);
//         setIsKnobsbarShowing(false);
//         setIsQuicknoteShowing(false);
//         setIsChecklistShowing(false);
//         setIsNotebookShowing(false);
//         setIsZenShowing(false);
//     }
    
//     showBottomKnobs():void
//     {
//         setTimeout(() => {
//             setIsKnobsbarShowing(true);
//         }, 1000);
//     }
//     showZen():void
//     {
//         this.hideAll();
//         this.showBottomKnobs();
//         setIsZenShowing(true)
//     }
//     showQuicknote():void
//     {
//         this.hideAll();
//         this.showBottomKnobs();
//         setIsQuicknoteShowing(true)
//     }
//     showNotebook():void
//     {
//         this.hideAll();
//         this.showBottomKnobs();
//         setIsNotebookShowing(true)
//     }
//     showChecklist():void
//     {
//         this.hideAll();
//         this.showBottomKnobs();
//         setIsChecklistShowing(true)
//     }
// }

