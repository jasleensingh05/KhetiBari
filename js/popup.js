var x=document.getElementById("login-btn");
var wrap=document.getElementById("w");
x.addEventListener('click',onclick);
function onclick()
{
    wrap.style.display="block";
    z.style.filter="blur(8px)";
    c.style.filter="blur(8px)";
    p.style.filter="blur(8px)";
    e.style.filter="blur(8px)";
    ba.style.filter="blur(8px)";
    r.style.filter="blur(8px)";
    b.style.filter="blur(8px)";
    f.style.filter="blur(8px)";
}
var z=document.getElementById("home");
var c=document.getElementById("categories");
var p=document.getElementById("products");
var e=document.getElementById("extra");
var ba=document.getElementById("bann");
var r=document.getElementById("review");
var b=document.getElementById("blogs");
var f=document.getElementById("foot");
function btclick()
{
    wrap.style.display="none";
}

