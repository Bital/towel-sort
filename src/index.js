module.exports = function towelSort (matrix) {
  if(!Array.isArray(matrix)) {
  	return [];
  }
  return matrix.reduce((res, arr, index) => res.concat((index % 2) ? arr.reverse() : arr), [])
}
