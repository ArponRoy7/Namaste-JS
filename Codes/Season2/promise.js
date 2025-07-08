function a ()
{
    console.log("generating promise");
    return Promise.resolve();
}
function b()
{
    console.log("Returning Promise");
}

a().then(b);