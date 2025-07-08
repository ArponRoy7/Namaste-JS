function a()
{ return Promise.resolve(setTimeout(()=>{
    console.log("Example of promise");
},1000));
}
function b() 
{
    console.log("After promise");``
}
a().then(b);

