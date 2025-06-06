import { useContext } from "react"
import { paneActiveContext } from "@/contexts/PaneContext";


export function KnobsBar(){

    function useCurrentPaneContext(){
        const ctx = useContext(paneActiveContext);
        if(!ctx){
            throw new Error('must use PaneContext within PaneActiveProvider')
        }
        return ctx;
    }
    const {
        isKnobsbarShowing,
        setIsHomeShowing, setIsZenShowing, setIsChecklistShowing,
        setIsNotebookShowing, setIsQuicknoteShowing, setIsKnobsbarShowing,

        setIsPlaylistAShowing,setIsPlaylistBShowing,
        setIsPlaylistCShowing, setIsPlaylistDShowing,
        setIsMoodplayerShowing, setIsPlaycontrolShowing
    } = useCurrentPaneContext();

    function hideAll():void
    {
        setIsHomeShowing(false);
        setIsKnobsbarShowing(false);
        setIsQuicknoteShowing(false);
        setIsChecklistShowing(false);
        setIsNotebookShowing(false);
        setIsZenShowing(false);
        hideAllPlaylists();
    }
    function hideAllPlaylists(): void{
		setIsPlaylistAShowing(false);
		setIsPlaylistBShowing(false);
		setIsPlaylistCShowing(false);
		setIsPlaylistDShowing(false);
        hidePlayer();
	}
    function hidePlayer(){
		setIsMoodplayerShowing(false);
		setIsPlaycontrolShowing(false);
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
            <button className="isKnob underbar" onClick={showHome}>
                <small> Back</small>
            </button>
            <button className="isKnob zenKnob underbar" onClick={showZen}></button>
            <button className="isKnob quickKnob underbar" onClick={showQuicknote}></button>
            <button className="isKnob listKnob underbar" onClick={showChecklist}></button>
            <button className="isKnob booksKnob underbar" onClick={showNotebook}></button>
        </div> 
    )
}