import './this.css';
import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";


export function Homestage()
{
    function useCurrentPaneContext(){
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
    } = useCurrentPaneContext();

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
                    <div className="isKnob zenKnob" onClick={showZen}>
                       <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
                         <path d="m23.5,9c-2.529,0-4.878.82-6.815,2.218-.181-3.354-1.701-6.607-4.331-9.238l-.354-.354-.354.354c-2.631,2.63-4.15,5.884-4.331,9.238-1.937-1.397-4.286-2.218-6.815-2.218h-.5v.5c0,6.718,5.114,12.214,11.5,12.488v.012h1v-.012c6.386-.274,11.5-5.77,11.5-12.488v-.5h-.5Zm-15.203,2.996c-.027-3.206,1.284-6.363,3.703-8.943,2.419,2.58,3.73,5.738,3.703,8.943h.012c-1.736,1.545-3.045,3.597-3.715,5.932-.67-2.336-1.979-4.387-3.715-5.932h.012Zm-7.286-1.984c5.667.272,10.229,5.048,10.479,10.976-5.667-.272-10.229-5.048-10.479-10.976Zm11.5,10.976c.25-5.928,4.811-10.704,10.479-10.976-.25,5.928-4.811,10.704-10.479,10.976Z"/>
                       </svg>
                    </div>
                    <div className="isKnob quickKnob" onClick={showQuicknote}> </div>
                    <div className="isKnob listKnob" onClick={showChecklist}> </div>
                    <div className="isKnob booksKnob" onClick={showNotebook}> </div>
                </div>
            </div>
            <div className="info">
                <p>
                    <br/>
                    <em>NOTE Zen </em> 
                    helps you document <br/>
                    and organise your thoughts.
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
