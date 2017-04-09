/* var s = document.createElement("script");
s.type = "text/javascript"; 
document.head.appendChild(s);
s.src = "js/Chart.min.js"; */

class BaseChart{
	
	constructor(area, settings) {

		this.LoadScript();
		this.area = area;
		this.settings = settings;
		this.a();
	}

	LoadScript(){
       var scripts = document.getElementsByTagName('script');
       var existAlready=[...scripts].some(a=>a.src=='js/Chart.min.js');
       if(!existAlready){
           var s = document.createElement("script");
           s.setAttribute("src","js/Chart.min.js");
           document.head.appendChild(s);
       }
    }
	a() {
		new Chart(this.area, this.settings);
		console.log("BaseChart");
	}	
}


class BarChart extends BaseChart {
	constructor(area, settings) {
		super(area, settings);
	}
	/* constructor(ctx) {
		var data = {
		    labels: ["January", "February", "March", "April", "May", "June", "July"],
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
		            data: [65, 59, 80, 81, 56, 55, 40],
		            spanGaps: false,
		        },
		        {
		        	label: "Second",
		        	data: [12, 56, 45, 23, 78, 23, 90],
		        }
		    ]
		};
		var lineChart = new Chart(ctx, {
			type: 'line',
			data: data
		});
	} */
	b() {
		super.a();
	}
}


