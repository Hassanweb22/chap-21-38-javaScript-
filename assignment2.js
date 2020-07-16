
// CHapter#1

const { func } = require("prop-types");



function chapter1_q1() {
    var first_name = prompt("Enter YOur First Name")
    var last_name = prompt("Enter YOur Last Name")
    var full_name = first_name + " " + last_name;
    document.write("Hello! ", full_name)
}

function chap1_q2() {
    var favrt = prompt("Enter Your Favourite Mobile Phone Model: ")
    document.write(`My  Phone is: ${favrt}`)
    document.write("Length of String: ", favrt.length)
}

function chap1_q3() {
    var string = "Pakistani";
    document.write(`Index of N is: ${string.indexOf('n')}`)
}

function chap1_q4() {
    var string = "Hello World";
    document.write(`Last Index of L is: ${string.indexOf('l', 4)}`)
}

function chap1_q5() {
    var user = +prompt("Enter any index no to see which letter placed on that index")
    var string = "Pakistani";
    document.write(`Chracter at Index ${user} : ${string[user]}`)
}

function chap1_q6() {
    var first_name = prompt("Enter YOur First Name") + " "
    var last_name = prompt("Enter YOur Last Name")
    var full_name = first_name.concat(last_name)
    document.write("Hello! ", full_name)
}

function chap1_q7() {
    var city = "Hydrabad"
    var rep = city.replace("Hydra", "Islam")
    document.write("City: ", city, "<br>")
    document.write(`After Replacement: ${rep}`)
}
function chap1_q8() {
    var message = 'Ali and Sami are best friends. They And play cricket and football together.'
    var rep = message.replace(/and/gi, "&") /* /g se sare honge replace or /gi se sab honge saath m captal  wale bhi */
    // replace(//)do not use '' or "" use /your value/use gi to replace all captital too
    document.write(`<b>Before Replacement:</b> <br>${message}<br><br>`)
    document.write(`<b>After Replacement:</b> <br>${rep}`)
}

function chap1_q9() {
    var text = "472"
    document.write(`Value: ${text}<br> Type: ${typeof (text)}<br><br>`)
    var text = parseInt(text)
    document.write(`Value: ${text}<br> Type: ${typeof (text)}`)
}

function chap1_q10() {
    var user = prompt("Enter any fruit Name")
    document.write(`User Input: ${user}<br><br>`)
    document.write(`UpperCase: ${user.toUpperCase()}`)
}

// function chap1_q11() {
//     var user = prompt("Enter any Word")
//     document.write(`User Input: ${user}<br><br>`)
//     user1 = user[0].toLocaleUpperCase()
//     document.write(`Title Case: ${user}<br><br>`)
// }

// function chap1_q11() {
//     var user = prompt("Enter any Word")
//     return user.replace(
//         /\w\S*/g,
//         function (user) {
//             // document.write(user)
//             document.write(user.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
//         }
//     );
// }


function chap1_q12() {
    var num = 35.36;
    num = num.toString()
    document.write("Number:", num, "<br>Type: ", typeof (num))
    num1 = num.replace(".", "")
    document.write(`<br><br><br>Result: ${num1}`)
}

function chap1_q14() {
    var items = ["cake", "apple pie", "cookie", "chips", "patties"]
    var user = prompt("Welcome to ABC Bakery what do you want order sir/ma'am?: ").toLowerCase()
    var flag = false;
    for (i = 0; i < items.length; i++) {
        if (items[i] == user) {
            flag = true
        }
    }
    if (flag == true) {

        document.write(`${user} is <b>available</b> at index ${i} in our bakery`)
    }
    else {

        document.write(`We are Sorry! ${user} is <b>not available</b> in our bakery`)
    }
}

function chap1_q15() {
    var password = prompt("Enter Password Here!")
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (password.match(passw)) {
        alert('Correct, try another...')
        return true;
    }
    else {
        alert('Wrong...!')
        return false;
    }
}

function chap1_q16() {
    var university = "University of Karachi";
    var array = university.split("")

    for (i = 0; i < array.length; i++) {

        document.write(array[i], "<br>")
    }
}

function chap1_q17() {
    var user = prompt("Enter any word: ")
    document.write(`User Input: ${user}<br><br>Last Character of Input: ${user[user.length - 1]}`)
    document.write(`<br>Last Character of Input Using -1: ${user.slice(-1)}`)

}

function chap1_q18() {
    var string = "The quick brown fox jumps over the lazy dog".toLowerCase();
    var array = string.split(" ")
    var count = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] == "the") {
            count += 1;
        }
    }
    document.write(`<b>Text: </b>${string}<br><br>There are <b>${count}</b> occurrences of word  'the' `)
}


function chap2_q1() {
    var no = +prompt("Enter any positive integer")
    no = Math.abs(no)
    document.write(`<b>number:</b> ${no}<br>`)
    document.write(`<b>round off value:</b> ${Math.round(no)}<br>`)
    document.write(`<b>floor value:</b> ${Math.floor(no)}<br>`)
    document.write(`<b>ceil value:</b> ${Math.ceil(no)}`)
}

function chap2_q2() {
    var no = +prompt("Enter any integer")
    document.write(`<b>number:</b> ${no}<br>`)
    document.write(`<b>round off value:</b> ${Math.round(no)}<br>`)
    document.write(`<b>floor value:</b> ${Math.floor(no)}<br>`)
    document.write(`<b>ceil value:</b> ${Math.ceil(no)}`)
}

function chap2_q3() {
    var no = +prompt("ENnter any negative integer")
    document.write(`The absoulute value of : <b>${no}</b> is <b>${Math.abs(no)}</b>`)
}

function chap2_q4() {
    var decimal = Math.random()
    var dice = decimal * 6 + 1
    var floor = Math.floor(dice)
    document.write(`<b>random dice value:</b> ${floor}`)
}

function chap2_q5() {
    var decimal = Math.random()
    var dice = decimal * 2 + 1
    var floor = Math.floor(dice)

    if (floor === 2) {
        document.write(`<b>${floor}</b><br>
        <b>random Coin value:</b> Heads`)
    }
    else if (floor === 1) {
        document.write(`<b>${floor}</b><br>
        <b>random Coin value:</b> Tails`)
    }
}

function chap2_q6() {
    var decimal = Math.random()
    var dice = decimal * 100 + 1
    var floor = Math.floor(dice)
    document.write(`<b>random no between 1 and 100: </b> ${floor}`)
}

// To do addition you must have to convert string to numbers although you can still perform others mathematical operations like (*, /, -) but for addition you have too perform by numbers otherwise it will concatenate strings with nuumbers hopw you got it 

function chap2_q7() {
    var weight = prompt("Enter your weight in kilogrmas")
    weight_kg = parseInt(weight) /* pasreInt will convert string to int with explict the string and remain the numbers part */
    document.write(`<br><b>The weight of user is: </b> ${weight_kg} kilograms`)
}

// Chapter#03

function chap3_q1() {
    var rightNow = new Date();
    document.write(rightNow)
}

// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

function chap3_q2() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    document.write("The current month is: <b>" + monthNames[d.getMonth()], "</b>");
}

function chap3_q3() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    document.write("The current Day is: <b>" + days[d.getDay()].slice(0, 3), "</b>");

}

function chap3_q4() {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    currentDay = days[d.getDay()]

    if (currentDay === "Saturday" || currentDay === "Sunday") {
        document.write("<b>Its Fun day </b>.");
    }
}

function chap3_q5() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const d = new Date();
    document.write("The current month is " + monthNames[d.getMonth()]);
}



function chap3_q6() {
    var d = new Date();
    var days = d.getDay()

    if (days <= 15) {
        document.write(`First fifteen days of the month`);
    }

    else if (days > 15) {
        document.write(`Last fifteen days of the month`);
    }
}


function chap3_q7() {

    const d = new Date();
    document.write(`<b>Current Date is</b>: ${d}<br>`);
    document.write(`<b>Elapsed Milliseconds since january 1, 1970:</b> ${millis = d.getTime()}`);
    var minutes = (millis / 60000);
    document.write(`<br><b>Elapsed Minutes since january 1, 1970:</b> ${minutes}`);
}


function chap3_q8() {

    const d = new Date();
    var hour = d.getHours()
    document.write(`<b>Hours Passed:</b> ${hour}`);
    if (hour <= 12) {
        alert("Its AM")
    }
    else {
        alert("Its PM")
    }
}

function chap3_q9() {
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const today = new Date();
    var yesterday = new Date(today);

    document.write(`<b>Current Date is:</b> ${yesterday}<br>`);
    yesterday.setDate(today.getDate() - 1);

    var month = today.getMonth()
    yesterday = yesterday.getDate() + ' ' + monthNames[month] + ' ' + yesterday.getFullYear()

    document.write(`<b>Last Date is</b>: ${yesterday}<br>`);
}


function chap3_q10() {

    const d = new Date();
    d.setFullYear(2015), d.setMonth(6), d.setDate(15)
    document.write(`<b>The Set Date is</b>: ${d}<br>`);
    var currentDate = new Date();
    document.write(`<b>The Current Date is:</b> ${currentDate}<br>`);
    var diffTime = Math.abs(d - currentDate)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.write(`<b>${diffDays}</b> Days have been passed since 1st, Ramadan ${d.getFullYear()}`)
}


function chap3_q11() {

    const d = new Date();
    d.setFullYear(2015), d.setMonth(1), d.setDate(01)

    var currentDate = new Date();
    currentDate.setFullYear(2015), currentDate.setMonth(12), currentDate.setDate(31)

    var diffTime = Math.abs(d - currentDate)
    document.write(`<b>On reference date:</b> ${d}<br>`);
    document.write(`<b>${diffTime}</b> Seconds had been passed since the begining of ${d.getFullYear()}`)

}

function chap3_q12() {

    const d = new Date();
    document.write(`<b>Current Date:</b> ${d}<br>`);
    d.setHours(d.getHours() - 1)
    document.write(`<b>1 Hour ago it was,</b>: ${d}<br>`);
}

function chap3_q13() {

    const d = new Date();
    document.write(`<b>Current Date:</b> ${d}<br>`);
    d.setFullYear(d.getFullYear() - 100)
    document.write(`<b>100 Years ago it was,</b>: ${d}<br>`);
}


function chap3_q14() {
    var age = +prompt("Enter Your Age: ")
    const d = new Date();
    var birth_year = Math.abs(d.getFullYear() - age)
    document.write(`<b>Your Age is:</b> ${age}<br><b>Your Birth Year is:</b> ${birth_year}`);
}

function chap3_q15() {
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const d = new Date();
    var customer = prompt("Enter Your Name: ")
    var char_per_unit = +prompt("Enter Charges Per Unit of This Month:")
    var late_charges = +prompt("Enter late Payment Charges")
    // Inputs End

    var no_Of_Units = 410
    var net_amount_within = no_Of_Units * char_per_unit;
    var net_amount_after = net_amount_within + late_charges

    // document.write("<div>")

    document.write(`<h2>L-Electric Bill</h2>`)
    document.write(`Xustomer Name:<b> ${customer}</b><br>
    Month: <b>${monthNames[d.getMonth()]}</b><br> 
    Number of Units: <b>${no_Of_Units}</b><br>
    Charges Per Unit: <b>${char_per_unit}</b><br><br>
    Net Amount Payble(Within Due date): <b>${net_amount_within}</b><br>
    Late Payment Surcharge: <b>${late_charges}</b><br>
    Gross Amount Payble (After Due Date): <b>${net_amount_after}</b> `);
}

// chapter 35-38

function chap4_q1() {

    const d = new Date();
    document.write(`Current Date: ${d}`)
}

function chap4_q2() {
    function full_name(first_name, last_name) {
        var full_name = first_name + " " + last_name
        document.write(`Welcome! <b>${full_name}</b> `);
    }
    full_name("Hasso", "Lover")
}


function chap4_q3() {
    function sum(no1, no2) {
        return alert(no1 + no2);
    }
    var a = +prompt("Enter no1: ")
    var b = +prompt("Enter no2: ")
    sum(a, b)
}


function chap4_q4() {

    function cal(no1, no2, operator) {
        if (operator === "+") {
            return alert(no1 + no2)
        }
        else if (operator === "-") {
            return alert(no1 - no2)
        }
        else if (operator === "*") {
            return alert(no1 * no2)
        }
        else if (operator === "/") {
            return alert(no1 / no2)
        }
    }
    var a = +prompt("Enter no1: ")
    var b = +prompt("Enter no2: ")
    var c = prompt("Enter Operator (+, - , *, /): ")
    cal(a, b, c)
}



function chap4_q5() {

    function sqr(no) {
        return alert(`Square of ${no} is ${no ** 2}`)
    }
    var a = +prompt("Enter any no to get its square: ")
    sqr(a)
}

//  Factorial Method 1
function chap4_q6() {

    function factorial(n) {
        let answer = 1;
        if (n == 0 || n == 1) {
            return alert(`The Factorial of ${n} is ${answer}`);
        }
        else {
            for (var i = n; i >= 1; i--) {
                answer = answer * i;
            }
            return alert(`The Factorial of ${n} is ${answer}`);
        }
    }
    let no = +prompt("Enter any no to get its factorial: ")
    factorial(no)
}

//  Factorial Method 2

// function chap4_q6() {

//     function factorial(n) {
//         //base case
//         if (n == 0 || n == 1) {
//             return alert(1);
//             //recursive case
//         }
//         else {
//             return alert(`The Factorial of ${n} is ${ n * factorial(n - 1)}`);
//         }
//     }

//     let no = +prompt("Enter any no to get its factorial: ")
//     factorial(no)
// }

function chap4_q7() {

    function counting(start, end) {
        for (i = start; i <= end; i++) {
            // alert(i)
            document.write(i, "<br>")
        }
    }
    let no1 = +prompt("Enter the Starting no: ")
    let no2 = +prompt("Enter the Ending no: ")
    counting(no1, no2);
}

function chap4_q8() {

    function calculateHypotenuse(base, perp) {
        var sum = base ** 2 + perp ** 2;
        function calculateSquare() {
            let square = sum ** 2
            return alert(`Hypotenous ${square}`)
        }
        return calculateSquare()
    }

    let base = +prompt("Enter the Base: ")
    let perp = +prompt("Enter the Perpendicular: ")
    calculateHypotenuse(base, perp);

}

function chap4_q9() {
    var width, height
    function calcArea(width = 100, height = 100) {
        return alert(`The area of a Rectangle is: ${area = width * height}`)
    }
    calcArea();
}

function chap4_q10() {
    function palin(give) {

        var x = ""
        var y = ""
        var give1 = give.split("")

        mid = (give1.length - 1) / 2
        var first_to_mid = giv1.slice(0, parseInt(mid))
        var mid_to_last = giv1.slice(parseInt(mid) + 1)


        for (i = 0; i < first_to_mid.length; i++) {
            x += first_to_mid[i]
        }

        mid_to_last = mid_to_last.reversed()
        for (j = 0; j < mid_to_last.length; j++) {
            y += mid_to_last[j]
        }
        if (x.length != y.length) {

            return "False";
        }
        else {
            // comapring each element of array 
            for (var i = 0; i < x.length; i++) {

                if (x[i] != y[i]) {
                    return alert(`The Word ${give} is Palindrome Word`)
                    return alert(`The Word ${give} is not Palinndrome Word`)
                }
            }
        }
    }
    var give = prompt("Enter Any Word to Check palindrome or not:")
    palin(give)
}


function chap4_q11() {

    function titleCase(string) {
        var sentence = string.toLowerCase().split(" ");
        for (var i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        title = sentence.join(" ")
        document.write(title);
        return alert(title);
    }
    var user = prompt("Enter any word or sentence")
    if (user == 0) {
        titleCase("tutorix is one of best e-platforms");
    }
    else {
        titleCase(user);
    }
}


function chap4_q12() {

    function longest(string) {
        var strSplit = string.split(' ');
        var longestWord = 0;
        for (var i = 0; i < strSplit.length; i++) {
            if (strSplit[i].length > longestWord) {
                longestWord = strSplit[i].length;
            }
        }
        for (i = 0; i < strSplit.length; i++) {
            if (strSplit[i].length === longestWord)
                return alert(`'${strSplit[i]}' is the longest word in given sentence`)
        }
    }
    var word = prompt("Enter any sentence")
    longest(word)
}
// web development is wonderful


function chap4_q13() {

    function occurence(string, letter) {
        //   str_splt=string.split(" ")
        let count = 0
        for (i = 0; i < string.length; i++) {
            if (string[i] === letter) {
                count += 1
            }
        }
        alert(`${letter} appers ${count} times in "${string}"`)
    }
    var word = prompt("Enter any sentence")
    var letter = prompt("Enter any letter")
    occurence(word, letter)
}

function chap4_q14() {

    function calcCircumference(radius) {
        pi = 3.14
        Circumference_circle = 2 * pi * radius
        return document.write(`<b>The circumference is:</b> ${Circumference_circle}<br>`)
    }

    function calcArea(radius) {
        pi = 3.14
        area_circle = pi * (radius ** 2)
        return document.write(`<br><b>The Area is:</b> ${area_circle}`)
    }

    var r = + prompt("Enter the rdius of circle: ")
    calcArea(r)
    calcCircumference(r)
}






