function gradePoint(letterGrade){
	var letters = ["A","B","C","D","E"];
	var points = [4,3,2,1,0]
	return points[letters.indexOf(letterGrade)]
}
console.log(gradePoint("B"));


//DO NOT MODIFY
module.exports = calculateGPA;
