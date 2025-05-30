import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";


export function QuicknotesPane() {
	function useCurrentPaneContext(){
		const ctx = useContext(paneActiveContext);
		if(!ctx){
			throw new Error('must use PaneContext within PaneActiveProvider')
		}
		return ctx;
	}
	const { isQuicknoteShowing } = useCurrentPaneContext();
	
		return (
		<div 
		className={`isPane isQuicknotes ${!isQuicknoteShowing ? "notActive" : "isActive"}`}>
			<h1>This is the QuickNotes Pane</h1>
		</div>
	);
}
