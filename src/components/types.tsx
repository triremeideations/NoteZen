import { ReactNode } from "react";

export interface paneActiveProviderProps{
    children: ReactNode;
}

export interface paneActiveContextProps{

    isHomeShowing: boolean;
    setIsHomeShowing:
        React.Dispatch<React.SetStateAction<boolean>>,
    
    isZenShowing: boolean;
    setIsZenShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,

    isChecklistShowing: boolean;
    setIsChecklistShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,
    
    isNotebookShowing:  boolean;
    setIsNotebookShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,

    isQuicknoteShowing: boolean;
    setIsQuicknoteShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,
    
    isKnobsbarShowing: boolean;
    setIsKnobsbarShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,
}
