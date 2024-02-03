let text=alert("استخدم التشفير لرسائلك الخاصة");
let encode_text = btoa(text);
let decode_text=atob(encode_text);

let text1 = document.getElementById("text1");
let result = document.getElementById("result"); 
let select1 = document.getElementById("select1"); 

text1.addEventListener("input",()=> {
make_result();

});

select1.addEventListener("change",()=>{
    make_result();
}
);
function make_result(){

 if(select1.value =="decode") 
 
{result.value= window.atob(text1.value);}

else{result.value= window.atob(text1.value);}


}
function make_result(){

    if(select1.value =="encode") 
    
   {result.value= window.atob (text1.value);}
   
   else{result.value= window.btoa(text1.value);}
   

   }


   

 


   
 