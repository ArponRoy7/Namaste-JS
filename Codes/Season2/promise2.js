function createOrder()
{
    console.log("order created");
    const pr = new Promise(function(resolve,reject)
{
    var a=5;
    if(a==5)
        setTimeout(function()
    {
        resolve("in order promise");
        console.log("in order promise");
    },1000);
       
    else
    {
        const err= new Error("error happens");
        
        reject(err);
    }
 
})
return pr;
}
function payment()
{
    console.log("Give Payment ");
    const pr = new Promise((resolve,reject)=>resolve());
    return pr;
}
function display()
{
    console.log("Accepted");
}
createOrder()
.then(payment)
.then(display)
.then(function b ()
{
    console.log("last level of promise");
    var x=5;
    return x ;
})
.then((x)=>{
    console.log(x);
})
.catch(function(error){console.log(error.message)});