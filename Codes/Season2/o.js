function a ()
{
    console.log("callnback");
}
function b(callback)
{
    callback();
}
b(a);