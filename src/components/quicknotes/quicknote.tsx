import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";


export function QuicknotesPane() {
	function currentPaneContext(){
		const ctx = useContext(paneActiveContext);
		if(!ctx){
			throw new Error('must use PaneContext within PaneActiveProvider')
		}
		return ctx;
	}
	const { isQuicknoteShowing } = currentPaneContext();
	
		return (
		<div 
		className={`isPane isQuicknotes ${!isQuicknoteShowing ? "notActive" : "isActive"}`}>
			<h1>This is the QuickNotes Pane</h1>
		</div>
	);
}
