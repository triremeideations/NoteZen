"use client"

import { ChecklistPane } from "@/components/checklist/checklist";
import { NotebooksPane } from "@/components/notebooks/Notebooks";
import { QuicknotesPane } from "@/components/quicknotes/quicknote";
import { ZenPane } from "@/components/zentask/zen";
import { KnobsBar } from "@/components/knobsbar/knobsbar";
import { Backdrop } from "@/components/backdrop";
import { Homestage } from "@/components/homestage/homestage";
import '$/faces/faces.css';


export function MainPage()
{
    
    return(
        <div className="mainpage">
            <Backdrop/>
            <header className="title">
                <h1>Ìwàrí</h1>
                <h2>NOTE <span>Zen</span></h2>
            </header>
            <Homestage/>
            <ZenPane/>
            <ChecklistPane/>
            <QuicknotesPane/>
            <NotebooksPane/>
            <KnobsBar/>
        </div>
    )
}