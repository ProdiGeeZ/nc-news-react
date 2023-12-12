import React from 'react';
import '../../../stylesheets/LoadingBar.css'; 

function LoadingBar({ progress }) {
    return (
        <div className="container">
            <div className="progress2 progress-moved">
                <div
                    className="progress-bar2"
                    style={{
                        width: `${progress}%`,
                    }}
                >
                    {progress !== undefined ? `${progress}%` : ''}
                </div>
            </div>
        </div>
    );
}

export default LoadingBar;
