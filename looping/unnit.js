var amount=700;
var unit=0;
if(amount<=150){
    unit=amount/3
    console.log(unit)
}
else if(amount>=151 && amount<=650){
   var a=amount-150
   unit=a/5
    console.log(unit+50)

}
else if(amount>=651){
    var a=amount-150
    var b=a-500
    unit = b/10
    console.log(unit + 100+50)

}