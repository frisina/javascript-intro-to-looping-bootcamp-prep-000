function forLoop(array) {
for(let i = 0; i < 25; i++) {
array[i] = `I am ${i} strange loops.`;
}
if (array[1] === `I am 1 strange loops.`) {
array[1] = `I am 1 strange loop.`;
} else if (array[11] === `I am 11 strange loops.`) {
  array[11] = `I am 1 strange loop.`;
}
return array;
}
