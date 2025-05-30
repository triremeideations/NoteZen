import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";

export function ZenPane() {
	function currentPaneContext(){
		const ctx = useContext(paneActiveContext);
		if(!ctx){
			throw new Error('must use PaneContext within PaneActiveProvider')
		}
		return ctx;
	}
	
	const { isZenShowing } = currentPaneContext();

	return (
		<div className={`isPane isZentask ${!isZenShowing ? "notActive" : "isActive"}`}>
			<h1>This is the Zen Pane</h1>
		</div>
	);
}
