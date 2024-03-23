
const input=document.getElementById("input");
const cf=document.getElementById("tofaran");
const fc=document.getElementById("tocelcius");
const result=document.getElementById("res");
   

const submitButton=document.querySelector("#submit");
submitButton.onclick=function(){
    if(cf.checked)
    {
        let val=input.value;
        val=Number(val);
        val= (val*9/5)+32;
        val=val.toFixed(2);
        result.textContent=val+"°F"
    }
    else if(fc.checked)
    {
        let val=input.value;
        val=Number(val);
        val= (val-32)*5/9;
        val=val.toFixed(2);
        result.textContent=val+"°C";


    }
    else{
        result.textContent="select a unit";
    }

}


/*
function convertor()
{
    if(cf.checked)
    {
        let val=input.value;
        val=Number(val);
        val= (val*9/5)+32;
        result.textContent(val+"°F");
    }
    else if(fc.checked)
    {
        let val=input.value;
        val=Number(val);
        val= (val-32)*5/9;
        result.textContent(val+"°C");


    }
    else{
        result.textContent("select a unit")
    }
}*/