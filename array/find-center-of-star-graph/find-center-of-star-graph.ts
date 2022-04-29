function findCenter(edges: number[][]): number {
  const first = edges[0];
  const second = edges[1];
  const star = first.filter(f => second.indexOf(f) !== -1);
  return star[0];
};

findCenter([[1, 2], [2, 3], [4, 2]]);