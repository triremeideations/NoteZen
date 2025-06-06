"use client"

import { createContext, useState } from "react";
import { 
    paneActiveContextProps, 
    paneActiveProviderProps,
} from "@/components/types";


export const paneActiveContext 
    = createContext<paneActiveContextProps | undefined>(undefined);


export const PaneActiveProvider=(
    { children }:paneActiveProviderProps
)=>
{
    const [isHomeShowing, setIsHomeShowing] = useState<boolean>(true);
    const [isZenShowing, setIsZenShowing] = useState<boolean>(false);
    const [isChecklistShowing, setIsChecklistShowing] = useState<boolean>(false);
    const [isNotebookShowing, setIsNotebookShowing] = useState<boolean>(false);
    const [isQuicknoteShowing, setIsQuicknoteShowing] = useState<boolean>(false);
    const [isKnobsbarShowing, setIsKnobsbarShowing] = useState<boolean>(false);

    const [isPlaylistAShowing, setIsPlaylistAShowing] = useState<boolean>(false);
    const [isPlaylistBShowing, setIsPlaylistBShowing] = useState<boolean>(false);
    const [isPlaylistCShowing, setIsPlaylistCShowing] = useState<boolean>(false);
    const [isPlaylistDShowing, setIsPlaylistDShowing] = useState<boolean>(false);

    const [isMoodplayerShowing, setIsMoodplayerShowing] = useState<boolean>(false);
    const [isPlaycontrolShowing, setIsPlaycontrolShowing] = useState<boolean>(false);

    const [isKnobAnimated, setIsKnobAnimated] = useState<boolean>(true);

    return(
        <paneActiveContext.Provider
            value={{
                isHomeShowing, setIsHomeShowing,
                isZenShowing, setIsZenShowing,
                isChecklistShowing, setIsChecklistShowing,
                isNotebookShowing, setIsNotebookShowing,
                isQuicknoteShowing, setIsQuicknoteShowing,
                isKnobsbarShowing, setIsKnobsbarShowing,

                isPlaylistAShowing, setIsPlaylistAShowing,
                isPlaylistBShowing, setIsPlaylistBShowing,
                isPlaylistCShowing, setIsPlaylistCShowing,
                isPlaylistDShowing, setIsPlaylistDShowing,

                isMoodplayerShowing, setIsMoodplayerShowing,
                isPlaycontrolShowing, setIsPlaycontrolShowing,

                isKnobAnimated, setIsKnobAnimated,
            }}
        >
            {children}
        </paneActiveContext.Provider>
    )
}
