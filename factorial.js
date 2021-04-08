function fact(){
    var i, num, f;
    f=1;
    num=document.getElementById("num").value;
    for(i=1;i<=num;i++)
    {
        ff=f*i;
    }
    ii=i-1;
    document.getElementById("res").innerHTML="THE FACTORIAL OF THE NUMBER IS" +i+ "is:" +f;
}