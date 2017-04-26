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
		var config = new Configuration();
		this.temp = this.chartData["data"]["datasets"][0];
		this.temp["backgroundColor"] = config.backGroundColour();
		
		super.draw_chart(this.chart_area, this.chart_data);
	}
}

class PieChart extends ConfigureChart {
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

		this.datasets = {};
		this.datasets["data"] = this.createData();
		this.data = [];
		this.data.push(this.datasets);

		this.tempData = {};
		this.tempData["datasets"] = this.data;
		this.tempData["labels"] = this.createLabel();

		this.chartData["data"] = this.tempData;
		return this.chartData;
	}

	plotChart(){
		super.create_settings(this.area, this.createSettings());
	}
}

class BarChart extends ConfigureChart {
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

		this.datasets = {};
		this.datasets["data"] = this.createData();
		this.data = [];
		this.data.push(this.datasets);

		this.tempData = {};
		this.tempData["datasets"] = this.data;
		this.tempData["labels"] = this.createLabel();

		this.chartData["data"] = this.tempData;
		return this.chartData;
	}

	plotChart(){
		super.create_settings(this.area, this.createSettings());
	}
}

class LineChart extends ConfigureChart {
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

		this.datasets = {};
		this.datasets["data"] = this.createData();
		this.data = [];
		this.data.push(this.datasets);

		this.tempData = {};
		this.tempData["datasets"] = this.data;
		this.tempData["labels"] = this.createLabel();

		this.chartData["data"] = this.tempData;
		return this.chartData;
	}

	plotChart(){
		super.create_settings(this.area, this.createSettings());
	}
}

class PivotChart extends ConfigureChart {
	constructor(area, data, label, pivotData){
		super();
		this.area = area;
		this.data = data;
		this.label = label;
		this.pivotData = pivotData;
	}

	createType() {
		return 'bar';
	}

	createLabel() {
		return this.label;
	}

	createData() {
		var config = new Configuration();
		this.datasets = [];

		this.tempLabel = [];
		console.log('pivotData', this.pivotData);
		for(this.i=0; this.i<this.pivotData.length; this.i++) {
			this.obj = {};
			this.temDta = [];
			for(this.k=0; this.k<this.pivotData[0].length; this.k++) {
				this.tempLabel.push(this.pivotData[0][this.k][0]);
				for(this.j=1; this.j<this.pivotData[0][this.k].length; this.j++) {
					this.temDta.push(Number(this.pivotData[0][this.k][this.j]));
				}
				this.obj["data"] = this.temDta;
			}
			this.datasets.push(this.obj);
		}

		this.newObj = {};
		this.newObj["data"] = this.data;

		this.datasets.push(this.newObj);

		this.finalData = {}
		this.finalData["labels"] = this.tempLabel;
		this.finalData["datasets"] = this.datasets;
		return this.finalData;
	}

	createSettings() {
		this.chartData = {};
		this.chartData["type"] = this.createType();

		this.chartData["data"] = this.createData();

		this.axes = [];
		this.stacked = {};
		this.stacked["stacked"] = true;
		this.axes.push(this.stacked);

		this.scales = {};
		this.scales["xAxes"] = this.axes;

		this.options = {};
		this.options["scales"] = this.scales;

		this.chartData["options"] = this.options;

		console.log('chartData', this.chartData);
		return this.chartData;
	}

	plotChart(){
		super.create_settings(this.area, this.createSettings());
	}
}

class StackChart extends BarChart {
	constructor(area, data, label, stackData){
		super();
		this.area = area;
		this.data = data;
		this.label = label;
		this.stackData = stackData;
	}

	createType() {
		return 'bar';
	}

	createLabel() {
		return this.label;
	}

	createData() {
		var config = new Configuration();
		this.datasets = [];

		this.tempLabel = [];
		for(this.i=0; this.i<this.stackData.length; this.i++) {
			this.obj = {};
			this.temDta = [];
			for(this.k=0; this.k<this.stackData[0].length; this.k++) {
				this.tempLabel.push(this.stackData[0][this.k][0]);
				for(this.j=1; this.j<this.stackData[0][this.k].length; this.j++) {
					this.temDta.push(Number(this.stackData[0][this.k][this.j]));
				}
				this.obj["data"] = this.temDta;
			}
			this.datasets.push(this.obj);
		}

		this.newObj = {};
		this.newObj["data"] = this.data;

		this.datasets.push(this.newObj);

		this.finalData = {}
		this.finalData["labels"] = this.tempLabel;
		this.finalData["datasets"] = this.datasets;
		return this.finalData;
	}

	createSettings() {
		this.chartData = {};
		this.chartData["type"] = this.createType();

		this.chartData["data"] = this.createData();

		this.axes = [];
		this.stacked = {};
		this.stacked["stacked"] = true;
		this.axes.push(this.stacked);

		this.scales = {};
		this.scales["yAxes"] = this.axes;

		this.options = {};
		this.options["scales"] = this.scales;

		this.chartData["options"] = this.options;

		console.log('stack chart option', this.chartData);
		return this.chartData;
	}

	plotChart(){
		super.create_settings(this.area, this.createSettings());
	}
}

class Configuration {
	constructor() {

	}

	backGroundColour() {
		this.bgColour = [
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(148, 0, 211, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
			'rgba(147, 112, 219, 1)',
			'rgba(65, 105, 225, 1)',
			'rgba(198, 226, 255, 1)',
			'rgba( 0, 250, 154, 1)',
			'rgba(0, 238, 118, 1)',
			'rgba(127, 255, 0, 1)',
			'rgba(173, 255, 47, 1)',
			'rgba(255, 255, 0, 1)',
			'rgba(255, 165, 0, 1)',
			'rgba(255, 69, 0, 1)',
			'rgba(255, 48, 48, 1)',
		];

		return this.bgColour;
	}
}