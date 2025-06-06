interface PlaylistScrollerProps{
    playlistUp: ()=> void;
    playlistDown: ()=> void;
}

export const PlaylistScroller: React.FC<PlaylistScrollerProps>=(
    {playlistUp, playlistDown}
)=>{    
    return(
        <div className="mood-playerKnobs">
            <button 
                id="playlist-scroll-up"
                onClick={playlistUp}
            >
                <svg width="25" height="25" viewBox="0 0 100 100">
                    <polygon 
                        points='50,10 90,90 10,90'
                    />
                </svg>
            </button>
            <button
                id="playlist-scroll-down"
                onClick={playlistDown}
            >
                <svg width="25" height="25" viewBox="0 0 100 100">
                    <polygon 
                        points='10,10 90,10 50,90'
                    />
                </svg>
            </button>
        </div>
    )
}