/**
 * 
 */

function onloadDraw(){
	var parDiv = document.getElementById("parent-division");
	var outerRing = document.createElement("div");
	outerRing.setAttribute('id','component-outer-ring');
	outerRing.setAttribute('class','component-outer-ring');
	parDiv.appendChild(outerRing);
	
	 for(var i=0;i<10;i++){
		 var innerinput = document.createElement("div");
		 innerinput.setAttribute('id','component_'+i);
		 innerinput.setAttribute('class','component');
		 innerinput.setAttribute('contenteditable','true');
		 innerinput.setAttribute('index',i);
		 innerinput.onfocus = function(e){
			 onFocusedInComponent(e);
		 };
		 innerinput.onblur = function(e){
			 onFocusedOutComponent(e);
		 };
		 var changeEvent = document.createEvent('Event');
		 changeEvent.initEvent('TxtValChanged',true,true);
		 innerinput.addEventListener('TxtValChanged',function(e){
			 alert('Old Value : '+e.oldValue+'\n'+'New Value : '+e.newValue);
		 },false);
		 
		 outerRing.appendChild(innerinput);
	 }
}
var oldVal;
var newVal;
function onFocusedOutComponent(e){
	newVal = e.target.innerText;
	var x = e.target.id;
	if(oldVal!== newVal){
		var chgEvent = new Event('TxtValChanged');
		chgEvent['oldValue'] = oldVal;
		chgEvent['newValue'] = newVal;
		e.target.dispatchEvent(chgEvent);
	}
}

function onFocusedInComponent(e){
	
	oldVal = e.target.innerText;
	
}