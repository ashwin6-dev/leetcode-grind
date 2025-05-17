function climbStairs(n: number): number {
    const table = new Array(n + 1).fill(0);
    table[1] = 1;
    table[2] = 2;

    for (let i = 3; i <= n; i++) {
        let oneStep = i - 1 >= 0 ? table[i - 1] : 0;
        let twoStep = i - 2 >= 0 ? table[i - 2] : 0;

        table[i] = oneStep + twoStep;
    }

    return table[n];
};
