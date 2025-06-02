import './this.css';
import { useContext } from "react";
import { paneActiveContext } from "@/contexts/PaneContext";
import { BF_Playlist } from '../playlists/BF';
import { CF_Playlist } from '../playlists/CF';
import { DR_Playlist } from '../playlists/DR';
import { SP_Playlist } from '../playlists/SP';

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
	} = useCurrentPaneContext();

	function hideAllPlaylists(){
		setIsPlaylistAShowing(false);
		setIsPlaylistBShowing(false);
		setIsPlaylistCShowing(false);
		setIsPlaylistDShowing(false);
		setIsMoodplayerShowing(false);
	}

	return (
		<div className={`isPane isZentask ${!isZenShowing ? "notActive" : "isActive"}`}>
			<p className="mood-ring">My mood for this <br/> session:</p>
			<div className="mood-choice">
				<div className="mood-cap">
					<div className="isMCKnob" id="mcBF"
						onClick={()=>{
							hideAllPlaylists(); 
							setIsMoodplayerShowing(true);
							setIsPlaylistAShowing(true);
						}}
					>
						Breathe and Focus
						<small>~5 minute Exercise</small>
					</div>

					<div className="isMCKnob" id="mcCF"
						onClick={()=>{
							hideAllPlaylists();
							setIsMoodplayerShowing(true);
							setIsPlaylistBShowing(true);
						}}
					>
						Creative Flow
						<small>~15 minute Exercise</small>
					</div>

					<div className="isMCKnob" id="mcDR"
						onClick={()=>{
							hideAllPlaylists();
							setIsMoodplayerShowing(true);
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
							setIsMoodplayerShowing(true);
						}}
					>
						Sleep Prep / Night
						<small>Duration as Needed</small>
					</div>
				</div>
				<div className={`mood-player ${!isMoodplayerShowing ? "hideBar" : "showBar"}`}>
					<BF_Playlist />
					<CF_Playlist />
					<DR_Playlist />
					<SP_Playlist />
				</div>
			</div>
		</div>
	);
}
