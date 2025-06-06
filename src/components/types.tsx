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

    isPlaylistAShowing: boolean;
    setIsPlaylistAShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,
    isPlaylistBShowing: boolean;
    setIsPlaylistBShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,
    isPlaylistCShowing: boolean;
    setIsPlaylistCShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,
    isPlaylistDShowing: boolean;
    setIsPlaylistDShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,

    isMoodplayerShowing: boolean;
    setIsMoodplayerShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,

    isPlaycontrolShowing: boolean;
    setIsPlaycontrolShowing: 
        React.Dispatch<React.SetStateAction<boolean>>,
    
    isKnobAnimated: boolean;
    setIsKnobAnimated: 
        React.Dispatch<React.SetStateAction<boolean>>,
}
