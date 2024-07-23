import { useEffect, useState } from 'react';
import { App } from './app/App';
import loaderImage from './assets/AeroCET-logo.png';
import './Loader.css';

export default function Loader() {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowApp(true);
    }, 100000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (showApp) {
    return <App />;
  }

  return (
      <div className='main flex items-center justify-center flex-col'>
      <div><img src={loaderImage} alt='Loader-image' className='loader-image mb-4' /></div>
      <div className='loader'></div>
    </div>
  );
}
