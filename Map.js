import React, { useCallback, useEffect, useRef } from "react";



function Map() {
	const mapRef = useRef(null);
	

	const initMap = useCallback(() => {
		new window.google.maps.Map(mapRef.current, {
			center: { lat: 36.016867, lng: 128.695023 },
			zoom: 16,
		});
	}, [mapRef]);

	useEffect(() => {
		initMap();
	}, [initMap]);

	return (
		<div
			className="map"			
			ref={mapRef}
		></div>

	);
}

export default Map;