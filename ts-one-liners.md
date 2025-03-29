# 250+ Killer TypeScript One-Liners

1. Convert Celsius to Fahrenheit
The function celsiusToFahrenheit accepts a temperature value in Celsius and computes its equivalent temperature in Fahrenheit using the formula: (Celsius * 9/5) + 32.

const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;

// Example:
console.log(celsiusToFahrenheit(25)); 
// Output: 77°F (25°C converted to Fahrenheit)


2. Get Value of a browser Cookie
getCookie takes the name of the cookie as input and returns its value. It splits the document. cookie string to extract the value of the specified cookie by name. If the cookie is found, its value is returned; otherwise, undefined is returned.

// Retrieve the value of a browser cookie by name
const getCookie = (name) => document.cookie.split('; ').find(cookie => cookie.startsWith(`${name}=`))?.split('=')[1];

// Example:
console.log(getCookie('_ga')); 
// Output: "GA1.2.1929736587.1601974046"

 
3. Convert RGB to Hex
rgbToHex takes the red, green, and blue (RGB) values as input and returns their hexadecimal representation. The RGB values are combined into a single integer, converted to hexadecimal, and prefixed with #. Finally, the function returns the hexadecimal color code.

// Convert RGB values to hexadecimal representation
const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};

// Example usage:
console.log(rgbToHex(0, 51, 255)); 
// Output: #0033ff



 
4. Copy to Clipboard
copyToClipboard takes a string text as input and uses the navigator.clipboard.writeText method to copy the text to the clipboard asynchronously. It handles any errors that may occur during the process. You can call this function with the text you want to copy as an argument.

// Copy text to clipboard
const copyToClipboard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard:", text);
  } catch (error) {
    console.error("Failed to copy text to clipboard:", error);
  }
};

// Example usage:
copyToClipboard("Hello World");




 
5. Check if Date is Valid
isDateValid takes variable arguments and attempts to create a new Date object from them. It then checks if the resulting date is valid by verifying that its value is not NaN. If the date is valid, the function returns true; otherwise, it returns false. You can call this function with the date string you want to validate.

// Check if a date is valid
const isDateValid = (...val: any[]): boolean => {
    return !Number.isNaN(new Date(...val).valueOf());
};

// Example usage:
console.log(isDateValid("December 17, 1995 03:24:00")); 
// Output: true

 
6. Find the day of year
dayOfYear calculates the day of the year for a given date by subtracting the start of the year from the given date and converting the difference to days. The function returns the calculated day of the year as a number. You can call this function with a Date object representing the desired date.

// Find the day of the year for a given date
const dayOfYear = (date: Date): number => {
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
};

// Example usage:
console.log(dayOfYear(new Date())); 
// Output: 272


 
7. Capitalize a String
capitalize takes a string str as input and returns the same string with the first letter capitalized. It does so by using str.charAt(0) to get the first character of the string, converting it to uppercase, and then concatenating it with the rest of the string starting from the second character using str.slice(1). You can call this function with any string you want to capitalize the first letter of.

// Capitalize the first letter of a string
const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Example usage:
console.log(capitalize("follow for more")); 
// Output: Follow for more

  
8. Find the number of days between two days
dayDiff calculates the number of days between two given dates by finding the absolute difference in milliseconds between the two dates and then dividing it by the number of milliseconds in a day (1000 * 60 * 60 * 24). The result is rounded up using Math.ceil to ensure we get the number of full days. You can call this function with two Date objects representing the start and end dates.

// Find the number of days between two dates
const dayDiff = (date1: Date, date2: Date): number => {
    const oneDay = 1000 * 60 * 60 * 24; // Number of milliseconds in a day
    const diffInMs = Math.abs(date1.getTime() - date2.getTime());
    return Math.ceil(diffInMs / oneDay);
};

// Example usage:
console.log(dayDiff(new Date("2020-10-21"), new Date("2021-10-22"))); 
// Output: 366
 


9. Clear All Cookies
clearCookies splits the document.cookie string into individual cookies using split(';'). It then iterates over each cookie and sets its expiration date to a date in the past, effectively deleting the cookie. The function is called without any arguments to clear all cookies on the current web page.

// Clear all cookies
const clearCookies = (): void => {
    document.cookie.split(';').forEach(cookie => {
        document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
    });
};

// Example:
clearCookies();

 
10. Generate Random Hex
randomHex generates a random hexadecimal color by generating a random integer between 0 and 16777215 (0xffffff in hexadecimal), converting it to a hexadecimal string, and padding it with zeros to ensure it has six digits. Finally, it prepends a '#' symbol to the string to make it a valid hex color representation. You can call this function to generate random hex colors.

// Generate a random hex color
const randomHex = (): string => {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
};

// Example usage:
console.log(randomHex()); 
// Output: #92b008


 
11. Get Query Params from URL
getParameters takes a URL string as input and returns an object containing the query parameters as key-value pairs. It first splits the URL into the base URL and the query string using split('?'), then splits the query string into individual parameters using split('&'), and finally extracts the key-value pairs from each parameter. The function returns the resulting object containing the query parameters. You can call this function with a URL string to retrieve the query parameters.

// Retrieve query parameters from a URL
const getParameters = (url: string): { [key: string]: string } => {
    const queryParams: { [key: string]: string } = {};
    const queryString = url.split('?')[1];
    if (queryString) {
        queryString.split('&').forEach(param => {
            const [key, value] = param.split('=');
            queryParams[key] = decodeURIComponent(value);
        });
    }
    return queryParams;
};

// Example:
const url = 'http://example.com?search=easy&page=3';
console.log(getParameters(url)); 
// Output: { search: 'easy', page: '3' }

 
12. Log Time from Date
timeFromDate takes a Date object as input and returns a string representing the time in the format "hour::minutes::seconds". It achieves this by using the toTimeString() method to get the time string from the Date object and then extracting the first 8 characters (representing hour, minutes, and seconds) using slice(0, 8). You can call this function with a Date object to log the time from it.

// Log time from a date
const timeFromDate = (date: Date): string => {
    return date.toTimeString().slice(0, 8);
};

// Example:
console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); 
// Output: "17:30:00"

 
13. Check if a number is even or odd
isEven takes a num as input, which is expected to be a number, and returns true if the number is even, and false otherwise. You can call this function with a number to check if it's even or odd.

// Check if a number is even or odd
const isEven = (num: number): boolean => num % 2 === 0;

// Example usage:
console.log(isEven(2)); 
// Output: true

 
14. Find Average of Numbers
average takes multiple numbers as arguments using the rest parameter syntax (...args: number[]) and calculates their average using the reduce method. It initializes the total to 0 and then adds each number to the total. Finally, it divides the total by the number of arguments to find the average. You can call this function with any number of arguments to find their average.

// Find the average of numbers
const average = (...args: number[]): number => {
    return args.reduce((total, num) => total + num, 0) / args.length;
};

// Example usage:
console.log(average(1, 2, 3, 4)); 
// Output: 2.5
 
15. Scroll to Top
goToTop utilizes the window.scrollTo method to scroll the window to the top. It sets both the horizontal and vertical positions to 0, ensuring the window scrolls to the top. You can call this function to automatically scroll to the top of the page.

// Scroll to top
const goToTop = (): void => {
    window.scrollTo(0, 0);
};

// Example:
goToTop();

 
16. Reverse a string
reverse takes a str as input, which is expected to be a string. It then splits the string into an array of characters using split(''), reverses the array using reverse(), and joins the characters back into a string using join(''). Finally, it returns the reversed string. You can call this function with a string to reverse it.

// Reverse a string
const reverse = (str: string): string => {
    return str.split('').reverse().join('');
};

// Example:
console.log(reverse('hello world')); 
// Output: 'dlrow olleh'
 
17. Check if array is empty
isNotEmpty takes an array arr as input, which is expected to be an array of type T. It checks if arr is an array and if its length is greater than 0. If both conditions are true, it returns true, indicating that the array is not empty; otherwise, it returns false. You can call this function with any array to check if it's not empty.

// Check if array is not empty
const isNotEmpty = <T>(arr: T[]): boolean => Array.isArray(arr) && arr.length > 0;

// Example usage:
console.log(isNotEmpty([1, 2, 3])); 
// Output: true

 
18. Get Selected Text
getSelectedText retrieves the selected text by using the window.getSelection() method. It then converts the selection to a string using toString(). Finally, it returns the selected text as a string. You can call this function to get the text that the user has selected.

// Get selected text
const getSelectedText = (): string => {
    return window.getSelection().toString();
};

// Example:
console.log(getSelectedText());

 
19. Shuffle an Array
shuffleArray takes an array arr as input and shuffles its elements using the sort() method with a random comparator. The random comparator returns a random value between -0.5 and 0.5, causing the sort() method to rearrange the elements randomly. Finally, it returns the shuffled array. You can call this function with any array to shuffle its elements.

// Shuffle an array
const shuffleArray = <T>(arr: T[]): T[] => arr.sort(() => 0.5 - Math.random());

// Example:
console.log(shuffleArray([1, 2, 3, 4])); 
// Output: [ 1, 4, 3, 2 ]

 
20. Detect Dark Mode
This snippet checks if the user's device is in dark mode by using the window.matchMedia() method to match the media query (prefers-color-scheme: dark). If the device is in dark mode, matches will be true; otherwise, it will be false. You can use this snippet to determine whether to apply specific styling or functionality based on the user's preferred color scheme.

// Detect dark mode
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Example:
console.log(isDarkMode); // Output: True or False


 
21. Remove Duplicated from Array
removeDuplicates takes an array arr as input and uses a Set to remove duplicates. The spread operator ... is then used to convert the Set back into an array. You can call this function with any array to remove duplicate elements from it.

// Remove duplicates from an array
const removeDuplicates = <T>(arr: T[]): T[] => [...new Set(arr)];

// Example:
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6])); 
// Output: [ 1, 2, 3, 4, 5, 6 ]

 
22. Get the Length of a String
getLength takes a string str as input and returns its length using the .length property. You can call this function with any string to get its length.

// Get the length of a string
const getLength = (str: string): number => str.length;

// Example:
console.log(getLength("Hello, world!")); 
// Output: 13

 
23. Calculate the Area of a Circle
calculateCircleArea takes the radius of a circle as input and returns its area using the formula πr^2. You can call this function with any radius value to get the corresponding area of the circle.

// Calculate the area of a circle
const calculateCircleArea = (radius: number): number => Math.PI * Math.pow(radius, 2);

// Example:
console.log(calculateCircleArea(5)); 
// Output: 78.53981633974483
 


24. Check if a Number is Prime
isPrime takes a number as input and returns true if it's a prime number, otherwise false. You can call this function with any integer value to check if it's prime or not.

// Check if a number is prime
const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  // Example:
  console.log(isPrime(13)); 
// Output: true
  
 
25. Count Occurrences of a Character in a String
countOccurrences takes two parameters: the string str and the character char to count. It splits the string by the specified character and returns the count of substrings generated minus 1.

// Count occurrences of a character in a string
const countOccurrences = (str: string, char: string): number =>
  str.split(char).length - 1;

// Example:
console.log(countOccurrences("banana", "a")); 
// Output: 3

 
26. Remove Leading and Trailing Whitespaces
removeWhitespaces function takes a string str as input and returns the string with leading and trailing whitespaces removed using the trim() method.

// Remove leading and trailing whitespaces from a string
const removeWhitespaces = (str: string): string => str.trim();

// Example:
console.log(removeWhitespaces("  Hello, world!  ")); 
// Output: "Hello, world!"

 
27. Generate a Random Number within a Range
randomInRange function takes two parameters min and max, representing the minimum and maximum values of the range, respectively. It then generates a random integer within this range using Math.random() and returns it.

// Generate a random integer within a specified range
const randomInRange = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

// Example:
console.log(randomInRange(1, 10)); 
// Output: Random number between 1 and 10 (inclusive)

 
28. Convert Seconds to HH:MM:SS Format
secondsToHHMMSS function takes a parameter seconds, representing the number of seconds to be converted. It calculates the hours, minutes, and seconds components, and then returns them formatted as a string in the "hours:minutes:seconds" format.

// Convert a given number of seconds into the "hours:minutes:seconds" format
const secondsToHHMMSS = (seconds: number): string => {
    const pad = (num: number): string => String(num).padStart(2, '0');
    const hours: number = Math.floor(seconds / 3600);
    const minutes: number = Math.floor((seconds % 3600) / 60);
    const secs: number = seconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
  };
  
  // Example:
  console.log(secondsToHHMMSS(3660)); 
// Output: "01:01:00"
  
 
29. Get the Last Element of an Array
getLastElement takes an array arr as input and returns the last element of the array. If the array is empty, it returns undefined.

// Retrieve the last element of a given array
const getLastElement = <T>(arr: T[]): T | undefined => arr[arr.length - 1];

// Example:
console.log(getLastElement([1, 2, 3, 4])); 
// Output: 4
 
30. Sort an Array of Numbers in Ascending Order
sortAscending takes an array of numbers arr as input, creates a copy of the array using slice() to avoid mutating the original array, and then sorts the copied array in ascending order using the sort() method.

// Sort a given array of numbers in ascending order
const sortAscending = (arr: number[]): number[] => arr.slice().sort((a, b) => a - b);

// Example usage:
console.log(sortAscending([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])); 
// Output: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]
 
31. Check if a String is Palindrome
isPalindrome takes a string str as input, splits it into an array of characters using split(''), reverses the array using reverse(), joins the reversed array back into a string using join(''), and finally checks if the reversed string is equal to the original string. If they are equal, it returns true, indicating that the input string is a palindrome; otherwise, it returns false.

// Determine if a given string is a palindrome
const isPalindrome = (str: string): boolean => str === str.split('').reverse().join('');

// Example:
console.log(isPalindrome("level")); 
// Output: true

 
32. Calculate Factorial of a Number
In this TypeScript function, num is specified as a parameter with type number to ensure type safety. The function calculates the factorial recursively by checking if num is either 0 or 1 (base cases), in which case it returns 1. Otherwise, it returns the product of num and the factorial of num - 1.

// Calculate the factorial of a given number
const factorial = (num: number): number => {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
  };
  
  // Example:
  console.log(factorial(5)); 
// Output: 120
  
 
33. Sum all Numbers in an Array
In this TypeScript function, arr is specified as a parameter with type number[] to ensure that only arrays containing numbers are accepted as input. The reduce method is used to iterate through the array and accumulate the sum, starting with an initial value of 0.

// Calculate the sum of all numbers in a given array
const sumArray = (arr: number[]): number => arr.reduce((acc, val) => acc + val, 0);

// Example:
console.log(sumArray([1, 2, 3, 4, 5])); 
// Output: 15

 
34. Find the Maximum Value in an Array
In this TypeScript function, arr is specified as a parameter with type number[] to ensure that only arrays containing numbers are accepted as input. The spread operator (...) is used to pass the elements of the array as arguments to the Math.max function, which returns the maximum value.

// Find the maximum value in a given array of numbers
const findMax = (arr: number[]): number => Math.max(...arr);

// Example:
console.log(findMax([10, 5, 8, 20, 3])); 
// Output: 20

 
35. Get the Current Date in DD/MM/YYYY Format
getCurrentDate returns a string representing the current date in the "DD/MM/YYYY" format. The padStart method is used to ensure that both the day and month components have two digits.

// Get the current date in the "DD/MM/YYYY" format
const getCurrentDate = (): string => {
    const date: Date = new Date();
    const day: string = String(date.getDate()).padStart(2, '0');
    const month: string = String(date.getMonth() + 1).padStart(2, '0');
    const year: number = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
// Example:
  console.log(getCurrentDate()); 
// Output: "02/08/2023"
  
 
36. Calculate the Power of a Number
In this TypeScript function, power takes two parameters: base and exponent, both of which are numbers. It calculates the result of raising the base to the power of the exponent using the Math.pow method and returns the result.

// Calculate the result of raising a given base to a specified exponent
const power = (base: number, exponent: number): number => Math.pow(base, exponent);

// Example usage:
console.log(power(2, 5)); 
// Output: 32

 
37. Convert String to Number
stringToNumber takes a parameter str of type string, representing the input string to be converted. It uses parseFloat to parse the string into a floating-point number and returns the result.

// Convert a given string to a numeric value (float or integer)
const stringToNumber = (str: string): number => parseFloat(str);

// Example:
console.log(stringToNumber("3.14")); 
// Output: 3.14
 
38. Find the First N Fibonacci Numbers
fibonacci takes a parameter n of type number, representing the number of Fibonacci numbers to generate. It initializes an array result with the first two Fibonacci numbers (0 and 1). Then, it iterates from 2 to n - 1, calculating each Fibonacci number by adding the previous two numbers and pushing the result into the result array. Finally, it returns the array of Fibonacci numbers.

// Generate the first N Fibonacci numbers
const fibonacci = (n: number): number[] => {
    const result: number[] = [0, 1];
    for (let i = 2; i < n; i++) {
      result.push(result[i - 1] + result[i - 2]);
    }
    return result;
  };
  
  // Example:
  console.log(fibonacci(8)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13]
  
 
39. Count the Number of Words in a String
countWords takes a parameter str of type string, representing the input string. It trims the string to remove leading and trailing whitespace, then splits it using a regular expression /\s+/ to split by one or more whitespace characters. Finally, it returns the length of the resulting array, which represents the number of words in the string.

// Count the number of words in a string
const countWords = (str: string): number => str.trim().split(/\s+/).length;

// Example:
console.log(countWords("Hello world, how are you?")); 
// Output: 5


 
40. Reverse an Array
reverseArray takes a parameter arr of type T[], representing the input array of type T. It creates a shallow copy of the array using slice() to avoid mutating the original array, then calls the reverse() method to reverse the elements of the copied array. Finally, it returns the reversed array.

// Reverse the elements of a given array
const reverseArray = <T>(arr: T[]): T[] => arr.slice().reverse();

// Example:
console.log(reverseArray([1, 2, 3, 4, 5])); 
// Output: [5, 4, 3, 2, 1]

 
41. Get the Current Year
currentYear is a function that returns the current year as a number. It creates a new Date object, calls the getFullYear() method on it to retrieve the current year, and returns the result.

// Get the current year
const currentYear = (): number => new Date().getFullYear();

// Example:
console.log(currentYear()); 
// Output: 2023 (depending on the current year)

 
42. Generate a Random Number between 1 and 10
random1To10 is a function that generates a random integer between 1 and 10 (inclusive). It uses Math.random() to generate a random decimal between 0 (inclusive) and 1 (exclusive), multiplies it by 10 to scale the range to 0 (inclusive) to 10 (exclusive), and then uses Math.floor() to truncate the decimal part and get an integer between 0 and 9. Finally, 1 is added to shift the range to 1 (inclusive) to 10 (inclusive).

// Generate a random number between 1 and 10
const random1To10 = (): number => Math.floor(Math.random() * 10) + 1;

// Example:
console.log(random1To10()); 
// Output: Random number between 1 and 10 (inclusive)


 
43. Check if a String is Empty
isEmptyString is a function that takes a string (str) as input and returns a boolean value indicating whether the string is empty or not. It uses str.trim().length === 0 to check if the trimmed length of the string is equal to 0, which means the string is empty.

// Check if a given string is empty
const isEmptyString = (str: string): boolean => str.trim().length === 0;

// Example:
console.log(isEmptyString("")); 
// Output: true
console.log(isEmptyString("Hello, world!")); 
// Output: false

 
44. Check if an Object has a Specific Property
hasProperty is a function that takes an object (obj) and a property name (prop) as input and returns a boolean value indicating whether the object contains the specified property. It uses the in operator to check if the property exists in the object.

// Check if an object contains a specific property
const hasProperty = (obj: any, prop: string): boolean => prop in obj;

// Example:
const person = { name: "John", age: 30 };
console.log(hasProperty(person, "name")); 
// Output: true
console.log(hasProperty(person, "gender")); 
// Output: false
 
45. Calculate the Average of Numbers in an Array
average takes an array of numbers (arr) as input and returns the average value of the numbers in the array. It uses the reduce method to sum up all the numbers in the array and then divides the sum by the length of the array to calculate the average.

// Calculate the average of numbers in a given array
const average = (arr: number[]): number => arr.reduce((acc, val) => acc + val, 0) / arr.length;

// Example:
console.log(average([1, 2, 3, 4, 5])); 
// Output: 3

 
46. Check if a Number is a Multiple of 5
isMultipleOf5 takes a number (num) as input and returns a boolean value indicating whether the number is a multiple of 5. It uses the modulo operator (%) to check if the remainder of dividing the number by 5 is equal to 0. If the remainder is 0, then the number is a multiple of 5, otherwise it's not.

// Check if a given number is a multiple of 5
const isMultipleOf5 = (num: number): boolean => num % 5 === 0;

// Example:
console.log(isMultipleOf5(10)); 
// Output: true
console.log(isMultipleOf5(7));  
// Output: false

 
47. Convert Minutes to Seconds
minsToSecs takes a number (mins) representing minutes as input and returns the equivalent number of seconds. It multiplies the number of minutes by 60 to convert them to seconds.

// Convert minutes to seconds
const minsToSecs = (mins: number): number => mins * 60;

// Example:
console.log(minsToSecs(5)); 
// Output: 300

 
48. Find the Maximum Value in an Array of Objects
findMaxValue takes an array arr of objects of type T and a property key key as input. It uses the map function to extract the values of the specified property from each object in the array, and then uses Math.max to find the maximum value among those extracted values.

// Find the maximum value of a specific property in an array of objects
const findMaxValue = <T>(arr: T[], key: keyof T): number => Math.max(...arr.map(item => item[key]));

// Example:
const students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 70 }
];

console.log(findMaxValue(students, "score")); 
// Output: 95

 
49. Check if a String starts with a specific character
startsWithChar takes two parameters: str, which is the input string, and char, which is the specific character to check. It returns true if the string starts with the specified character, and false otherwise.

// Check if a given string starts with a specific character
const startsWithChar = (str: string, char: string): boolean => str.startsWith(char);

// Example:
console.log(startsWithChar("Hello, world!", "H")); 
// Output: true
console.log(startsWithChar("Hello, world!", "h")); 
// Output: false

 
50. Convert a String to Title Case
toTitleCase takes a string (str) as input and returns the string converted to title case. It uses a regular expression (/\b\w/g) to match the first letter of each word in the string and then applies the toUpperCase() method to capitalize it.

// Convert a given string to title case (capitalize the first letter of each word)
const toTitleCase = (str: string): string => str.replace(/\b\w/g, match => match.toUpperCase());

// Example:
console.log(toTitleCase("hello world")); 
// Output: "Hello World"

 
51. Check if an Array contains a specific value
containsValue takes an array arr of type T[] and a value value of type T as input, and it returns a boolean indicating whether the array contains the specified value. It uses the includes method of arrays to perform the check.

// Check if a given array contains a specific value
const containsValue = <T>(arr: T[], value: T): boolean => arr.includes(value);

// Example usage:
console.log(containsValue([1, 2, 3, 4, 5], 3)); 
// Output: true
console.log(containsValue([1, 2, 3, 4, 5], 6)); 
// Output: false

 
52. Convert an Array to a Comma-separated String
arrayToCSV takes an array arr of type T[] as input and returns a string containing the elements of the array separated by commas.

// Convert a given array to a comma-separated string
const arrayToCSV = <T>(arr: T[]): string => arr.join(', ');

// Example:
console.log(arrayToCSV([1, 2, 3, 4, 5])); 
// Output: "1, 2, 3, 4, 5"




 
53. Check if a Year is a Leap Year
isLeapYear takes a year of type number as input and returns true if it's a leap year, and false otherwise.

// Check if a given year is a leap year
const isLeapYear = (year: number): boolean =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

// Example:	
console.log(isLeapYear(2024)); // Output: true
console.log(isLeapYear(2023)); // Output: false

 
54. Find the Index of an Element in an Array
findIndex takes an array arr of type T[] and an element of type T as input, and it returns the index of the first occurrence of the element in the array. If the element is not found, it returns -1.

// Find the index of a specific element in a given array
const findIndex = <T>(arr: T[], element: T): number => arr.indexOf(element);

// Example:
const fruits: string[] = ["apple", "banana", "orange", "grape"];
console.log(findIndex(fruits, "orange")); 
// Output: 2


 
55. Convert Minutes to Hours and Minutes
minsToHoursAndMins takes the number of minutes mins as input and calculates the equivalent hours and remaining minutes. It then returns a string that represents the result in the format "X hours and Y minutes".

// Convert a given number of minutes to hours and remaining minutes
const minsToHoursAndMins = (mins: number): string => {
    const hours: number = Math.floor(mins / 60);
    const remainingMins: number = mins % 60;
    return `${hours} hours and ${remainingMins} minutes`;
  };
  
  // Example:
  console.log(minsToHoursAndMins(150)); 
// Output: "2 hours and 30 minutes"
  
 
56. Check if an Array is Sorted in Ascending Order
isSortedAscending takes an array arr as input and checks if every element in the array is greater than or equal to the previous element, ensuring that the array is sorted in ascending order.

// Check if a given array is sorted in ascending order
const isSortedAscending = (arr: number[]): boolean =>
  arr.every((el, i) => i === 0 || el >= arr[i - 1]);

// Example:
console.log(isSortedAscending([1, 2, 3, 5, 8])); 
// Output: true
console.log(isSortedAscending([1, 5, 3, 8, 2])); 
// Output: false

 
57. Remove a Specific Element from an Array
removeElement takes an array arr and an element element to remove from the array. It returns a new array with all occurrences of the specified element removed.

// Remove a specific element from a given array
const removeElement = <T>(arr: T[], element: T): T[] => arr.filter(el => el !== element);

// Example:
console.log(removeElement([1, 2, 3, 4, 5], 3)); 
// Output: [1, 2, 4, 5]

 
58. Truncate a String to a Given Length
truncateString takes a string str and a maximum length maxLength. If the length of the string exceeds maxLength, it truncates the string and appends '...' to indicate that it has been truncated. Otherwise, it returns the original string.

// Truncate a given string to a specified maximum length
const truncateString = (str: string, maxLength: number): string => 
  str.length > maxLength ? str.slice(0, maxLength) + '...' : str;

// Example usage:
console.log(truncateString("Hello, world!", 5)); 
// Output: "Hello..."

 
59. Calculate the Exponentiation of a Number
exponentiate takes a base base and an exponent exponent. It calculates the result of raising the base to the exponent using Math.pow() and returns the result.

// Calculate the exponentiation of a given base raised to a specified exponent
const exponentiate = (base: number, exponent: number): number => Math.pow(base, exponent);

// Example:
console.log(exponentiate(2, 3)); 
// Output: 8

 
60. Find the Difference between Two Dates in Days
dateDifferenceInDays takes two Date objects as input: date1 and date2. It calculates the difference between the two dates in days by first converting them to milliseconds since the Unix epoch, then dividing the difference by the number of milliseconds in a day, and finally taking the absolute value to ensure the result is positive.

// Find the difference between two dates in days
const dateDifferenceInDays = (date1: Date, date2: Date): number => {
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    return Math.abs(Math.floor((date2.getTime() - date1.getTime()) / millisecondsPerDay));
};

// Example usage:
const startDate = new Date("2023-08-01");
const endDate = new Date("2023-08-10");
console.log(dateDifferenceInDays(startDate, endDate)); 
// Output: 9

 
61. Check if a String is a Valid Email Address
isValidEmail, we define a regular expression emailRegex that matches the pattern of a typical email address. Then, we use the test method of the regular expression to check if the given email string matches the pattern. If it does, the function returns true; otherwise, it returns false.

// Check if a given string is a valid email address
const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Example:
console.log(isValidEmail("user@example.com")); 
// Output: true
console.log(isValidEmail("invalid-email"));    
// Output: false

 
62. Convert Seconds to Minutes and Seconds
secsToMinsAndSecs, we calculate the number of minutes by dividing the seconds input by 60 and taking the integer part using Math.floor. Then, we calculate the remaining seconds by taking the remainder of the division. Finally, we return a string containing the number of minutes and remaining seconds.

// Convert a given number of seconds to minutes and remaining seconds
const secsToMinsAndSecs = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const remainingSecs = seconds % 60;
    return `${mins} minutes and ${remainingSecs} seconds`;
};

// Example:
console.log(secsToMinsAndSecs(120)); 
// Output: "2 minutes and 0 seconds"


 
63. Check if an Object is a Function
isFunction, we check the type of the input object using the typeof operator and compare it with 'function'. If the type is 'function', the function returns true; otherwise, it returns false.

// Check if a given object is a function
const isFunction = (obj: any): boolean => typeof obj === 'function';

// Example:
console.log(isFunction(() => {})); 
// Output: true
console.log(isFunction({}));       
// Output: false
 
64. Convert Binary Number to Decimal
binaryToDecimal, we use the parseInt function with a radix of 2 to convert the binary string to its decimal representation.

// Convert a given binary number to its decimal representation
const binaryToDecimal = (binary: string): number => parseInt(binary, 2);

// Example:
console.log(binaryToDecimal("1101")); 
// Output: 13

 
65. Check if an Array contains only Unique Values
hasUniqueValues, we use a Set to create a collection of unique values from the array. We then compare the size of the set with the length of the original array. If they are equal, it means all values in the array are unique.

// Check if a given array contains only unique values
const hasUniqueValues = <T>(arr: T[]): boolean => new Set(arr).size === arr.length;

// Example:
console.log(hasUniqueValues([1, 2, 3, 4, 5])); // Output: true
console.log(hasUniqueValues([1, 2, 3, 4, 4])); // Output: false

 
66. Get the Day of the Week from a Date
getDayOfWeek, we define an array daysOfWeek containing the names of the days of the week. We then use the getDay() method of the Date object to retrieve the day of the week as an index, and return the corresponding day from the daysOfWeek array.

// Get the day of the week from a given date
const getDayOfWeek = (date: Date): string => {
    const daysOfWeek: string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];
  };
  
  // Example:
  console.log(getDayOfWeek(new Date("2023-08-02"))); 
// Output: "Wednesday"
  
 
67. Check if a Number is a Power of Two
isPowerOfTwo, we use bitwise AND operator & to check if the given number is a power of two. If num & (num - 1) equals 0, then the number is a power of two, otherwise it's not.

// Check if a given number is a power of two
const isPowerOfTwo = (num: number): boolean => (num & (num - 1)) === 0;

// Example:
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(5));  // Output: false
 
68. Convert Object to Query Parameters String
objectToQueryParams, we define that the input obj should be an object where the keys are strings and the values are either strings or numbers. We then use Object.entries to convert the object into an array of key-value pairs, map over each pair to encode both the key and value using encodeURIComponent, and finally join them together with &.

// Convert a given object to a string of query parameters
const objectToQueryParams = (obj: Record<string, string | number>): string =>
  Object.entries(obj)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`)
    .join('&');

// Example:
console.log(objectToQueryParams({ search: "hello", page: 1 })); 
// Output: "search=hello&page=1"

 
69. Check if an Array contains an Even Number
hasEvenNumber, we specify that the input arr should be an array of numbers. We then use the some method to iterate over each element of the array and check if at least one element satisfies the condition of being divisible by 2 (i.e., being even). If such an element is found, some returns true; otherwise, it returns false.

// Check if a given array contains at least one even number
const hasEvenNumber = (arr: number[]): boolean => arr.some(num => num % 2 === 0);

// Example usage:
console.log(hasEvenNumber([1, 3, 5, 7, 8])); // Output: true
console.log(hasEvenNumber([1, 3, 5, 7, 9])); // Output: false

 
70. Get the Month Name from a Date
getMonthName, we specify that the input date should be of type Date. We then use the getMonth method of the Date object to retrieve the index of the month (0-based), and we use this index to access the corresponding month name from the months array.

// Get the name of the month from a given date
const getMonthName = (date: Date): string => {
    const months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[date.getMonth()];
  };
  
// Example usage:
  console.log(getMonthName(new Date("2023-08-02"))); 
// Output: "August"
 
71. Check if a String is a Palindrome (case-insensitive)
isPalindromeCaseInsensitive, we specify that the input str should be of type string. We convert the input string to lowercase using the toLowerCase method to make the comparison case-insensitive. Then, we compare the original formatted string with its reversed version to determine if it's a palindrome.

// Check if a given string is a palindrome, considering it case-insensitive
const isPalindromeCaseInsensitive = (str: string): boolean => {
  const formattedStr = str.toLowerCase();
  return formattedStr === formattedStr.split("").reverse().join("");
};

// Example:
console.log(isPalindromeCaseInsensitive("LeVel")); 
// Output: true
console.log(isPalindromeCaseInsensitive("Hello")); 
// Output: false

  
 
72. Convert Feet to Meters
feetToMeters, we specify that the input feet should be of type number. We then multiply the input value by the conversion factor from feet to meters (1 foot = 0.3048 meters) to get the result in meters.

// Convert a given length in feet to meters
const feetToMeters = (feet: number): number => feet * 0.3048;

// Example:
console.log(feetToMeters(10)); 
// Output: 3.048

 
73. Check if a Number is a Perfect Square
isPerfectSquare, we specify that the input num should be of type number. We then calculate the square root of the input number using Math.sqrt(num) and check if the result is an integer (i.e., if the remainder when divided by 1 is 0). If the remainder is 0, the number is a perfect square, otherwise, it's not.

// Check if a given number is a perfect square
const isPerfectSquare = (num: number): boolean => Math.sqrt(num) % 1 === 0;

// Example:
console.log(isPerfectSquare(16)); 
// Output: true
console.log(isPerfectSquare(10)); 
// Output: false


 
74. Check if a String contains only Numbers
containsOnlyNumbers, we specify that the input str should be of type string. We then use a regular expression /^[0-9]+$/ to check if the string contains only numeric characters. The ^ and $ denote the start and end of the string, respectively, [0-9] matches any digit, and + ensures that there is at least one digit in the string. If the test passes, the function returns true; otherwise, it returns false.

// Check if a given string contains only numeric characters
const containsOnlyNumbers = (str: string): boolean => /^[0-9]+$/.test(str);

// Example:
console.log(containsOnlyNumbers("12345")); 
// Output: true
console.log(containsOnlyNumbers("12a34")); 
// Output: false

 
75. Get the Current Month (0-based index)
currentMonth, we use new Date().getMonth() to obtain the current month as a 0-based index. This method returns a number between 0 and 11, where 0 represents January, 1 represents February, and so on, up to 11 for December.

// Get the current month as a 0-based index (0 for January, 1 for February, etc.)
const currentMonth = (): number => new Date().getMonth();

// Example:
console.log(currentMonth()); 
// Output: Current month (0-based index)

 
76. Calculate the Mean of an Array of Numbers
currentMonth, we use new Date().getMonth() to obtain the current month as a 0-based index. This method returns a number between 0 and 11, where 0 represents January, 1 represents February, and so on, up to 11 for December.

// Get the current month as a 0-based index (0 for January, 1 for February, etc.)
const currentMonth = (): number => new Date().getMonth();

// Example:
console.log(currentMonth()); // 
Output: Current month (0-based index)

 
77. Check if a Number is a Prime Number
We accept a parameter num of type number. The function checks if the number is less than or equal to 1, in which case it immediately returns false, as numbers less than or equal to 1 are not prime. Then, it iterates from 2 up to the square root of the given number (Math.sqrt(num)) and checks if the number is divisible by any integer in that range. If it finds any divisor, it returns false. If no divisors are found, it returns true, indicating that the number is prime.

const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
// Example:
  console.log(isPrime(13)); 
// Output: true
  console.log(isPrime(4));  
// Output: false
  
 
78. Get the Last N Elements of an Array
lastNElements, we accept two parameters: arr, which is an array of type T, and n, which is the number of elements to retrieve. The function then uses the slice method with a negative index -n to extract the last n elements from the array arr.

const lastNElements = <T>(arr: T[], n: number): T[] => arr.slice(-n);

// Example:
console.log(lastNElements([1, 2, 3, 4, 5], 3)); 
// Output: [3, 4, 5]

 
79. Convert Degrees to Radians
degToRad takes an angle in degrees as input and returns the equivalent angle in radians. It multiplies the given angle by the conversion factor (Math.PI / 180) to perform the conversion.

const degToRad = (degrees: number): number => degrees * (Math.PI / 180);

// Example:
console.log(degToRad(90)); 
// Output: 1.5707963267948966

 
80. Check if a String is a Valid URL
Check if a given string is a valid URL.

const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

console.log(isValidURL("https://www.example.com")); 
// Output: true

console.log(isValidURL("invalid-url")); 
// Output: false

  
 
81. Find the Intersection of Two Arrays
Find the common elements (intersection) between two arrays.

const intersection = <T>(arr1: T[], arr2: T[]): T[] => arr1.filter(val => arr2.includes(val));

console.log(intersection([1, 2, 3], [2, 3, 4])); 
// Output: [2, 3]
 
82. Convert Days to Years, Months, and Days
Convert a given number of days to years, months, and remaining days.

const daysToYearsMonthsDays = (days: number): string => {
  const years = Math.floor(days / 365);
  const remainingDays = days % 365;
  const months = Math.floor(remainingDays / 30);
  const remainingDaysInMonth = remainingDays % 30;
  return `${years} years, ${months} months, and ${remainingDaysInMonth} days`;
};

console.log(daysToYearsMonthsDays(1000)); 
// Output: "2 years, 8 months, and 20 days"

 
83. Check if an Object is Empty (no own properties)
Check if a given object has no own properties (i.e., it is empty).

const isEmptyObject = (obj: object): boolean => Object.keys(obj).length === 0;

console.log(isEmptyObject({})); 
// Output: true
console.log(isEmptyObject({ name: "John", age: 30 })); 
// Output: false

 
84. Calculate the Factorial of a Number (recursive)
Calculate the factorial of a given number using a recursive function.

const factorial = (num: number): number => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
};

console.log(factorial(5)); 
// Output: 120

 
85. Remove Whitespace from a String
Remove all whitespace characters from a given string.

const removeWhitespace = (str: string): string => str.replace(/\s/g, '');

console.log(removeWhitespace("  Hello,  world!  "));
// Output: "Hello,world!"



 
86. Find the Difference between Two Arrays
Find the elements that are present in the first array but not in the second array.

const difference = <T>(arr1: T[], arr2: T[]): T[] => arr1.filter(val => !arr2.includes(val));

console.log(difference([1, 2, 3], [2, 3, 4]));
// Output: [1]

 
87. Check if a Number is a Fibonacci Number
The isPerfectSquare function, which checks if a given number is a perfect square.

const isPerfectSquare = (num: number): boolean => {
  const sqrt = Math.sqrt(num);
  return Math.floor(sqrt) === sqrt;
};

const isFibonacci = (num: number): boolean => {
  return (
    isPerfectSquare(5 * num * num + 4) || isPerfectSquare(5 * num * num - 4)
  );
};

console.log(isFibonacci(5)); 
// Output: true
console.log(isFibonacci(6)); 
// Output: false

 
88. Convert Hours to Minutes
The hoursToMinutes that takes a parameter hours of type number and returns the equivalent number of minutes.

const hoursToMinutes = (hours: number): number => hours * 60;

console.log(hoursToMinutes(2)); 
// Output: 120

 
89. Get the First N Elements of an Array
The firstNElements that takes an array arr of type T[] and a number n, and returns an array of the first n elements from arr. The function is then invoked with an array [1, 2, 3, 4, 5] and 3 as arguments, and the result is logged to the console.

const firstNElements = <T>(arr: T[], n: number): T[] => arr.slice(0, n);

console.log(firstNElements([1, 2, 3, 4, 5], 3)); 
// Output: [1, 2, 3]

 
90. Check if a Number is Odd
The isOdd is a function that takes a parameter num of type number and returns a boolean indicating whether num is odd or not. The function is then invoked with 5 and 4 as arguments, and the results are logged to the console.

const isOdd = (num: number): boolean => num % 2 !== 0;

console.log(isOdd(5)); 
// Output: true
console.log(isOdd(4)); 
// Output: false

 
91. Calculate the Standard Deviation of an Array of Numbers
The standardDeviation function calculates the standard deviation of the input array by first calculating the mean, then the squared differences from the mean, the variance, and finally the square root of the variance.

const mean = (arr: number[]): number =>
  arr.reduce((acc, val) => acc + val, 0) / arr.length;

const standardDeviation = (arr: number[]): number => {
  const avg = mean(arr);
  const squaredDiffs = arr.map((num) => Math.pow(num - avg, 2));
  const variance = mean(squaredDiffs);
  return Math.sqrt(variance);
};

console.log(standardDeviation([1, 2, 3, 4, 5])); 
// Output: 1.4142135623730951

 
92. Check if a String ends with a specific Substring
The endsWithSubstring takes two parameters: str, the main string, and subStr, the substring to check for at the end of the main string. It returns true if the main string ends with the given substring, otherwise it returns false.

const endsWithSubstring = (str: string, subStr: string): boolean => str.endsWith(subStr);

console.log(endsWithSubstring("Hello, world!", "world!")); 
// Output: true
console.log(endsWithSubstring("Hello, world!", "Hello"));  
// Output: false


 
93. Calculate the Sum of Squares of an Array
The sumOfSquares takes an array of numbers arr as input and returns the sum of the squares of all the numbers in the array.

const sumOfSquares = (arr: number[]): number => arr.reduce((acc, val) => acc + val ** 2, 0);

console.log(sumOfSquares([1, 2, 3, 4, 5])); 
// Output: 55

 
94. Check if a String is a Palindrome (case-sensitive)
The isPalindromeCaseSensitive takes a string str as input and returns true if it is a palindrome (case-sensitive), and false otherwise.

const isPalindromeCaseSensitive = (str: string): boolean =>
  str === str.split("").reverse().join("");

console.log(isPalindromeCaseSensitive("level")); 
// Output: true
console.log(isPalindromeCaseSensitive("Hello")); 
// Output: false

 
95. Generate an Array of Random Numbers
The randomArray function takes a length parameter specifying the desired length of the array and returns an array filled with random numbers ranging from 0 to 99.

const randomArray = (length: number): number[] => Array.from({ length }, () => Math.floor(Math.random() * 100));

console.log(randomArray(5)); 
// Output: Array with 5 random numbers, e.g., [23, 45, 67, 11, 88]

 
96. Calculate the Greatest Common Divisor (GCD) of Two Numbers
The gcd function takes two numbers num1 and num2 as input parameters and iteratively applies the Euclidean algorithm until num2 becomes zero. Then it returns the value of num1, which represents the GCD of the original two numbers.

const gcd = (num1: number, num2: number): number => {
  while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

console.log(gcd(48, 18)); 
// Output: 6

 
97. Convert Seconds to Hours, Minutes, and Seconds
The secsToHoursMinsSecs function takes a number of seconds as input and calculates the equivalent time in hours, minutes, and remaining seconds. It then returns a string that represents this conversion.

const secsToHoursMinsSecs = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const remainingSecs = remainingSeconds % 60;
  return `${hours} hours, ${minutes} minutes, and ${remainingSecs} seconds`;
};

console.log(secsToHoursMinsSecs(7320));
// Output: "2 hours, 2 minutes, and 0 seconds"

 
98. Calculate the LCM of Two Numbers
This function correctly calculates the LCM of two numbers using the provided formula.

const gcd = (num1: number, num2: number): number => {
  while (num2 !== 0) {
    let temp: number = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const lcm = (num1: number, num2: number): number =>
  (num1 * num2) / gcd(num1, num2);

console.log(lcm(6, 8));
// Output: 24

 
99. Find the Longest Word in a String
This function splits the string into words using spaces as separators, then iterates over each word to find the longest one using the reduce method. Finally, it returns the longest word found.

const findLongestWord = (str: string): string => str.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, '');

console.log(findLongestWord("Hello, how are you doing?"));
// Output: "doing?"
 
100. Count the Occurrences of a Character in a String
This function splits the string into an array of substrings using the specified character as the separator. Then, it calculates the length of the resulting array minus 1, which represents the number of occurrences of the specified character in the string.

const countOccurrences = (str: string, char: string): number => str.split(char).length - 1;

console.log(countOccurrences("hello world", "l"));
// Output: 3

 
101. Find the Median of an Array of Numbers
Calculate the median of an array of numbers.

const median = (arr: number[]): number => {
  const sorted = arr.slice().sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
};

console.log(median([1, 3, 5, 7, 9]));
// Output: 5

 
102. Remove Duplicates from a String
Remove duplicate characters from a string.

const removeDuplicatesFromString = (str: string): string => [...new Set(str.split(''))].join('');

console.log(removeDuplicatesFromString("hello"));
// Output: "helo"

 
103. Find the Mode of an Array of Numbers
Calculate the mode, the most frequently occurring number(s), from an array of numbers. It identifies the number(s) with the highest frequency and returns them in an array.

const mode = (arr: number[]): number[] => {
  const frequency: { [key: number]: number } = {};
  arr.forEach((num) => (frequency[num] = (frequency[num] || 0) + 1));
  const maxFrequency = Math.max(...Object.values(frequency));
  return Object.keys(frequency)
    .filter((num) => frequency[num] === maxFrequency)
    .map(Number);
};

console.log(mode([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// Output: [4]

 
104. Check if a Number is a Harshad Number (Niven Number)
A Harshad number, also known as a Niven number, is an integer divisible by the sum of its digits. The isHarshadNumber function determines whether a given number meets this criterion. It calculates the sum of the digits of the number, and then checks if the number itself is divisible by this sum.

const isHarshadNumber = (num: number): boolean => {
  const sumOfDigits = [...String(num)].reduce(
    (sum, digit) => sum + Number(digit),
    0
  );
  return num % sumOfDigits === 0;
};

console.log(isHarshadNumber(18)); 
// Output: true
console.log(isHarshadNumber(21)); 
// Output: false

 
105. Convert Binary Number to Decimal (without parseInt)
This function performs the conversion of a binary number to its equivalent decimal representation, all without utilizing the parseInt function. The process involves splitting the binary number's digits, reversing them, and using a reduce operation to calculate the decimal value by considering each digit's position and value.

const binaryToDecimalWithoutParseInt = (binary: string): number => {
  return binary
    .split("")
    .reverse()
    .reduce((dec, bit, index) => {
      return dec + parseInt(bit) * 2 ** index;
    }, 0);
};

console.log(binaryToDecimalWithoutParseInt("1101")); 
// Output: 13

 
106. Check if an Array is Sorted in Descending Order
The isSortedDescending checks if an array is sorted in descending order. It iterates over each element of the array and compares it with the previous element. If all elements are greater than or equal to their preceding elements, the function returns true, indicating that the array is sorted in descending order. Otherwise, it returns false.

const isSortedDescending = (arr: number[]): boolean => {
  return arr.every((el, i) => i === 0 || el <= arr[i - 1]);
};

console.log(isSortedDescending([5, 4, 3, 2, 1])); 
// Output: true
console.log(isSortedDescending([1, 5, 3, 8, 2])); 
// Output: false

 
107. Find the Average of Even Numbers in an Array
The averageOfEvenNumbers calculates the average of even numbers present in an array. It filters out the even numbers from the array using the filter method, computes the sum of these even numbers using the reduce method, and then divides the sum by the count of even numbers to obtain the average.

const averageOfEvenNumbers = (arr: number[]): number => {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  const sum = evenNumbers.reduce((acc, num) => acc + num, 0);
  return sum / evenNumbers.length;
};

console.log(averageOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
// Output: 6

 
108. Capitalize the First Letter of Each Word in a String
The capitalizeWords function capitalizes the first letter of each word in a string using a regular expression to match the first character of each word and then replacing it with its uppercase version.

const capitalizeWords = (str: string): string => str.replace(/\b\w/g, char => char.toUpperCase());

console.log(capitalizeWords("hello world")); 
// Output: "Hello World"

 
109. Check if an Array is a Subset of Another Array
The isSubset function checks whether every element in one array (arr1) is present in another array (arr2). It iterates over each element of arr1 and checks if it exists in arr2 using the includes method. If all elements of arr1 are found in arr2, it returns true; otherwise, it returns false.

const isSubset = <T>(arr1: T[], arr2: T[]): boolean => arr1.every(item => arr2.includes(item));

console.log(isSubset([1, 2, 3], [2, 3, 4, 5, 6])); 
// Output: false
console.log(isSubset([1, 2, 3], [2, 3, 1, 5, 6]));
// Output: true

 
110. Find the Minimum and Maximum Numbers in an Array
The minMax function calculates both the minimum and maximum values within an array. It achieves this by employing the Math.min and Math.max functions alongside the spread operator to extract the elements' values from the input array. The function returns an object containing both the minimum and maximum values.

const minMax = (arr: number[]): { min: number; max: number } => ({
  min: Math.min(...arr),
  max: Math.max(...arr),
});

console.log(minMax([10, 5, 25, 3, 15])); 
// Output: { min: 3, max: 25 }

 
111. Check if a Number is a Narcissistic Number
The isNarcissisticNumber function evaluates whether a given number is a narcissistic number. A narcissistic number (also known as an Armstrong number) is a number that is the sum of its own digits, each raised to the power of the number of digits in the number.

const isNarcissisticNumber = (num: number): boolean => {
  const digits = [...String(num)].map(Number);
  const numDigits = digits.length;
  const sumOfPowers = digits.reduce(
    (sum, digit) => sum + Math.pow(digit, numDigits),
    0
  );
  return sumOfPowers === num;
};

console.log(isNarcissisticNumber(153)); 
// Output: true
console.log(isNarcissisticNumber(370)); 
// Output: true
console.log(isNarcissisticNumber(123)); 
// Output: false
 
112. Remove Null and Undefined Values from an Array
The removeNullAndUndefined function removes null and undefined values from an array by using the filter method. It returns a new array containing only the non-null and non-undefined elements.

const removeNullAndUndefined = (arr: (number | null | undefined)[]): number[] => arr.filter(item => item !== null && item !== undefined);

console.log(removeNullAndUndefined([1, null, 2, 3, undefined, 4, null])); 
// Output: [1, 2, 3, 4]

 
113. Reverse the Order of Words in a String
The reverseWords function takes a string as input and returns a new string where the order of words has been reversed.

const reverseWords = (str: string): string => str.split(' ').reverse().join(' ');

console.log(reverseWords("Hello, world!")); 
// Output: "world! Hello,"

 
114. Calculate the Sum of Cubes of an Array
The sumOfCubes function computes the sum of the cubes of all numbers in an array.

const sumOfCubes = (arr: number[]): number => arr.reduce((acc, val) => acc + Math.pow(val, 3), 0);

console.log(sumOfCubes([1, 2, 3, 4, 5])); 
// Output: 225

 
115. Shuffle the Characters of a String
The shuffleString function rearranges the characters of a given string in a random order.

const shuffleString = (str: string): string => str.split('').sort(() => 0.5 - Math.random()).join('');

console.log(shuffleString("hello")); 
// Output: Randomly shuffled string, e.g., "olelh"

 
116. Find the Nth Fibonacci Number (recursive)
The fibonacci function calculates the Nth Fibonacci number using a recursive approach.

const fibonacci = (n: number): number => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

console.log(fibonacci(7)); 
// Output: 13

 
117. Count the Words in a String
The countWords function determines the number of words in a given string.

const countWords = (str: string): number => str.split(/\s+/).length;

console.log(countWords("Hello, how are you doing?")); 
// Output: 5

 
118. Check if a Number is a Triangular Number
The isTriangularNumber function determines whether a given number is a triangular number.

const isTriangularNumber = (num: number): boolean => {
  let n = 0;
  let sum = 0;
  while (sum < num) {
    n++;
    sum += n;
  }
  return sum === num;
};

console.log(isTriangularNumber(10)); 
// Output: true
console.log(isTriangularNumber(15)); 
// Output: true
console.log(isTriangularNumber(7)); 
// Output: false

 
119. Calculate the Perimeter of a Rectangle
The rectanglePerimeter function calculates the perimeter of a rectangle given its width and height.

const rectanglePerimeter = (width: number, height: number): number => 2 * (width + height);

console.log(rectanglePerimeter(5, 10)); 
// Output: 30

 
120. Find the Longest Common Prefix in an Array of Strings
The longestCommonPrefix function finds the longest common prefix among an array of strings. It starts by assuming the first string in the array as the initial common prefix.

const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) return "";
  let prefix: string = strs[0];
  for (let i: number = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["apple", "apricot", "appetizer"]));
// Output: "app"

 
121. Get the ASCII Value of a Character
The getASCIIValue function retrieves the ASCII value of a given character. It employs the charCodeAt method, which returns the ASCII code of the character at the specified index (0 in this case).

// Get the ASCII Value of a Character
const getASCIIValue = (char: string): number => char.charCodeAt(0);

// Example usage:
console.log(getASCIIValue('A'));
// Output: 65

 
122. Find the First Non-Repeated Character in a String
The firstNonRepeatedChar function identifies the first non-repeated character within a given string. It accomplishes this by iterating through the string, building a character count object, and then using the find method to locate the first character with a count of 1.

const firstNonRepeatedChar = (str: string): string | undefined => {
    const charCount: { [key: string]: number } = {};
    for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return str.split('').find((char) => charCount[char] === 1);
  };
  
  console.log(firstNonRepeatedChar('abacabad'));
  // Output: "c"
 
123. Sort an Array of Objects by a Property Value
The sortByProperty function arranges an array of objects based on a specified property's value. It employs the sort method with a custom comparison function that compares the property values of two objects.

const sortByProperty = <T>(arr: T[], prop: keyof T): T[] =>
  arr.sort((a, b) => a[prop] - b[prop]);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];

console.log(sortByProperty(people, "age"));
// Output: [{ name: 'Bob', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Charlie', age: 30 }]

 
124. Calculate the Exponential of a Number
The exponential function calculates the result of raising a given base to a specified exponent using the exponentiation operator (**).

const exponential = (base: number, exponent: number): number =>
  base ** exponent;

console.log(exponential(2, 3));
// Output: 8

 
125. Check if a String is an Anagram of Another String
The isAnagram function determines whether two given strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another, using all the original letters exactly once.

const isAnagram = (str1: string, str2: string): boolean =>
  str1.split("").sort().join("") === str2.split("").sort().join("");

console.log(isAnagram("listen", "silent"));
// Output: true

console.log(isAnagram("hello", "world"));
// Output: false

 
126. Find the Factors of a Number
The factors function calculates and returns an array of all the factors of a given number. Factors are the positive integers that evenly divide the input number.

const factors = (num: number): number[] => {
  const result: number[] = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      result.push(i);
    }
  }
  return result;
};

console.log(factors(12));
// Output: [1, 2, 3, 4, 6, 12]


 
127. Check if a Number is a Neon Number
The isNeonNumber function determines whether a given number is a neon number. A neon number is a number where the sum of the digits of its square is equal to the number itself.

const isNeonNumber = (num: number): boolean => {
  const squared: number = num ** 2;
  const digitSum: number = [...String(squared)]
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
  return squared === digitSum;
};

console.log(isNeonNumber(9));
// Output: true

console.log(isNeonNumber(12));
// Output: false

 
128. Find the Power Set of a Set
The powerSet function generates the power set of a given set, which includes all possible subsets of the set, including the empty set and the set itself.

const powerSet = <T>(set: T[]): T[][] => {
  const result: T[][] = [[]];
  for (const item of set) {
    const subsets = result.map((subset) => [...subset, item]);
    result.push(...subsets);
  }
  return result;
};

console.log(powerSet([1, 2, 3]));
// Output: [ [], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3] ]

 
129. Check if a Number is a Disarium Number
The isDisariumNumber function determines whether a given number is a disarium number.

const isDisariumNumber = (num: number): boolean => {
  const digits: number[] = [...String(num)].map(Number);
  const sumOfPowers: number = digits.reduce(
    (sum, digit, index) => sum + digit ** (index + 1),
    0
  );
  return sumOfPowers === num;
};

console.log(isDisariumNumber(89));
// Output: true

console.log(isDisariumNumber(135));
// Output: true

console.log(isDisariumNumber(23));
// Output: false

 
130. Remove Vowels from a String
The removeVowels function eliminates all vowels (both uppercase and lowercase) from a given string using the replace method along with a regular expression.

const removeVowels = (str: string): string => str.replace(/[aeiouAEIOU]/g, "");

console.log(removeVowels("Hello, World!"));
// Output: "Hll, Wrld!"

 
131. Generate an Array of Consecutive Numbers
The consecutiveNumbers function generates an array of consecutive numbers within a specified range.

const consecutiveNumbers = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

console.log(consecutiveNumbers(1, 5));
// Output: [1, 2, 3, 4, 5]

 
132. Check if a Number is a Pronic Number
The isPronicNumber function determines whether a given number is a pronic number (also known as an oblong number or rectangular number).

const isPronicNumber = (num: number): boolean => {
  const n: number = Math.floor(Math.sqrt(num));
  return n * (n + 1) === num;
};

console.log(isPronicNumber(6));
// Output: true

console.log(isPronicNumber(20));
// Output: true

console.log(isPronicNumber(7));
// Output: false

 
133. Check if a String is a Pangram
The isPangram function checks whether a given string is a pangram, which is a sentence that contains every letter of the alphabet at least once.

const isPangram = (str: string): boolean => {
  const letters: Set<string> = new Set(str.toLowerCase().match(/[a-z]/g));
  return letters.size === 26;
};

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
// Output: true

console.log(isPangram("Hello, World!"));
// Output: false

 
134. Reverse the Order of Words in a Sentence
The reverseSentence function reverses the order of words in a given sentence.

const reverseSentence = (sentence: string): string =>
  sentence.split(" ").reverse().join(" ");

console.log(reverseSentence("Hello, how are you doing?"));
// Output: "doing? you are how Hello,"

 
135. Calculate the Hypotenuse of a Right-Angled Triangle
The calculateHypotenuse function computes the length of the hypotenuse of a right-angled triangle given the lengths of its two perpendicular sides (legs). It uses the Pythagorean theorem to calculate the hypotenuse, which states that the square of the length of the hypotenuse (c) is equal to the sum of the squares of the lengths of the other two sides (a and b).

// Calculate the Hypotenuse of a Right-Angled Triangle
const calculateHypotenuse = (a: number, b: number): number => Math.sqrt(a ** 2 + b ** 2);

// Example usage:
console.log(calculateHypotenuse(3, 4));
// Output: 5


 
136. Find the Average of Odd Numbers in an Array
The averageOfOddNumbers function calculates the average of odd numbers within a given array. It does so by filtering the odd numbers from the array, then computing their sum and dividing by the count of odd numbers.

const averageOfOddNumbers = (arr: number[]): number => {
  const oddNumbers = arr.filter((num) => num % 2 !== 0);
  return oddNumbers.reduce((sum, num) => sum + num, 0) / oddNumbers.length;
};

console.log(averageOfOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
// Output: 5

 
137. Count the Letters in a String (case-insensitive)
The countLetters function calculates the count of each letter in a given string, considering both uppercase and lowercase versions as the same letter.

const countLetters = (str: string): { [key: string]: number } => {
  const letters = str.toLowerCase().match(/[a-z]/g);
  const letterCount: { [key: string]: number } = {};
  for (const letter of letters) {
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }
  return letterCount;
};

console.log(countLetters("Hello, World!"));
// Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

 
138. Convert Seconds to Days, Hours, Minutes, and Seconds
The secsToDaysHoursMinsSecs function converts a given number of seconds into days, hours, minutes, and remaining seconds.

const secsToDaysHoursMinsSecs = (seconds: number): string => {
  const days: number = Math.floor(seconds / 86400);
  seconds %= 86400;
  const hours: number = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes: number = Math.floor(seconds / 60);
  const remainingSecs: number = seconds % 60;
  return `${days} days, ${hours} hours, ${minutes} minutes, and ${remainingSecs} seconds`;
};

console.log(secsToDaysHoursMinsSecs(100000));
// Output: "1 days, 3 hours, 46 minutes, and 40 seconds"

 
139. Check if a Number is a Prime Factor of Another Number
The isPrimeFactor function checks if a given number is a prime factor of another number.

const isPrimeFactor = (num: number, factor: number): boolean =>
  num % factor === 0 && isPrime(factor);

const isPrime = (n: number): boolean => {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }

  return true;
};

console.log(isPrimeFactor(20, 2));
// Output: true

console.log(isPrimeFactor(20, 3));
// Output: false

 
140. Find the Largest Prime Factor of a Number
The largestPrimeFactor function calculates the largest prime factor of a given number.

const largestPrimeFactor = (num: number): number => {
  let factor: number = 2;
  while (factor <= num) {
    if (num % factor === 0) {
      num /= factor;
    } else {
      factor++;
    }
  }
  return factor;
};

console.log(largestPrimeFactor(48));
// Output: 3










 
141. Check if a Number is a Pronic Square
The isPronicSquare function checks if a given number is a pronic square.

const isPronicSquare = (num: number): boolean =>
  Number.isInteger(Math.sqrt(num));

console.log(isPronicSquare(6)); // Output: true
console.log(isPronicSquare(20)); // Output: false
console.log(isPronicSquare(21)); // Output: true

 
142. Find the Sum of the Digits of a Number
The sumOfDigits function calculates the sum of the digits of a given number.

const sumOfDigits = (num: number): number =>
  [...String(num)].reduce((sum, digit) => sum + Number(digit), 0);

console.log(sumOfDigits(12345)); 
// Output: 15

 
143. Calculate the Median of an Array of Numbers
The median function calculates the median of an array of numbers. The median is the middle value of a dataset when it is ordered.

const median = (arr: number[]): number => {
  const sorted: number[] = arr.slice().sort((a, b) => a - b);
  const mid: number = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[mid - 1] + sorted[mid]) / 2
    : sorted[mid];
};

console.log(median([1, 3, 5, 7, 9])); 
// Output: 5

 
144. Find the Greatest Common Divisor (GCD) of Two Numbers (Recursive)
The gcd function calculates the greatest common divisor (GCD) of two given numbers using a recursive approach.

const gcd = (num1: number, num2: number): number =>
  num2 === 0 ? num1 : gcd(num2, num1 % num2);

console.log(gcd(48, 18)); 
// Output: 6

 
145. Check if a Number is a Happy Number
The isHappyNumber function checks if a given number is a "happy number" or not. A happy number is a number where the sequence of repeatedly summing the squares of its digits eventually reaches the number 1.

const isHappyNumber = (num: number): boolean => {
  const seen: Set<number> = new Set();
  while (num !== 1 && !seen.has(num)) {
    seen.add(num);
    num = [...String(num)].reduce((sum, digit) => sum + Number(digit) ** 2, 0);
  }
  return num === 1;
};

console.log(isHappyNumber(19)); 
// Output: true
console.log(isHappyNumber(4)); 
// Output: false

 
146. Find the First N Prime Numbers
The firstNPrimes function generates an array of the first n prime numbers.

const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const firstNPrimes = (n: number): number[] => {
  const primes: number[] = [];
  let num = 2;
  while (primes.length < n) {
    if (isPrime(num)) primes.push(num);
    num++;
  }
  return primes;
};

console.log(firstNPrimes(5)); 
// Output: [2, 3, 5, 7, 11]

 
147. Calculate the Volume of a Sphere
The sphereVolume function calculates the volume of a sphere given its radius. It uses the formula (4/3) * π * r^3, where r is the radius of the sphere.

const sphereVolume = (radius: number): number =>
  (4 / 3) * Math.PI * radius ** 3;

console.log(sphereVolume(5)); 
// Output: 523.5987755982989

 
148. Find the Longest Word in a Sentence
The longestWord function determines the longest word in a given sentence. It does this by splitting the sentence into words using spaces as separators and then using the reduce method to compare the length of each word and keep track of the longest one.

const longestWord = (sentence: string): string =>
  sentence
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );

console.log(longestWord("The quick brown fox jumped over the lazy dog")); 
// Output: "jumped"

 
149. Check if a Number is an Armstrong Number (Narcissistic Number)
The isArmstrongNumber function checks if a number is an Armstrong number, also known as a narcissistic number.

const isArmstrongNumber = (num: number): boolean => {
  const digits: number[] = [...String(num)].map(Number);
  const numDigits: number = digits.length;
  const sumOfPowers: number = digits.reduce(
    (sum, digit) => sum + digit ** numDigits,
    0
  );
  return sumOfPowers === num;
};

console.log(isArmstrongNumber(153)); 
// Output: true
console.log(isArmstrongNumber(370)); 
// Output: true
console.log(isArmstrongNumber(123)); 
// Output: false

 
150. Find the Length of the Longest Word in a Sentence
The longestWordLength function calculates the length of the longest word in a given sentence. It splits the sentence into words using spaces as separators, and then uses the reduce method to find the maximum length among all the words.

const longestWordLength = (sentence: string): number =>
  sentence
    .split(" ")
    .reduce((longest, word) => Math.max(longest, word.length), 0);

console.log(longestWordLength("The quick brown fox jumped over the lazy dog")); // Output: 6


 
151. Check if a Number is a Strong Number
The isStrongNumber function checks if a number is a strong number. A strong number is a number whose sum of factorials of its digits is equal to the number itself.

const factorial = (num: number): number =>
  num === 0 ? 1 : num * factorial(num - 1);

const isStrongNumber = (num: number): boolean => {
  const sumOfFactorials: number = [...String(num)].reduce(
    (sum, digit) => sum + factorial(Number(digit)),
    0
  );
  return sumOfFactorials === num;
};

console.log(isStrongNumber(145)); 
// Output: true
console.log(isStrongNumber(123)); 
// Output: false

 
152. Reverse the Order of an Array
The reverseArray function reverses the order of elements in an array using the reverse method.

const reverseArray = <T>(arr: T[]): T[] => arr.slice().reverse();

console.log(reverseArray([1, 2, 3, 4, 5])); 
// Output: [5, 4, 3, 2, 1]

 
153. Find the Area of a Rectangle
The rectangleArea function calculates the area of a rectangle given its length and width using the formula: length * width.

const rectangleArea = (length: number, width: number): number => length * width;

console.log(rectangleArea(5, 10)); 
// Output: 50

 
154. Calculate the Sum of Even Numbers in an Array
The sumOfEvenNumbers function calculates the sum of even numbers within an array. It first filters the array to keep only the even numbers, and then uses the reduce method to compute their sum.

const sumOfEvenNumbers = (arr: number[]): number =>
  arr.filter((num) => num % 2 === 0).reduce((sum, num) => sum + num, 0);

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 
// Output: 30

 
155. Find the Greatest Common Divisor (GCD) of Two Numbers (Iterative)
The gcdIterative function calculates the greatest common divisor (GCD) of two numbers using an iterative approach. It employs the Euclidean algorithm to iteratively find the GCD.

const gcdIterative = (num1: number, num2: number): number => {
  while (num2 !== 0) {
    const temp: number = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

console.log(gcdIterative(48, 18)); 
// Output: 6

 
156. Calculate the Volume of a Cylinder
The cylinderVolume function calculates the volume of a cylinder using the formula: π * radius^2 * height.

const cylinderVolume = (radius: number, height: number): number =>
  Math.PI * radius ** 2 * height;

console.log(cylinderVolume(5, 10)); 
// Output: 785.3981633974483

 
157. Check if a Number is a Smith Number
The isSmithNumber function checks whether a given number is a Smith number.

const sumOfDigits = (num: number): number =>
  [...String(num)].reduce((sum, digit) => sum + Number(digit), 0);

const sumOfPrimeFactors = (num: number): number => {
  let factor: number = 2;
  let sum: number = 0;
  while (num > 1) {
    if (num % factor === 0) {
      sum += sumOfDigits(factor);
      num /= factor;
    } else {
      factor++;
    }
  }
  return sum;
};

const isSmithNumber = (num: number): boolean =>
  sumOfDigits(num) === sumOfPrimeFactors(num);

console.log(isSmithNumber(666)); 
// Output: true
console.log(isSmithNumber(378)); 
// Output: true
console.log(isSmithNumber(123)); 
// Output: false

 
158. Convert Decimal Number to Octal
The decimalToOctal function converts a decimal (base 10) number to its octal (base 8) representation using the .toString() method with the base argument set to 8.

const decimalToOctal = (num: number): string => num.toString(8);

console.log(decimalToOctal(27)); 
// Output: "33"

 
159. Find the LCM of Two Numbers
The lcm function calculates the least common multiple (LCM) of two given numbers using the formula: (num1 * num2) / gcd(num1, num2).

const gcd = (num1: number, num2: number): number => {
  while (num2 !== 0) {
    const temp: number = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const lcm = (num1: number, num2: number): number =>
  (num1 * num2) / gcd(num1, num2);

console.log(lcm(24, 36)); 
// Output: 72

 
160. Check if a String is a Valid Phone Number (North American Format)
The isValidPhoneNumber function checks whether a given string is a valid phone number in the North American format "XXX-XXX-XXXX", where X represents a digit.

const isValidPhoneNumber = (phone: string): boolean =>
  /^\d{3}-\d{3}-\d{4}$/.test(phone);

console.log(isValidPhoneNumber("555-123-4567")); 
// Output: true
console.log(isValidPhoneNumber("123-4567")); 
// Output: false

 
161. Find the Sum of the First N Natural Numbers
The sumOfNaturals function calculates the sum of the first N natural numbers using the formula: (n * (n + 1)) / 2.

const sumOfNaturals = (n: number): number => (n * (n + 1)) / 2;

console.log(sumOfNaturals(10)); 
// Output: 55

 
162. Check if a Number is a Perfect Number
The isPerfectNumber function checks whether a given number is a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding itself).

const isPerfectNumber = (num: number): boolean => {
  let sum: number = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

console.log(isPerfectNumber(28)); 
// Output: true
console.log(isPerfectNumber(12)); 
// Output: false

 
163. Find the Factors of a Number (excluding 1 and the number itself)
The factors function calculates the factors of a given number, excluding 1 and the number itself. It iterates through the numbers from 2 up to one less than the given number, checking if the given number is divisible by each of those numbers.

const factors = (num: number): number[] => {
  const result: number[] = [];
  for (let i = 2; i < num; i++) {
    if (num % i === 0) result.push(i);
  }
  return result;
};

console.log(factors(12));
// Output: [2, 3, 4, 6]

 
164. Calculate the Area of a Triangle given the Base and Height
The triangleArea function calculates the area of a triangle using the formula: 0.5 * base * height.

const triangleArea = (base: number, height: number): number =>
  0.5 * base * height;

console.log(triangleArea(5, 10)); 
// Output: 25

 
165. Check if a String is a Valid Social Security Number (SSN)
The isValidSSN function checks whether a given string is a valid Social Security Number (SSN) in the format "XXX-XX-XXXX", where X represents a digit.

const isValidSSN = (ssn: string): boolean => /^\d{3}-\d{2}-\d{4}$/.test(ssn);

console.log(isValidSSN("123-45-6789")); 
// Output: true
console.log(isValidSSN("123-45-678")); 
// Output: false

 
166. Generate an Array of Random Numbers within a Range
The randomArrayInRange function generates an array of random numbers within a specified range and of a specified length. It uses the Array.from method with a mapping function to create the desired array.

const randomArrayInRange = (
  min: number,
  max: number,
  length: number
): number[] =>
  Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

console.log(randomArrayInRange(1, 100, 5)); 
// Output: [34, 87, 19, 56, 72]

 
167. Check if a Number is a Magic Number
The isMagicNumber function checks whether a given number is a magic number. A magic number is a number that eventually reaches the value 1 when the sum of its digits is repeatedly calculated.

const isMagicNumber = (num: number): boolean => {
  let sum: number = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum === 1;
};

console.log(isMagicNumber(19)); 
// Output: true
console.log(isMagicNumber(123)); 
// Output: false

 
168. Check if a String is a Valid IPv4 Address
The isValidIPv4 function checks whether a given string represents a valid IPv4 address.

const isValidIPv4 = (ip: string): boolean =>
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
    ip
  );

console.log(isValidIPv4("192.168.1.1")); 
// Output: true
console.log(isValidIPv4("256.0.0.1")); 
// Output: false

 
169. Convert Decimal Number to Hexadecimal
The decimalToHex function converts a decimal (base 10) number to its equivalent hexadecimal (base 16) representation using the built-in toString method with a radix of 16.

const decimalToHex = (num: number): string => num.toString(16);

console.log(decimalToHex(255)); 
// Output: "ff"

 
170. Check if a String is a Valid Date (YYYY-MM-DD Format)
The isValidDate function checks whether a given string is a valid date in the format "YYYY-MM-DD".

const isValidDate = (date: string): boolean => /^\d{4}-\d{2}-\d{2}$/.test(date);

console.log(isValidDate("2023-08-02")); 
// Output: true
console.log(isValidDate("02-08-2023")); 
// Output: false

 
171. Find the Smallest Common Multiple of an Array of Numbers
gcd function calculates the greatest common divisor using the Euclidean algorithm. The lcmArray function then calculates the least common multiple (LCM) of an array of numbers by reducing the array and applying the formula (lcm * num) / gcd(lcm, num).

const gcd = (num1: number, num2: number): number => {
  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }
  return num1;
};

const lcmArray = (arr: number[]): number =>
  arr.reduce((lcm, num) => (lcm * num) / gcd(lcm, num), 1);

console.log(lcmArray([2, 3, 4, 5])); 
// Output: 60

 
172. Check if a String is a Valid Password (At least 8 characters, with a digit and special character)
The isValidPassword function uses a regular expression to validate a password. The regular expression requires that the password contains at least one letter ([A-Za-z]), one digit (\d), and one special character ([@$!%*?&]).

const isValidPassword = (password: string): boolean => /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

console.log(isValidPassword("P@ssw0rd")); 
// Output: true
console.log(isValidPassword("password123")); 
// Output: false

 
173. Find the Nth Fibonacci Number
The fibonacci function calculates the Nth Fibonacci number using an iterative approach.

const fibonacci = (n: number): number => {
  if (n === 1) return 0;
  if (n === 2) return 1;
  let prev1 = 0;
  let prev2 = 1;
  let result: number;
  for (let i = 3; i <= n; i++) {
    result = prev1 + prev2;
    prev1 = prev2;
    prev2 = result;
  }
  return result!;
};

console.log(fibonacci(7));
// Output: 8

 
174. Check if a Number is a Deficient Number
The isDeficientNumber function determines whether a given number is a deficient number.

const sumOfProperDivisors = (num: number): number => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
};

const isDeficientNumber = (num: number): boolean =>
  num > sumOfProperDivisors(num);

console.log(isDeficientNumber(10)); 
// Output: true
console.log(isDeficientNumber(28)); 
// Output: false

 
175. Calculate the Distance between Two Points in 2D
The distanceBetweenPoints function calculates the Euclidean distance between two points in a 2D plane. Given the coordinates of two points (x1, y1) and (x2, y2), it uses the formula sqrt((x2 - x1)^2 + (y2 - y1)^2) to compute the distance between them.

const distanceBetweenPoints = (
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

console.log(distanceBetweenPoints(0, 0, 3, 4)); 
// Output: 5

 
176. Check if a Number is an Abundant Number
The isAbundantNumber function determines whether a given number is an abundant number.

const sumOfProperDivisors = (num: number): number => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
};

const isAbundantNumber = (num: number): boolean =>
  num < sumOfProperDivisors(num);

console.log(isAbundantNumber(12)); 
// Output: true
console.log(isAbundantNumber(28)); 
// Output: false

 
177. Calculate the Volume of a Cube
The cubeVolume function calculates the volume of a cube based on its side length. The formula for the volume of a cube is side^3, where side is the length of one side of the cube.

const cubeVolume = (side: number): number => side ** 3;

console.log(cubeVolume(5)); 
// Output: 125


 
178. Check if a String is a Valid Credit Card Number (Visa, MasterCard, Discover, American Express)
The isValidCreditCard function uses a regular expression to validate a credit card number.

const isValidCreditCard = (card: string): boolean =>
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/.test(
    card
  );

console.log(isValidCreditCard("4012-3456-7890-1234")); 
// Output: true

console.log(isValidCreditCard("1234-5678-9012-3456")); 
// Output: false

 
179. Calculate the Perimeter of a Triangle
The trianglePerimeter function calculates the perimeter of a triangle given its three side lengths. It simply adds up the lengths of all three sides and returns the result as the perimeter of the triangle.

const trianglePerimeter = (
  side1: number,
  side2: number,
  side3: number
): number => side1 + side2 + side3;

console.log(trianglePerimeter(5, 10, 7)); 
// Output: 22

 
180. Check if a Number is a Vampire Number
The isVampireNumber function checks if a given number is a vampire number.

const isVampireNumber = (num: number): boolean => {
  const numStr = String(num);
  const numDigits = numStr.split("");
  const numFactors = Array.from(
    { length: Math.ceil(Math.sqrt(num)) },
    (_, i) => i + 1
  )
    .filter((factor) => num % factor === 0)
    .flatMap((factor) => [
      `${factor}${num / factor}`,
      `${num / factor}${factor}`,
    ]);
  return numFactors.some((factorStr) => {
    const factorDigits = factorStr.split("");
    return factorDigits.sort().join("") === numDigits.sort().join("");
  });
};

console.log(isVampireNumber(1260)); 
// Output: true
console.log(isVampireNumber(1250)); 
// Output: false


 
181. Find the Sum of Digits Raised to the Power of their Respective Position
sumOfDigitsRaisedToPower calculates the sum of digits raised to the power of their respective positions.

const sumOfDigitsRaisedToPower = (num: number): number => {
  const digits: number[] = [...String(num)].map(Number);
  return digits.reduce(
    (sum: number, digit: number, index: number) => sum + digit ** (index + 1),
    0
  );
};

console.log(sumOfDigitsRaisedToPower(12345)); 
// Output: 115

 
182. Check if a Number is a Duck Number
The isDuckNumber function checks whether a given number is a duck number. A duck number is a number that contains the digit "0" but does not start with "0".

const isDuckNumber = (num: number): boolean =>
  String(num).includes("0") && String(num)[0] !== "0";

console.log(isDuckNumber(1023)); 
// Output: true
console.log(isDuckNumber(12345)); 
// Output: false

 
183. Generate a Random Password
The randomPassword function generates a random password of the specified length.

const randomPassword = (length: number): string =>
  Array.from({ length }, () => Math.random().toString(36).charAt(2)).join("");

console.log(randomPassword(8));
// Output: "3klS0p9x"

 
184. Calculate the Area of a Trapezoid
The trapezoidArea function calculates the area of a trapezoid using the formula: 0.5 * (base1 + base2) * height.

const trapezoidArea = (base1: number, base2: number, height: number): number =>
  0.5 * (base1 + base2) * height;

console.log(trapezoidArea(4, 8, 6)); 
// Output: 36

 
185. Check if a Number is a Kaprekar Number
The isKaprekarNumber function checks if a given number is a Kaprekar number.

const isKaprekarNumber = (num: number): boolean => {
  const square: number = num ** 2;
  const squareStr: string = String(square);
  const numStr: string = String(num);
  const left: number = Number(squareStr.slice(0, numStr.length));
  const right: number = Number(squareStr.slice(-numStr.length));
  return left + right === num;
};

console.log(isKaprekarNumber(9)); 
// Output: true
console.log(isKaprekarNumber(297)); 
// Output: true
console.log(isKaprekarNumber(45)); 
// Output: false






 
186. Calculate the Volume of a Cone
The coneVolume function calculates the volume of a cone using its base radius and height. It applies the formula for the volume of a cone: V = (1/3) * π * r² * h, where r is the radius of the base and h is the height of the cone.

const coneVolume = (radius: number, height: number): number =>
  (1 / 3) * Math.PI * radius ** 2 * height;

console.log(coneVolume(5, 10)); 
// Output: 261.79938779914943

 
187. Check if a String is a Valid US Phone Number
The isValidUSPhoneNumber function uses a regular expression to validate US phone numbers.

const isValidUSPhoneNumber = (phone: string): boolean =>
  /^(?:(?:\+1\s?)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4})$/.test(phone);

console.log(isValidUSPhoneNumber("+1 (123) 456-7890")); 
// Output: true
console.log(isValidUSPhoneNumber("123-456-7890")); 
// Output: true
console.log(isValidUSPhoneNumber("1-800-ABC-DEFG"));
// Output: false

 
188. Find the Sum of Digits Raised to the Power of their Respective Position (Up to 1000)
The sumOfDigitsRaisedToPowerUpToThousand function calculates the sum of numbers where each digit raised to the power of its respective position is equal to the number itself.

const sumOfDigitsRaisedToPowerUpToThousand = (): number => {
  let sum = 0;
  for (let i = 1; i <= 1000; i++) {
    if (sumOfDigitsRaisedToPower(i) === i) {
      sum += i;
    }
  }
  return sum;
};

console.log(sumOfDigitsRaisedToPowerUpToThousand()); 
// Output: 443839

 
189. Check if a Number is a Carol Number
The isCarolNumber function checks if a given number is a Carol number.

// Check if a Number is a Carol Number
const isCarolNumber = (num: number): boolean => {
  // Calculate the Carol prime
  const carolPrime = (2 ** num) - 1;
  // Check if the number is a prime and if the Carol prime is a perfect square
  return isPrime(num) && isPerfectSquare(carolPrime);
};

// Example usage:
console.log(isCarolNumber(7));
// Output: true

console.log(isCarolNumber(47));
// Output: true

console.log(isCarolNumber(6));
// Output: false

 
190. Check if a Number is a Catalan Number
The isCatalanNumber function checks if a given number is a Catalan number. It first ensures that the input number is a non-negative integer.

const isCatalanNumber = (num: number): boolean => num >= 0 && Number.isInteger(num) && num === ((factorial(2 * num)) / (factorial(num + 1) * factorial(num)));

// Example usage:
console.log(isCatalanNumber(5));
// Output: true

console.log(isCatalanNumber(10));
// Output: false


 
191. Calculate the Volume of a Cuboid
The cuboidVolume function calculates the volume of a cuboid given its length, width, and height.

const cuboidVolume = (length: number, width: number, height: number): number => length * width * height;

// Example usage:
console.log(cuboidVolume(5, 10, 8));
// Output: 400

 
192. Check if a Number is a Dudeney Number
The isDudeneyNumber function checks if a number is a Dudeney number.

const isDudeneyNumber = (num: number): boolean => num === sumOfDigitsCube(num);

// Example usage:
console.log(isDudeneyNumber(512));
// Output: true

console.log(isDudeneyNumber(64));
// Output: false

 
193. Generate a Random Color (Hexadecimal Format)
Generate a random color in hexadecimal format (#RRGGBB).

const randomColorHex = (): string => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

// Example usage:
console.log(randomColorHex());
// Output: "#92b008"

 
194. Calculate the Area of a Circle Sector
Calculate the area of a circle sector given the radius and the central angle in degrees.

const circleSectorArea = (radius: number, angle: number): number => (angle / 360) * Math.PI * radius ** 2;

// Example usage:
console.log(circleSectorArea(5, 90));
// Output: 11.780972450961725

 
195. Calculate the Area of a Regular Polygon
Calculate the area of a regular polygon given the side length and the number of sides.

const regularPolygonArea = (sideLength: number, numOfSides: number): number => (numOfSides * sideLength ** 2) / (4 * Math.tan(Math.PI / numOfSides));

// Example usage:
console.log(regularPolygonArea(5, 6));
// Output: 64.9519052838329

 
196. Remove Duplicates from Array
Remove duplicates from an array while preserving the order of the elements.

const removeDuplicates = <T>(arr: T[]): T[] => [...new Set(arr)];

// Example usage:
console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6])); // Output: [ 1, 2, 3, 4, 5, 6 ]


 
197. Calculate the Area of an Ellipse
Calculate the area of an ellipse using its semi-major axis length (a) and semi-minor axis length (b).

const ellipseArea = (a: number, b: number): number => Math.PI * a * b;

// Example usage:
console.log(ellipseArea(5, 10));
// Output: 157.07963267948966

 
198. Check if a Number is a Leyland Number
Check if a given number is a Leyland number.

const isLeylandNumber = (num: number): boolean => {
  let found = false;
  for (let x = 2; x <= Math.floor(Math.pow(num, 1 / 3)) && !found; x++) {
    for (let y = x + 1; x * y <= num && !found; y++) {
      if (Math.pow(x, y) + Math.pow(y, x) === num) {
        found = true;
      }
    }
  }
  return found;
};

// Example usage:
console.log(isLeylandNumber(17)); 
// Output: true
console.log(isLeylandNumber(30)); 
// Output: true
console.log(isLeylandNumber(100)); 
// Output: false

 
199. Generate a Random UUID
Generate a random Universally Unique Identifier (UUID).

const randomUUID = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

// Example usage:
console.log(randomUUID());
// Output: "a0f768f5-6bf2-4f6b-a512-c9121ea1b44a"

 
200. Check if a String is a Valid IPv6 Address
Check if a given string represents a valid IPv6 address.

const isValidIPv6 = (ip: string): boolean => /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.test(ip);

// Example usage:
console.log(isValidIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334")); 
// Output: true
console.log(isValidIPv6("2001:0db8:85a3::8a2e:0370:7334")); 
// Output: true
console.log(isValidIPv6("256.0.0.0")); 
// Output: false

 
201. Calculate the Area of a Parallelogram
Calculate the area of a parallelogram using the given base and height.

const parallelogramArea = (base: number, height: number): number => base * height;

// Example usage:
console.log(parallelogramArea(5, 10)); 
// Output: 50

 
202. Check if a String is a Valid MAC Address
Check if a given string is a valid MAC address.

const isValidMACAddress = (mac: string): boolean => /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(mac);

// Example usage:
console.log(isValidMACAddress("00:1A:2B:3C:4D:5E")); 
// Output: true
console.log(isValidMACAddress("00:1A:2B:3C:4D")); 
// Output: false

 
203. Convert RGB to HSL (Hue, Saturation, Lightness)
Convert an RGB color value to its corresponding HSL representation (Hue, Saturation, Lightness).

const rgbToHSL = (r: number, g: number, b: number): { h: number, s: number, l: number } => {
  [r, g, b] = [r, g, b].map(val => val / 255);
  const [max, min] = [Math.max(r, g, b), Math.min(r, g, b)];
  let h = (max !== min) ? ((max === r ? g - b : (max === g ? b - r : r - g)) / (max - min) + (max === g ? 2 : (max === b ? 4 : 0))) / 6 : 0;
  let s = (max !== min) ? (l => l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min))(l) : 0;
  let l = (max + min) / 2;

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

// Example usage:
console.log(rgbToHSL(255, 0, 0)); 
// Output: { h: 0, s: 100, l: 50 }
console.log(rgbToHSL(0, 255, 0)); 
// Output: { h: 120, s: 100, l: 50 }
console.log(rgbToHSL(0, 0, 255)); 
// Output: { h: 240, s: 100, l: 50 }

 
204. Check if a Number is a Pandigital Number
Check if a given number is a pandigital number.

const isPandigitalNumber = (num: number): boolean => {
  const numStr = String(num);
  const digits = new Set(numStr);
  return digits.size === numStr.length && !digits.has('0') && digits.size === Math.max(...numStr) - '0';
};

// Example usage:
console.log(isPandigitalNumber(123456789)); 
// Output: true
console.log(isPandigitalNumber(987654321)); 
// Output: true
console.log(isPandigitalNumber(1023456789)); 
// Output: false

 
205. Calculate the Sum of Proper Divisors of a Number
Calculate the sum of proper divisors of a given number.

const sumOfProperDivisors = (num: number): number => {
  let sum = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      sum += i;
      if (num / i !== i) {
        sum += num / i;
      }
    }
  }
  return sum - num;
};

// Example usage:
console.log(sumOfProperDivisors(28)); 
// Output: 28
console.log(sumOfProperDivisors(12)); 
// Output: 16

 
206. Find the Least Common Multiple (LCM) of an Array of Numbers
Find the least common multiple (LCM) of an array of numbers.

const lcmArray = (arr: number[]): number => arr.reduce((lcm, num) => lcm * num / gcdArray(arr), 1);

// Example usage:
console.log(lcmArray([2, 3, 4])); 
// Output: 12

 
207. Calculate the Sum of Squares of First n Natural Numbers
Calculate the sum of the squares of the first n natural numbers.

const sumOfSquares = (n: number): number => (n * (n + 1) * (2 * n + 1)) / 6;

// Example usage:
console.log(sumOfSquares(5)); 
// Output: 55

 
208. Check if a Number is a Powerful Number
Check if a given number is a powerful number.

const isPowerfulNumber = (num: number): boolean => {
  const factors = primeFactors(num);
  return new Set(factors).size === factors.length;
};

// Example usage:
console.log(isPowerfulNumber(16)); // Output: true
console.log(isPowerfulNumber(36)); // Output: false

 
209. Find the Product of Digits of a Number
Find the product of the digits of a given number.

const productOfDigits = (num: number): number =>
  [...String(num)].reduce((product, digit) => product * Number(digit), 1);

// Example usage:
console.log(productOfDigits(12345)); 
// Output: 120

 
210. Check if a Number is a Practical Number
Check if a given number is a practical number.

const isPracticalNumber = (num: number): boolean => {
  const factors = primeFactors(num); // Assuming primeFactors function is defined elsewhere
  for (let i = 2; i <= factors.length; i++) {
    if (sumOfArray(combinations(factors, i)) !== num) { // Assuming combinations and sumOfArray functions are defined elsewhere
      return false;
    }
  }
  return true;
};

// Example usage:
console.log(isPracticalNumber(6)); 
// Output: true
console.log(isPracticalNumber(12)); 
// Output: true
console.log(isPracticalNumber(14)); 
// Output: false

 
211. Calculate the Sum of Cubes of First n Natural Numbers
Calculate the sum of the cubes of the first n natural numbers.

const sumOfCubes = (n: number): number => Math.pow((n * (n + 1)) / 2, 2);

// Example usage:
console.log(sumOfCubes(5)); 
// Output: 225

 
212. Check if a Number is a Strange Number
Check if a given number is a strange number.

const isStrangeNumber = (num: number): boolean => {
  const factors = primeFactors(num); // Assuming primeFactors function is defined elsewhere
  return factors.every((factor) => sumOfDigits(factor) === sumOfDigits(num)); // Assuming sumOfDigits function is defined elsewhere
};

// Example usage:
console.log(isStrangeNumber(18)); 
// Output: true
console.log(isStrangeNumber(22)); 
// Output: true
console.log(isStrangeNumber(20)); 
// Output: false


 
213. Check if a Number is a Tau Number
Check if a given number is a Tau number.

const isTauNumber = (num: number): boolean => {
  const factors = primeFactors(num); // Assuming primeFactors function is defined elsewhere
  return factors.some((factor) => sumOfDigits(factor) === sumOfDigits(num)); // Assuming sumOfDigits function is defined elsewhere
};

// Example usage:
console.log(isTauNumber(15)); 
// Output: true
console.log(isTauNumber(9));  
// Output: true
console.log(isTauNumber(25)); 
// Output: false

 
214. Generate a Random Alphanumeric String
Generate a random alphanumeric string of a given length.

const randomAlphanumericString = (length: number): string => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Example usage:
console.log(randomAlphanumericString(8)); 
// Output: "Yw83XmLb"

 
215. Calculate the Area of a Regular Hexagon
Calculate the area of a regular hexagon using its side length.

const regularHexagonArea = (sideLength: number): number => (3 * Math.sqrt(3) * sideLength ** 2) / 2;

// Example usage:
console.log(regularHexagonArea(5)); 
// Output: 64.9519052838329

 
216. Calculate the Sum of Divisors of a Number
Calculate the sum of divisors of a given number.

const sumOfDivisors = (num: number): number => sumOfArray(divisors(num)); // Assuming divisors and sumOfArray functions are defined elsewhere

// Example usage:
console.log(sumOfDivisors(28)); 
// Output: 56
console.log(sumOfDivisors(12)); 
// Output: 28

 
217. Check if a Number is a Zeisel Number
Check if a given number is a Zeisel number.

const isZeiselNumber = (num: number): boolean => {
  const factors = primeFactors(num); // Assuming primeFactors function is defined elsewhere
  return factors.every((factor) => isPrime(factor + 1)); // Assuming isPrime function is defined elsewhere
};

// Example usage:
console.log(isZeiselNumber(1050)); 
// Output: true
console.log(isZeiselNumber(10));   
// Output: false

 
218. Check if a Number is a Reversible Number
Check if a given number is a reversible number.

const isReversibleNumber = (num: number): boolean => {
  const reversedNum = Number(String(num).split('').reverse().join(''));
  return num + reversedNum === sumOfDigits(num); // Assuming sumOfDigits function is defined elsewhere
};

// Example usage:
console.log(isReversibleNumber(36)); 
// Output: true
console.log(isReversibleNumber(45)); 
// Output: true
console.log(isReversibleNumber(10)); 
// Output: false

 
219. Calculate the Circumference of a Circle
Calculate the circumference of a circle using its radius.

const circleCircumference = (radius: number): number => 2 * Math.PI * radius;

// Example usage:
console.log(circleCircumference(5)); 
// Output: 31.41592653589793

 
220. Find the Shortest Word in a String
Find the shortest word in a given string.

const shortestWord = (str: string): string => str.split(' ').reduce((shortest, word) => (word.length < shortest.length ? word : shortest), '');

// Example usage:
console.log(shortestWord("This is a test sentence")); 
// Output: "a"

 
221. Find the Longest Word Length in a String
Find the length of the longest word in a given string.

const longestWordLength = (str: string): number => Math.max(...str.split(' ').map(word => word.length));

// Example usage:
console.log(longestWordLength("This is a test sentence")); 
// Output: 8

 
222. Find the Sum of Proper Divisors of a Number
Find the sum of the proper divisors of a given number.

const sumOfProperDivisors = (num: number): number => [...Array(num).keys()].slice(1).reduce((sum, i) => num % i === 0 ? sum + i : sum, 0);

// Example usage:
console.log(sumOfProperDivisors(28)); 
// Output: 28
console.log(sumOfProperDivisors(12)); 
// Output: 16




 
223. Check if a Number is a Unitary Perfect Number
Check if a given number is a unitary perfect number.

// Function to check if a number is a unitary perfect number (one-liner)
const isUnitaryPerfectNumber = (num: number): boolean => num === [...Array(num).keys()].slice(1).reduce((sum, i) => num % i === 0 && gcd(num, i) === 1 ? sum + i : sum, 0); 

// Function to calculate the greatest common divisor (GCD) of two numbers
const gcd = (a: number, b: number): number => { while (b !== 0) { let temp = b; b = a % b; a = temp; } return a; };

// Example usage:
console.log(isUnitaryPerfectNumber(18)); // Output: false
console.log(isUnitaryPerfectNumber(28)); // Output: true


 
224. Calculate the Perimeter of a Regular Polygon
Calculate the perimeter of a regular polygon using its side length and the number of sides.

const regularPolygonPerimeter = (sideLength: number, numSides: number): number => sideLength * numSides;

// Example usage:
console.log(regularPolygonPerimeter(5, 6)); 
// Output: 30

 
225. Calculate the Area of an Equilateral Triangle
Calculate the area of an equilateral triangle using its side length.

const equilateralTriangleArea = (sideLength: number): number => (Math.sqrt(3) * sideLength ** 2) / 4;

// Example usage:
console.log(equilateralTriangleArea(5)); 
// Output: 10.825317547305486

 
226. Check if a Number is a Harshad Smith Number
Check if a given number is both a Harshad number and a Smith number.

const isHarshadSmithNumber = (num: number): boolean => {
    const sumOfDigits = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    const isHarshad = num % sumOfDigits === 0;
    
    const primeFactors = (n: number) => {
        const factors = [];
        for (let i = 2; i <= n; i++) {
            while (n % i === 0) {
                factors.push(i);
                n /= i;
            }
        }
        return factors;
    };
    
    const sumOfPrimeFactors = primeFactors(num).reduce((sum, factor) => sum + factor, 0);
    const isSmith = sumOfPrimeFactors === sumOfDigits;

    return isHarshad && isSmith;
};

// Example usage:
console.log(isHarshadSmithNumber(22)); 
// Output: true
console.log(isHarshadSmithNumber(10)); 
// Output: false


227. Check if a Number is a Perfect Power
Check if a given number is a perfect power.

const isPerfectPower = (num: number): boolean => {
    for (let base = 2; base * base <= num; base++) {
        let exponent = 2;
        let result = base * base;
        while (result <= num) {
            if (result === num) {
                return true;
            }
            result *= base;
            exponent++;
        }
    }
    return false;
};

// Example usage:
console.log(isPerfectPower(64)); 
// Output: true
console.log(isPerfectPower(25)); 
// Output: false

 
228. Calculate the Sum of Digits Raised to Their Own Power
Calculate the sum of digits raised to their own power for a given number and power.

const sumOfDigitsToPower = (num: number, power: number): number => {
    return [...String(num)].reduce((sum, digit) => sum + parseInt(digit) ** power, 0);
};

// Example usage:
console.log(sumOfDigitsToPower(123, 3)); 
// Output: 36
console.log(sumOfDigitsToPower(4150, 5)); 
// Output: 4150

 
229. Check if a Number is a Dudeney Number
Check if a given number is a Dudeney number.

const isDudeneyNumber = (num: number): boolean => Math.cbrt(num) === [...String(num)].reduce((sum, digit) => sum + parseInt(digit), 0);

// Example usage:
console.log(isDudeneyNumber(512)); 
// Output: true
console.log(isDudeneyNumber(27)); 
// Output: false

 
230. Calculate the Area of a Regular Pentagon
Calculate the area of a regular pentagon using its side length.

const regularPentagonArea = (sideLength: number): number => (1 / 4) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * sideLength ** 2;

// Example usage:
console.log(regularPentagonArea(5)); 
// Output: 43.01193501472417


 
231. Calculate the Volume of a Pyramid
Calculate the volume of a pyramid using its base area and height.

const pyramidVolume = (baseArea: number, height: number): number => (1 / 3) * baseArea * height;

// Example usage:
console.log(pyramidVolume(25, 10)); 
// Output: 83.33333333333333

 
232. Check if a Number is a Wedderburn-Etherington Number
Check if a given number is a Wedderburn-Etherington number.

// Function to check if a number is a Wedderburn-Etherington number
const isWedderburnEtheringtonNumber = (num: number): boolean => {
    const primes = primeFactors(num);
    const factorials = primes.map((prime) => factorial(prime - 1));
    return factorials.reduce((product, factorial) => product * factorial, 1) === factorial(num);
};

// Example usage:
console.log(isWedderburnEtheringtonNumber(6)); 
// Output: true
console.log(isWedderburnEtheringtonNumber(12)); 
// Output: false

 
233. Calculate the Surface Area of a Cube
Calculate the surface area of a cube using its side length.

// Function to calculate the surface area of a cube
const cubeSurfaceArea = (sideLength: number): number => 6 * sideLength ** 2;

// Example usage:
console.log(cubeSurfaceArea(5)); 
// Output: 150

 
234. Check if a Number is a Pluperfect Number
Check if a given number is a pluperfect number.

// Function to check if a number is a pluperfect number
const isPluperfectNumber = (num: number): boolean => num === sumOfDivisors(sumOfDivisors(num)) - num;

// Example usage:
console.log(isPluperfectNumber(28)); 
// Output: true
console.log(isPluperfectNumber(20)); 
// Output: false

 
235. Calculate the Area of a Regular Octagon
Calculate the area of a regular octagon using its side length.

// Function to calculate the area of a regular octagon
const regularOctagonArea = (sideLength: number): number => 2 * (1 + Math.sqrt(2)) * sideLength ** 2;

// Example usage:
console.log(regularOctagonArea(5)); 
// Output: 86.60254037844387

 
236. Check if a Number is a Repunit Number
Check if a given number is a repunit number.

// Function to check if a number is a repunit number
const isRepunitNumber = (num: number): boolean => /^1+$/.test(num.toString());

// Example usage:
console.log(isRepunitNumber(111)); 
// Output: true
console.log(isRepunitNumber(11));  
// Output: false

 
237. Calculate the Volume of a Ellipsoid
Calculate the volume of an ellipsoid using its semi-axes lengths.

// Function to calculate the volume of an ellipsoid
const ellipsoidVolume = (a: number, b: number, c: number): number => (4 / 3) * Math.PI * a * b * c;

// Example usage:
console.log(ellipsoidVolume(5, 3, 2)); 
// Output: 125.66370614359172


 
238. Check if a String is a Valid URL (Alternative Approach)
Check if a given string is a valid URL using an alternative approach.

// Function to check if a string is a valid URL using an alternative approach
const isValidURLAlt = (url: string): boolean => /^(ftp|http|https):\/\/[^ "]+$/.test(url);

// Example usage:
console.log(isValidURLAlt("https://www.example.com")); 
// Output: true
console.log(isValidURLAlt("invalid url")); 
// Output: false

 
239. Check if a String is a Valid Tax Identification Number (TIN)
Check if a given string is a valid Tax Identification Number (TIN).

// Function to check if a string is a valid Tax Identification Number (TIN)
const isValidTIN = (tin: string): boolean => /^[A-Z]{2}\d{6}[A-Z\d]{2}$/.test(tin);

// Example usage:
console.log(isValidTIN("AB123456CD")); 
// Output: true
console.log(isValidTIN("invalid tin")); 
// Output: false

 
240. Check if a String is a Valid ISBN (International Standard Book Number)
Check if a given string is a valid International Standard Book Number (ISBN).

// Function to check if a string is a valid International Standard Book Number (ISBN)
const isValidISBN = (isbn: string): boolean => /^(?:\d{9}[\dX]|(?:\d{3}-){2}\d{1}[\dX])$/.test(isbn);

// Example usage:
console.log(isValidISBN("123456789")); 
// Output: true
console.log(isValidISBN("invalid isbn")); 
// Output: false

 
241. Check if a String is a Valid IP Address
Check if a given string is a valid IP address.

// Function to check if a string is a valid IP address
const isValidIPAddress = (ip: string): boolean => /^((25[0-5]|2[0-4]\d|[0-1]?\d{1,2})\.){3}(25[0-5]|2[0-4]\d|[0-1]?\d{1,2})$/.test(ip);

// Example usage:
console.log(isValidIPAddress("192.168.1.1")); 
// Output: true
console.log(isValidIPAddress("invalid ip")); 
// Output: false

 
242. Reverse a String (Using Recursion)
Reverse a string using a recursive approach.

// Function to reverse a string using recursion
const reverseStringRecursive = (str: string): string => str === '' ? '' : reverseStringRecursive(str.substr(1)) + str.charAt(0);

// Example usage:
console.log(reverseStringRecursive('hello')); 
// Output: 'olleh'

 
243. Count the Occurrences of Each Element in an Array
Count the occurrences of each element in a given array and return the counts in an object.

// Function to count the occurrences of each element in an array and return the counts in an object
const countOccurrences = (arr: any[]): Record<string, number> =>
  arr.reduce((acc: Record<string, number>, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {});

// Example usage:
console.log(countOccurrences([1, 2, 1, 3, 2, 4, 1])); 
// Output: { '1': 3, '2': 2, '3': 1, '4': 1 }


 
244. Check if Two Arrays are Equal (Shallow Comparison)
Check if two arrays are equal through a shallow comparison of their elements.

// Function to check if two arrays are equal through a shallow comparison of their elements
const arraysAreEqual = <T>(arr1: T[], arr2: T[]): boolean =>
  arr1.length === arr2.length && arr1.every((val, index) => val === arr2[index]);

// Example usage:
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); 
// Output: true
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4])); 
// Output: false

 
245. Find the Minimum Value in an Array
Find the minimum value in a given array of numbers.

// Function to find the minimum value in an array of numbers
const findMinValue = (arr: number[]): number => Math.min(...arr);

// Example usage:
console.log(findMinValue([2, 7, 1, 9, 4])); 
// Output: 1

 
246. Flatten an Array of Nested Arrays (Using concat)
Flatten an array of nested arrays using the concat method.

// Function to flatten an array of nested arrays using the concat method
const flattenArray = <T>(arr: T[][]): T[] => ([] as T[]).concat(...arr);

// Example usage:
console.log(flattenArray([[1, 2], [3, 4], [5, 6]])); 
// Output: [1, 2, 3, 4, 5, 6]

 
247. Find the Average of Numbers in an Array
Calculate the average of numbers in a given array.

// Function to find the average of numbers in an array
const findAverage = (arr: number[]): number => arr.reduce((sum, num) => sum + num, 0) / arr.length;

// Example usage:
console.log(findAverage([1, 2, 3, 4, 5])); 
// Output: 3

 
248. Sum the Squares of Numbers in an Array
Calculate the sum of the squares of numbers in a given array.

// Function to sum the squares of numbers in an array
const sumSquares = (arr: number[]): number => arr.reduce((sum, num) => sum + num ** 2, 0);

// Example usage:
console.log(sumSquares([1, 2, 3, 4, 5])); 
// Output: 55

 
249. Check if a String is a Palindrome (Ignoring Non-Alphanumeric Characters)
Check if a given string is a palindrome, ignoring non-alphanumeric characters and considering case-insensitivity.

// Function to check if a string is a palindrome, ignoring non-alphanumeric characters
const isPalindromeIgnoringNonAlphaNumeric = (str: string): boolean => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Check if the cleaned string is equal to its reversed version
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

// Example usage:
console.log(isPalindromeIgnoringNonAlphaNumeric("A man, a plan, a canal, Panama!")); 
// Output: true

 
250. Shuffle an Array (Using Fisher-Yates Algorithm)
Shuffle the elements of an array using the Fisher-Yates shuffle algorithm.

// Function to shuffle an array using the Fisher-Yates shuffle algorithm
const shuffleArrayFisherYates = <T>(arr: T[]): T[] => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
};

// Example usage:
console.log(shuffleArrayFisherYates([1, 2, 3, 4, 5])); 
// Output: [3, 1, 4, 2, 5] (randomly shuffled)

 
251. Sort an Array of Objects by a Specific Property
Sort an array of objects based on a specific property value.

// Define the interface for the objects in the array
interface ObjectWithProperty {
    [key: string]: any;
}

// Function to sort an array of objects by a specific property
const sortByProperty = <T extends ObjectWithProperty>(arr: T[], prop: keyof T): T[] => {
    return arr.sort((a, b) => {
        if (a[prop] < b[prop]) return -1;
        if (a[prop] > b[prop]) return 1;
        return 0;
    });
};

// Example usage:
const data: { name: string; age: number }[] = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 20 },
    { name: 'Carol', age: 30 }
];
console.log(sortByProperty(data, 'age'));
// Output: [{ name: 'Bob', age: 20 }, { name: 'Alice', age: 25 }, { name: 'Carol', age: 30 }]





252. Reverse Words in a Sentence
Reverse words in a sentence.

const reverseWords = (sentence: string): string => {
    // Split the sentence into an array of words
    const words = sentence.split(' ');
    // Reverse the order of the words array
    const reversedWords = words.reverse();
    // Join the words array back into a string
    const reversedSentence = reversedWords.join(' ');
    return reversedSentence;
};

// Example usage:
const originalSentence = "Hello world, how are you?";
const reversedSentence = reverseWords(originalSentence);
console.log(reversedSentence); 
// Output: "you? are how world, Hello"

 
253. Find the Median of Numbers in an Array
Find the median value of numbers in a given array.

const findMedian = (arr: number[]): number => {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const middle = Math.floor(sortedArr.length / 2);
    return sortedArr.length % 2 === 0 ? (sortedArr[middle - 1] + sortedArr[middle]) / 2 : sortedArr[middle];
};

// Example usage:
console.log(findMedian([1, 3, 2, 4, 5])); 
// Output: 3

 
254. Count the Vowels in a String
Count the number of vowels in a given string.

const countVowels = (str: string): number => (str.match(/[aeiou]/gi) || []).length;

// Example usage:
console.log(countVowels('Hello, how are you?')); 
// Output: 7

 
255. Check if a Number is a Tribonacci Number (Alternative Approach)
Check if a given number is a Tribonacci number using an alternative approach.

const isTribonacciNumberAlt = (num: number): boolean => {
    const sequence: number[] = [0, 0, 1];
    for (let i = 3; i <= num; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2] + sequence[i - 3];
        if (sequence[i] === num) return true;
    }
    return false;
};

// Example usage:
console.log(isTribonacciNumberAlt(21)); 
// Output: true

 
256. Calculate the Fibonacci Sequence (Up to N Terms)
Generate the Fibonacci sequence up to a given number of terms n.

const fibonacciSequence = (n: number): number[] => {
    return [...Array(n)].reduce<number[]>((fibSeq, _, i) => {
        return fibSeq.concat(i > 1 ? fibSeq[i - 1] + fibSeq[i - 2] : i);
    }, [0, 1]);
};

// Example usage:
console.log(fibonacciSequence(10)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

 
257. Find the ASCII Value of a Character
Get the ASCII value of a given character.

const getAsciiValue = (char: string): number => {
    return char.charCodeAt(0);
};

// Example usage:
console.log(getAsciiValue('A')); 
// Output: 65

 
258. Check if a String is an Isogram (No Repeating Characters)
Check if a given string is an isogram, meaning it has no repeating characters (case-insensitive).

const isIsogram = (str: string): boolean => {
    return new Set(str.toLowerCase()).size === str.length;
};

// Example usage:
console.log(isIsogram('hello')); 
// Output: false
console.log(isIsogram('world'));
// Output: true

 
259. Calculate the Hamming Distance of Two Strings (Equal Length)
Calculate the Hamming distance between two equal-length strings, which is the count of differing characters at corresponding positions.

const hammingDistance = (str1: string, str2: string): number => {
    return [...str1].reduce((distance, char, i) => distance + (char !== str2[i] ? 1 : 0), 0);
};

// Example usage:
console.log(hammingDistance('karolin', 'kathrin')); 
// Output: 3

 
260. Calculate the Distance between Two Points in a 2D Plane
Calculate the Euclidean distance between two points in a 2D plane using the Pythagorean theorem.

const calculateDistance = ([x1, y1]: [number, number], [x2, y2]: [number, number]): number => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};

// Example usage:
console.log(calculateDistance([0, 0], [3, 4])); 
// Output: 5 (Pythagorean triple: 3^2 + 4^2 = 5^2)

 
261. Check if a String is a Positive Number (No Sign or Decimal Allowed)
Check if a given string represents a positive integer without any sign or decimal point.

const isPositiveNumber = (str: string): boolean => /^[0-9]+$/.test(str);

// Example usage:
console.log(isPositiveNumber('123'));  
// Output: true
console.log(isPositiveNumber('-123')); 
// Output: false

 
262. Find the First Non-Repeating Character in a String
Find and return the first non-repeating character in a given string.

const findFirstNonRepeating = (str: string): string | undefined => [...str].find(char => str.indexOf(char) === str.lastIndexOf(char));

// Example usage:
console.log(findFirstNonRepeating('hello')); 
// Output: 'h'


 
263. Calculate the Area of a Kite
Calculate the area of a kite using the lengths of its diagonals.

const areaOfKite = (d1: number, d2: number): number => 0.5 * d1 * d2;

// Example usage:
console.log("Area of the kite:", areaOfKite(10, 6)); 
// Output: 30

 
264. Calculate the Area of a Sector
Calculate the area of a sector within a circle based on the provided radius and angle.

const sectorArea = (radius: number, angle: number): number => (Math.PI * radius ** 2 * angle) / 360;

console.log(sectorArea(5, 60)); 
// Output: 5.235987755982989
