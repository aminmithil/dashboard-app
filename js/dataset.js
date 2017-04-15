var DataFrame = dfjs.DataFrame;	
class Dataset {
	viewDataset(a){
		if(a == 1){
			DataFrame.fromCSV('Datasets/Parks_-_Locations_Chicago.csv').then(
				df => { 
					var arr = df.toArray();
					var heading = df.listColumns();
					var HTML = "<table class=striped border=1 width=100%><tr>";
					for(var k=0; k<heading.length; k++){
						HTML += "<td>" + heading[k] + "</td>";
					}
					HTML += "</tr>";
					for(var i=0;i<arr.length;i++)
					{
						HTML +=  "<tr>";
						for(var j=0; j<arr[i].length; j++){
							HTML += "<td align=center>"+arr[i][j]+"</td>";
						}
						HTML +=  "</tr>";
					}
					HTML += "</table>";
					document.getElementById("outputDiv").innerHTML = HTML;

					var dfArray = df.select('PARK NAME').toArray();
					console.log('data', dfArray);
					
					var checkBox = "<table border=1>";
					for(var i=0; i<heading.length; i++){
						if(i%6 == 0)
							checkBox += "<tr><td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td>";
						else if((i+1)%6 == 0)
							checkBox += "<td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td></tr>";
						else
							checkBox += "<td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td>";
					}
					checkBox += "</table>" 
					document.getElementById("checkBox").innerHTML = checkBox;
				}
			);	
		}
		else if(a == 2){
			DataFrame.fromCSV('Datasets/Department_of_Recreation_and_Parks__Facility_and_Park_Information_LA.csv').then(
				df => { 
					var arr = df.toArray();
					var heading = df.listColumns();
					var HTML = "<table class=striped border=1 width=100%><tr>";
					for(var k=0; k<heading.length; k++){
						HTML += "<td>" + heading[k] + "</td>"
					}
					HTML += "</tr>"
					for(var i=0;i<arr.length;i++)
					{
						HTML +=  "<tr>"
						for(var j=0; j<arr[i].length; j++){
							HTML += "<td align=center>"+arr[i][j]+"</td>";
						}
						HTML +=  "</tr>"
					}
					HTML += "</table>";
					document.getElementById("outputDiv").innerHTML = HTML;

					var checkBox = "<table border=1>";
					for(var i=0; i<heading.length; i++){
						if(i%6 == 0)
							checkBox += "<tr><td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td>";
						else if((i+1)%6 == 0)
							checkBox += "<td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td></tr>";
						else
							checkBox += "<td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td>";
					}
					checkBox += "</table>" 
					document.getElementById("checkBox").innerHTML = checkBox;
				}
			);
		}	
		else if(a == 3){
			DataFrame.fromCSV('Datasets/BOUNDARIES_city_of_austin_park.csv').then(
				df => { 
					var arr = df.toArray();
					var heading = df.listColumns();
					var HTML = "<table class=striped border=1 width=100%><tr>";
					for(var k=0; k<heading.length; k++){
						HTML += "<td>" + heading[k] + "</td>"
					}
					HTML += "</tr>"
					for(var i=0;i<arr.length;i++)
					{
						HTML +=  "<tr>"
						for(var j=0; j<arr[i].length; j++){
							HTML += "<td align=center>"+arr[i][j]+"</td>";
						}
						HTML +=  "</tr>"
					}
					HTML += "</table>";
					document.getElementById("outputDiv").innerHTML = HTML;

					var checkBox = "<table border=1>";
					for(var i=0; i<heading.length; i++){
						if(i%6 == 0)
							checkBox += "<tr><td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td>";
						else if((i+1)%6 == 0)
							checkBox += "<td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td></tr>";
						else
							checkBox += "<td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td>";
					}
					checkBox += "</table>" 
					document.getElementById("checkBox").innerHTML = checkBox;
				}
			);
		}
		else if(a == 4){
			DataFrame.fromCSV('Datasets/Mecklenburg_County_Park_Locations.csv').then(
				df => { 
					var arr = df.toArray();
					var heading = df.listColumns();
					var HTML = "<table class=striped border=1 width=100%><tr>";
					for(var k=0; k<heading.length; k++){
						HTML += "<td>" + heading[k] + "</td>"
					}
					HTML += "</tr>"
					for(var i=0;i<arr.length;i++)
					{
						HTML +=  "<tr>"
						for(var j=0; j<arr[i].length; j++){
							HTML += "<td align=center>"+arr[i][j]+"</td>";
						}
						HTML +=  "</tr>"
					}
					HTML += "</table>";
					document.getElementById("outputDiv").innerHTML = HTML;

					var checkBox = "<table border=1>";
					for(var i=0; i<heading.length; i++){
						if(i%6 == 0)
							checkBox += "<tr><td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td>";
						else if((i+1)%6 == 0)
							checkBox += "<td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td></tr>";
						else
							checkBox += "<td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td>";
					}
					checkBox += "</table>" 
					document.getElementById("checkBox").innerHTML = checkBox;
				}
			);
		}
		else if(a == 5){
			DataFrame.fromCSV('Datasets/Open_Space_Boston.csv').then(
				df => { 
					var arr = df.toArray();
					var heading = df.listColumns();
					var HTML = "<table class=striped border=1 width=100%><tr>";
					for(var k=0; k<heading.length; k++){
						HTML += "<td>" + heading[k] + "</td>"
					}
					HTML += "</tr>"
					for(var i=0;i<arr.length;i++)
					{
						HTML +=  "<tr>"
						for(var j=0; j<arr[i].length; j++){
							HTML += "<td align=center>"+arr[i][j]+"</td>";
						}
						HTML +=  "</tr>"
					}
					HTML += "</table>";
					document.getElementById("outputDiv").innerHTML = HTML;

					var checkBox = "<table border=1>";
					for(var i=0; i<heading.length; i++){
						if(i%6 == 0)
							checkBox += "<tr><td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td>";
						else if((i+1)%6 == 0)
							checkBox += "<td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td></tr>";
						else
							checkBox += "<td><input type=checkbox id=" + i + " /><label for="+i+" style=margin-right:10px;>" + heading[i] + "</label></td>";
					}
					checkBox += "</table>" 
					document.getElementById("checkBox").innerHTML = checkBox;
				}
			);
		}
			
	}
}