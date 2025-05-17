/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    for (let k = 0; k < nums.length; k++) {
        for (let i = 0; i < nums.length; i++) {
            const j = i + 1;
            if (j == nums.length) continue;

            if (nums[j] < nums[i]) {
                const tmp = nums[j];
                nums[j] = nums[i];
                nums[i] = tmp;
            }
        }
    }
}
