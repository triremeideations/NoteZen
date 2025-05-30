import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";


export function NotebooksPane() {
	function useCurrentPaneContext(){
		const ctx = useContext(paneActiveContext);
		if(!ctx){
			throw new Error('must use PaneContext within PaneActiveProvider')
		}
		return ctx;
	}

	const { isNotebookShowing } = useCurrentPaneContext();
	
	return (
		<div
		className={`isPane isNotebooks ${!isNotebookShowing ? "notActive" : "isActive"}`}>
			<h1>This is the Notebooks Pane</h1>
		</div>
	);
}
