function dailyTemperatures(temperatures: number[]): number[] {
    let stack = [];
    let result = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        let temp = temperatures[i];

        while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
            let lastIndex = stack.pop();
            result[lastIndex] = i - lastIndex;
        }
        
        stack.push(i);
    }

    return result;
};
