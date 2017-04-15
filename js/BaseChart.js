var s = document.createElement("script");
s.type = "text/javascript"; 
document.head.appendChild(s);
s.src = "js/Chart.min.js";

class BaseChart {
	constructor(){
	}
	draw_chart(area, settings) {
		this.area = area;
		this.settings = settings;

		setTimeout(() => {
			new Chart(this.area, this.settings);
		}, 1000); 
	}	
}

class ConfigureChart extends BaseChart {
	constructor(){
		super();
	}
	create_settings(chart_area, chart_data) {
		this.chart_area = chart_area;
		this.chart_data = chart_data;
		super.draw_chart(this.chart_area, this.chart_data);
	}
}

class Pie extends ConfigureChart {
	constructor(area, data, label){
		super();
		this.area = area;
		this.data = data;
		this.label = label;
	}

	createType() {
		this.chartData = {};
		this.chartData["type"] = 'pie';
		this.chartData["data"] = {
			labels : this.label,
			datasets : [{
				data : this.data,
			}]
		}
		console.log('pie data', this.chartData);
		return this.chartData;
	}

	create_settings() {
		super.create_settings(this.area, this.createType());
	}
}

class Bar extends ConfigureChart {
	constructor(area, data, label){
		data =  {
				    type: 'bar',
				    data: {
						    labels: label,
						    datasets: [
						        {	
						            label: "My First dataset",
						            fill: false,
						            lineTension: 0.1,
						            backgroundColor: "rgba(75,192,192,0.4)",
						            borderColor: "rgba(75,192,192,1)",
						            borderCapStyle: 'butt',
						            borderDash: [],
						            borderDashOffset: 0.0,
						            borderJoinStyle: 'miter',
						            pointBorderColor: "rgba(75,192,192,1)",
						            pointBackgroundColor: "#fff",
						            pointBorderWidth: 1,
						            pointHoverRadius: 5,
						            pointHoverBackgroundColor: "rgba(75,192,192,1)",
						            pointHoverBorderColor: "rgba(220,220,220,1)",
						            pointHoverBorderWidth: 2,
						            pointRadius: 1,
					            pointHitRadius: 10,
					            data: data,
					        }
					    ]
					}
				}
				console.log('Bar Data', data);
		super(area, data);
	}
	create_settings() {
		super.create_settings();
	}
}

class Line extends ConfigureChart {
	constructor(area, data, label){
		data =  {
				    type: 'line',
				    data: {
						    labels: label,
						    datasets: [
						        {	
						            label: "My First dataset",
						            fill: false,
						            lineTension: 0.1,
						            backgroundColor: "rgba(75,192,192,0.4)",
						            borderColor: "rgba(75,192,192,1)",
						            borderCapStyle: 'butt',
						            borderDash: [],
						            borderDashOffset: 0.0,
						            borderJoinStyle: 'miter',
						            pointBorderColor: "rgba(75,192,192,1)",
						            pointBackgroundColor: "#fff",
						            pointBorderWidth: 1,
						            pointHoverRadius: 5,
						            pointHoverBackgroundColor: "rgba(75,192,192,1)",
						            pointHoverBorderColor: "rgba(220,220,220,1)",
						            pointHoverBorderWidth: 2,
						            pointRadius: 1,
					            pointHitRadius: 10,
					            data: data,
					        }
					    ]
					}
				}
		super(area, data);
	}
	create_settings() {
		super.create_settings();
	}
}

class PolarArea extends ConfigureChart {
	constructor(area, data, label){
		data =  {
				    type: 'polarArea',
				    data: {
						    labels: label,
						    datasets: [
						        {	
						            label: "My First dataset",
						            fill: false,
						            lineTension: 0.1,
						            backgroundColor: "rgba(75,192,192,0.4)",
						            borderColor: "rgba(75,192,192,1)",
						            borderCapStyle: 'butt',
						            borderDash: [],
						            borderDashOffset: 0.0,
						            borderJoinStyle: 'miter',
						            pointBorderColor: "rgba(75,192,192,1)",
						            pointBackgroundColor: "#fff",
						            pointBorderWidth: 1,
						            pointHoverRadius: 5,
						            pointHoverBackgroundColor: "rgba(75,192,192,1)",
						            pointHoverBorderColor: "rgba(220,220,220,1)",
						            pointHoverBorderWidth: 2,
						            pointRadius: 1,
					            pointHitRadius: 10,
					            data: data,
					        }
					    ]
					}
				}
		super(area, data);
	}
	create_settings() {
		super.create_settings();
	}
}

class Stack extends Bar {
	constructor(area, data){
		super(area, data);
		this.area = area;
		this.data = data;
	}
	create_settings() {
		super.create_settings();
	}
}

