function intersect(nums1: number[], nums2: number[]): number[] {
  let theLonger = [];
  let theShorter = [];
  if (nums1.length > nums2.length) {
    theLonger = nums1;
    theShorter = nums2;
  } else {
    theLonger = nums2;
    theShorter = nums1;
  }

  const result: Array<number> = [];
  for (let n of theShorter) {
    let indexOfNInLonger = theLonger.indexOf(n);
    if (indexOfNInLonger >= 0) {
      result.push(n);
      theLonger.splice(indexOfNInLonger, 1);
    }
  }
  return result;
};

intersect([4,9,5], [9,4,9,8,4]);