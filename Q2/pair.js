function findPairWithSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log(`Pair found (${nums[i]}, ${nums[j]})`);
        return; //stop after finding the first match
      }
    }
  }
  console.log("Pair not found.");
}

// Example 1
findPairWithSum([8, 7, 2, 5, 3, 1], 11);  // Output: Pair found (8, 2)

// Example 2
findPairWithSum([5, 2, 6, 8, 1, 9], 12);  // Output: Pair not found