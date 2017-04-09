var s = document.createElement("script");
s.type = "text/javascript"; 
document.head.appendChild(s);
s.src = "js/Chart.min.js";

class BaseChart {
	constructor(area, settings){
		this.area = area;
		this.settings = settings;
	}
	draw_chart(area, settings) {
		setTimeout(() => {
			new Chart(this.area, this.settings)
		}, 200);
	}	
}

class ConfigureChart extends BaseChart {
	constructor(chart_label, chart_data){
		this.chart_label = chart_label;
		this.chart_data = chart_data;
	}
	create_settings() {

	}
}

class Pie extends ConfigureChart {
	constructor(type, data){
		this.type = type;
		this.data = data;
	}
	create_settings() {

	}
}

class Bar extends ConfigureChart {
	constructor(type, data){
		this.type = type;
		this.data = data;
	}
	create_settings() {
		
	}
}

class Line extends ConfigureChart {
	constructor(type, data){
		this.type = type;
		this.data = data;
	}
	create_settings() {
		
	}
}

class PolarArea extends ConfigureChart {
	constructor(type, data){
		this.type = type;
		this.data = data;
	}
	create_settings() {
		
	}
}

class Stack extends Bar {
	constructor(type, data){
		this.type = type;
		this.data = data;
	}
	create_settings() {
		
	}
}

