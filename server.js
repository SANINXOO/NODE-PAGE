const fs=require("fs")
fs.writeFile("index.html",`
<div class="main">
<h3>This is First Page</h3>
<a href="./second.html" id="only-links">Click here</a>
</div>


<style>
    #only-links{
        background-color: rgb(26, 235, 165);
        padding: 17px;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        text-decoration: none;
        

    }
    .main{
        text-align: center;
        display: flex;
        justify-content: center;
        margin-top: 23%;
        gap: 16px;
    }

</style>`,(error)=>{
    if(error){
        console.log("error");
    }
})

fs.writeFile("second.html",`
<div class="main">
<h3>This is Second Page</h3>
<a href="./third.html" id="only-links">Click here</a>
</div>
<style>
    #only-links{
        background-color: rgb(26, 235, 165);
        padding: 17px;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        text-decoration: none;
        

    }
    .main{
        display: flex;
        justify-content: center;
        
        margin-top: 23%;
        gap: 16px;
    }

</style>`,(error)=>{
    if( error){
        console.log("error");
    }
})

fs.writeFile("third.html",`
<div class="main">
<h3>This is Third Page</h3>
<a href="./index.html" id="only-links">Click here</a>
</div>
<style>
    #only-links{
        background-color: rgb(26, 235, 165);
        padding: 17px;
        border-radius: 5px;
        color: white;
        font-size: 16px;
        text-decoration: none;
        

    }
    .main{
       
        display: flex;
        justify-content: center;
        margin-top: 23%;
        gap: 16px;
    }

</style>`,(error)=>{
    if( error){
        console.log("error");
    }
})