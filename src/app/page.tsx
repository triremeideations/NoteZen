"use client";
// import { useEffect } from "react";

import { MainPage } from "@/components/main";
import { PaneActiveProvider } from "@/contexts/PaneContext";

// interface NetworkInformation extends EventTarget {
// 	downlink: number;
// 	effectiveType: "slow-2g" | "2g" | "3g" | "4g";
// 	rtt: number;
// 	saveData: boolean;
// 	type?: string;
// }

export default function Home() {
	
	// useEffect(() => {
	// 	(async function checkConnectionSpeed() {
	// 		const slowAlert = () => {
	// 			const div = document.createElement("div");
	// 			div.textContent =
	// 				"⚠️ Your connection is slow. For best performance, use fast broadband or 4G+";
	// 			Object.assign(div.style, {
	// 				background: "#ffcc00",
	// 				color: "#000",
	// 				padding: "10px",
	// 				textAlign: "center",
	// 				fontWeight: "bold",
	// 				zIndex: "9999",
	// 				position: "fixed",
	// 				top: "0",
	// 				width: "100%",
	// 			});
	// 			document.body.prepend(div);
	// 		};

	// 		try {
	// 			if ("connection" in navigator) {
	// 				const conn = navigator.connection as NetworkInformation;
	// 				if (
	// 					conn.downlink < 1.5 ||
	// 					conn.effectiveType.includes("2g") ||
	// 					conn.saveData
	// 				) {
	// 					slowAlert();
	// 					return;
	// 				}
	// 			}

	// 			const start = performance.now();
	// 			await fetch("$/images/home/notes.png", { cache: "no-store" });
	// 			const duration = performance.now() - start;
	// 			if (duration > 3000) {
	// 				slowAlert();
	// 			}
	// 		} catch (e) {
	// 			console.log(e);
	// 			slowAlert();
	// 		}
	// 	})();
	// }, []);

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
