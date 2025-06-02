import './playbar.css';

export const PlayControls =()=>{
    return(
        <div className="play-controls">
            <div className="isHUD">
                <p>0:00</p>
                <div className="progress-bar">
                    <div className="progress-indicator"></div>
                </div>
                <p>3:12</p>
            </div>
            <div className="isDASH">
                <div className="isCtrl restart">RS</div>
                <div className="isCtrl rewind">RW</div>
                <div className="isCtrl pause">PP</div>
                <div className="isCtrl fastforward">FF</div>
                <div className="isCtrl togglevideo">TV</div>
            </div>
        </div>
    )
}