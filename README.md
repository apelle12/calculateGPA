See the function on line 1. It takes in a letter grade as a 
parameter and spits out the value as a grade point. A is 4,
B is 3 etc. Run it, switch around letter grade that is
passed in on line 7. Play around and see how it works. It
doesn't take into account honors or advanced classes, just
regular grade points like how it is in college.
That function is an abstraction! You could exercise modularity
and the DRY ethic by calling it 8 times, once for each of
your classes, and then dividing the result by 8. That would
be your GPA.

Your task: write a function called calculateGPA that takes 8 letter grade parameters and uses
the gradePoint function on each of those parameters to
calculate and returns the GPA for those 8 classes.

For example: calculateGPA("A","B","A","B","A","B","A","B") //should be 3.5
calculateGPA("C","B","A","B","C","B","A","B") //should be 3
