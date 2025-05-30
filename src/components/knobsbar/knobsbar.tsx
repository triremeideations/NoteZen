import { useContext } from "react"
import { paneActiveContext } from "@/contexts/PaneContext";


export function KnobsBar(){

    function currentPaneContext(){
        const ctx = useContext(paneActiveContext);
        if(!ctx){
            throw new Error('must use PaneContext within PaneActiveProvider')
        }
        return ctx;
    }
    const {
        isKnobsbarShowing,
        setIsHomeShowing, setIsZenShowing, setIsChecklistShowing,
        setIsNotebookShowing, setIsQuicknoteShowing, setIsKnobsbarShowing
    } = currentPaneContext();

    function hideAll():void
    {
        setIsHomeShowing(false);
        setIsKnobsbarShowing(false);
        setIsQuicknoteShowing(false);
        setIsChecklistShowing(false);
        setIsNotebookShowing(false);
        setIsZenShowing(false);
    }
    
    function showBottomKnobs():void
    {
        setTimeout(() => {
            setIsKnobsbarShowing(true);
        }, 250);
    }
    function showZen():void
    {
        hideAll();
        showBottomKnobs();
        setIsZenShowing(true)
    }
    function showQuicknote():void
    {
        hideAll();
        showBottomKnobs();
        setIsQuicknoteShowing(true)
    }
    function showNotebook():void
    {
        hideAll();
        showBottomKnobs();
        setIsNotebookShowing(true)
    }
    function showChecklist():void
    {
        hideAll();
        showBottomKnobs();
        setIsChecklistShowing(true)
    }
    function showHome():void
    {
        hideAll();
        setIsHomeShowing(true)
    }
    
    return(
        <div 
        className ={ `isKnobsBar ${!isKnobsbarShowing ? "notActive" : "isActive"}` }>
            <button className="isKnob" onClick={showHome}>Back HOME</button>
            <button className="isKnob" onClick={showZen}> this is A</button>
            <button className="isKnob" onClick={showQuicknote}>this is B</button>
            <button className="isKnob" onClick={showChecklist}>this is C</button>
            <button className="isKnob" onClick={showNotebook}>this is D</button>
        </div> 
    )
}