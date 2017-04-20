var s = document.createElement("script");
s.type = "text/javascript"; 
document.head.appendChild(s);
s.src = "js/Chart.min.js";

class BaseChart {
	constructor(){
	}
	draw_chart(area, settings) {
		setTimeout(() => {
			this.area = area;
			this.settings = settings;
			new Chart(this.area, this.settings);
		}, 200); 
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
		return 'pie';
	}

	createLabel() {
		return this.label;
	}

	createData(){
		return this.data;
	}

	createSettings() {
		this.chartData = {};
		this.chartData["type"] = this.createType();

		this.dataset = {};
		this.dataset["data"] = this.createData();
		this.data = [];
		this.data.push(this.dataset);

		this.tempData = {};
		this.tempData["datasets"] = this.data;

		this.chartData["data"] = this.tempData;

		return this.chartData;
	}

	plotChart(){
		super.create_settings(this.area, this.createSettings());
	}
}

class Bar extends ConfigureChart {
	constructor(area, data, label){
		super();
		this.area = area;
		this.data = data;
		this.label = label;
	}

	createType() {
		return 'bar';
	}

	createLabel() {
		return this.label;
	}

	createData(){
		return this.data;
	}

	createSettings() {
		this.chartData = {};
		this.chartData["type"] = this.createType();

		this.dataset = {};
		this.dataset["data"] = this.createData();
		this.data = [];
		this.data.push(this.dataset);

		this.tempData = {};
		this.tempData["datasets"] = this.data;

		this.chartData["data"] = this.tempData;

		return this.chartData;
	}

	plotChart(){
		super.create_settings(this.area, this.createSettings());
	}
}

class Line extends ConfigureChart {
	constructor(area, data, label){
		super();
		this.area = area;
		this.data = data;
		this.label = label;
	}

	createType() {
		return 'line';
	}

	createLabel() {
		return this.label;
	}

	createData(){
		return this.data;
	}

	createSettings() {
		this.chartData = {};
		this.chartData["type"] = this.createType();

		this.dataset = {};
		this.dataset["data"] = this.createData();
		this.data = [];
		this.data.push(this.dataset);

		this.tempData = {};
		this.tempData["datasets"] = this.data;

		this.chartData["data"] = this.tempData;

		return this.chartData;
	}

	plotChart(){
		super.create_settings(this.area, this.createSettings());
	}
}

class PolarArea extends ConfigureChart {
	constructor(area, data, label){
		super();
		this.area = area;
		this.data = data;
		this.label = label;
	}

	createType() {
		return 'polarArea';
	}

	createLabel() {
		return this.label;
	}

	createData(){
		return this.data;
	}

	createSettings() {
		this.chartData = {};
		this.chartData["type"] = this.createType();

		this.dataset = {};
		this.dataset["data"] = this.createData();
		this.data = [];
		this.data.push(this.dataset);

		this.tempData = {};
		this.tempData["datasets"] = this.data;

		this.chartData["data"] = this.tempData;

		return this.chartData;
	}

	plotChart(){
		super.create_settings(this.area, this.createSettings());
	}
}

class Stack extends Bar {
	constructor(area, data, label){
		super();
		this.area = area;
		this.data = data;
		this.label = label;
	}

	createType() {
		return 'polarArea';
	}

	createLabel() {
		return this.label;
	}

	createData(){
		return this.data;
	}

	createSettings() {
		this.chartData = {};
		this.chartData["type"] = this.createType();

		this.dataset = {};
		this.dataset["data"] = this.createData();
		this.data = [];
		this.data.push(this.dataset);

		this.tempData = {};
		this.tempData["datasets"] = this.data;

		this.chartData["data"] = this.tempData;

		return this.chartData;
	}

	plotChart(){
		super.create_settings(this.area, this.createSettings());
	}
}

