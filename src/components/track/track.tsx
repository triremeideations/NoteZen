import './track.css';

interface PlayTrackProps{
    spilltea: [string, ...string[]]; 
}

export const PlayTrack=({spilltea}:PlayTrackProps)=>
{
    const [tname, ...tdesc] = spilltea;
    const [ofu, ibuo, ito, ino] = tdesc;

    return(
        <div className="isTrackOption">
            <div className="isTrackImg"></div>
            <div className="isTrackDetails">
                <div className="isTrackName">{tname}</div>
                <div className="isTrackDesc">
                    <small>
                        {ofu}
                        <br></br>
                        {ibuo}
                        <br></br>
                        {ito}
                        <br></br>
                        {ino}
                    </small>
                </div>
            </div>
        </div>
    )
}