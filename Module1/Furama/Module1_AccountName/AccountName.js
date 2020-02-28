let serviceType= document.getElementById("serviceType");
let rentDays= document.getElementById("rentDays");
let discount=document.getElementById("discount");
let name=document.getElementById("name");
let idCard=document.getElementById("idCard");
let email=document.getElementById("email");
let address=document.getElementById("address");
let customerType=document.getElementById("customerType");
let roomType=document.getElementById("roomType");
let followedpeople=document.getElementById("followedpeople");
let birthday=document.getElementById("birthday");
let totalPrice=0;
function showInfo() {
    if (serviceType.value=="villa"){
        totalPrice= 500*rentDays.value*(1-discount.value/100);
    } else if (serviceType.value=="house") {
        totalPrice= 300*rentDays.value*(1-discount.value/100);
    } else {
        totalPrice= 100*rentDays.value*(1-discount.value/100);
    }
    document.getElementById("result").innerHTML= totalPrice + " $";
    document.getElementById("fullName").innerHTML = "Full Name: " + name.value ;
    document.getElementById("birth").innerHTML = "Birthday: " + birthday.value;
    document.getElementById("mail").innerHTML = "Email: " + email.value;
    document.getElementById("cmnd").innerHTML ="Id Card: "+ idCard.value;
    document.getElementById("add").innerHTML ="Adress: "+ address.value;
    document.getElementById("cusType").innerHTML ="Customer Type: "+ customerType.value;
    document.getElementById("romType").innerHTML ="Room Type: "+ roomType.value;
    document.getElementById("renDays").innerHTML ="Rent Days: "+ rentDays.value;
    document.getElementById("followpp").innerHTML ="Followed Pepple Number: "+ followedpeople.value;
    document.getElementById("dics").innerHTML ="Discount: "+ discount.value + "%";
}