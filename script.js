let history = document.getElementById('history');

function calculation(v){
    console.log(v);
    try{ 
    para=document.createElement('p');
    data=v+"="+eval(v);
    para.innerText=data;
    history.appendChild(para);
    return eval(v);
    }
    catch(error){
        return "Expression error";
    }
}

function backspace(b){
    return b.slice(0,b.length-1);
}

//if we want a square of a number
function square(a){
    var x=(a*a);
    return x;
}

// if we want cube of a number
function cube(s){
   return (s*s*s);
}

// square root of a number
function sqrt2(y){
   var n=Math.sqrt(y);
   return n;
}

// cube root of a number
function sqrt3(m){
   return (Math.cbrt(m));
}
