import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";
import { PlayTrack } from "../track/track";

export const BF_Playlist=()=>{
    function useCurrentPaneContext(){
		const ctx = useContext(paneActiveContext);
		if(!ctx){
			throw new Error('must use PaneContext within PaneActiveProvider')
		}
		return ctx;
	}
	
	const { isPlaylistAShowing } = useCurrentPaneContext();

    return(
        <div className={`isPlaylist ${!isPlaylistAShowing ? "notActive" : "isActive"}`}>
            <PlayTrack
                spilltea={[
                    "Driftphase",
                    "This is an optional track description",
                    "This is a second line of description",
                    "We have a desired maximum of three lines",
                    "Four lines is stretching it",
                ]}
            />
            <PlayTrack spilltea={["Softwire"]}/>
            <PlayTrack spilltea={["Lucid Thread"]}/>
            <PlayTrack spilltea={["Stillcurrent"]}/>
            <PlayTrack spilltea={["Serein"]}/>
        </div>
    )
}