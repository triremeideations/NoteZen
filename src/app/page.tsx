"use client"

import { MainPage } from "@/components/main";
import { PaneActiveProvider } from "@/contexts/PaneContext";


export default function Home() {
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
