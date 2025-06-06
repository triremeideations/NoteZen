import './this.css';
import { useContext, useRef } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";
import { BF_Playlist } from '../playlists/BF';
import { CF_Playlist } from '../playlists/CF';
import { DR_Playlist } from '../playlists/DR';
import { SP_Playlist } from '../playlists/SP';
import { PlayControls } from '../playbar/controls';
import { PlaylistScroller } from '../playlists/SCR';

export function ZenPane()
{
	function useCurrentPaneContext(){
		const ctx = useContext(paneActiveContext);
		if(!ctx){
			throw new Error('must use PaneContext within PaneActiveProvider')
		}
		return ctx;
	}
	
	const { 
		isZenShowing, isMoodplayerShowing,
		setIsPlaylistAShowing, setIsPlaylistBShowing,
		setIsPlaylistCShowing, setIsPlaylistDShowing,
		setIsMoodplayerShowing,
		isPlaycontrolShowing, setIsPlaycontrolShowing,
	} = useCurrentPaneContext();

	function hideAllPlaylists(){
		setIsPlaylistAShowing(false);
		setIsPlaylistBShowing(false);
		setIsPlaylistCShowing(false);
		setIsPlaylistDShowing(false);
		setIsMoodplayerShowing(false);
		setIsPlaycontrolShowing(false);
		hidePlayer();
	}
	function prepPlayer(){
		setIsMoodplayerShowing(true);
		setIsPlaycontrolShowing(true);
	}
	function hidePlayer(){
		setIsMoodplayerShowing(false);
		setIsPlaycontrolShowing(false);
	}

	const moodplayerRef = useRef<HTMLDivElement>(null);

	function playlistUp(){
        if (moodplayerRef.current){
            moodplayerRef.current.scrollTop -= 100;
        }
    }
    function playlistDown(){
        if (moodplayerRef.current){
            moodplayerRef.current.scrollTop += 100;
        }
    }

	return (
		<div className={`isPane isZentask ${!isZenShowing ? "notActive" : "isActive"}`}>
			<p className="mood-ring">My mood for this <br/> session:</p>
			<div className="mood-choice">
				<div className="mood-cap">
					<div className="isMCKnob" id="mcBF"
						onClick={()=>{
							hideAllPlaylists(); 
							prepPlayer();
							setIsPlaylistAShowing(true);
						}}
					>
						Breathe and Focus
						<small>~5 minute Exercise</small>
					</div>

					<div className="isMCKnob" id="mcCF"
						onClick={()=>{
							hideAllPlaylists();
							prepPlayer();
							setIsPlaylistBShowing(true);
						}}
					>
						Creative Flow
						<small>~15 minute Exercise</small>
					</div>

					<div className="isMCKnob" id="mcDR"
						onClick={()=>{
							hideAllPlaylists();
							prepPlayer();
							setIsPlaylistCShowing(true);
						}}
					>
						Mental Scan
						<small>30+ minutes Exercise</small>
					</div>
					
					<div className="isMCKnob" id="mcSP"
						onClick={()=>{
							hideAllPlaylists();
							setIsPlaylistDShowing(true);
							prepPlayer();
						}}
					>
						Sleep Prep / Night
						<small>Duration as Needed</small>
					</div>
				</div>
				<div 
					className={`mood-player ${!isMoodplayerShowing ? "hideBar" : "showBar"}`}
					ref={ moodplayerRef }
				>
					<div className={`mpd ${!isMoodplayerShowing ? "notActive" : "isActive"}`}>
						<PlaylistScroller 
							playlistUp={playlistUp}
							playlistDown={playlistDown}
						/>
					</div>
					<BF_Playlist />
					<CF_Playlist />
					<DR_Playlist />
					<SP_Playlist />
				</div>
			</div>
			{
				isPlaycontrolShowing ? <PlayControls/>:<div></div>
			}
		</div>
	);
}
