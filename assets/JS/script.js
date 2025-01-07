// Mobile View Search bar 

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
};

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
};


// desktop Search bar 
document.querySelector('#search-icons').onclick = () => {
    document.querySelector('#search-forms').classList.toggle('active');
};

document.querySelector('#closes').onclick = () => {
    document.querySelector('#search-forms').classList.remove('active');
};

// carousel intervel 
let scrollArrow = document.querySelector(".up-arrow");

window.addEventListener('scroll', () => {

    const scrollY = window.scrollY;
    const scrollThreshold = 0;




    if (scrollY > scrollThreshold) {

        scrollArrow.style.top = "90%";

    } else {
        scrollArrow.style.top = "-20%";
    }

});

// whatsapp 

function whatsapp() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name == "") {
        alert("Please Fill the Name");
    } else if (email == "") {
        alert("Please Fill the Email");
    }
    else if (phone == "") {
        alert("Please Fill the Phone Number");
    } else if (message == "") {
        alert("Please Enter Some Message");
    }

    else {



        // Format the message content
        var formattedMessage = encodeURIComponent(
            " *Name* : " + name + "\n" +
            " *Email* : " + email + "\n" +
            " *Phone* *Number* : " + phone + "\n" +
            " *Message* : " + message);

        // Encode the message for the URL
        //   var encodedMessage = encodeURIComponent(formattedMessage);

        // Construct the WhatsApp URL
        var url = "https://wa.me/+919342229700?text=" + formattedMessage;

        // Open the WhatsApp URL in a new tab/window
        window.open(url, 'black');
    }
};

// Order Deetails 

function order() {
    var orderName = document.getElementById("orderName").value;
    var orderNumber = document.getElementById("orderNumber").value;
    var orderVal = document.getElementById("orederVal").value;
    var orderVal2 = document.getElementById("order2").value;
    var qty = document.getElementById("Qty").value;
    var date = document.getElementById("dates").value;
    var orderAddress = document.getElementById("orderAddress").value;
    var orderMessagSe = document.getElementById("orderMessage").value;

    if (orderName == "" ||
        orderNumber == "" || orderVal == "" || orderVal2 == "" || qty == "" || date == "" || orderAddress == "" || orderMessagSe == "") {
        alert("Enter All Fields");

    } else {


        // Format the message content
        var formattedMessage = encodeURIComponent(
            " *Name* : " + orderName + "\n" +
            " *Mobile Number* : " + orderNumber + "\n" +
            " *Main Order* : " + orderVal + "\n" +
            " *Secondary* : " + orderVal2 + "\n" +
            " *Quandity* : " + qty + "\n" +
            " *Date and Time* : " + date + "\n" +
            " *Address* : " + orderAddress + "\n" + +"\n" +
            " *Message* : " + orderMessagSe);

        // Encode the message for the URL
        //   var encodedMessage = encodeURIComponent(formattedMessage);

        // Construct the WhatsApp URL
        var url = "https://wa.me/+919342229700?text=" + formattedMessage;

        // Open the WhatsApp URL in a new tab/window
        window.open(url, 'black');


    }
}



// <!--//////////////////////////////// Number Counte //////////////////// -->



// Button Increase and Decrease 

function plusFunction39() {
    document.getElementById("myNumber39").stepUp(1);


}

function minusFunction39() {
    var numberInput = document.getElementById("myNumber39");
    var currentValue = parseInt(numberInput.value);

    if (currentValue > 0) {
        numberInput.stepDown(1);
    }
}


// Filter Btn For Category 

let filterOn = document.querySelector('#filterBtn');
let filterClose = document.querySelector('#cte-close');
let filterContainer = document.querySelector('.category-filter');

filterOn.addEventListener('click', () => {
    filterContainer.classList.add('filter-active');
});

filterClose.addEventListener('click', () => {
    filterContainer.classList.remove('filter-active');
})