function findLongestSubs(nums) {
  let dp = new Array(nums.length).fill(1);
  let longest = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
        longest = Math.max(longest, dp[i]);
      }
    }
  }
  return longest;
}
let ans = findLongestSubs([10, 9, 2, 5, 3, 7, 101, 18]);
console.log(ans);
