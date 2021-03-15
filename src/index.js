
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(typeof(matrix)==='undefined') return [];
  let result = [];
  let end = [];
  for(let i=0; i<matrix.length; i++) {
  if(i%2!=0) {
  result = matrix[i].reverse();
  for(let i=0; i<result.length;i++) {
  end.push(result[i]);
  }
  }
  else {
  result=matrix[i];
  for(let i=0; i<result.length;i++) {
  end.push(result[i]);
  }
  }
  }
  return end;
}
