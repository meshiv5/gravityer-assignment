function twoSum(nums, target) {
  const nums2 = [...nums];
  nums.sort((a, b) => a - b);

  let s = 0;
  let e = nums.length - 1;

  while (s < e) {
    if (nums[s] + nums[e] == target) {
      let a1 = nums2.indexOf(nums[s]);
      let a2 = nums2.lastIndexOf(nums[e]);
      return [a1, a2];
    } else {
      if (nums[s] + nums[e] < target) {
        s++;
      } else {
        e--;
      }
    }
  }
}
let ans = twoSum([2, 7, 11, 15], 9);
console.log(ans);
