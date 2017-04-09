var s = document.createElement("script");
s.type = "text/javascript"; 
document.head.appendChild(s);
s.src = "js/Chart.min.js";

class BaseChart {
	constructor(area, settings) {
		this.area = area;
		this.settings = settings;
	}
	a() {
		setTimeout(() => {
			new Chart(this.area, this.settings);
		}, 200);
		console.log("BaseChart");
	}	
}

class BarChart extends BaseChart {
	constructor(area, settings) {
		super(area, settings);
	}
	b() {
		super.a();
	}
}


