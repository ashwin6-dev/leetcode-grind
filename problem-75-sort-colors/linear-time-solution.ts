/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const counts = [0, 0, 0];

    for (let n of nums) {
        counts[n]++;
    }

    nums.fill(0, 0, counts[0]);
    nums.fill(1, counts[0], counts[0] + counts[1]);
    nums.fill(2, counts[0] + counts[1]);
} 
