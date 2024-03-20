// chap 21-25 string methods

// Q1
// input1 = prompt("Enter first name")
// input2 = prompt("Enter last name")
// alert("Welcome "+input1+" "+input2)

// Q2
// phone = prompt("enter phone")
// document.write("My favourite phone is: "+phone +"<br>Length of string: "+phone.length)

// Q3
// word = "pakistani"
// document.write("string: "+word)
// index = word[7] = "7"
// document.write("<br> index of 'n': "+index) 

// Q4
// word = "Hello World"
// document.write("string "+word +"<br>last index of 'l': "+word.lastIndexOf("l"))

// Q5
// word = "pakistani"
// document.write("string : "+word +"<br>Character at index 3: "+word[3])

// Q6
// input1 = prompt("Enter first name")
// input2 = prompt("Enter last name")
// fullName = input1+" "+input2
// alert("Welcome "+fullName)

// Q7
// city = "Hyderabad"
// newCity = city.replace("Hyder","Islam")
// document.write("city : "+city+"<br> After replacement : "+newCity)

// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together"
// message2 = message.replace(/and/g,"&")
// document.write(message2)

// Q9
// string = "472"
// number = parseInt(string)
// document.write("value: " + string + "<br>")
// document.write("type: " + typeof string + "<br>")
// document.write("value: " + number + "<br>")
// document.write("type: " + typeof number + "<br>")

// Q10
// input = prompt("enter input")
// capital = input.toUpperCase()
// document.write(capital)

// Q11
// input = prompt("Enter title")
// input2 = input[0].toUpperCase()+input.slice(1).toLowerCase()
// document.write("User input : "+input +"<br>Title case : "+input2 )

// Q12
// var num = 35.36
// num2 = num.toString()
// num3 = num2.replace(".","");
// alert(num3)

// Q13
// let username = prompt("Enter a username:");

// if(/[@,.,!]/.test(username)) {
//     alert("Please enter a valid username ");
// } else {
//     alert("Username is valid: " + username);
// }

// Q14
// A = ["cake", "apple pie", "cookie", "chips","patties"]
// input = prompt("Enter input")



// Q15

// Q16

// Q17

// Q18

// chap 21(Changing Case)

// Q1
// var allLower = userInput.toLowerCase;
// var allLower = userInput.toLowerCase();

// Q2
// x = "Hello World"
// x = x.toLowerCase();
// document.write(x)

// Q3
// y = "Hello World"
// y = y.toUpperCase();
// document.write(y)

// Q4
// x = "Hello World"
// z = x.toLowerCase();
// document.write(z)

// Q5
// array = ["Hello","World"]
// x = array[0].toLowerCase();
// y = array[1].toLowerCase();
// document.write(x+" "+y)

// Q6
// x = "Hello World"
// y = x.toUpperCase()
// document.write(y)

// Q7
// cityName = "kaRacHi";
// cityName2 = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase()
// document.write(cityName2)

// chap 22-25(strings)

// Q1
// sameWords = "captain"
// word = sameWords.slice(1,3)
// document.write(word)

// Q2
// string = "hello"
// num = string.length
// document.write(num)

// Q3
// animal = "elephant"
// seg = animal.slice(2,6)
// document.write(seg)

// Q4
// string = "hello"
// num = string.length
// document.write(num)

// Q5
// string = "hello"
// num = string.length
// num2 = string.slice(1,-3)
// document.write(num2)

// Q6
// var text = "To be or not to be"; 
// var indx = text.IndexOf("be");
// document.write(indx)

// Q7
// var text = "To be or not to be"; 
// var indx = text.lastIndexOf("be");
// document.write(indx)

// Q8
// text = "go"
// indx = text.lastIndexOf("go")
// document.write(indx)

// Q9

// Q10
// str = "abcde";
// character = str.charAt(2)
// document.write(character)

// Q11
// text = "my name is ali"
// cha = text.charAt(9)
// document.write(cha)

// Q12
// str = "my name is ali"
// x = str.charAt(str.length -1)
// document.write(x)

// Q13
input = "my name is ali"
cha = input.charAt(4)
document.write(cha)
