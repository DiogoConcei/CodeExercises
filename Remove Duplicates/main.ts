let nums:number[] = [1,1,2]

function removeDuplicates(nums: number[]): number {
    let counter = 0;
    const temp:number[] = [];
    nums.forEach((ele:number)=> {
        if(!temp.includes(ele)){
            temp.push(ele);
            nums[counter]=ele;
            counter++;
        } 
    });

    return counter;
};

console.log(removeDuplicates(nums))