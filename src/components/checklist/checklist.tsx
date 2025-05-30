import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";


export function ChecklistPane() 
{
	function useCurrentPaneContext(){
		const ctx = useContext(paneActiveContext);
		if(!ctx){
			throw new Error('must use PaneContext within PaneActiveProvider')
		}
		return ctx;
	}
	
	const { isChecklistShowing } = useCurrentPaneContext();
	
	return (
		<div 
		className={`isPane isChecklist ${!isChecklistShowing ? "notActive" : "isActive"}`}>
			<h1>This is the Checklist Pane</h1>
		</div>
	);
}
