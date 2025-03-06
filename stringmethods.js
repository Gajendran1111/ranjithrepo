// .length:       Returns the length of the string.
let len = "hi iam  hello"
console.log(len.length);

// .toUpperCase():Converts the entire string to uppercase.
let up ="gajendran"
console.log(up.toUpperCase());

// .toLowerCase():Converts the entire string to lowercase.
let low ="GAJENDRAN"
console.log(up.toLowerCase());
// .charAt(index):Returns the character at the specified index.
let cha = "hi javascript"
console.log(cha.charAt(4));

// .indexOf():    Returns the index of the first occurrence of the specified substring.

let ind = "gajendran"
console.log(ind.indexOf("a"));

// .lastIndexOf():Returns the index of the last occurrence of the specified substring.
let last = "gajendran"
console.log(last.lastIndexOf("a"));

// .slice():      Extracts a section of the string
let sli = "hello sir"
console.log(sli.slice(3));

// .substring :   is use to take the particular word in sentance starting
let sub = "hello sir"
console.log(sub.substring(0,4));

// .replace():    Replaces the specified value with a new value.
let rep = "hi iam ranjith from chennai"
console.log(rep.replace("chennai","kerala"));

// .replaceAll :  this function use to replace all the same words in the para
let all = "hi iam java and java is a coding language"
console.log(all.replaceAll("java","javascript"));

// .trim():       Removes whitespace from both ends of the string.
let tri = "           hello sir welcome to chennai            "
console.log(tri.trim());

// .split():      Splits the string into an array of substring
let spl = "hello world"
console.log(spl.split("").join(""));

// .join():       it use to join the words
// .concat():     Joins two or more strings.
let con = "gajendran"
console.log(con.concat(".s"));

// .startsWith(): Checks if the string starts with the specified substring.
let str = "javascript"
console.log(str.startsWith("j"));

// .endsWith():   Checks if the string ends with the specified substring.
let end = "javascript"
console.log(end.endsWith("t"));

// .includes():   Checks if the string contains the specified substring.
let innc = "hello java welcome"
console.log(innc.includes("java"));

// .splice() : 0 it add the value in the index line & 1 its remove the index value and add the given value
// syntax 
// variable_name.splice(index,splice,value)
let days = ["monday","tuesday","wednesday","thurseday","friday","saturday"]
days.splice(0,0,"sunday")
console.log(days)

