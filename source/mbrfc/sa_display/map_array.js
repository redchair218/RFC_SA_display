
/********************* MAP ARRAY *********************

Array elements in heirarchal order as displayed in map, top-down

******************************************************/

var y;

var map_array = [

	// BASE LAYERS ........................................................................................................................................................................................................................................................................................................................................................................................................................................
				
		L.tileLayer.wms("https://new.nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_pts_zones_geolinks/MapServer/WMSServer", { layers: '0,1', format: 'image/png32', transparent: true, attribution: 'nowCOAST'}),	
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_admin_fedgov/MapServer/WMSServer", { layers: '8', format: 'image/png32', transparent: true, attribution: 'nowCOAST'}),	

		L.tileLayer("https://mesonet.agron.iastate.edu/c/tile.py/1.0.0/rfc-900913/{z}/{x}/{y}", { zIndex: y }),
		L.geoJSON(json_forecast_group, {style: style_forecast_group,onEachFeature: function (feature, layer) {layer.bindPopup(feature.properties.NAME); }}),
		L.geoJSON(json_mbrfc_basins, {style: style_mbrfc_basins,onEachFeature: function (feature, layer) {layer.bindPopup('<span style="font-weight:bold;">Basin ID: </span><span style="float:right;">' + feature.properties.NAME + '</span><br>' + '<span style="font-weight:bold;">Forecast Group: </span><span style="float:right;">' + feature.properties.FORECAST_G + '</span><br>' + '<span style="font-weight:bold;">Station ID: </span><span style="float:right;">' + feature.properties.CH5_ID + '</span><br>' + '<span style="font-weight:bold;">CWA: </span><span style="float:right;">' + feature.properties.CWA + '</span><br>&nbsp;<br>' + '<span style="font-weight:bold; text-decoration:underline;">Description: </span><br><span style="text-transform: uppercase; display: inline-block;">' + feature.properties.DESCRIPTION + '</span><br>&nbsp;'); }}),
		L.tileLayer("https://txgeo.usgs.gov/arcgis/rest/services/Mapping/HydroBaseMapForImagery/MapServer/tile/{z}/{y}/{x}", {attribution: 'arcGIS'}),

		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", { layers: '9', format: 'image/png32', transparent: true, attribution: 'nowCOAST'}),
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", { layers: '8', format: 'image/png32', transparent: true, attribution: 'nowCOAST'}),
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", { layers: '7', format: 'image/png32', transparent: true, attribution: 'nowCOAST'}),

		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", { layers: '6', format: 'image/png32', transparent: true, attribution: 'nowCOAST'}),
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_political/MapServer/WMSServer", { layers: '5', format: 'image/png32', transparent: true, attribution: 'nowCOAST'}),	
		L.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", {attribution: 'arcGIS'}),

		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_transportation/MapServer/WMSServer", { layers: '11,10,9,8,7,6,5,4,3,2', format: 'image/png', transparent: true, attribution: 'nowCOAST'}),

			// In order above ... Forecast Zones / CWAs / RFCs / MBRFC Basins / Rivers / Towns / Counties / States / Canada / Mexico / World Map / Lat-Long 
									
			// Counties ... overlay_box[6] = L.tileLayer.wms('https://digital.weather.gov/wms.php', {layers: 'counties', version: '1.3.0', format: 'image/png', zIndex: 994 }).addTo(overlay_group[6]); 
			// States ... overlay_box[7] = L.tileLayer.wms('https://digital.weather.gov/wms.php', {layers: 'counties, states', version: '1.3.0', format: 'image/png', zIndex: 993 }).addTo(overlay_group[7]); 
			// Marine Zones ... overlay_box[1] = L.tileLayer.wms("https://new.nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_pts_zones_geolinks/MapServer/WMSServer", { layers: '3,4,5', format: 'image/png32', transparent: true, attribution: 'nowCOAST', zIndex: 999 }).addTo(overlay_group[1]);	
			// NWS Regions ... overlay_box[3] = L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_admin_fedgov/MapServer/WMSServer", { layers: '7', format: 'image/png32', transparent: true, attribution: 'nowCOAST', zIndex: 997 }).addTo(overlay_group[3]);	
			// NWS RFCs ... overlay_box[4] = L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/mapoverlays_admin_fedgov/MapServer/WMSServer", { layers: '6', format: 'image/png32', transparent: true, attribution: 'nowCOAST', zIndex: 996 }).addTo(overlay_group[4]);	
	
	// OBSERVED - RADAR ........................................................................................................................................................................................................................................................................................................................................................................................................................................
		
		// Lightning
								
		L.tileLayer.wms("https://new.nowcoast.noaa.gov/arcgis/services/nowcoast/sat_meteo_emulated_imagery_lightningstrikedensity_goes_time/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png32', transparent: true, attribution: 'nowCOAST'}),
									
		// Radar
											
		L.tileLayer.wms("https://new.nowcoast.noaa.gov/arcgis/services/nowcoast/radar_meteo_imagery_nexrad_time/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png', transparent: true, attribution: "nowCOAST"}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=nexrcomp&x={x}&y={y}&z={z}', { attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=nexrphase&x={x}&y={y}&z={z}', { attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=nexrdhr&x={x}&y={y}&z={z}', { attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=nexrhres&x={x}&y={y}&z={z}', { attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=nexrdvl&x={x}&y={y}&z={z}', { attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=nexreet&x={x}&y={y}&z={z}', { attribution: 'SSEC', opacity: '0.5'}),
				
				// In order above ... NowCoast / SSEC / SSEC Precip Phase / SSEC Hybrid / SSEC Hybrid Filtered / SSEC VIL / SSEC Enhanced Echo Tops
					
		// DUAL-POL
									
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=nexrhhc&x={x}&y={y}&z={z}', { attribution: 'SSEC', opacity: '0.5'}),
	
	// OBSERVED - SATELLITE ........................................................................................................................................................................................................................................................................................................................................................................................................................................
										
		// Satellite Derived		

		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=globalvis&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=globalir&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=globalir-avn&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=globalir-nhc&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=globalir-funk&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=globalir-bd&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=globalir-ott&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=globalwv-grad&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
			
			// In order above ... Visible / IR / IR-AVN / IR-Rainbow / IR-Funktop / IR-Dvorak / IR-Tops / Water Vapor Gradient

		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=globalir-rr&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=NESDIS-GHE-HourlyRainfall&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
		L.tileLayer('https://realearth.ssec.wisc.edu/proxy/image.php?products=NESDIS-BTPWgps&x={x}&y={y}&z={z}', {attribution: 'SSEC', opacity: '0.5'}),
														
			// In order above ... Satellite-Derived Rain Rate (categorical) / Satellite-Derived Rain Rate (estimator) / Total Precipitable Water	

	
	// OBSERVED - PRECIP (hourly) ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 
				
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer", { layers: 25, opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer", { layers: 21, opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer", { layers: 17, opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer", { layers: 13, opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer", { layers: 9, opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://nowcoast.noaa.gov/arcgis/services/nowcoast/analysis_meteohydro_sfc_qpe_time/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png32', transparent: true}),
		
			// In order above ... MRMS Observed Precipitation (1,3,6,12,24,48,72)	
			
	// OBSERVED - PRECIP (daily) ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 
								
		// Hourly Precipitation Observed 
		
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 65, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 61, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 57, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 53, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 49, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 45, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 41, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 37, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 33, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 29, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 25, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 21, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 17, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 13, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 9, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_hourly_qpe/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png', transparent: true}),
		
			// In order above ... Hourly Precipitation (1-hour, 2-hour, 3-hour, 6-hour, 12-hour, 24-hour, 2-days, 3-days, 4-days, 5-days, 7-days, 10-days, 14-days, 30-days, 60-days, 90-days, 120-days)
			
		// Daily Precipitation Observed
		
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 157, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 141, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 125, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 109, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 93, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 77, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 61, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 45, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 29, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 13, opacity: '0.5', format: 'image/png', transparent: true}),
			
			// In order above ... Daily Precipitation (7-days,14-days,30-days,60-days,90-days,180-days,365-days,month,year,water year)
			
	// OBSERVED - PRECIP DEPARTURE FROM NORMAL (daily) ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 
				
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 149, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 133, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 117, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 101, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 85, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 69, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 53, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 37, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 21, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png', transparent: true}),
		
			// In order above ... Daily Precipitation Normal (7,14,30,60,90,180,365,month,year,water year)
			
	// OBSERVED - PRECIP PERCENT OF NORMAL (daily) ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 
				
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 145, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 129, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 113, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 97, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 81, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 65, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 49, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 33, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 17, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_dly_qpe/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png', transparent: true}),
		
			// In order above ... Daily Precipitation Percent Normal (7,14,30,60,90,180,365,month,year,water year)
						
	// OBSERVED - SNOWFALL ........................................................................................................................................................................................................................................................................................................................................................................................................................................
	
		// Snow Water Equivalent
				
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png32', transparent: true}),
		
		// Snow Depth
		
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png32', transparent: true}),

		// Snowfall Amounts
		
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png32', transparent: true}),
	
	// FORECAST - EXCESSIVE RAINFALL OUTLOOK ........................................................................................................................................................................................................................................................................................................................................................................................................................................
				
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_precip_hazards/MapServer/WMSServer", { layers: 2, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_precip_hazards/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_precip_hazards/MapServer/WMSServer", { layers: 0, opacity: '0.5', format: 'image/png', transparent: true}),
		
			// In order above ... Excessive Rainfall D1 / Excessive Rainfall D2 / Excessive Rainfall D3
			
	// FORECAST - RIVER FLOODING ........................................................................................................................................................................................................................................................................................................................................................................................................................................
				
		// Significant River Flood Outlook
					
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/sig_riv_fld_outlk/MapServer/WMSServer", { layers: 0, opacity: '0.5', format: 'image/png32', transparent: true}),
			
	// FORECAST - PRECIPITATION ........................................................................................................................................................................................................................................................................................................................................................................................................................................

		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 25, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 24, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 23, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 22, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 21, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 20, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 19, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 18, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 17, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 16, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 15, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 14, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 13, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 12, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 11, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 10, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 9, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 8, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 7, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 6, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 4, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 3, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 2, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/wpc_qpf/MapServer/WMSServer", { layers: 0, opacity: '0.5', format: 'image/png', transparent: true}),
		
			// In order above ... WPC QPF D1 / WPC QPF D2 / WPC QPF D3 / WPC QPF D4-5 / WPC QPF D6-7 / ignore / ignore / WPC QPF D1-2 / WPC QPF D1-3 / WPC QPF D1-5 / WPC QPF D1-7 / ignore all after (which are 6-hour time steps of QPF 00 through 78 hours)
						
	// FORECAST - FLASH FLOOD GUIDANCE ........................................................................................................................................................................................................................................................................................................................................................................................................................................
				
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_gridded_ffg/MapServer/WMSServer", { layers: 17, opacity: '0.5', format: 'image/png', transparent: true}),	
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_gridded_ffg/MapServer/WMSServer", { layers: 13, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_gridded_ffg/MapServer/WMSServer", { layers: 9, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_gridded_ffg/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Forecasts_Guidance_Warnings/rfc_gridded_ffg/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png', transparent: true}),
		
			// In order above, 5 in total ... FFG 1-hr / FFG 3-hr / FFG 6-hr / FFG 12-hr / FFG 24-hr
			
	// FORECAST - CLIMATE ........................................................................................................................................................................................................................................................................................................................................................................................................................................
					
		//  6-10 Day Outlooks
		
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_6_10_day_outlk/MapServer/WMSServer", { layers: '0', opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_6_10_day_outlk/MapServer/WMSServer", { layers: '1', opacity: '0.5', format: 'image/png32', transparent: true}),
		
			// In order above ... precipitation / temperature
		
		// 8-14 Day Outlooks
		
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_8_14_day_outlk/MapServer/WMSServer", { layers: '0', opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_8_14_day_outlk/MapServer/WMSServer", { layers: '1', opacity: '0.5', format: 'image/png32', transparent: true}),
		
			// In order above ... precipitation / temperature
		
		// One-Month Outlook
		
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_mthly_precip_outlk/MapServer/WMSServer", { layers: '0', opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_mthly_temp_outlk/MapServer/WMSServer", { layers: '0', opacity: '0.5', format: 'image/png32', transparent: true}),
		
		// Seasonal Precipitation Outlooks
		
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 12, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 11, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 10, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 9, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 8, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 7, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 6, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 4, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 3, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 2, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_precip_outlk/MapServer/WMSServer", { layers: 0, opacity: '0.5', format: 'image/png', transparent: true}),
		
			// In order above ... 0.5 / 1.5 / 2.5 / 3.5 / 4.5 / 5.5 / 6.5 / 7.5 / 8.5 / 9.5 / 10.5 / 11.5 / 12.5 month outlook
		
		// Seasonal Temperature Outlooks
		
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 12, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 11, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 10, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 9, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 8, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 7, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 6, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 5, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 4, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 3, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 2, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 1, opacity: '0.5', format: 'image/png', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_sea_temp_outlk/MapServer/WMSServer", { layers: 0, opacity: '0.5', format: 'image/png', transparent: true}),
		
			// In order above ... 0.5 / 1.5 / 2.5 / 3.5 / 4.5 / 5.5 / 6.5 / 7.5 / 8.5 / 9.5 / 10.5 / 11.5 / 12.5 month outlook
			
	// EVAPOTRANSPIRATION ........................................................................................................................................................................................................................................................................................................................................................................................................................................
	
		// Observed Potential Evapotranspiration (inches), Potential Evapotranspiration Anomaly (percent), Potential Evapotranspiration Anomaly (inches), Potential Evapotranspiration Anomaly (percentile)
		// 7, 15, 30, 60, 90 days, Since January 1st, Since October 1st
				
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/pet_7d.nc", { layers: 'pet', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,2', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/pet_15d.nc", { layers: 'pet', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,4', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/pet_30d.nc", { layers: 'pet', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,8', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/pet_60d.nc", { layers: 'pet', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '2,15', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/pet_90d.nc", { layers: 'pet', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '3,30', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/pet_ccy.nc", { layers: 'pet', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '10,50', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/pet_cwy.nc", { layers: 'pet', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '10,50', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
										
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eon_7d.nc", { layers: 'eon', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '50,140', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eon_15d.nc", { layers: 'eon', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '50,140', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eon_30d.nc", { layers: 'eon', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '60,150', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eon_60d.nc", { layers: 'eon', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '60,150', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eon_90d.nc", { layers: 'eon', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '60,150', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eon_ccy.nc", { layers: 'eon', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '60,150', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eon_cwy.nc", { layers: 'eon', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '60,150', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/edn_7d.nc", { layers: 'edn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-1.0,1.0', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/edn_7d.nc", { layers: 'edn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-2.5,2.5', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/edn_7d.nc", { layers: 'edn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-2.5,2.5', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/edn_7d.nc", { layers: 'edn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-5,5', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/edn_7d.nc", { layers: 'edn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-5,5', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/edn_7d.nc", { layers: 'edn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-5,5', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/edn_7d.nc", { layers: 'edn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-5,5', abovemaxcolor: 'extend', belowmincolor: 'extend' }),

		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eop_7d.nc", { layers: 'eop', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eop_15d.nc", { layers: 'eop', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eop_30d.nc", { layers: 'eop', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eop_60d.nc", { layers: 'eop', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eop_90d.nc", { layers: 'eop', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eop_ccy.nc", { layers: 'eop', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://thredds.northwestknowledge.net/thredds/wms/MET/summaries/eop_cwy.nc", { layers: 'eop', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		
		
	// VAPOR PRESSURE DEFICIT ........................................................................................................................................................................................................................................................................................................................................................................................................................................
	
		// Vapor Pressure Deficit (kPa), Vapor Pressure Anomaly (kPa), Vapor Pressure Deficit (percentile)  
		// 7, 15, 30, 60, 90 days, Since January 1st, Since October 1st 
		
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpd_7d.nc", { layers: 'vpd', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/YlOrBr_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,4', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpd_15d.nc", { layers: 'vpd', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/YlOrBr_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,4', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpd_30d.nc", { layers: 'vpd', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/YlOrBr_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,4', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpd_60d.nc", { layers: 'vpd', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/YlOrBr_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,4', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpd_90d.nc", { layers: 'vpd', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/YlOrBr_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,4', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpd_ccy.nc", { layers: 'vpd', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/YlOrBr_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,4', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpd_cwy.nc", { layers: 'vpd', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/YlOrBr_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,4', abovemaxcolor: 'extend', belowmincolor: 'extend' }),

		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpn_7d.nc", { layers: 'vpn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-0.9, 0.9', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpn_15d.nc", { layers: 'vpn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-0.9, 0.9', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpn_30d.nc", { layers: 'vpn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-0.9, 0.9', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpn_60d.nc", { layers: 'vpn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-0.9, 0.9', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpn_90d.nc", { layers: 'vpn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-0.9, 0.9', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpn_ccy.nc", { layers: 'vpn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-0.9, 0.9', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpn_cwy.nc", { layers: 'vpn', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-0.9, 0.9', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpp_7d.nc", { layers: 'vpp', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpp_15d.nc", { layers: 'vpp', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpp_30d.nc", { layers: 'vpp', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpp_60d.nc", { layers: 'vpp', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpp_90d.nc", { layers: 'vpp', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpp_ccy.nc", { layers: 'vpp', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/vpp_cwy.nc", { layers: 'vpp', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_7', transparent: true, zIndex: y, numcolorbands: '7', colorscalerange: '-0.001,6.001', abovemaxcolor: 'extend', belowmincolor: 'extend' }),

	// DROUGHT ........................................................................................................................................................................................................................................................................................................................................................................................................................................


		// Palmer Drought Severity Index
					
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/pdsi.nc", { layers: 'pdsi', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/RdBu_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '-7,7', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		
		// Days since >= 0.1" Precipitation, Days since >= 0.25" Precipitation
		
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/dsp_0.1.nc", { layers: 'dsp', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,45', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		L.tileLayer.wms("https://tds-proxy.nkn.uidaho.edu/thredds/wms/MET/summaries/dsp_0.25.nc", { layers: 'dsp', version: '1.3.0', opacity: '0.5', format: 'image/png', styles: 'boxfill/invBrBG_9', transparent: true, zIndex: y, numcolorbands: '9', colorscalerange: '0,90', abovemaxcolor: 'extend', belowmincolor: 'extend' }),
		
		// Drought Monitor	
					
		L.tileLayer.wms("https://gis.ncdc.noaa.gov/maps/proxy?wms=http://ndmc-001.unl.edu:8080/cgi-bin/mapserv.exe?map=/ms4w/apps/usdm/service/usdm_current_wms.map", { layers: 'usdm_current', version: '1.3.0', opacity: '0.5', format: 'image/png', srs: 'L.CRS.EPSG4326', attribution: 'NDMC, USDA, NOAA', transparent: true}),

		// Drought Outlooks (monthly and seasonal) 
		
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_drought_outlk/MapServer/WMSServer", { layers: '1', opacity: '0.5', format: 'image/png32', transparent: true}),
		L.tileLayer.wms("https://idpgis.ncep.noaa.gov/arcgis/services/NWS_Climate_Outlooks/cpc_drought_outlk/MapServer/WMSServer", { layers: '0', opacity: '0.5', format: 'image/png32', transparent: true}),
						
	// SOILS ........................................................................................................................................................................................................................................................................................................................................................................................................................................
				
				
		// Avialble water holding capacity (total)
					
		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/water_storage/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		
		// Available water holding capacity (0 - 25 cm)

		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/paws_025/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		
		// Available water holding capacity (0 - 50 cm)

		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/paws_050/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		
		// Bulk Density

		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/db/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		
		// Drainage Class

		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/drainage_class/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		
		// Rock Fragments (0 - 25 cm)	

		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/rf_025/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		
		// Sand

		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/sand/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		
		// Silt 

		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/silt/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		
		// Clay, Clay (0 - 5 cm), Clay (0 - 25 cm), Clay (25 - 50 cm)

		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/clay/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/clay_05/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/clay_025/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 }),
		L.tileLayer("https://casoilresource.lawr.ucdavis.edu/800m_grids/tms/2020/clay_2550/{z}/{x}/{y}.png", { opacity: '0.5', format: 'image/png32', transparent: true, zIndex: y, tms: true, minZoom: 0, maxZoom: 19, minNativeZoom: 4, maxNativeZoom: 9 })

		
];

