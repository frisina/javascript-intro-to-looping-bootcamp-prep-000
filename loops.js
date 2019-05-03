function forLoop(array) {
 for(let i = 0; i < 26; i++) {
	if (array[i] === 1) {
	array[i] = `I am 1 strange loop.`;
    } else if (array[i] != 1) {
	array[i] = `I am ${i} strange loops.`;
 }
}
	return array;
 }
 
