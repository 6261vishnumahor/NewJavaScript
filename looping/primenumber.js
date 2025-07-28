let count = 0
let i, j
let all=0
for (j = 2; j <= 200; j++) {
    for (i = 1; i <= j; i++) {
        if (j % i == 0)
            count++
       

    }

    if (count == 2){

        console.log(j)
    all++
}
    count = 0 
    // all++
    // console.log("total prime number found so far:",all)



}
console.log("total prime number found so far:", all)