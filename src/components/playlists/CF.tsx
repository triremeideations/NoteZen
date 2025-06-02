import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";
import { PlayTrack } from "../track/track";


export const CF_Playlist=()=>{
    function useCurrentPaneContext(){
		const ctx = useContext(paneActiveContext);
		if(!ctx){
			throw new Error('must use PaneContext within PaneActiveProvider')
		}
		return ctx;
	}
	
	const { isPlaylistBShowing } = useCurrentPaneContext();

    return(
        <div className={`isPlaylist ${!isPlaylistBShowing ? "notActive" : "isActive"}`}>
            <h6> <small>
                 FLOW | JOURNALING 
            </small> </h6>
            <br/>
            
            <PlayTrack spilltea={["Glasswing"]}/>
            <PlayTrack spilltea={["Slowform"]}/>
            <PlayTrack spilltea={["Blownline"]}/>
            <PlayTrack spilltea={["Lapse"]}/>
            <PlayTrack spilltea={["Duskmap"]}/>
        </div>
    )
}