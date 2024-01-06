/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let lmax = [];
    let rmax = [];

    let length = height.length;

    lmax[0] = height[0];
    for(let i=1; i<= length; i++){
        lmax[i] = Math.max(lmax[i-1], height[i])
    }

    rmax[length-1] = height[length-1];
    for(let i=length-2; i>=0; i--){
        rmax[i] = Math.max(rmax[i+1], height[i])
    }

    let trappedWater = 0;
    for(let i=0; i< length; i++){
        let allowed = Math.min(lmax[i], rmax[i])
        trappedWater += allowed -height[i]
    }

    return trappedWater;

};

console.log(trap([4,2,0,3,2,5]))
