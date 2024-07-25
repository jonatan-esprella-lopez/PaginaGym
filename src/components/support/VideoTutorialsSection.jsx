
function VideoTutorialsSection() {
    return (
        <div className="video-tutorials-section">
            <h3>Tutoriales en Video</h3>
            <div className="video-container">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/k9W6g9LvXDI?si=7qrhsrxMImqDIhSf" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/Ty14ogq_Vok?si=W_1VlE9C5fs1geR9" 
                    title="YouTube video player" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                </iframe>
            </div>
        </div>
    );
}

export default VideoTutorialsSection;
