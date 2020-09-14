function starOutGrid(grid) {
	const starIdxs = {}
	const firstPass = grid.map((row) => {
    const i = row.findIndex((el) => el === '*')
    if (i !== -1 && !starIdxs[i]) {
      starIdxs[i] = '*';
      return row.map((el) => (el = '*'));
    }
    return row;
  })
  return firstPass.map((row) => {
    return row.map((el, i) => {
      if (starIdxs[i] === '*') {
        return '*';
      }
      return el;
    })
  })
}