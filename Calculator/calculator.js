
function dis(val) 
{ 
    let x=document.getElementById("result").value;
    let y=x+val;
    document.getElementById("result").value=y;
} 
 
function solve()
{
    let x=eval(document.getElementById("result").value);
    document.getElementById("result").value=x;
}

function clr()
{
    document.getElementById("result").value="";
}