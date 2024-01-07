/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let minr=0;
    let maxr=n-1;
    let minc=0;
    let maxc=n-1;

    let arr = Array.from({ length: n }, () => []);

    let count = 1;

    while(count <= n*n){
        //top row
        for(let row = minc; row <= maxc; row++){
            arr[minr][row] = count++
        }
        minr++;

        //end column
        for(let col = minr; col <= maxr; col++){
            arr[col][maxc] = count++
        }
        maxc--;

        //end row
        for(let row = maxc; row >= minc; row--){
            arr[maxr][row] = count++
        }
        maxr--;

        //left column
        for(let col = maxr; col >= minr; col--){
            arr[col][minc] = count++
        }
        minc++;
    }

    return arr;
};

console.log("generateMatrix ==>", generateMatrix(3))