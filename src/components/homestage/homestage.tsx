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
        setIsQuicknoteShowing, setIsKnobsbarShowing,
        isKnobAnimated
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
                    <div 
                        className=
                        {`
                            isKnob zenKnob 
                            ${isKnobAnimated ? "zenKnob__anim" : "__static"}
                            homebar
                        `}
                        onClick={showZen}>
                       <svg 
                       xmlns="http://www.w3.org/2000/svg"
                       id="Layer_1"
                       data-name="Layer 1"
                       viewBox="0 0 24 24"
                       >
                            <path d="m23.5,9c-2.529,0-4.878.82-6.815,2.218-.181-3.354-1.701-6.607-4.331-9.238l-.354-.354-.354.354c-2.631,2.63-4.15,5.884-4.331,9.238-1.937-1.397-4.286-2.218-6.815-2.218h-.5v.5c0,6.718,5.114,12.214,11.5,12.488v.012h1v-.012c6.386-.274,11.5-5.77,11.5-12.488v-.5h-.5Zm-15.203,2.996c-.027-3.206,1.284-6.363,3.703-8.943,2.419,2.58,3.73,5.738,3.703,8.943h.012c-1.736,1.545-3.045,3.597-3.715,5.932-.67-2.336-1.979-4.387-3.715-5.932h.012Zm-7.286-1.984c5.667.272,10.229,5.048,10.479,10.976-5.667-.272-10.229-5.048-10.479-10.976Zm11.5,10.976c.25-5.928,4.811-10.704,10.479-10.976-.25,5.928-4.811,10.704-10.479,10.976Z"/>
                       </svg>
                    </div>
                    
                    <div
                        className=
                        {`
                            isKnob quickKnob 
                            ${isKnobAnimated ? "quickKnob__anim" : "__static"}
                            homebar
                        `}
                        onClick={showQuicknote}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        id="Layer_2"
                        data-name="Layer 2"
                        viewBox="0 0 24 24"
                        >
                            <path d="m15,2.338V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.536c-.163-.023-.33-.036-.5-.036h-2.5V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-3V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.5h-2.5c-.17,0-.337.012-.5.036V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v1.838c-1.181.563-2,1.769-2,3.162v14c0,2.481,2.019,4.5,4.5,4.5h8c2.481,0,4.5-2.019,4.5-4.5V5.5c0-1.393-.819-2.599-2-3.162Zm1,17.162c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V5.5c0-1.379,1.122-2.5,2.5-2.5h10c1.378,0,2.5,1.121,2.5,2.5v14Zm-3-13c0,.276-.224.5-.5.5H4.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h8c.276,0,.5.224.5.5Zm0,4c0,.276-.224.5-.5.5H4.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h8c.276,0,.5.224.5.5Zm-3,4c0,.276-.224.5-.5.5h-5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h5c.276,0,.5.224.5.5ZM21.5,0c-1.378,0-2.5,1.121-2.5,2.5v17.758c0,.922.374,1.823,1.025,2.475l1.121,1.121c.098.098.226.146.354.146s.256-.049.354-.146l1.121-1.121c.652-.651,1.025-1.553,1.025-2.475V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,20.258c0,.658-.267,1.303-.732,1.768l-.768.768-.768-.768c-.465-.465-.732-1.109-.732-1.768V2.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v17.758Z"/>
                        </svg>
                    </div>
                    
                    <div
                        className=
                        {`
                            isKnob listKnob 
                            ${isKnobAnimated ? "listKnob__anim" : "__static"}
                            homebar
                        `}
                        onClick={showChecklist}>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_3"
                        viewBox="0 0 24 24"
                        data-name="Layer 3">
                            <path d="m20 11.5v8c0 2.481-2.019 4.5-4.5 4.5h-11c-2.481 0-4.5-2.019-4.5-4.5v-15c0-2.481 2.019-4.5 4.5-4.5h11c.38 0 .759.048 1.124.142.268.069.429.341.36.609-.068.267-.345.428-.608.36-.285-.073-.58-.11-.876-.11h-11c-1.93 0-3.5 1.57-3.5 3.5v15c0 1.93 1.57 3.5 3.5 3.5h11c1.93 0 3.5-1.57 3.5-3.5v-8.001c0-.276.224-.5.5-.5s.5.224.5.5zm-8.5 6.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-4c-.276 0-.5.224-.5.5s.224.5.5.5zm12.5-15.5c0 .668-.26 1.296-.732 1.768l-6.707 6.707c-.66.661-1.539 1.025-2.475 1.025h-1.586c-.276 0-.5-.224-.5-.5v-1.586c0-.921.374-1.823 1.025-2.475l6.707-6.707c.975-.975 2.561-.975 3.535 0 .473.472.732 1.1.732 1.768zm-1 0c0-.401-.156-.777-.439-1.061-.584-.585-1.537-.585-2.121 0l-6.707 6.707c-.466.465-.732 1.11-.732 1.768v1.086h1.086c.668 0 1.296-.26 1.768-.732l6.707-6.707c.283-.283.439-.66.439-1.061zm-13.854 12.646-2.589 2.589c-.344.343-.89.354-1.242.034l-1.471-1.403c-.199-.19-.517-.184-.706.017-.191.199-.184.516.017.706l1.478 1.41c.365.336.826.502 1.286.502.487 0 .974-.187 1.346-.559l2.589-2.589c.195-.195.195-.512 0-.707s-.512-.195-.707 0zm.707-5c-.195-.195-.512-.195-.707 0l-2.589 2.589c-.344.342-.89.355-1.242.034l-1.471-1.403c-.199-.189-.517-.183-.706.017-.191.2-.184.516.017.707l1.478 1.41c.365.336.826.502 1.286.502.487 0 .974-.187 1.346-.559l2.589-2.589c.195-.195.195-.512 0-.707zm0-5c-.195-.195-.512-.195-.707 0l-2.589 2.589c-.344.343-.893.355-1.241.034l-1.471-1.404c-.201-.19-.518-.183-.707.017-.191.2-.184.516.016.707l1.479 1.411c.366.335.826.501 1.286.501.487 0 .974-.187 1.346-.559l2.589-2.589c.195-.195.195-.512 0-.707z"/>
                        </svg>
                    </div>

                    <div
                        className=
                        {`
                            isKnob booksKnob 
                            ${isKnobAnimated ? "booksKnob__anim" : "__static"}
                            homebar
                        `}
                        onClick={showNotebook}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_4"
                        data-name="Layer 4"
                        viewBox="0 0 24 24"
                        >
                            <path d="m13,6c0,.552-.448,1-1,1h-6c-.552,0-1-.448-1-1s.448-1,1-1h6c.552,0,1,.448,1,1Zm-2,3h-4c-.552,0-1,.448-1,1s.448,1,1,1h4c.552,0,1-.448,1-1s-.448-1-1-1Zm12,7.236v2.764c0,2.757-2.243,5-5,5H6c-2.757,0-5-2.243-5-5V5C1,2.243,3.243,0,6,0h10c2.757,0,5,2.243,5,5v6.764l1.789,3.578c.138.276.211.585.211.894Zm-17,5.764h9V2H6c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3Zm15-5.764l-1.789-3.578c-.138-.276-.211-.585-.211-.894v-6.764c0-1.302-.839-2.402-2-2.816v19.816h1c1.654,0,3-1.346,3-3v-2.764Z"/>
                        </svg>
                    </div>
                    
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
                <p className='catch'>
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
