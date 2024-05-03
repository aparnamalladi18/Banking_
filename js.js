var id, password, infoname, balance, typemoney, rank, joindate, country  = new Array();
var account = new Array(); 
id= [1, 103121063, 103121085, 103121096];  
password= [1,63,85,96];  

infoname = ["Aparna","Akshara","Gayathri","Srujana"]; 
balance = [0,0,0,0]; 
typemoney =["USD","USD","USD","USD"];  

rank = ["Gold","Silver","Copper","New"]; 

joindate = ["22/03/2019","10/02/2018","22/03/2019","10/02/2018"];  
country = ["India", "United States", "nepal","Canada"] 

for (i = 0; i < id.length; i++){  
	account[i] = parseInt(balance[i]); 
} 
var i = 0; 
var success = -1; 
function Login() { 
	for (i = 0; i< id.length; i++){  
		if ((document.getElementById("idname").value == id[i]) && (document.getElementById("pass").value == password[i])) {
            document.getElementById("loginaccount").style.display = 'none'; 

            document.getElementById("manageaccount").style.display = 'block'; 
            document.getElementById("content").style.display = 'block';
            document.getElementById("content2").style.display = 'block';
            document.getElementById("content3").style.display = 'block'; 
			
                alert("Success Login, Welcome " + infoname[i]); 
        		success=i; 
        		prjoindate=joindate[i];
        		prname=infoname[i];
				prbalance=account[i]; 
				prtypemoney= typemoney[i];
				prcountry = country[i];

	document.getElementById("joindate").innerHTML ="Member "+prjoindate;
	document.getElementById("infoname").innerHTML = prname;
	document.getElementById("infoname2").innerHTML = prname;
	document.getElementById("balance").innerHTML = prbalance;
	document.getElementById("typemoney").innerHTML = prtypemoney;
	document.getElementById("country").innerHTML =prcountry;
        } 
	}
	if (success == -1) {
        alert("The account or password is incorrect, please try again"); 
    }
}


function Deposit() {
	document.getElementById("errortick").style.display = 'none'; 
	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';

	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'block';

    var input = document.getElementById("Depositinput").value;
    if (input<=0 || input=="") { 
    	document.getElementById("errortick").style.display = 'block';
    	document.getElementById("notick").style.display = 'none';
		document.getElementById("notification") .innerHTML= "Deposit a valid amount!" 
    } 
	else{ 
    input = parseInt(input);
    account[success] += input;
    prbalance=account[success];
    document.getElementById("balance").innerHTML =prbalance;  
    document.getElementById("notification") .innerHTML= "Success. You deposit "+input+" USD on balance"; 
    }
}

function Withdrawal() {
	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';

	document.getElementById("no").style.display = 'block';
	document.getElementById("notick").style.display = 'block';

	var input = document.getElementById("Withdrawalinput").value;
	if (input<0) {

		document.getElementById("errortick").style.display = 'block';
    	document.getElementById("notick").style.display = 'none';
		document.getElementById("notification") .innerHTML= "Withdrawl amount cannot be negative!"	

    } else if (input == 0) {  
		document.getElementById("notick").style.display = 'none';
		document.getElementById("errortick").style.display = 'block';
	   document.getElementById("notification").innerHTML = "Enter valid amount.";  
   }
	else if (input != parseInt(input)) { 
    	 document.getElementById("notick").style.display = 'none';
    	 document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification").innerHTML = "Error. You entered the wrong format. Please enter a number "; 
    } else if (account[success] - parseInt(input) >= 1) {
    	document.getElementById("errortick").style.display = 'none';
        account[success] -= parseInt(input);
        document.getElementById("notification").innerHTML = "Success withdrawl " + input + " USD"; 
        prbalance=account[success];
        document.getElementById("balance").innerHTML =prbalance;
    } else if (account[success] - parseInt(input) < 0) {
    	document.getElementById("notick").style.display = 'none';
    	document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification").innerHTML = "Error. The balance is not sufficient to request withdrawl"; 
    } else { 
    	document.getElementById("notick").style.display = 'none';
    	document.getElementById("errortick").style.display = 'block';
        document.getElementById("notification").innerHTML = "Cannot withdraw the required amount " + account[success] + " USD. Minimum balance should be there!"; 
    }
}

function Logout() {
    document.getElementById("loginaccount").style.display = 'block'; 
    document.getElementById("formlogin").reset();

            document.getElementById("manageaccount").style.display = 'none';
            document.getElementById("content").style.display = 'none';
            document.getElementById("content2").style.display = 'none';
            document.getElementById("content3").style.display = 'none';
			success=-1; 
} 
function Transfers(){ 

	document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';

	document.getElementById("no").style.display = 'block'; 
	document.getElementById("notick").style.display = 'block';

	var inputmoney = document.getElementById("moneynumber").value; 
	inputmoney = parseInt(inputmoney); 
	var input = document.getElementById("accountnumber").value; 
	var k=0; 
	for (i = 0; i < id.length; i++){		
	if ((input == id[i] )){
		// && inputmoney>0 && account[success]-inputmoney>0 
		k=1;
		if(inputmoney <=0){
			document.getElementById("notick").style.display = 'none'; 
			document.getElementById("errortick").style.display = 'block'; 
			document.getElementById("notification") .innerHTML= 'Enter a valid amount.' 
		} 
		else if(account[success]-inputmoney == 0){ 
            document.getElementById("notick").style.display = 'none'; 
			document.getElementById("errortick").style.display = 'block'; 
			document.getElementById("notification") .innerHTML= 'Cannot transfer the requested amount ' + account[success] + ' USD. Minimum balance should be there!'
		}
		else if(account[success]-inputmoney <0){
			document.getElementById("notick").style.display = 'none'; 
			document.getElementById("errortick").style.display = 'block'; 
			document.getElementById("notification") .innerHTML= 'Error. The balance is not sufficient to transfer!' 
		}
		else{
			account[success] -= inputmoney;  
			prbalance=account[success]; 
			account[i] += inputmoney; 
	
			document.getElementById("errortick").style.display = 'none';
			document.getElementById("notick").style.display = 'block' ; 
			document.getElementById("balance").innerHTML = prbalance; 
			document.getElementById("notification") .innerHTML= "Success. You have sent "+inputmoney+" USD to account "+id[i];   
		} 
		// document.getElementById("errortick").style.display = 'block';   Amount entered is invalid!
	}
	} 
	if(k==0){
		document.getElementById("notick").style.display = 'none'; 
	    document.getElementById("errortick").style.display = 'block'; 
		document.getElementById("notification") .innerHTML= 'Account number is invalid!' 
	}
}

function Change() {
	document.getElementById("changepass").style.display = 'block';
	document.getElementById("changeimg").style.display = 'block';

	document.getElementById("no").style.display = 'none';
	document.getElementById("notick").style.display = 'none';
    document.getElementById("errortick").style.display = 'none';
}

function Changepassword(){

	if (document.getElementById("passcurrent").value == password[success] && 
	    document.getElementById("passnew").value == document.getElementById("passnewrepeat").value) {

        password[success] = document.getElementById("passnew").value;

    document.getElementById("changepass").style.display = 'none';
	document.getElementById("changeimg").style.display = 'none';

	document.getElementById("no").style.display = 'block';
	document.getElementById("errortick").style.display ='none'; 
	document.getElementById("notick").style.display = 'block';
	document.getElementById("notification") .innerHTML= "Success. Your password has been changed"; 
    } 
	else if(document.getElementById("passcurrent").value != password[success]){
		document.getElementById("changepass").style.display = 'none';
		document.getElementById("changeimg").style.display = 'none';
	
		document.getElementById("no").style.display = 'block';
		document.getElementById("notick").style.display = 'none';
		document.getElementById("errortick").style.display = 'block';
		document.getElementById("notification") .innerHTML= "Password you entered is Incorrect";  
	}

	else if(document.getElementById("passnew").value != document.getElementById("passnewrepeat").value){
		document.getElementById("changepass").style.display = 'none';
		document.getElementById("changeimg").style.display = 'none';
	
		document.getElementById("no").style.display = 'block';
		document.getElementById("notick").style.display = 'none';
		document.getElementById("errortick").style.display = 'block';
		document.getElementById("notification") .innerHTML= "Passwords do not match!";   
	} 
	// else {
    // document.getElementById("changepass").style.display = 'none';
	// document.getElementById("changeimg").style.display = 'none';

	// document.getElementById("no").style.display = 'block';
	// document.getElementById("notick").style.display = 'none';
	// document.getElementById("errortick").style.display = 'block';
    // document.getElementById("notification") .innerHTML= "Error. Wrong Password"; 
    // }

}
