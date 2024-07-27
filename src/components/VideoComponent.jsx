import { useState, useRef } from 'react';
import { ZoomIn } from 'lucide-react';
const VideoComponent = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        } else if (videoRef.current.mozRequestFullScreen) {
          videoRef.current.mozRequestFullScreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
          videoRef.current.webkitRequestFullscreen();
        } else if (videoRef.current.msRequestFullscreen) {
          videoRef.current.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  return (
    <section className='px-4'>
      <div className='relative'>
        <video 
          ref={videoRef} 
          className='w-full rounded-xl shadow-[#4f0724] shadow-3xl border border-1 md:border-2 border-white/30 transition-all duration-500' 
          loop 
          autoPlay 
          muted 
          controls={false}
        >
          <source src='/landing.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={handleFullscreen}
          className='absolute bottom-4 right-4 backdrop-blur-3xl bg-black/60 text-black p-2 rounded-full '
        >
          <ZoomIn color='white' size='20' />
        </button>
      </div>
    </section>
  );
};

export default VideoComponent;