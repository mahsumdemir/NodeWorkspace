const fs = require("fs")
const content = fs.readFileSync("./people.csv")
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
