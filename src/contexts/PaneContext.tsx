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

    return(
        <paneActiveContext.Provider
            value={{
                isHomeShowing, setIsHomeShowing,
                isZenShowing, setIsZenShowing,
                isChecklistShowing, setIsChecklistShowing,
                isNotebookShowing, setIsNotebookShowing,
                isQuicknoteShowing, setIsQuicknoteShowing,
                isKnobsbarShowing, setIsKnobsbarShowing,
            }}
        >
            {children}
        </paneActiveContext.Provider>
    )
}
