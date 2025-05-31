"use client"
import {useEffect} from react

import { MainPage } from "@/components/main";
import { PaneActiveProvider } from "@/contexts/PaneContext";


export default function Home() {

	useEffect(()=> {
(async function checkConnectionSpeed() {
  const slowAlert = () => {
    const div = document.createElement('div');
    div.textContent = "⚠️ Your connection is slow. For best performance, use fast broadband or 4G+. This is a resource-heavy gaming site.";
    Object.assign(div.style, {
      background: '#ffcc00',
      color: '#000',
      padding: '10px',
      textAlign: 'center',
      fontWeight: 'bold',
      zIndex: '9999',
      position: 'fixed',
      top: '0',
      width: '100%',
    });
    document.body.prepend(div);
  };

  try {
    if ('connection' in navigator) {
      const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (conn.downlink < 1.5 || conn.effectiveType.includes('2g') || conn.saveData) {
        slowAlert();
        return;
      }
    }

    const start = performance.now();
    await fetch('../../../public/images/home/notes.png', { cache: 'no-store' });
    const duration = performance.now() - start;
    if (duration > 3000) {
      slowAlert();
    }
  } catch (e) {
    slowAlert();
  }
})();
	},[]);

	return (
		<div>
			<PaneActiveProvider>
				<MainPage />
			</PaneActiveProvider>
			<footer>
				<small>
					powered by || &nbsp; 
					<a href="https://trireme-ideations.vercel.app" target="blank">
						ideationSpace
					</a>
				</small>
			</footer>
		</div>
	);
}
