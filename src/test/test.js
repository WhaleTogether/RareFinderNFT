var maxSpeed = {
	car: 300,
	bike: 60,
	motorbike: 200,
	airplane: 1000,
	helicopter: 400,
	rocket: 8 * 60 * 60,
};
var sortable = [];
for (var vehicle in maxSpeed) {
	sortable.push([vehicle, maxSpeed[vehicle]]);
}

sortable.sort(function (a, b) {
	return a[1] - b[1];
});

console.log(sortable);
