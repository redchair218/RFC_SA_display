
// AHPS ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 
	
	var legend_ahps = L.control({position: 'bottomleft'});
	
	legend_ahps.onAdd = function (map) {
	
		var div_ahps = L.DomUtil.create('div', 'legend');
	
		div_ahps.innerHTML += '<span style="font-weight:bold;">Legend:</span>' + '<br>' +
		'<table><tbody>' +
		'<tr><td><div style="width: 10px; height: 10px; border-radius: 50%; background: #CC33FF; border: solid black 1px;"></div></td><td style="text-align: left;">Major Flooding</td></tr>' + 
		'<tr><td><div style="width: 10px; height: 10px; border-radius: 50%; background: #FF0000; border: solid black 1px;"></div></td><td style="text-align: left;">Moderate Flooding</td></tr>' + 
		'<tr><td><div style="width: 10px; height: 10px; border-radius: 50%; background: #FF9900; border: solid black 1px;"></div></td><td style="text-align: left;">Minor Flooding</td></tr>' +
		'<tr><td><div style="width: 10px; height: 10px; border-radius: 50%; background: #FFFF00; border: solid black 1px;"></div></td><td style="text-align: left;">Near Flood Stage</td></tr>' +
		'<tr><td><div style="width: 10px; height: 10px; border-radius: 50%; background: #00FF00; border: solid black 1px;"></div></td><td style="text-align: left;">No Flooding</td></tr>' +
		'<tr><td><div style="width: 10px; height: 10px; border-radius: 50%; background: #72AFE9; border: solid black 1px;"></div></td><td style="text-align: left;">Flood Category Not Defined</td></tr>' +
		'<tr><td><div style="width: 10px; height: 10px; border-radius: 50%; background: #906320; border: solid black 1px;"></div></td><td style="text-align: left;">At or Below Low Water Threshold</td></tr>' +
		'<tr><td><div style="width: 10px; height: 10px; border-radius: 50%; background: #BDC2BB; border: solid black 1px;"></div></td><td style="text-align: left;">Observations Not Current</td></tr>' +
		'<tr><td><div style="width: 10px; height: 10px; border-radius: 50%; background: #666666; border: solid black 1px;"></div></td><td style="text-align: left;">Out of Service</td></tr>' +
		'</tbody></table>';
		
		return div_ahps;
	};
	
// OBSERVED - Radar ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 

	var lightning_legend = L.control({position: 'bottomleft'}); 
													
	var legend_group = []; 
	
	for (var g1 = 1; g1 < 9; g1++) {
	
		legend_group[g1] = L.control({position: 'bottomleft'});
		
	}
	
	legend_group[1].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += 'Radar (dbz)<br><img src="https://www.weather.gov/images/box/radar/9.png" alt="legend">'; return div; };
	legend_group[2].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/radar/2.png" alt="legend">'; return div; };
	legend_group[3].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/radar/3.png" alt="legend">'; return div; };
	legend_group[4].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/radar/4.png" alt="legend">'; return div; };
	legend_group[5].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/radar/5.png" alt="legend">'; return div; };
	legend_group[6].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/radar/6.png" alt="legend">'; return div; };
	legend_group[7].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/radar/7.png" alt="legend">'; return div; };
	legend_group[8].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/radar/8.png" alt="legend">'; return div; };
	
	// Lightning 
	
		function getColor_lightning(g5) {
			return g5 > 300.00 ? '#2BFF2D' : g5 > 250.00 ? '#17A266' : g5 > 200.00 ? '#21C8FD' : g5 > 150.00 ? '#0414FB' : g5 > 100.00 ? '#400ABD' : g5 > 75.00 ? '#7F007E' :
			g5 > 50.00 ? '#FC00FC' : g5 > 25.00 ? '#CA0067' : g5 > 15.00 ? '#BA002A' : g5 > 10.00 ? '#FC0017' : g5 > 5.00 ? '#FC401A' : g5 > 2.50 ? '#FD751F' : g5 > 1.00 ? '#FDA225' : 
			g5 > 0.75 ? '#FED52D' : g5 > 0.50 ? '#FFFE34' : g5 > 0.25 ? '#FEEB7E' : g5 > 0.10 ? '#FFFFCE' :	'';
		}
	
		lightning_legend.onAdd = function (map) {
		
			var div_lightning = L.DomUtil.create('div', 'legend'), 
			strikes = [0, 0.10, 0.25, 0.50, 0.75, 1.00, 2.50, 5.00, 10.0, 15.0, 25.0, 50.0, 75.0, 100, 150, 200, 250, 300], 
			labels_lightning = [];
			
			div_lightning.innerHTML += '<span style="font-weight:bold;">Number of Lightning Strokes<br>per square km per minute</span>' + '<br>';
			
			for (var g2 = 0; g2 < strikes.length; g2++) {
				div_lightning.innerHTML +=
				'<i style="background:' + getColor_lightning(strikes[g2] + 0.01) + '"></i> ' +
				strikes[g2].toFixed(1) + (strikes[g2 + 1] ? '&ndash; ' + strikes[g2 + 1].toFixed(1) + '<br>' : '+');
			}
			return div_lightning;
		};

// OBSERVED - Satellite ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 

	var legend_group = []; 
													
	for (var h1 = 0; h1 < 11; h1++) {
	
		legend_group[h1] = L.control({position: 'bottomleft'});
		
	}

	/* SSEC Global Visible	*/ legend_group[0].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/satellite/0.png" alt="legend">'; return div; };
	/* SSEC Global Infrared	*/ legend_group[1].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/satellite/1.png" alt="legend">'; return div; };
	/* SSEC Global IR AVN	*/ legend_group[2].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/satellite/3.png" alt="legend">'; return div; };
	/* SSEC Global IR Rainbow	*/ legend_group[3].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/satellite/4.png" alt="legend">'; return div; };
	/* SSEC Global IR Funktop	*/ legend_group[4].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/satellite/5.png" alt="legend">'; return div; };
	/* SSEC Global IR Dvorak	*/ legend_group[5].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/satellite/6.png" alt="legend">'; return div; };
	/* SSEC Global IR Tops	*/ legend_group[6].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/satellite/7.png" alt="legend">'; return div; };	
	/* SSEC Global WV		*/ legend_group[7].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/satellite/2.png" alt="legend">'; return div; };
	/* SSEC Global Rain Rate	*/ legend_group[8].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://www.weather.gov/images/box/satellite/8.png" alt="legend">'; return div; };
	/* NESDIS Rain Rate Est.	*/ legend_group[9].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://realearth.ssec.wisc.edu/api/legend?products=NESDIS-GHE-HourlyRainfall" alt="legend">'; return div; };
	/* NESDIS Rain Rate Est.	*/ legend_group[10].onAdd = function (map) { var div = L.DomUtil.create('div', 'legend'); div.innerHTML += '<img src="https://realearth.ssec.wisc.edu/api/legend?products=NESDIS-BTPWgps" alt="legend">'; return div; };
	
// OBSERVED - PRECIP (hourly) ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 

	function getColor_mrms(mrms) {
		return mrms > 14.00 ? '#00FFFF' : mrms > 12.00 ? '#00E1FF' : mrms > 10.00 ? '#00C8FF' : mrms > 9.00 ? '#00AAFF' : mrms > 8.00 ? '#006DFF' : mrms > 7.00 ? '#002EFF' : mrms > 6.00 ? '#002ADC' : 
		mrms > 5.00 ? '#1400B4' : mrms > 4.00 ? '#4700B4' : mrms > 3.75 ? '#6400B4' : mrms > 3.50 ? '#64008C' : mrms > 3.25 ? '#640064' : mrms > 3.00 ? '#64003D' : mrms > 2.75 ? '#640014' : mrms > 2.50 ? '#770000' : 
		mrms > 2.25 ? '#AA0000' : mrms > 2.00 ? '#D70000' : mrms > 1.75 ? '#FF0000' : mrms > 1.50 ? '#FF6D00' : mrms > 1.25 ? '#FFA500' : mrms > 1.00 ? '#FFCD00' : mrms > 0.75 ? '#FFFF00' : mrms > 0.50 ? '#C8FF00' : 
		mrms > 0.25 ? '#00FF00' : mrms > 0.10 ? '#00B600' : mrms > 0.01 ? '#006200' : '#E8E8E8';
	}
	
	var legend_mrms = L.control({position: 'bottomleft'});

	legend_mrms.onAdd = function (map) {

		var div_mrms = L.DomUtil.create('div', 'legend'),
		range_mrms = [0.01, 0.10, 0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 1.75, 2.00, 2.25, 2.50, 2.75, 3.00, 3.25, 3.50, 3.75, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 12.00, 14.00],
		labels_mrms = [];	
		
		div_mrms.innerHTML += '<span style="font-weight:bold;">Inches of Precip</span>' + '<br>';
		
		for (var a5 = 0; a5 < range_mrms.length; a5++) {
			div_mrms.innerHTML +=
			'<i style="background:' + getColor_mrms(range_mrms[a5] + 0.01) + '"></i> ' +
			range_mrms[a5].toFixed(2) + (range_mrms[a5 + 1] ? '" &ndash; ' + range_mrms[a5 + 1].toFixed(2) + '"' + '<br>' : '+"');
		}
		return div_mrms;
	};

// OBSERVED - PRECIP (daily) ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 

	function getColor_precip_20(precip_20) {
		return precip_20 > 20.00 ? '#FFFFFF' : precip_20 > 18.00 ? '#8040A0' : precip_20 > 16.00 ? '#A061C0' : precip_20 > 14.00 ? '#FF00FF' : precip_20 > 12.00 ? '#FFC0FF' : precip_20 > 10.00 ? '#B00000' : precip_20 > 8.00  ? '#D00000' :
		precip_20 > 6.00  ? '#FF0000' : precip_20 > 5.00  ? '#FF9000' : precip_20 > 4.00  ? '#DFC000' : precip_20 > 3.00  ? '#FFFF00' : precip_20 > 2.50  ? '#FFFFA0' : precip_20 > 2.00  ? '#009000' : precip_20 > 1.50  ? '#00C000' : 
		precip_20 > 1.00  ? '#00FF00' : precip_20 > 0.75  ? '#C0FFC0' : precip_20 > 0.50  ? '#0000F0' : precip_20 > 0.25  ? '#0090F0' : precip_20 > 0.10  ? '#00E8E8' : '#C0FFFF';
	}

	function getColor_precip_70(precip_70) {
		return precip_70 > 70.00 ? '#FFFFFF' : precip_70 > 60.0 ? '#8040A0' : precip_70 > 55.0 ? '#A060C0' : precip_70 > 50.0 ? '#FF00FF' : precip_70 > 45.0 ? '#FFC0FF' : precip_70 > 40.0 ? '#B00000' : precip_70 > 35.0  ? '#D00000' :
		precip_70 > 30.0  ? '#FF0000' : precip_70 > 25.0  ? '#FF9000' : precip_70 > 20.0  ? '#DFC000' : precip_70 > 15.0  ? '#FFFF00' : precip_70 > 12.0  ? '#FFFFA0' : precip_70 > 10.0  ? '#009000' : precip_70 > 8.0  ? '#00C000' : precip_70 > 6.0  ? '#00FF00' :
		precip_70 > 4.0  ? '#C0FFC0' : precip_70 > 2.0  ? '#0000F0' : precip_70 > 1.0  ? '#0090F0' : precip_70 > 0.5  ? '#00E8E8' : '#C0FFFF';
	}									

	var legend_precip_20 = L.control({position: 'bottomleft'});

	legend_precip_20.onAdd = function (map) {

		var div_precip_20 = L.DomUtil.create('div', 'legend'),
		range_precip_20 = [0.01, 0.10, 0.25, 0.50, 0.75, 1.00, 1.50, 2.00, 2.50, 3.00, 4.00, 5.00, 6.00, 8.00, 10.00, 12.00, 14.00, 16.00, 18.00, 20.00],
		labels_precip_20 = [];		

		div_precip_20.innerHTML += '<span style="font-weight:bold;">Inches of Precip</span>' + '<br>';

		for (var c5 = 0; c5 < range_precip_20.length; c5++) {
			div_precip_20.innerHTML +=
			'<i style="background:' + getColor_precip_20(range_precip_20[c5] + 0.01) + '"></i> ' +
			range_precip_20[c5].toFixed(2) + (range_precip_20[c5 + 1] ? '" &ndash; ' + range_precip_20[c5 + 1].toFixed(2) + '"' + '<br>' : '+"');
		}
		return div_precip_20;
	};

	var legend_precip_70 = L.control({position: 'bottomleft'});

	legend_precip_70.onAdd = function (map) {

		var div_precip_70 = L.DomUtil.create('div', 'legend'),
		range_precip_70 = [0.0, 0.5, 1.0, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 15.0, 20.0, 25.0, 30.0, 35.0, 40.0, 45.0, 50.0, 55.0, 60.0, 70.0],
		labels_precip_70 = [];
		
		div_precip_70.innerHTML += '<span style="font-weight:bold;">Inches of Precip</span>' + '<br>';

		for (var c6 = 0; c6 < range_precip_70.length; c6++) {
			div_precip_70.innerHTML +=
			'<i style="background:' + getColor_precip_70(range_precip_70[c6] + 0.01) + '"></i> ' +
			range_precip_70[c6].toFixed(1) + (range_precip_70[c6 + 1] ? '" &ndash; ' + range_precip_70[c6 + 1].toFixed(1) + '"' + '<br>' : '+"');
		}
		return div_precip_70;
	};						

// OBSERVED - PRECIP DEPARTURE FROM NORMAL (daily) ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 

	function getColor_departure(departure) {
		return departure > 8.00 ? '#FA00FA' : departure > 5.00 ? '#A338E1' : departure > 4.00 ? '#7D4BE1' : departure > 3.00 ? '#001496' : departure > 2.00 ? '#14C8FA' : departure > 1.00 ? '#00640B' : departure > 0.50 ? '#00FA14' :
		departure > -0.50 ? '#DCDCDC' : departure > -1.00 ? '#F2FAA0' : departure > -2.00 ? '#FAFA00' : departure > -3.00 ? '#FFD967' : departure > -4.00 ? '#FA9600' : departure > -5.00 ? '#FA0000' : departure > -8.00 ? '#AF0000' : '#800B0B';
	}
	
	var legend_departure = L.control({position: 'bottomleft'});

	legend_departure.onAdd = function (map) {

		var div_departure = L.DomUtil.create('div', 'legend'),
		rainfall_departure = [-10, -8, -5, -4, -3, -2, -1, -0.5, 0.5, 1, 2, 3, 4, 5, 8],
		labels_departure = [];
		
		div_departure.innerHTML += '<span style="font-weight:bold;">Dept. from Normal Precip (in.)</span>' + '<br>';

		for (var d5 = 0; d5 < rainfall_departure.length; d5++) {
			if (rainfall_departure[d5] === -10) {
				div_departure.innerHTML +=
				'<i style="background:' + getColor_departure(rainfall_departure[d5] + 0.01) + '"></i> ' +
				'< ' + (rainfall_departure[d5 + 1].toFixed(2) + '"' + '<br>');
			} else {
				div_departure.innerHTML +=
				'<i style="background:' + getColor_departure(rainfall_departure[d5] + 0.01) + '"></i> ' +
				rainfall_departure[d5].toFixed(2) + (rainfall_departure[d5 + 1] ? '" to ' + rainfall_departure[d5 + 1].toFixed(2) + '"' + '<br>' : '+"');
			}
		}						

		return div_departure;
	};

// OBSERVED - PRECIP PERCENT OF NORMAL (daily) ........................................................................................................................................................................................................................................................................................................................................................................................................................................ 

	function getColor_percent(percent) {
		return percent > 600 ? '#FA00FA' : percent > 400  ? '#A338E1' : percent > 300  ? '#7D4BE1' : percent > 200  ? '#001496' : percent > 150  ? '#14C8FA' : percent > 125  ? '#00640B' : percent > 110  ? '#00FA14' : 
		percent > 100  ? '#DCDCDC' : percent > 90  ? '#F2FAA0' : percent > 75  ? '#FAFA00' : percent > 50  ? '#FFD967' : percent > 25  ? '#FA9600' : percent > 10  ? '#FA0000' : percent > 5  ? '#AF0000' : '#800B0B';
	}	

	var legend_percent = L.control({position: 'bottomleft'});

	legend_percent.onAdd = function (map) {

		var div_percent = L.DomUtil.create('div', 'legend'),
		rainfall_percent = [0, 5, 10, 25, 50, 75, 90, 100, 110, 125, 150, 200, 300, 400, 600],
		labels_percent = [];
		
		div_percent.innerHTML += '<span style="font-weight:bold;">% of Normal Precip</span>' + '<br>';

		for (var e5 = 0; e5 < rainfall_percent.length; e5++) {
			div_percent.innerHTML +=
			'<i style="background:' + getColor_percent(rainfall_percent[e5] + 1) + '"></i> ' +
			rainfall_percent[e5] + (rainfall_percent[e5 + 1] ? '% &ndash; ' + rainfall_percent[e5 + 1] + '%' + '<br>' : '+%');
		}

		return div_percent;
	};

// SNOWFALL OBSERVATIONS ........................................................................................................................................................................................................................................................................................................................................................................................................................................

	// Snowfall

	function getColor_snow(snow) {
		return snow > 36.0 ? '#2B002E' : snow > 30.0 ? '#690000' : snow > 24.0 ? '#9E0000' : snow > 18.0 ? '#DB1400' : snow > 12.0 ? '#FF8700' : snow > 8.0 ? '#FFC400' : snow > 6.0 ? '#FFFF96' : snow > 4.0 ? '#082694' :
		snow > 3.0 ? '#08519C' : snow > 2.0 ? '#3182BD' : snow > 1.0 ? '#6BAED6' : '#BDD7E7'; 
	}
					
	var legend_snow = L.control({position: 'bottomleft'});
	
	legend_snow.onAdd = function (map) {

		var div_snow = L.DomUtil.create('div', 'legend'),
		snow = [0, 1, 2, 3, 4, 6, 8, 12, 18, 24, 30, 36],
		labels_snow = [];
		
		div_snow.innerHTML += '<span style="font-weight:bold;">Snowfall<br>in inches</span>' + '<br>';

		for (var f1 = 0; f1 < snow.length; f1++) {
			if (snow[f1] === 0) {
				div_snow.innerHTML +=
				'<i style="background:' + getColor_snow(snow[f1] + 1) + '"></i> ' +
				'< ' + (snow[f1 + 1] + '"' + '<br>');
			} else {
				div_snow.innerHTML +=
				'<i style="background:' + getColor_snow(snow[f1] + 1) + '"></i> ' +
				snow[f1] + (snow[f1 + 1] ? '" &ndash; ' + snow[f1 + 1] + '"<br>' : '+"');
			}
		}
		return div_snow;				
	};

	// Snow Water Equivalent

	function getColor_swe(swe) {
		return swe > 100.0 ? '#B39E99' : swe > 75.0 ? '#C38E96' : swe > 50.0 ? '#BD7390' : swe > 25.0 ? '#BD589A' : swe > 15.0 ? '#9B3594' : swe > 10.0 ? '#8721A4' : swe > 5.0 ? '#4F1490' : swe > 2.5 ? '#472EA7' : swe > 1.0 ? '#4549AB' :
		swe > 0.5 ? '#5F7EB5' : swe > 0.1 ? '#80A5C0' : '#90AFB4'; 
	}
					
	var legend_swe = L.control({position: 'bottomleft'});
	
	legend_swe.onAdd = function (map) {

		var div_swe = L.DomUtil.create('div', 'legend'),
		swe = [0.01, 0.1, 0.5, 1.0, 2.5, 5.0, 10.0, 15.0, 25.0, 50.0, 75.0, 100.0],
		labels_swe = [];
		
		div_swe.innerHTML += '<span style="font-weight:bold;">Snow Water Equivalent<br>in centimeters</span>' + '<br>';

		for (var f2 = 0; f2 < swe.length; f2++) {
			div_swe.innerHTML +=
			'<i style="background:' + getColor_swe(swe[f2] + 0.01) + '"></i> ' +
			swe[f2].toFixed(2) + (swe[f2 + 1] ? ' &ndash; ' + swe[f2 + 1].toFixed(2) + '<br>' : '+');
		}
		return div_swe;
	};
				
	// Snow Depth

	function getColor_snow_depth(snow_depth) {
		return snow_depth > 1000 ? '#8B4545' : snow_depth > 750 ? '#992A4F' : snow_depth > 500 ? '#A91477' : snow_depth > 250 ? '#B400B1' : snow_depth > 150 ? '#7D00BB' : snow_depth > 100 ? '#5721C3' : snow_depth > 50 ? '#3D40C2' : 
		snow_depth > 25 ? '#4F79C8' : snow_depth > 10 ? '#64A9CB' : snow_depth > 5 ? '#67C1C4' : snow_depth > 1 ? '#ABC1BF' : '#00FFFFFF'; 
	}
					
	var legend_sd = L.control({position: 'bottomleft'});
	
	legend_sd.onAdd = function (map) {

		var div_sd = L.DomUtil.create('div', 'legend'),
		sd = [1, 5, 10, 25, 50, 100, 150, 250, 500, 750, 1000],
		labels_sd = [];
		
		div_sd.innerHTML += '<span style="font-weight:bold;">Snow Depth<br>in centimeters</span>' + '<br>';

		for (var f3 = 0; f3 < sd.length; f3++) {
			div_sd.innerHTML +=
			'<i style="background:' + getColor_snow_depth(sd[f3] + 1) + '"></i> ' +
			sd[f3] + (sd[f3 + 1] ? ' &ndash; ' + sd[f3 + 1] + '<br>' : '+');
		}
		return div_sd;
	};
	
// OBSERVED - SATELLITE ........................................................................................................................................................................................................................................................................................................................................................................................................................................
				

// In order above ... Visible / IR / IR-AVN / IR-Rainbow / IR-Funktop / IR-Dvorak / IR-Tops / Water Vapor Gradient
											
// In order above ... Satellite-Derived Rain Rate (categorical) / Satellite-Derived Rain Rate (estimator) / Total Precipitable Water	

// OBSERVED - RADAR ........................................................................................................................................................................................................................................................................................................................................................................................................................................

					
// FORECAST - PRECIPITATION ........................................................................................................................................................................................................................................................................................................................................................................................................................................

	function getColor_wpc(wpc) {
		return wpc > 20.00 ? '#FFC0B7' : wpc > 15.00 ? '#FFFF00' : wpc > 10.00 ? '#FFD700' : wpc > 7.00 ? '#CE8500' : wpc > 5.00 ? '#FF7F00' : wpc > 4.00 ? '#EE4000' : wpc > 3.00 ? '#FF0000' : wpc > 2.50 ? '#8B0000' : wpc > 2.00 ? '#8B008B' : 
		wpc > 1.75 ? '#912EEE' : wpc > 1.50 ? '#8968CD' : wpc > 1.25 ? '#00EEEE' : wpc > 1.00 ? '#00B2EE' : wpc > 0.75 ? '#1B90FF' : wpc > 0.50 ? '#0B4D8B' : wpc > 0.25 ? '#0B8B00' : wpc > 0.10 ? '#00FF00' : '#7FFF00';
	}
	
	var legend_wpc = L.control({position: 'bottomleft'});
																				
	legend_wpc.onAdd = function (map) {

		var div_wpc = L.DomUtil.create('div', 'legend'),
		wpc = [0.01, 0.10, 0.25, 0.50, 0.75, 1.00, 1.25, 1.50, 1.75, 2.00, 2.50, 3.00, 4.00, 5.00, 7.00, 10.00, 15.00, 20.00],
		labels_wpc = [];
		
		div_wpc.innerHTML += '<span style="font-weight:bold;">Forecast<br>Inches of Precip</span>' + '<br>';

		for (var g5 = 0; g5 < wpc.length; g5++) {
			div_wpc.innerHTML +=
			'<i style="background:' + getColor_wpc(wpc[g5] + 0.01) + '"></i> ' +
			wpc[g5].toFixed(2) + (wpc[g5 + 1] ? '" &ndash; ' + wpc[g5 + 1].toFixed(2) + '"<br>' : '+"');
		}
		return div_wpc;
	};

// FORECAST - FLASH FLOOD GUIDANCE ........................................................................................................................................................................................................................................................................................................................................................................................................................................

	function getColor_ffg(ffg) {
		return ffg > 5.00 ? '#8B008B' : ffg > 4.00  ? '#902EEE' : ffg > 3.00 ? '#0000FF' : ffg > 2.50 ? '#00EEEE' : ffg > 2.00 ? '#1B90FF' : ffg > 1.50 ? '#008B00' : 
		ffg > 1.00 ? '#7FFF00' : ffg > 0.75 ? '#FFFF00' : ffg > 0.50 ? '#FFD700' : ffg > 0.25 ? '#FF0000': '#00FFFFFF';
	}
	
	var legend_ffg = L.control({position: 'bottomleft'});
	
	legend_ffg.onAdd = function (map) {

		var div_ffg = L.DomUtil.create('div', 'legend'),
		ffg = [0.25, 0.50, 0.75, 1.00, 1.50, 2.00, 2.50, 3.00, 4.00, 5.00],
		labels_ffg = [];
		
		div_ffg.innerHTML += '<span style="font-weight:bold;">Flash Flood Guidance<br>in inches</span>' + '<br>';

		for (var h5 = 0; h5 < ffg.length; h5++) {
			div_ffg.innerHTML +=
			'<i style="background:' + getColor_ffg(ffg[h5] + 0.01) + '"></i> ' +
			ffg[h5].toFixed(2) + (ffg[h5 + 1] ? '" &ndash; ' + ffg[h5 + 1].toFixed(2) + '"<br>' : '+"');
		}
		return div_ffg;
	};
												
// FORECAST - EXCESSIVE RAINFALL OUTLOOK ........................................................................................................................................................................................................................................................................................................................................................................................................................................

	function getColor_ero(ero) {
		return ero == 'Marginal (5 - 10%)' ? '#38A800' :
		ero == 'Slight (10 - 20%)' ? '#FFFF00' : 
		ero == 'Moderate (20 - 50%)' ? '#F50000' : 
		'#FF69C5';
	}

	var legend_ero = L.control({position: 'bottomleft'});

	legend_ero.onAdd = function (map) {

		var div_ero = L.DomUtil.create('div', 'legend'),
		ero = ['High (> 50%)', 'Moderate (20 - 50%)', 'Slight (10 - 20%)', 'Marginal (5 - 10%)'],
		labels_ero = [];
		
		div_ero.innerHTML += '<span style="font-weight:bold;">Excessive Rainfall Outlook</span><br>Risk of rainfall exceeding<br>flash flood guidance within<br>25 miles of a point' + '<br>';

		for (var i5 = 0; i5 < ero.length; i5++) {
			div_ero.innerHTML +=
			'<i style="background:' + getColor_ero(ero[i5]) + '"></i> ' +
			ero[i5] + '<br>';
		}
		return div_ero;
	};

// FORECAST - RIVER FLOODING ........................................................................................................................................................................................................................................................................................................................................................................................................................................

	function getColor_river_flood_potential(river_flood_potential) {
		return river_flood_potential == 'Occurring or Imminent' ? '#FF0000' :
		river_flood_potential == 'Likely' ? '#FFAA00' : 
		'#FFFF00';
	}

	var legend_river_flood_potential = L.control({position: 'bottomleft'});

	legend_river_flood_potential.onAdd = function (map) {

		var div_river_flood_potential = L.DomUtil.create('div', 'legend'),
		river_flood_potential = ['Possible', 'Likely', 'Occurring or Imminent'],
		labels_river_flood_potential = [];
		
		div_river_flood_potential.innerHTML += '<span style="font-weight:bold;">Flood Outlook</span>' + '<br>';

		// loop through our density intervals and generate a label with a colored square for each interval
		for (var i6 = 0; i6 < river_flood_potential.length; i6++) {
			div_river_flood_potential.innerHTML +=
			'<i style="background:' + getColor_river_flood_potential(river_flood_potential[i6]) + '"></i> ' +
			river_flood_potential[i6] + '<br>';
		}
		return div_river_flood_potential;
	};
		
// EVAPOTRANSPIRATION ........................................................................................................................................................................................................................................................................................................................................................................................................................................

	// Evapotranspiration - Observed (inches)

		var pet_keys = [];
		var pet_time; 
		
		var legend_pet = L.control({position: 'bottomleft'});
		
		legend_pet.onAdd = function (map) {
			
			var div_pet = L.DomUtil.create('div', 'legend'),
			pet = pet_keys,
			labels_pet = [];
			
			pet_color = ['#01665E', '#35978F', '#80CDC1', '#C7EAE5', '#F5F5F5', '#F6E8C3', '#DFC27D', '#BF812D', '#8C510A'];
			
			div_pet.innerHTML += '<span style="font-weight:bold;">Evapotranspiration<br>Observed (inches) - ' + pet_time + '</span>' + '<br>';
			
			for (var k5 = 0; k5 < pet.length-1; k5++) {
				div_pet.innerHTML +=
					'<i style="background:' + pet_color[k5] + '"></i> ' +
					pet[k5] + (pet[k5 + 1] ? ' to ' + pet[k5 + 1] + '<br>' : ' to ' + pet[9]);
			}
			return div_pet;				
		};	
	
	// Evapotranspiration - Anomaly (percent)

		var eon_keys = [];
		var eon_time; 
		
		var legend_eon = L.control({position: 'bottomleft'});
		
		legend_eon.onAdd = function (map) {
			
			var div_eon = L.DomUtil.create('div', 'legend'),
			eon = eon_keys,
			labels_eon = [];
			
			eon_color = ['#01665E', '#35978F', '#80CDC1', '#C7EAE5', '#F5F5F5', '#F6E8C3', '#DFC27D', '#BF812D', '#8C510A'];
									
			div_eon.innerHTML += '<span style="font-weight:bold;">Evapotranspiration<br>Anomaly (percent) - ' + eon_time + '</span>' + '<br>';
			
			for (var k6 = 0; k6 < eon.length-1; k6++) {
				div_eon.innerHTML +=
					'<i style="background:' + eon_color[k6] + '"></i> ' +
					eon[k6] + (eon[k6 + 1] ? ' to ' + eon[k6 + 1] + '<br>' : ' to ' + eon[9]);
			}
			return div_eon;				
		};	
	
	// Evapotranspiration - Anomaly (inches)

		var edn_keys = [];
		var edn_time; 
		
		var legend_edn = L.control({position: 'bottomleft'});
		
		legend_edn.onAdd = function (map) {
			
			var div_edn = L.DomUtil.create('div', 'legend'),
			edn = edn_keys,
			labels_edn = [];
			
			edn_color = ['#01665E', '#35978F', '#80CDC1', '#C7EAE5', '#F5F5F5', '#F6E8C3', '#DFC27D', '#BF812D', '#8C510A'];
									
			div_edn.innerHTML += '<span style="font-weight:bold;">Evapotranspiration<br>Anomaly (inches) - ' + edn_time + '</span>' + '<br>';
			
			for (var k7 = 0; k7 < edn.length-1; k7++) {
				div_edn.innerHTML +=
					'<i style="background:' + edn_color[k7] + '"></i> ' +
					edn[k7] + (edn[k7 + 1] ? ' to ' + edn[k7 + 1] + '<br>' : ' to ' + edn[9]);
			}
			return div_edn;				
		};	
	
	// Evapotranspiration - Anomaly (percentile)

		var legend_eop = L.control({position: 'bottomleft'});
		
		legend_eop.onAdd = function (map) {
			
			var div_eop = L.DomUtil.create('div', 'legend'),
			eop = ['Min','0','10','33','66','90','100','Max']; 
			labels_eop = [];
			
			eop_color = ['#01665E', '#5AB4AC', '#C7EAE5', '#F5F5F5', '#F6E8C3', '#D8B365', '#8C510A'];
									
			div_eop.innerHTML += '<span style="font-weight:bold;">Evapotranspiration<br>Anomaly (percentile) </span>' + '<br>' + '<i style="background:' + eop_color[0] + '"></i> Min <br>' ;
			
			console.log(eop.length); //8
			console.log(eop_color.length); //7
			
			for (var k8 = 1; k8 <= eop.length-2; k8++) {
				div_eop.innerHTML +=
					'<i style="background:' + eop_color[k8] + '"></i> ' +
					(eop[k8 + 2] ? eop[k8] + ' to ' + eop[k8 + 1] + '<br>' : 'Max');
			}
			return div_eop;			
		};
							
// VAPOR PRESSURE DEFICIT ........................................................................................................................................................................................................................................................................................................................................................................................................................................

	// Vapor Pressure Deficit (observed)

		function getColor_vpd(vpd) {
			return vpd > 3.6 ? '#662506' : vpd > 3.1 ? '#993404' : vpd > 2.7 ? '#CC4C02' : vpd > 2.2 ? '#EC7014' : vpd > 1.8 ? '#FE9929' : vpd > 1.3 ? '#FEC44F' : vpd > 0.9 ? '#FEE391' : vpd > 0.4 ? '#FFF7BC' : '#FFFFE5';
		}

		var legend_vpd = L.control({position: 'bottomleft'});
		
		legend_vpd.onAdd = function (map) {
		
			var div_vpd = L.DomUtil.create('div', 'legend'),
			vpd = [0.0,0.4,0.9,1.3,1.8,2.2,2.7,3.1,3.6],
			labels_vpd = [];
			
			div_vpd.innerHTML += '<span style="font-weight:bold;">Vapor Pressure Deficit (kPa)</span>' + '<br>';
			
			for (var l5 = 0; l5 < vpd.length; l5++) {
				div_vpd.innerHTML +=
					'<i style="background:' + getColor_vpd(vpd[l5] + 0.1) + '"></i> ' +
					vpd[l5] + (vpd[l5 + 1] ? ' to ' + vpd[l5 + 1] + '<br>' : ' to 4.0');
			}
			return div_vpd;			
		};	

	// Vapor Pressure Deficit (anomaly - percent)

		function getColor_vpn(vpn) {
			return vpn > 0.7 ? '#8C510A' : vpn > 0.5 ? '#BF812D' : vpn > 0.3 ? '#DFC27D' : vpn > 0.1 ? '#F6E8C3' : vpn > -0.1 ? '#F5F5F5' : vpn > -0.3 ? '#C7EAE5' : vpn > -0.5 ? '#80CDC1' : vpn > -0.7 ? '#35978F' : '#01665E';
		}

		var legend_vpn = L.control({position: 'bottomleft'});
		
		legend_vpn.onAdd = function (map) {
		
			var div_vpn = L.DomUtil.create('div', 'legend'),
			vpn = [-0.9,-0.7,-0.5,-0.3,-0.1,0.1,0.3,0.5,0.7],
			labels_vpn = [];
			
			div_vpn.innerHTML += '<span style="font-weight:bold;">Vapor Pressure Deficit Anomaly (kPa)</span>' + '<br>';
			
			for (var l6 = 0; l6 < vpn.length; l6++) {
				div_vpn.innerHTML +=
					'<i style="background:' + getColor_vpn(vpn[l6] + 0.1) + '"></i> ' +
					vpn[l6] + (vpn[l6 + 1] ? ' to ' + vpn[l6 + 1] + '<br>' : ' to 0.9');
			}
			return div_vpn;				
		};	
	
	// Vapor Pressure Deficit (anomaly - percentile)		

		function getColor_vpp(vpp) {
			return vpp > 90 ? '#5AB4AC' : vpp > 66 ? '#C7EAE5' : vpp > 33 ? '#F5F5F5' : vpp > 10 ? '#F6E8C3' : vpp > 0 ? '#D8B365' : '#8C510A';
		}

		var legend_vpp = L.control({position: 'bottomleft'});
		
		legend_vpp.onAdd = function (map) {
		
			var div_vpp = L.DomUtil.create('div', 'legend'),
			vpp = [0,10,33,66,90],
			labels_vpp = [];
			
			div_vpp.innerHTML += '<span style="font-weight:bold;">Vapor Pressure Percentile <br>(1979-2015)</span><br><i style="background:#8C510A"></i> Min <br>';
			
			for (var l7 = 0; l7 < vpp.length; l7++) {
				div_vpp.innerHTML +=
					'<i style="background:' + getColor_vpp(vpp[l7] + 1) + '"></i> ' +
					vpp[l7] + (vpp[l7 + 1] ? ' to ' + vpp[l7 + 1] + '<br>' : ' to 100');
			}
			
			div_vpp.innerHTML += '<br> <i style="background:#01665E"></i> Max <br>';
			
			return div_vpp;				
		};

// DROUGHT ........................................................................................................................................................................................................................................................................................................................................................................................................................................

	// Palmer Drought Severity Index

		function getColor_pdsi(pdsi) {
			return pdsi > 5 ? '#2166AC' : pdsi > 4 ? '#4393C3' : pdsi > 2 ? '#92C5DE' : pdsi > 1 ? '#D1E5F0' : pdsi > -1 ? '#F7F7F7' : pdsi > -2 ? '#FDDBC7' : pdsi > -4 ? '#F4A582' : pdsi > -5 ? '#D6604D' : '#B2182B';
		}
						
		var legend_pdsi = L.control({position: 'bottomleft'});
		
		legend_pdsi.onAdd = function (map) {

			var div_pdsi = L.DomUtil.create('div', 'legend'),
			pdsi = [-7, -5, -4, -2, -1, 1, 2, 4, 5],
			labels_pdsi = [];
			
			div_pdsi.innerHTML += '<span style="font-weight:bold;">Palmer Drought<br>Severity Index</span>' + '<br>';

			for (var m1 = 0; m1 < pdsi.length; m1++) {
				div_pdsi.innerHTML +=
					'<i style="background:' + getColor_pdsi(pdsi[m1] + 1) + '"></i> ' +
					pdsi[m1] + (pdsi[m1 + 1] ? ' to ' + pdsi[m1 + 1] + '<br>' : ' to 7');
			}
			return div_pdsi;				
		};
	
	// Days since >= 0.1" Precipitation, Days since >= 0.25" Precipitation

		var dsp_keys = [];
		var dsp_time; 
		
		var legend_dsp = L.control({position: 'bottomleft'});
		
		legend_dsp.onAdd = function (map) {
			
			var div_dsp = L.DomUtil.create('div', 'legend'),
			dsp = dsp_keys,
			labels_dsp = [];
			
			dsp_color = ['#01665E', '#35978F', '#80CDC1', '#C7EAE5', '#F5F5F5', '#F6E8C3', '#DFC27D', '#BF812D', '#8C510A'];
			
			div_dsp.innerHTML += '<span style="font-weight:bold;">Days Since Precipitation<br>Observed (days) - ' + dsp_time + '</span>' + '<br>';
			
			for (var m2 = 0; m2 < dsp.length-1; m2++) {
				div_dsp.innerHTML +=
					'<i style="background:' + dsp_color[m2] + '"></i> ' +
					dsp[m2] + (dsp[m2 + 1] ? ' to ' + dsp[m2 + 1] + '<br>' : ' to ' + dsp[9]);
			}
			return div_dsp;				
		};	

	// Drought Monitor	

		function getColor_drought(drought) {
			return drought == 'No Data' ? '#9C9C9C' :
			drought == 'D4 (Exceptional Drought)' ? '#730000' : 
			drought == 'D3 (Extreme Drought)' ? '#E60000' : 
			drought == 'D2 (Severe Drought)' ? '#FFAA00' : 
			drought == 'D1 (Moderate Drought)' ? '#FCD37F' : 
			drought == 'D0 (Abnormally Dry)' ? '#FFFF00' : 
			'#FFFFFF';
		}
		
		var legend_drought = L.control({position: 'bottomleft'});

		legend_drought.onAdd = function (map) {

			var div_drought = L.DomUtil.create('div', 'legend'),
			drought = ['No Data', 'D4 (Exceptional Drought)', 'D3 (Extreme Drought)', 'D2 (Severe Drought)', 'D1 (Moderate Drought)', 'D0 (Abnormally Dry)', 'None'],
			labels_drought = [];
			
			div_drought.innerHTML += '<span style="font-weight:bold;">Drought Intensity and Impacts</span>' + '<br>';

			for (var m3 = 0; m3 < drought.length; m3++) {
				div_drought.innerHTML +=
				'<i style="background:' + getColor_drought(drought[m3]) + '"></i> ' +
				drought[m3] + '<br>';
			}
			return div_drought;
		};						

	// Drought Outlooks (monthly and seasonal) 

		function getColor_drought_out(drought_out) {
			return drought_out == 'Persistence' ? '#9B6449' :
			drought_out == 'Improvement' ? '#DED2BC' : 
			drought_out == 'Removal' ? '#B2AD69' : 
			'#FFDE64';
		}

		var legend_drought_out = L.control({position: 'bottomleft'});

		legend_drought_out.onAdd = function (map) {

			var div_drought_out = L.DomUtil.create('div', 'legend'),
			drought_out = ['Development', 'Removal', 'Improvement', 'Persistence'],
			labels_drought_out = [];
			
			div_drought_out.innerHTML += '<span style="font-weight:bold;">Drought Outlook</span>' + '<br>';

			for (var m4 = 0; m4 < drought_out.length; m4++) {
				div_drought_out.innerHTML +=
				'<i style="background:' + getColor_drought_out(drought_out[m4]) + '"></i> ' +
				drought_out[m4] + '<br>';
			}
			return div_drought_out;
		};

// FORECAST - CLIMATE ........................................................................................................................................................................................................................................................................................................................................................................................................................................

	// Climate Outlooks (Temperature)

		var legend_climate_temp = L.control({position: 'bottomleft'});
			
		legend_climate_temp.onAdd = function (map) {
		
			var div_climate_temp = L.DomUtil.create('div', 'legend');
			
			climate_temp_color = ['#62212A','#8A2E38','#CC3147','#C72E2A','#DA5731','#E38B4B','#E7B168','#FFFFFF','#BFCBE4','#A0C0DF','#77B5E2','#389FDC','#005DA1','#2E216F','#211451']; 
			climate_temp_range = ['Above 90','Above 80','Above 70','Above 60','Above 50','Above 40','Above 33','Equal Chances','Below 33','Below 40','Below 50','Below 60','Below 70','Below 80','Below 90'];
			
			div_climate_temp.innerHTML += '<span style="font-weight:bold;">Temperature<br>Probability (%)<br>of being ...</span>' + '<br>';
				
			for (var n9 = 0; n9 < climate_temp_color.length; n9++) {
				div_climate_temp.innerHTML +=
					'<i style="background:' + climate_temp_color[n9] + '"></i> ' + climate_temp_range[n9] + '<br>';
			}
			return div_climate_temp;		
		};

	// Climate Outlooks (Precipitation)

		var legend_climate_precip = L.control({position: 'bottomleft'});
				
		legend_climate_precip.onAdd = function (map) {
		
			var div_climate_precip = L.DomUtil.create('div', 'legend');
			
			climate_precip_color = ['#2A5514','#2A553D','#008E40','#387C5D','#49AE38','#95CE7F','#B3D9AB','#FFFFFF','#F0D493','#D8A74F','#BB6D35','#9B4F31','#934738','#804000','#4F2E2E']; 
			climate_precip_range = ['Above 90','Above 80','Above 70','Above 60','Above 50','Above 40','Above 33','Equal Chances','Below 33','Below 40','Below 50','Below 60','Below 70','Below 80','Below 90'];
			
			div_climate_precip.innerHTML += '<span style="font-weight:bold;">Precipitation<br>Probability (%)<br>of being ...</span>' + '<br>';
				
			for (var n10 = 0; n10 < climate_precip_color.length; n10++) {
				div_climate_precip.innerHTML +=
					'<i style="background:' + climate_precip_color[n10] + '"></i> ' + climate_precip_range[n10] + '<br>';
			}
			return div_climate_precip;			
		};
					
// SOILS ........................................................................................................................................................................................................................................................................................................................................................................................................................................

	// Avialble water holding capacity (total)

		var legend_awhc = L.control({position: 'bottomleft'});
		
		legend_awhc.onAdd = function (map) {
		
			var div_awhc = L.DomUtil.create('div', 'legend');
			
			div_awhc.innerHTML += '<span style="font-weight:bold;">Avail. Water Holding Capacity<br>(total cm)</span>' + '<br>' +
			'<table><tbody>' +
			'<th></th><th>Class</th><th>AWC (cm)</th>' +
			'<tr><td style="background-color: rgb(26,152,80); width: 40px; border: 1px solid black;"></td><td>High</td><td style="text-align: right;">&gt; 22.5</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(166,217,106); width: 40px; border: 1px solid black;"></td><td>Moderate</td><td style="text-align: right;">15.0 - 22.5</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(254,224,139); width: 40px; border: 1px solid black;"></td><td>Low</td><td style="text-align: right;">7.5 - 15.0</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(244,109,67); width: 40px; border: 1px solid black;"></td><td >Very low</td><td style="text-align: right;">&lt; 7.5</td>'
			'</tr></tbody></table>';
			
			return div_awhc;
		};
	
	// Available water holding capacity (0 - 25 cm)

		var legend_awhc_0_25 = L.control({position: 'bottomleft'});
		
		legend_awhc_0_25.onAdd = function (map) {
		
			var div_awhc_0_25 = L.DomUtil.create('div', 'legend');
		
			div_awhc_0_25.innerHTML += '<span style="font-weight:bold;">Avail. Water Holding Capacity<br>(0 - 25 cm)</span>' + '<br>' +
			'<table><tbody>' +
			'<th></th><th>Class</th><th>AWC (cm)</th>' +
			'<tr><td style="background-color: rgb(26,152,80); width: 40px; border: 1px solid black;"></td><td>High</td><td  style="text-align: right;">&gt; 6</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(166,217,106); width: 40px; border: 1px solid black;"></td><td>Moderate</td><td style="text-align: right;">4 - 6</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(254,224,139); width: 40px; border: 1px solid black;"></td><td>Low</td><td style="text-align: right;">2 - 4</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(244,109,67); width: 40px; border: 1px solid black;"></td><td >Very low</td><td style="text-align: right;">&lt; 2</td>'
			'</tr></tbody></table>';
			
			return div_awhc_0_25;
		};

	// Available water holding capacity (0 - 50 cm)

		var legend_awhc_0_50 = L.control({position: 'bottomleft'});
		
		legend_awhc_0_50.onAdd = function (map) {
		
			var div_awhc_0_50 = L.DomUtil.create('div', 'legend');
		
			div_awhc_0_50.innerHTML += '<span style="font-weight:bold;">Avail. Water Holding Capacity<br>(0 - 50 cm)</span>' + '<br>' +
			'<table><tbody>' +
			'<th></th><th>Class</th><th>AWC (cm)</th>' +
			'<tr><td style="background-color: rgb(26,152,80); width: 40px; border: 1px solid black;"></td><td>High</td><td style="text-align: right;">&gt; 12</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(166,217,106); width: 40px; border: 1px solid black;"></td><td>Moderate</td><td style="text-align: right;">8 - 12</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(254,224,139); width: 40px; border: 1px solid black;"></td><td>Low</td><td style="text-align: right;">4 - 8</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(244,109,67); width: 40px; border: 1px solid black;"></td><td >Very low</td><td style="text-align: right;">&lt; 4</td>'
			'</tr></tbody></table>';
			
			return div_awhc_0_50;
		};

	// Bulk Density

		var legend_bulk_density = L.control({position: 'bottomleft'});
		
		legend_bulk_density.onAdd = function (map) {
		
			var div_bulk_density = L.DomUtil.create('div', 'legend');
		
			div_bulk_density.innerHTML += '<span style="font-weight:bold;">Bulk Density (g/cm<sup>3</sup>)</span>' + '<br>' +
			'<table><tbody>' + '<tr><td style="background-color: rgb(253,231,37); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">&gt; 1.6</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(143,215,68); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">1.5 - 1.6</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(53,183,121); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">1.4 - 1.5</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(33,144,140); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">1.3 - 1.4</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(49,104,142); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">1.2 - 1.3</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(68,58,131); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">1.0 - 1.2</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(68,1,84); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">&lt; 1.0</td>' +
			'</tr></tbody></table>';
			
			return div_bulk_density;
		};
					
	// Drainage Class

		var legend_drainage_class = L.control({position: 'bottomleft'});
		
		legend_drainage_class.onAdd = function (map) {
		
			var div_drainage_class = L.DomUtil.create('div', 'legend');
		
			div_drainage_class.innerHTML += '<span style="font-weight:bold;">Drainage Class</span>' + '<br>' +
			'<table><tbody>' + '<tr><td style="background-color: rgb(178,24,43); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">Excessively Drained</td>' +
			'</tr><tr>' + '<td style=background-color: rgb(239,138,98); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">Somewhat Excessively Drained</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(253,219,199); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">Well Drained</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(209,229,240); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">Moderately Well Drained</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(146,197,222); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">Somewhat Poorly Drained</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(67,147,195); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">Poorly Drained</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(33,102,172); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">Very Poorly Drained</td>' +
			'</tr></tbody></table>';
			
			return div_drainage_class;
		};

	// Rock Fragments (0 - 25 cm)	

		var legend_rock_fragments = L.control({position: 'bottomleft'});
		
		legend_rock_fragments.onAdd = function (map) {
		
			var div_rock_fragments = L.DomUtil.create('div', 'legend');
		
			div_rock_fragments.innerHTML += '<span style="font-weight:bold;">Rock Fragments (0 - 25 cm)</span>' + '<br>' +
			'<table><tbody>' + '<tr><td style="background-color: rgb(240,59,32); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">&gt; 40</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(254,178,76); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">30 - 40</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(255,237,160); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">20 - 30</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(161,218,180); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">10 - 20</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(65,182,196); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">5 - 10</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(34,94,168); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">&lt; 5</td>' +
			'</tr><tr>' + '</tbody></table>';
			
			return div_rock_fragments;
		};
	
	// Sand

		var legend_sand = L.control({position: 'bottomleft'});
		
		legend_sand.onAdd = function (map) {
		
			var div_sand = L.DomUtil.create('div', 'legend');
		
			div_sand.innerHTML += '<span style="font-weight:bold;">Percent Sand (%)</span>' + '<br>' +
			'<table><tbody>' + '<tr><td style="background-color: rgb(253,231,37); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">&gt; 85</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(143,215,68); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">70 - 85</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(53,183,121); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">55 - 70</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(33,144,140); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">45 - 55</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(49,104,142); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">20 - 45</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(68,58,131); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">10 - 20</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(68,1,84); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">&lt; 10</td>' +
			'</tr></tbody></table>';
			
			return div_sand;
		};

	// Silt 

		var legend_silt = L.control({position: 'bottomleft'});
		
		legend_silt.onAdd = function (map) {
		
			var div_silt = L.DomUtil.create('div', 'legend');
		
			div_silt.innerHTML += '<span style="font-weight:bold;">Percent Silt (%)</span>' + '<br>' +
			'<table><tbody>' + '<tr><td style="background-color: rgb(253,231,37); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">&gt; 60</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(122,209,81); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">50 - 60</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(34,168,132); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">40 - 50</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(42,120,142); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">25 - 40</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(65,68,135); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">15 - 25</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(68,1,84); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">&lt; 15</td>' +
			'</tr></tbody></table>';
			
			return div_silt;
		};

	// Clay, Clay (0 - 5 cm), Clay (0 - 25 cm), Clay (25 - 50 cm)

		var legend_clay = L.control({position: 'bottomleft'});
		
		legend_clay.onAdd = function (map) {
		
			var div_clay = L.DomUtil.create('div', 'legend');
		
			div_clay.innerHTML += '<span style="font-weight:bold;">Percent Clay (%)</span>' + '<br>' +
			'<table><tbody>' +
			'<tr><td style="background-color: rgb(253,231,37); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">&gt; 55</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(143,215,68); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">35 - 55</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(53,183,121); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">25 - 35</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(33,144,140); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">20 - 25</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(49,104,142); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">15 - 20</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(68,58,131); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">10 - 15</td>' +
			'</tr><tr>' + '<td style="background-color: rgb(68,1,84); width: 40px; border: 1px solid black;"></td><td style="text-align: right;">&lt; 10</td>' +
			'</tr></tbody></table>';
			
			return div_clay;
		};