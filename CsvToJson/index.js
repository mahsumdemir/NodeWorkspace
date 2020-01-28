
console.log("index.js started");

document.getElementsByClassName("JS-convert")[0].onclick = function(){
	const content = document.getElementsByClassName("JS-csv-data")[0].value;
	const jsonResult = convertCsvDataToJson(content);
	document.getElementsByClassName("JS-json-output")[0].innerText = JSON.stringify(jsonResult, null, 4);
}

function convertCsvDataToJson(content) {
	const contentString = new String(content)
	const seperatedData = contentString.split("\n")
					   .map(line => line.replace("\n", ""))
					   .filter(line => line.length > 1)
					   .map(line => line.split(","));
	const keys = seperatedData[0];
	const data = seperatedData.slice(1);
	const json = [];
	for ( let aData of data) {
		let newObject = {};
		 for (let index in keys) {
			newObject[keys[index]] = aData[index]
		 }
		 json.push(newObject);
	}
	console.log(json);
	return json;
}
