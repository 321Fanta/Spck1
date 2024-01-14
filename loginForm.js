  let wrapperLocation = document.getElementById('wrapper');

//defining loginBox
let loginBox = document.createElement("div");
    loginBox.setAttribute("class","loginBox");


//defining loginHeader
let loginHeader =  document.createElement("div");
    loginHeader.setAttribute("class","loginHeader");
    

//defining span
let span = document.createElement("span");
    span.innerHTML = ("Login");

//definning inputBox
let inputBox = document.createElement("div");
    inputBox.setAttribute("class","inputBox2");

//defining input1
let input1 = document.createElement("input");
    input1.setAttribute("type","text");
    input1.setAttribute("id","user");
    input1.setAttribute("class","Input-field");
    input1.setAttribute("required","");
    
//defining label
 label1 = document.createElement("label");
    label1.setAttribute("for","user");
    label1.setAttribute("class","label");
    label1.innerHTML = ("Username");
    
//defining i
let i1 = document.createElement("i");
    i1.setAttribute("class","bx bx-user   icon");

//defining input div 2
let div2 = document.createElement("div");
    div2.setAttribute("class","inputBox1")

//defining input2
let input2 = document.createElement("input")
    input2.setAttribute("type","password");
    input2.setAttribute("id","pass");
    input2.setAttribute("class","InputField");
    input2.setAttribute("required","");

//defining label2
let label2 = document.createElement("label");
    label2.setAttribute("for","pass");
    label2.setAttribute("class","label");
    label2.innerHTML = ("Password");

//defining i2
let i2 = document.createElement("i");
    i2.setAttribute("class","bx bx-lock-alt icon");

//definig div3
let div3 = document.createElement("div");
    div3.setAttribute("class", "remember-forgot");
    
//defining div4
let div4 = document.createElement("div");
    div4.setAttribute("class","remember-me");
    

//defining input3
let input3 = document.createElement("input");
    input3.setAttribute("type","checkBox");
    input3.setAttribute("class","remember");
    
//defining label3
let label3 = document.createElement("label");
    label3.setAttribute("for","remember");
    label3.innerHTML = ("Remember Me")
    
//defining div5
let div5 = document.createElement("div");
    div5.setAttribute("class","forgot")


//defining a1   
let a1 = document.createElement("a");
    a1.setAttribute("href","#");
    a1.innerHTML = ("Forgot Password?");
    
//defining div6   
let div6 = document.createElement("div");
    div6.setAttribute("class","inputBox3");
    
//defining input4
let input4 = document.createElement("input");
    input4.setAttribute("type","submit");
    input4.setAttribute("class","input-submit");
    input4.setAttribute("value","login")
    
//defining div7
let div7 = document.createElement("div");
    div7.setAttribute("class","register");
    
//defining span2
let span2 = document.createElement("span");
    span2.setAttribute("class","span2");
    span2.innerHTML = ("Don't have an account?");

//defining a2 
let a2 = document.createElement("a");
    a2.setAttribute("href","#");
    a2.innerHTML = ("register");
    
    
//append div1 to wrapper
wrapperLocation.appendChild(loginBox,wrapperLocation);

//appendChild login box to wrapper
wrapperLocation.appendChild(loginHeader,wrapperLocation);

//loginHeader loct
let loginHeaderLoct = document.getElementsByClassName("loginHeader")[0];

//div2 append span
    loginHeaderLoct
    .appendChild(span,loginHeaderLoct)

//div3 append wrapper
wrapperLocation.appendChild(div3,wrapperLocation);

//div3 loct
let div3Loct = document.getElementsByClassName("remember-forgot")[0];

//input1 append div3
div3Loct.appendChild(input1,div3Loct);

//label1 append div3
div3Loct.appendChild(label1,div3Loct);

//i1 append div3
div3Loct.appendChild(i1,div3Loct);

//wrapper apppend div4
wrapperLocation.appendChild(div4,wrapperLocation);


//div4 loct
let div4Loct = document.getElementsByClassName("remember-me")[0];



//div4 append input3
div4Loct.appendChild(input3,div4Loct);

//div4 append label3
div4Loct.appendChild(label3,div4Loct);

//div4 append i2
div4Loct.appendChild(i2,div4Loct);

//wrapper append div5
wrapperLocation.appendChild(div5,wrapperLocation);

//div5Loct
let div5Loct = document.getElementsByClassName("forgot")[0];

//div5 append a2
div5Loct.appendChild(a2,div5Loct);


//div5 append div6
div5Loct.appendChild(div6,div5Loct);

//div6Loct
let div6Loct = document.getElementsByClassName("inputBox3")[0];
div6Loct.appendChild(input4)



