var click = 0;
//window.onload = clearFunction;
function postFunction()
{
    var write = document.getElementById("text1").value;
    if(click == 0)
    {
        var post = document.getElementById("topic1");
        post.innerHTML = write;
        click++;
        
    }
    else if(click == 1)
    {
       
        var post = document.getElementById("comment1");
        post.innerHTML = write;
        click++;
    }
    else if(click == 2)
    {
      
        var post = document.getElementById("comment2");
        post.innerHTML = write;
        click++;
    }
    else if(click > 2)
    {
       alert("Max commnet reached");
    }   
}
function clearFunction()
        { 
            document.getElementById("topic1").innerHTML = "";
            document.getElementById("comment1").innerHTML = "";
            document.getElementById("comment2").innerHTML = "";
            /*post1.innerHTML = "";
            post2.innerHTML = ".";
            post3.innerHTML = ".";*/
            click = 0;
        }