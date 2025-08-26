var name='yash'
var age=34
var obj={
    name:'vish',
    age:12,
    hello:function(){
        console.log(this.name,this.age)
    }
}
obj.hello()