function gethistory(){
    return document.getElementById("history-value").innerText;
}
function printhistory(num){
    document.getElementById("history-value").innerText=num;
}
function getoutput(){
    return document.getElementById("output-value").innerText;
}
function printoutput(num){
    document.getElementById("output-value").innerText=format(num);
}
function format(num){
    var n=Number(num)
    var result=n.toLocaleString("en")
    return result;
}
function revnum(num){
    return Number(num.replace(/,/g,''));
}
var a=document.getElementsByClassName("operator");
for(var i=0; i<a.length;i++){
    a[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printhistory("");
            printoutput("")
        }
        else if(this.id=="backspace"){
            var t=revnum(getoutput()).toString();
            if(t){
                t=t.substr(0,t.length-1);
                printoutput(t);
            }
            }
        else{
            var output=getoutput();
            var history=gethistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
				output= output==""?output:revnum(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printoutput(result);
					printhistory("");
                }
                else{
                    history=history+this.id;
					printhistory(history);
					printoutput("");
                }
        }
    }
    });
}

var nu=document.getElementsByClassName("number");
for(var i=0;i<nu.length;i++){
    nu[i].addEventListener('click',function(){
		var output=revnum(getoutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printoutput(output);
		}
	});
}
