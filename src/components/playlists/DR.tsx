import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";
import { PlayTrack } from "../track/track";

export const DR_Playlist=()=>{
    function useCurrentPaneContext(){
		const ctx = useContext(paneActiveContext);
		if(!ctx){
			throw new Error('must use PaneContext within PaneActiveProvider')
		}
		return ctx;
	}
	
	const { isPlaylistCShowing } = useCurrentPaneContext();

    return(
        <div className={`isPlaylist ${!isPlaylistCShowing ? "notActive" : "isActive"}`}>
            <h6> <small>
                FRAMING | INTROSPECT
            </small> </h6>
            <br/>
            <PlayTrack spilltea={["Threadbare"]}/>
            <PlayTrack spilltea={["Loamlight"]}/>
            <PlayTrack spilltea={["Overquiet"]}/>
            <PlayTrack spilltea={["Husk"]}/>
            <PlayTrack spilltea={["False Dawn"]}/>
        </div>
    )
}