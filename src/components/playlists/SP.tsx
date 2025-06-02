import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";
import { PlayTrack } from "../track/track";

export const SP_Playlist=()=>{
    function useCurrentPaneContext(){
		const ctx = useContext(paneActiveContext);
		if(!ctx){
			throw new Error('must use PaneContext within PaneActiveProvider')
		}
		return ctx;
	}
	
	const { isPlaylistDShowing } = useCurrentPaneContext();

    return(
        <div className={`isPlaylist ${!isPlaylistDShowing ? "notActive" : "isActive"}`}>
            <h6> <small>
                FURLING | SLUMBER
            </small> </h6>
            <br/><PlayTrack spilltea={["Nesting"]}/>
            <PlayTrack spilltea={["Sleepwake"]}/>
            <PlayTrack spilltea={["Second Silence"]}/>
            <PlayTrack spilltea={["Pale Bloom"]}/>
            <PlayTrack spilltea={["Idleturn"]}/>
        </div>
    )
}