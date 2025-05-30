import './this.css';
import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";


export function Homestage()
{
    function currentPaneContext(){
        const ctx = useContext(paneActiveContext);
        if(!ctx){
            throw new Error('must use PaneContext within PaneActiveProvider')
        }
        return ctx;
    }
    
    const {
        isHomeShowing, setIsHomeShowing,
        setIsZenShowing, setIsChecklistShowing, setIsNotebookShowing,
        setIsQuicknoteShowing, setIsKnobsbarShowing
    } = currentPaneContext();

// NOTE to SELF
// The above context setup here (and in subsequent components) as a currentPageContext function
// instead of useContext directly is to avoid error: Property 'isHomeShowing, etc' does not
// exist on type 'paneActiveContextProps | undefined' .ts(2339) even though it will still work 
// despite this "error" (Not really an error, its just typescript being an impatient DIVA).

// The red lines are terribly distracting.
    
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
        }, 1000);
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

    return(
        <div 
        className={`midbody ${!isHomeShowing ? "notActive" : "isActive"}`}>
            
            <div className="options">
                <div className="optknobs">
                    <div className="isKnob" onClick={showZen}>A</div>
                    <div className="isKnob" onClick={showQuicknote}>B</div>
                    <div className="isKnob" onClick={showChecklist}>C</div>
                    <div className="isKnob" onClick={showNotebook}>D</div>
                </div>
            </div>
            <div className="info">
                <p>
                    <br/>
                    <em>NOTE Zen </em> 
                    helps you <br/>document and organise 
                    <br/>your thoughts.
                    <br/><br/>
                </p>
                <hr/>
                <br/>
                <p>
                    <small>
                    <em>
                        <span id='meditate'>Meditate...</span> &nbsp;
                        <span id='ideate'>Ideate...</span> &nbsp;
                        <span id='iterate'>Iterate.</span>
                    </em>
                    </small>
                </p>
            </div>
        </div>
    )
}
