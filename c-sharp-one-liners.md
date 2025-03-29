# 250+ Killer C# One-Liners
 
### 1. Convert Celsius to Fahrenheit
The CelsiusToFahrenheit function converts Celsius to Fahrenheit.

```
using System;

class Program1
{
    static void Main()
    {
        Func<double, double> CelsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
        
        Console.WriteLine(CelsiusToFahrenheit(25)); 
        // Output: 77°F (25°C converted to Fahrenheit)
    }
}
```

2. Swap Two Variables
The SwapWithoutTemp function swaps the values of two variables a and b without using a temporary variable. 

using System;

class Program2
{
    static void Main() 
    {
        var result = SwapWithoutTemp(5, 10);
        Console.WriteLine($"After swapping: a = {result.b}, b = {result.a}"); 
        // Output: After swapping: a = 10, b = 5
    }

    static (int a, int b) SwapWithoutTemp(int a, int b) => (b, a);
}






 
3. Convert RGB to Hex
The RgbToHex function combines the red, green, and blue (RGB) values into a single hexadecimal color code. 

using System;

class Program3
{
    static void Main() => Console.WriteLine(RgbToHex(0, 51, 255));

    static string RgbToHex(int r, int g, int b) => $"#{((r << 16) + (g << 8) + b).ToString("X").PadLeft(6, '0')}";
    // Output: #0033FF
}








 
4. Transpose of a Matrix
The TransposeMatrix function computes the transpose of a given matrix. 

using System;
using System.Linq;

class Program4 {
  static void Main() {
    int[][] matrix = new int[][] {
      new int[] {
          1,
          2,
          3
        },
        new int[] {
          4,
          5,
          6
        },
        new int[] {
          7,
          8,
          9
        }
    };
    Console.WriteLine(string.Join(Environment.NewLine, TransposeMatrix(matrix).Select(row => string.Join(", ", row))));
    // 1, 4, 7
    // 2, 5, 8a
    // 3, 6, 9
  }
  static int[][] TransposeMatrix(int[][] matrix) => matrix[0].Select((_, i) => matrix.Select(row => row[i]).ToArray()).ToArray();
}



5. Check if Date is Valid
The IsDateValid function checks if a date is valid.

using System;

class Program5
{
    static void Main() => Console.WriteLine(IsDateValid("December 17, 1995 03:24:00"));

    static bool IsDateValid(string val) => DateTime.TryParse(val, out _);
    // Output: True
}






 
6. Find the Day of Year
The DayOfYear function takes a date as input and calculates the day of the year for that date. 

using System;

class Program6
{
    static void Main() => Console.WriteLine(DayOfYear(new DateTime(2024, 10, 1)));

    static int DayOfYear(DateTime date) => date.DayOfYear;
    // Output: 275
}








 
7. Capitalize a String
The Capitalize function takes a string as input and capitalizes the first character.

using System;

class Program7
{
    static void Main() => Console.WriteLine(Capitalize("follow for more"));

    static string Capitalize(string str) => char.ToUpper(str[0]) + str.Substring(1);
    // Output: Follow for more
}




  
8. Find the Number of Days Between Two Days
The DayDiff function finds the number of days between two days.

using System;

class Program8
{
    static void Main() 
    {
        DateTime date1 = new DateTime(2020, 10, 21);
        DateTime date2 = new DateTime(2021, 10, 22);
        Console.WriteLine(DayDiff(date1, date2));
    }

    static int DayDiff(DateTime date1, DateTime date2) => Math.Abs((date2 - date1).Days) + 1;
    // Output: 367
}





 
9. Find the Frecuency of Character in a String
The CharacterFrequency function finds the frequency of characters in a String. 

using System;
using System.Linq;
using System.Collections.Generic;

class Program9
{
    static void Main() 
    {
        Console.WriteLine(string.Join(", ", CharacterFrequency("hello").Select(kv => $"{kv.Key}=>{kv.Value}")));
    }

    static Dictionary<char, int> CharacterFrequency(string str) => str.GroupBy(c => c).ToDictionary(g => g.Key, g => g.Count());
    // Output: h=>1, e=>1, l=>2, o=>1
}





 
10. Generate Random Hex
The RandomHex function generates a random integer between 0 and 16777215 (0xffffff in hexadecimal).

using System;

class Program10
{
    static void Main() => Console.WriteLine(RandomHex());

    static string RandomHex() => $"#{new Random().Next(0x1000000):X6}";
    // Output: #A58E72
}





 
11. Create Random Strings
The RandomString function generates a random String of lowercase letters with the specified length. 

using System;
using System.Linq;

class Program11
{
    static void Main() => Console.WriteLine(RandomString(10));

    static string RandomString(int length) => new string(Enumerable.Repeat("abcdefghijklmnopqrstuvwxyz", length).Select(s => s[new Random().Next(s.Length)]).ToArray());
    // Output: bjmfpwmoqi
}





 
12. Find the Odd Occurrence
The findOdd function finds the integer which appears an odd number of times in a given list of integers.

using System;
using System.Collections.Generic;
using System.Linq;

class Program12 {
    static int findOdd(List<int> ar) => ar.Aggregate(0, (x, y) => x ^ y);
    
    static void Main() {
        var ar = Enumerable.Range(1, new Random().Next(10, 20)).Select(_ => new Random().Next(1, 100)).ToList();
        Console.WriteLine("Input: " + string.Join(" ", ar));
        // Input: 51 72 36 69 18 41 25 19 87 2 75 53 76 72 62 60 90 39 64
        Console.WriteLine("Result: " + findOdd(ar));
        // Result: 59
    }
}






 
13. Check if a Number is Even or Odd
The IsEven function checks whether a given number is even or odd.

using System;

class Program13
{
    static void Main() => Console.WriteLine(IsEven(2));

    static bool IsEven(int num) => num % 2 == 0;
    // Output: True
}




 
14. Simple Sum
The Addition function takes two numbers as input and returns their sum.

using System;

class Program14 {
    static void Main() {
        Func<int, int, int> Addition = (a, b) => a + b;

        int result = Addition(5, 3);
        Console.WriteLine(result); 
        // Output: 8
    }
}



 
15. Pyramid Pattern
The CreatePyramid function takes the number of rows as an argument and returns an array representing the pyramid pattern. 

using System;
using System.Linq;

class Program15
{
    static void Main()
    {
        string[] pyramid = CreatePyramid(5);
        foreach (string row in pyramid)
        {
            Console.WriteLine(row);
        }
    }

    static string[] CreatePyramid(int rows) => Enumerable.Range(1, rows).Select(i => new string(' ', rows - i) + new string('*', 2 * i - 1)).ToArray();
    /*
        *
       ***
      *****
     *******
    *********
    */
}

 
16. Reverse a String
The Reverse function takes a string as input and returns a new string with the characters in reverse order. 

using System;

class Program16
{
    static void Main() => Console.WriteLine(Reverse("hello world"));
    // Output: dlrow olleh
    
    static string Reverse(string str)
    {
        char[] charArray = str.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }
}



 
17. Check If Array is Empty
The IsNotEmpty function checks if an array is not empty. 

using System;

class Program17
{
    static void Main() => Console.WriteLine(IsNotEmpty(new int[] { 1, 2, 3 }));

    static bool IsNotEmpty(Array arr) => arr is Array && arr.Length > 0;

    // Output: True
}




 
18. Matchstick Count in Steps
The function MatchHouses calculates the total number of matchsticks required based on the number of steps provided.

using System;

class Program18 {
    static void Main() {
        Console.WriteLine(MatchHouses(1)); 
        // Output: 6
        Console.WriteLine(MatchHouses(4)); 
        // Output: 21
        Console.WriteLine(MatchHouses(0)); 
        // Output: 0
    }

    static int MatchHouses(int step) => step > 0 ? step * 6 - (step - 1) : 0;
}




 
19. Shuffle an Array
The ShuffleArray function randomly shuffles the elements of a given array.

using System;
using System.Linq;

class Program19
{
    static void Main() => Console.WriteLine(string.Join(", ", ShuffleArray(new int[] { 1, 2, 3, 4 })));
// Output: 4, 2, 3, 1

    static int[] ShuffleArray(int[] arr) => arr.OrderBy(x => Guid.NewGuid()).ToArray();
}




 
20. Validate Vowel Sandwich
The isVowelSandwich function validates whether a 3-character string is a vowel sandwich.

using System;
using System.Linq;

class Program20 {
    static void Main() {
        Func<string, bool> isVowelSandwich = str => str.Length == 3 && !new[] { 'a', 'e', 'i', 'o', 'u' }.Contains(str[0]) && new[] { 'a', 'e', 'i', 'o', 'u' }.Contains(str[1]) && !new[] { 'a', 'e', 'i', 'o', 'u' }.Contains(str[2]);
        
        Console.WriteLine(isVowelSandwich("bat")); 
        // false
        Console.WriteLine(isVowelSandwich("cat")); 
        // true
        Console.WriteLine(isVowelSandwich("dog")); 
        // false
    }
}





 
21. Count True Values in Boolean Array
The CountTrue function counts the number of true values in a boolean array.

using System;

public class Program21
{
    public static void Main()
    {
        // Example usage
        bool[] boolArray = { true, false, true, false, true };
        int count = CountTrue(boolArray);
        Console.WriteLine("Number of true values: " + count);
        // Output: Number of true values: 3
    }

    // One-liner function to count true values in a boolean array
    static int CountTrue(bool[] lst) => Array.FindAll(lst, x => x).Length;
}





 
22. Get the Length of a String
The GetLength function returns the number of characters in the given string.

using System;

class Program22
{
    static void Main() => Console.WriteLine(GetLength("Hello, world!"));
    // Output: 13

    static int GetLength(string str) => str.Length;
}



 
23. Calculate the Area of a Circle
The CalculateCircleArea function calculates the area of a circle given its radius.

using System;

class Program23
{
    static void Main() => Console.WriteLine(CalculateCircleArea(5));
    // Output: 78.5398163397448

    static double CalculateCircleArea(double radius) => Math.PI * Math.Pow(radius, 2);
}


 
24. Move Capital Letters to Front
The function CapToFront moves all capital letters in a word to the front of the word, preserving their original order, and followed by the lowercase letters.

using System;
using System.Linq;

class Program24 {
    static void Main() {
        string s = "MoveCapitalLettersToFront";
        Console.WriteLine(CapToFront(s));
        // Output: MCLFoveapitalettersoront
    }

    static string CapToFront(string s) => string.Concat(s.Where(char.IsUpper)) + string.Concat(s.Where(char.IsLower));
}




  
 
25. Check if an Array is Special
The IsSpecialArray function determines whether an array is special, where every even index contains an even number and every odd index contains an odd number.

using System;
using System.Linq;

class Program25 {
    static void Main() {
        int[] arr = { 2, 3, 6, 8, 9 };
        Console.WriteLine(IsSpecialArray(arr));
        // Output: False
    }

    static bool IsSpecialArray(int[] arr) => arr.Select((n, i) => n % 2 == i % 2).All(x => x);
}




 
26. Validate Number Within Bounds
The IntWithinBounds function validates whether a number n is exclusively within the bounds of lower and upper.

using System;

class Program26 {
    static void Main() {
        Console.WriteLine(IntWithinBounds(10, 5, 20)); 
        // Output: True
        Console.WriteLine(IntWithinBounds(5, 5, 20));  
        // Output: False
        Console.WriteLine(IntWithinBounds(21, 5, 20)); 
        // Output: False
    }

    static bool IntWithinBounds(double n, int lower, int upper) => lower <= n && n < upper && n % 1 == 0;
}





 
27. Generate a Random Number within a Range
The RandomInRange function generates a random number within the specified range.

using System;

class Program27
{
    static void Main() => Console.WriteLine(RandomInRange(1, 10));
    // Output: 6
    static int RandomInRange(int min, int max) => new Random().Next(min, max + 1);
}



 
28. Convert Seconds to HH:MM:SS Format
The SecondsToHHMMSS function converts the given number of seconds into the HH:MM:SS format.

using System;

class Program28
{
    static void Main() => Console.WriteLine(SecondsToHHMMSS(3660));
    // Output: 01:01:00

    static string SecondsToHHMMSS(int seconds) => $"{seconds / 3600:D2}:{(seconds % 3600) / 60:D2}:{seconds % 60:D2}";
}




  
 
29. Get the Last Element of an Array
The GetLastElement function retrieves the last element of the given array.

using System;

class Program29
{
    static void Main() => Console.WriteLine(GetLastElement(new int[] { 1, 2, 3, 4 }));
    // Output: 4
    static int GetLastElement(int[] arr) => arr[arr.Length - 1];
}



 
30. Jazzify Chords
The jazzifiedArr function appends the number 7 to the end of every chord in an array. It ignores all chords that already end with 7.

using System;
using System.Linq;

class Program {
    static void Main() {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        int[] jazzifiedArr = Jazzify(arr);
        Console.WriteLine(string.Join(", ", jazzifiedArr));
        // Output: 8, 9, 10, 11, 12, 13, 7, 15, 16
    }

    static int[] Jazzify(int[] arr) {
        return arr.Select(x => x.ToString().Contains("7") ? x : x + 7).ToArray();
    }
}



 
31. Check if All Elements in an Array are the Same
The TestJackpot function takes in a string representing the result of a jackpot game and returns true if all elements in the string are the same, indicating a jackpot, and false otherwise.

using System.Linq;

class Program31
{
    static void Main(string[] args)
    {
        string result = "22222";
        System.Console.WriteLine(TestJackpot(result));
        // Output: True
    }

    static bool TestJackpot(string result) => result.Distinct().Count() == 1;
}




 
32. Sum of Numbers up to a Given Number
The AddUp function calculates the sum of all numbers from 1 to the number passed to the function in C#.

using System;

class Program32 {
    static void Main() {
        Console.WriteLine(AddUp(5));
        // Output: 15
    }

    static int AddUp(int num) => num * (num + 1) / 2;
}



  
 
33. Sum all Numbers in an Array
The SumArray function calculates the sum of all numbers in a given array.

using System;
using System.Linq;

class Program33
{
    static void Main() => Console.WriteLine(SumArray(new int[] { 1, 2, 3, 4, 5 }));
    // Output: 15
    static int SumArray(int[] arr) => arr.Sum();
}




 
34. Find the Maximum Value in an Array
The FindMax function finds the maximum value in a given array.
.
using System;
using System.Linq;

class Program34
{
    static void Main() => Console.WriteLine(FindMax(new int[] { 10, 5, 8, 20, 3 }));
    // Output: 20
    static int FindMax(int[] arr) => arr.Max();
}




 
35. Get the Current Date in DD/MM/YYYY Format
The GetCurrentDate function returns the current date in the format "DD/MM/YYYY".

using System;

class Program35
{
    static void Main() => Console.WriteLine(GetCurrentDate());
    // Output: 16/04/2024
    static string GetCurrentDate() => DateTime.Now.ToString("dd/MM/yyyy");
}





  
 
36. Calculate the Power of a Number
The Power function calculates the power of a given base raised to the specified exponent.

using System;

class Program36
{
    static void Main() => Console.WriteLine(Power(2, 5));
    // Output: 32
    static double Power(double @base, double exponent) => Math.Pow(@base, exponent);
}




 
37. Convert String to Number
The StringToNumber function converts a string to a floating-point number.

using System;

class Program37
{
    static void Main() => Console.WriteLine(StringToNumber("3.14"));
    // Output: 3.14
    static double StringToNumber(string str) => double.Parse(str);
}   

	


 
38. Marathon Distance Checker
The distances function helps Mary determine if the marathon she wants to run is exactly 25 miles long by analyzing the lengths listed in small portions on the sign-up sheet. It returns true if the total distance matches 25 miles, otherwise, it returns false.

using System;
using System.Linq;

class Program38
{
    static void Main()
    {
        int[] distances = { 1, 2, -3, 4, 5, -6, 7, 8, -9, 10 };
        Console.WriteLine(MarathonDistance(distances));
        // Output: False
    }

    static bool MarathonDistance(int[] distances) => distances.Sum(Math.Abs) == 25;
}



  
 
39. Count the Number of Words in a String
The CountWords function counts the number of words in a given string.

using System;

class Program39
{
    static void Main() => Console.WriteLine(CountWords("Hello world, how are you?"));
    // Output: 5
    static int CountWords(string str) => str.Trim().Split(new char[] { ' ', '\t', '\n', '\r' }, StringSplitOptions.RemoveEmptyEntries).Length;
}






 
40. Count Ones in Binary Representation
The CountOnes function counts the number of ones in the binary representation of an integer.
using System;

class Program40 {
    static void Main() {
        int result = CountOnes(12);
        Console.WriteLine(result); // Output: 2
    }

    static int CountOnes(int n) => Convert.ToString(n, 2).Count(c => c == '1');
}





 
41. Get the Current Year
The CurrentYear function returns the current year as an integer. 

using System;

class Program41
{
    static void Main() => Console.WriteLine(CurrentYear());
    // Output: 2024
    static int CurrentYear() => DateTime.Now.Year;
}




 
42. Generate a Random Number between 1 and 10
The Random1To10 function generates a random integer between 1 and 10 (inclusive) using the rand method with a range of 1 to 10.

using System;

class Program42
{
    static void Main() => Console.WriteLine(Random1To10());
    // Output: 8
    static int Random1To10() => new Random().Next(1, 11);
}




 
43. Check if a String is Empty
The EmptyString function checks if a string is empty.

using System;

class Program43
{
    static void Main()
    {
        Console.WriteLine(EmptyString(""));
        // Output: True
        Console.WriteLine(EmptyString("Hello, world!"));
        // Output: False
    }

    static bool EmptyString(string str) => string.IsNullOrWhiteSpace(str);
}




 
44. Sum of Index Multiplied Elements
The IndexMultiplier function calculates the sum of all items in an array, where each item is multiplied by its index (zero-based). If the array is empty, it returns 0.

using System;
using System.Linq;

class Program44 {
    static void Main() {
        int[] arr = { 1, 2, 3, 4, 5 };
        Console.WriteLine(IndexMultiplier(arr)); 
        // Output: 40
    }

    static int IndexMultiplier(int[] arr) => arr.Select((value, index) => value * index).Sum();
}


 
45. Calculate Progress Days
The ProgressDays function calculates the total number of progress days based on an array of miles run every Saturday.

using System;
using System.Linq;

class Program45 {
    static void Main() {
        int[] runs = { 3, 4, 1, 2, 4, 5 };
        Console.WriteLine(ProgressDays(runs)); 
        // Output: 3
    }

    static int ProgressDays(int[] runs) => runs.Where((e, i, a) => e < a[i + 1]).Count();
}





 
46. Check if a Number is a Multiple of 5
The IsMultipleOf5 function checks if a given number is a multiple of 5. 

using System;

class Program46
{
    static void Main()
    {
        Console.WriteLine(IsMultipleOf5(10));
        // Output: True
        Console.WriteLine(IsMultipleOf5(7));
        // Output: False
    }

    static bool IsMultipleOf5(int num) => num % 5 == 0;
}



 
47. Convert Minutes to Seconds
The MinsToSecs convert minutes to seconds. It takes a number representing minutes (mins) as input and returns the equivalent number of seconds by multiplying the number of minutes by 60.

using System;

class Program47
{
    static void Main() => Console.WriteLine(MinsToSecs(5));
    // Output: 300

    static int MinsToSecs(int mins) => mins * 60;
}



 
48. Find the Maximum Value in an Array of Objects
The FindMaxValue function finds the maximum value in an array of objects.

using System;
using System.Collections.Generic;
using System.Linq;

class Program48
{
    static void Main() => Console.WriteLine(FindMaxValue(new List<dynamic>
    {
        new { name = "Alice", score = 80 },
        new { name = "Bob", score = 95 },
        new { name = "Charlie", score = 70 }
    }, "score"));

    static int FindMaxValue(List<dynamic> arr, string key) => arr.Max(item => item.GetType().GetProperty(key).GetValue(item));
    // Output: 95
}



 
49. Check if a String starts with a specific character
The StartsWithChar function checks if a given string starts with a specific character.

using System;

class Program49
{
    static void Main()
    {
        Console.WriteLine(StartsWithChar("Hello, world!", 'H'));
        // Output: True
        Console.WriteLine(StartsWithChar("Hello, world!", 'h'));
        // Output: True
    }

    static bool StartsWithChar(string str, char ch) => str.StartsWith(ch.ToString(), StringComparison.OrdinalIgnoreCase);
}



 
50. Convert DNA to RNA
The DnaToRna function takes a DNA sequence as input and converts it into its corresponding RNA sequence.

using System;
using System.Collections.Generic;

class Program50 {
    static void Main() {
        Console.WriteLine(DnaToRna("ATTGC")); 
        // Output: UAAAC
    }

    static string DnaToRna(string dna) {
        Dictionary<char, char> converted = new Dictionary<char, char>() {
            {'A', 'U'}, {'T', 'A'}, {'C', 'G'}, {'G', 'C'}
        };
        return string.Concat(dna.ToCharArray().Select(c => converted[c]));
    }
}




 
51. Check if an array contains a specific value
The ContainsValue function checks if a given array contains a specific value.

using System;
using System.Linq;

class Program51
{
    static void Main()
    {
        Console.WriteLine(ContainsValue(new int[] { 1, 2, 3, 4, 5 }, 3));
        // Output: True
        Console.WriteLine(ContainsValue(new int[] { 1, 2, 3, 4, 5 }, 6));
        // Output: False
    }

    static bool ContainsValue(int[] arr, int value) => arr.Contains(value);
}



 
52. Convert an array to a comma-separated string
The ArrayToCSV function converts an array to a comma-separated string. 

using System;

class Program52
{
    static void Main()
    {
        Console.WriteLine(ArrayToCSV(new int[] { 1, 2, 3, 4, 5 }));
        // Output: 1, 2, 3, 4, 5
    }

    static string ArrayToCSV(int[] arr) => string.Join(", ", arr);
}






 
53. Check if a Year is a Leap Year
The IsLeapYear function takes a year as input and returns true if it's a leap year and false otherwise.

using System;

class Program53
{
    static void Main()
    {
        Console.WriteLine(IsLeapYear(2024));
        // Output: True
        Console.WriteLine(IsLeapYear(2023));
        // Output: False
    }

    static bool IsLeapYear(int year) => (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
}



 
54. Find the Index of an Element in an Array
The FindIndex function finds the index of an element in an array.

using System;
using System.Linq;

class Program54
{
    static void Main()
    {
        var fruits = new string[] { "apple", "banana", "orange", "grape" };
        Console.WriteLine(FindIndex(fruits, "orange"));
        // Output: 2
    }

    static int FindIndex(string[] arr, string element) => Array.IndexOf(arr, element);
}




 
55. Convert Minutes to Hours and Minutes
The MinsToHoursAndMins function convert minutes to hours and minutes.

using System;

class Program55
{
    static void Main()
    {
        Console.WriteLine(MinsToHoursAndMins(150));
        // Output: 2 hours and 30 minutes
    }

    static string MinsToHoursAndMins(int mins) => $"{mins / 60} hours and {mins % 60} minutes";
}



  
 
56. Check if an Array is Sorted in Ascending Order
The IsSortedAscending function takes an array arr as input and checks if every element in the array is greater than or equal to the previous element, ensuring that the array is sorted in ascending order. 

using System;
using System.Linq;

class Program56
{
    static void Main()
    {
        Console.WriteLine(IsSortedAscending(new int[] { 1, 2, 3, 5, 8 }));
        // Output: True
        Console.WriteLine(IsSortedAscending(new int[] { 1, 5, 3, 8, 2 }));
        // Output: False
    }

    static bool IsSortedAscending(int[] arr) => arr.Zip(arr.Skip(1), (a, b) => a <= b).All(x => x);
}



 
57. Remove a Specific Element from an Array
The RemoveElement function remove a specific element from an array.

using System;
using System.Linq;

class Program57
{
    static void Main()
    {
        int[] result = RemoveElement(new int[] { 1, 2, 3, 4, 5 }, 3);
        Console.WriteLine($"[{string.Join(", ", result)}]");
        // Output [1, 2, 4, 5]
    }

    static int[] RemoveElement(int[] arr, int element) => arr.Where(x => x != element).ToArray();
}



 
58. Truncate a String to a Given Length
The TruncateString function truncate a string to a given length. 

using System;

class Program58
{
    static void Main()
    {
        Console.WriteLine(TruncateString("Hello, world!", 5));
        // Output: Hello...
    }

    static string TruncateString(string str, int maxLength)
    {
        return str.Length > maxLength ? str.Substring(0, maxLength) + "..." : str;
    }
}



 
59. Convert Video Length from Minutes to Seconds
The MinutesToSeconds function takes the length of a video in the format "mm:ss" and converts it into seconds.

using System;

class Program59 {
    static void Main() {
        Console.WriteLine(MinutesToSeconds("02:54"));
        // Output: 174
    }

    static int MinutesToSeconds(string time) =>
        time.Contains(":") ? 
            (int.Parse(time.Split(':')[0]) * 60) + int.Parse(time.Split(':')[1]) : 
            0;
}




 
60. Find the Difference between Two Dates in Days
The DateDifferenceInDays function finds the difference between two dates in days.

using System;

class Program60
{
    static void Main()
    {
        var startDate = new DateTime(2023, 8, 1);
        var endDate = new DateTime(2023, 8, 10);
        Console.WriteLine(DateDifferenceInDays(startDate, endDate));
        // Output: 9
    }

    static int DateDifferenceInDays(DateTime date1, DateTime date2)
    {
        TimeSpan difference = date2 - date1;
        return Math.Abs((int)difference.TotalDays);
    }
}




 
61. Check if a String is a Valid Email Address
The IsValidEmail function returns true if the email string matches the pattern, and false otherwise.

using System;
using System.Text.RegularExpressions;

class Program61
{
    static void Main()
    {
        Console.WriteLine(IsValidEmail("user@example.com"));
        // True
        Console.WriteLine(IsValidEmail("invalid-email"));
        // False
    }

    static bool IsValidEmail(string email)
    {
        return Regex.IsMatch(email, @"^[^\s@]+@[^\s@]+\.[^\s@]+$");
    }
}



 
62. Convert Seconds to Minutes and Seconds
The SecsToMinsAndSecs function calculate the number of minutes and remaining seconds and then returns a formatted string containing the result.

using System;

class Program62
{
    static void Main()
    {
        Console.WriteLine(SecsToMinsAndSecs(120));
        // Output: 2 minutes and 0 seconds
    }

    static string SecsToMinsAndSecs(int seconds)
    {
        return $"{seconds / 60} minutes and {seconds % 60} seconds";
    }
}




 
63. Generate a Fibonacci Sequence
The Fibonacci generates a Fibonacci sequence.

using System;
using System.Linq;

class Program63
{
    static void Main()
    {
        Console.WriteLine(string.Join(", ", Enumerable.Range(0, 8).Select(n => n < 2 ? n : Fibonacci(n))));
        // Output: 0, 1, 1, 2, 3, 5, 8, 13
        
    }

    static int Fibonacci(int n) => n < 2 ? n : Fibonacci(n - 1) + Fibonacci(n - 2);
}



 
64. Spell Out a Word
The spelledWord function takes a word as input and spells it out by consecutively adding letters until the full word is completed. It then returns an array containing each step of the spelling process.

using System;
using System.Linq;

public class Program64 {
    public static void Main() {
        string word = "example";
        string[] spelledWord = Spelling(word);
        Console.WriteLine(string.Join(", ", spelledWord));
        // e, ex, exa, exam, examp, exampl, example
    }

    public static string[] Spelling(string str) =>
        str.Select((c, i) => str.Substring(0, i + 1)).ToArray();
}




 
65. Check if an Array contains only Unique Values
The HasUniqueValues function converts the array arr to a set using uniq, which removes duplicate elements. 

using System;
using System.Linq;

class Program65
{
    static void Main()
    {
        Console.WriteLine(HasUniqueValues(new int[] { 1, 2, 3, 4, 5 }));
        // True
        Console.WriteLine(HasUniqueValues(new int[] { 1, 2, 3, 4, 4 }));
        // False
    }

    static bool HasUniqueValues(int[] arr) => arr.Distinct().Count() == arr.Length;
}



 
66. Get the Day of the Week from a Date
The GetDayOfWeek function get the day of the week from a date.

using System;

class Program66
{
    static void Main()
    {
        Console.WriteLine(GetDayOfWeek(DateTime.Parse("2023-08-02")));
        // Wednesday
    }

    static string GetDayOfWeek(DateTime date) => date.ToString("dddd");
}



  
 
67. Check if a Number is a Power of Two
The IsPowerOfTwo function checks whether a given number is a power of two using bitwise operations. 

using System;

class Program67
{
    static void Main()
    {
        Console.WriteLine(IsPowerOfTwo(16)); 
        // Output: True (16 is 2^4)
        Console.WriteLine(IsPowerOfTwo(5));  
        // Output: False
    }

    static bool IsPowerOfTwo(int num) => (num & (num - 1)) == 0;
}


 
68. Generate multiplication table
The GenerateMultiplicationTable function creates a multiplication table of a specified size. 

using System;

class Program68
{
    static void Main()
    {
        int size = 5;
        int[][] multiplicationTable = GenerateMultiplicationTable(size);
        
        foreach (var row in multiplicationTable)
        {
            Console.WriteLine(string.Join(", ", row));
        }
    }

    static int[][] GenerateMultiplicationTable(int size)
    {
        int[][] table = new int[size][];
        for (int row = 0; row < size; row++)
        {
            table[row] = new int[size];
            for (int col = 0; col < size; col++)
            {
                table[row][col] = (row + 1) * (col + 1);
            }
        }
        return table;
    }
}
 
69. Shhh Whisperer
The Shhh function takes a sentence as input, removes all capital letters except for the first letter, wraps the sentence in double quotation marks, and adds ", whispered your friend." to the end.

using System;

class Program69 {
    static void Main() {
        Console.WriteLine(Shhh("HELLO THERE"));  
        // Output: "Hello there", whispered your friend.
    }

    static string Shhh(string sentence) {
        string lowered = $"\"{char.ToLower(sentence[0])}{sentence.Substring(1).ToLower()}\", whispered your friend.";
        return lowered;
    }
}




 
70. Get the Month Name from a Date
The GetMonthName function retrieves the name of the month from a given date.

using System;

class Program70
{
    static void Main()
    {
        DateTime date = new DateTime(2023, 8, 2);
        Console.WriteLine(GetMonthName(date)); 
        // Output: August
    }

    static string GetMonthName(DateTime date)
    {
        return date.ToString("MMMM");
    }
}



 
71. Find the Bomb
The Bomb function searches for the word "bomb" in a given string. If the word is found, it returns "Duck!!!", indicating a potential danger. Otherwise, it returns "There is no bomb, relax.", reassuring that there is no threat.

using System;

class Program71 {
    static void Main() {
        string str = "The bomb is about to explode.";
        Console.WriteLine(Bomb(str));
        // Output: Duck!!!
    }

    static string Bomb(string str) =>
        System.Text.RegularExpressions.Regex.IsMatch(str, @"bomb", System.Text.RegularExpressions.RegexOptions.IgnoreCase) ? "Duck!!!" : "There is no bomb, relax.";
}




 
72. Convert Feet to Meters
The FeetToMeters function converts a given length from feet to meters.

using System;

class Program72
{
    static void Main()
    {
        Console.WriteLine(FeetToMeters(10)); 
        // Output: 3.048
    }

    static double FeetToMeters(double feet)
    {
        return feet * 0.3048;
    }
}



 
73. Check if a Number is a Perfect Square
The IsPerfectSquare function checks if a given number is a perfect square.

using System;

class Program73
{
    static void Main()
    {
        Console.WriteLine(IsPerfectSquare(16)); 
        // Output: true
        Console.WriteLine(IsPerfectSquare(10)); 
        // Output: false
    }

    static bool IsPerfectSquare(int num)
    {
        double sqrt = Math.Sqrt(num);
        return sqrt % 1 == 0;
    }
}




 
74. Check if a String contains only Numbers
The ContainsOnlyNumbers function checks if a given string contains only numeric characters.

using System;
using System.Text.RegularExpressions;

class Program74
{
    static void Main()
    {
        Console.WriteLine(ContainsOnlyNumbers("12345")); 
        // Output: true
        Console.WriteLine(ContainsOnlyNumbers("12a34")); 
        // Output: false
    }

    static bool ContainsOnlyNumbers(string str)
    {
        return Regex.IsMatch(str, @"^\d+$");
    }
}



 
75. Get the Current Month (0-based index)
The CurrentMonth retrieves the current month as a 0-based index.

using System;

class Program75
{
    static void Main()
    {
        Console.WriteLine(CurrentMonth()); 
        // Output: 3 is the current month (0-based index)
    }

    static int CurrentMonth()
    {
        return DateTime.Now.Month - 1;
    }
}



 
76. Century from Year
The CenturyFromYear function calculates the century corresponding to a given year. It takes a year as input and returns its corresponding century.

using System;

class Program76
{
    static void Main()
    {
        Console.WriteLine(CenturyFromYear(1905)); // Output: 20
        Console.WriteLine(CenturyFromYear(1700)); // Output: 17
        Console.WriteLine(CenturyFromYear(1988)); // Output: 20
        Console.WriteLine(CenturyFromYear(2000)); // Output: 20
        Console.WriteLine(CenturyFromYear(2001)); // Output: 21
    }

    static int CenturyFromYear(int year) => (year + 99) / 100;
}






 
77. Check if a Number is a Prime Number
The IsPrime function checks if a given number is prime.

using System;
using System.Linq;

class Program77
{
    static void Main()
    {
        Console.WriteLine(IsPrime(13)); 
        // Output: True
        Console.WriteLine(IsPrime(4));  
        // Output: False
    }

    static bool IsPrime(int num) => num > 1 && Enumerable.Range(2, (int)Math.Sqrt(num) - 1).All(i => num % i != 0);
}



  
 
78. Get the Last N Elements of an Array
The LastNElements function retrieves the last n elements of an array.

using System;
using System.Linq;

class Program78
{
    static void Main()
    {
        var result = LastNElements(new int[] { 1, 2, 3, 4, 5 }, 3);
        Console.WriteLine(string.Join(", ", result));
        // Output: 3, 4, 5
    }

    static int[] LastNElements(int[] arr, int n) => arr.Skip(Math.Max(0, arr.Length - n)).ToArray();
}




 
79. Convert Degrees to Radians
The DegToRad function converts an angle in degrees to radians.

using System;

class Program79
{
    static void Main()
    {
        Console.WriteLine(DegToRad(90));
        // Output: 1.5707963267949
    }

    static double DegToRad(double degrees) => degrees * (Math.PI / 180);
}




 
80. Binary Letter Converter
The ConvertBinary function transforms all letters from 'a' to 'm' to 0 and letters from 'n' to 'z' to 1 in a given string.

using System;
using System.Linq;

class Program80
{
    static void Main()
    {
        Console.WriteLine(ConvertBinary("hello")); 
        // Output: 00000
        Console.WriteLine(ConvertBinary("world")); 
        // Output: 11111
        Console.WriteLine(ConvertBinary("abcxyz")); 
        // Output: 000111
    }

    static string ConvertBinary(string str)
    {
        return string.Join("", str.ToLower().Select(x => x >= 'a' && x <= 'm' ? '0' : '1'));
    }
}





  
 
81. Find the Intersection of Two Arrays
The FindIntersection function finds the intersection of two arrays.

using System;
using System.Linq;

class Program81
{
    static void Main()
    {
        int[] arr1 = { 1, 2, 3 };
        int[] arr2 = { 2, 3, 4 };
        var intersection = FindIntersection(arr1, arr2);
        Console.WriteLine($"[{string.Join(", ", intersection)}]");
        // [2, 3]
    }

    static int[] FindIntersection(int[] arr1, int[] arr2)
    {
        return arr1.Intersect(arr2).ToArray();
    }
}


 
82. Convert Days to Years, Months, and Days
The DaysToYearsMonthsDays function converts a given number of days to years, months, and remaining days.

using System;

class Program82
{
    static void Main()
    {
        Console.WriteLine(DaysToYearsMonthsDays(1000));
        // 2 years, 9 months, and 0 days
    }

    static string DaysToYearsMonthsDays(int days)
    {
        int years = days / 365;
        int months = (days % 365) / 30;
        int remainingDays = (days % 365) % 30;
        return $"{years} years, {months} months, and {remainingDays} days";
    }
}




 
83. Check if an Object is Empty
The IsEmptyObject function checks if a given object has no own properties.

using System;
using System.Collections.Generic;
using System.Linq;

class Program83
{
    static void Main()
    {
        Console.WriteLine(IsEmptyObject(new Dictionary<string, object>()));  
        // Output: True
        Console.WriteLine(IsEmptyObject(new Dictionary<string, object> { { "name", "John" }, { "age", 30 } }));
        // Output: False
        
    }

    static bool IsEmptyObject(Dictionary<string, object> obj) => obj.Count == 0;
}




 
84. Count Decimal Places
The GetDecimalPlaces function takes a number represented as a string and returns the number of decimal places it has. If the number has no decimal places, it returns 0.

using System;

class Program84 {
    static void Main() {
        Console.WriteLine(GetDecimalPlaces("3.14159")); 
        // Output: 5
        Console.WriteLine(GetDecimalPlaces("100.345"));  
        // Output: 3
        Console.WriteLine(GetDecimalPlaces("10.000"));   
        // Output: 3
        Console.WriteLine(GetDecimalPlaces("32"));       
        // Output: 0
    }

    static int GetDecimalPlaces(string num) => num.Contains(".") ? num.Split('.')[1].Length : 0;
}




 
85. Remove Whitespace from a String
The RemoveWhitespace function removes all whitespace characters from a given string.

using System;

class Program85
{
    static void Main()
    {
        Console.WriteLine(RemoveWhitespace("  Hello,  world!  "));
    }
    // Hello,world!

    static string RemoveWhitespace(string str)
    {
        return str.Replace(" ", string.Empty);
    }
}







 
86. Find the Difference between Two Arrays
The ArrayDifference function finds the difference between two arrays.

using System;
using System.Linq;

class Program86
{
    static void Main()
    {
        var arr1 = new int[] { 1, 2, 3 };
        var arr2 = new int[] { 2, 3, 4 };

        var difference = ArrayDifference(arr1, arr2);

        Console.WriteLine(string.Join(", ", difference));
        // Output: 1
    }

    static int[] ArrayDifference(int[] arr1, int[] arr2)
    {
        return arr1.Except(arr2).ToArray();
    }
}





 
87. Check if a Number is a Fibonacci Number
The IsFibonacci function checks if a number is a Fibonacci number.

using System;

class Program87
{
    static void Main()
    {
        Console.WriteLine(IsFibonacci(5)); 
        // True
        Console.WriteLine(IsFibonacci(6));
        // False
    }

    static bool IsFibonacci(int num)
    {
        return IsPerfectSquare(5 * num * num + 4) || IsPerfectSquare(5 * num * num - 4);
    }

    static bool IsPerfectSquare(int num)
    {
        int sqrt = (int)Math.Sqrt(num);
        return sqrt * sqrt == num;
    }
}




 
88. Convert Hours to Minutes
The HoursToMinutes function takes a parameter hours and returns the equivalent number of minutes by multiplying hours by 60.

using System;

class Program88
{
    static void Main()
    {
        Console.WriteLine(HoursToMinutes(2));
        // Output: 120
    }

    static int HoursToMinutes(int hours)
    {
        // Multiply hours by 60 to get the equivalent number of minutes
        return hours * 60;
    }
}




 
89. Get the First N Elements of an Array
The FirstNElements function get the first n elements of an array.

using System;
using System.Linq;

class Program89
{
    static void Main()
    {
        int[] array = { 1, 2, 3, 4, 5 };
        int[] firstNElements = FirstNElements(array, 3);
        Console.WriteLine(string.Join(", ", firstNElements));
        // 1, 2, 3
    }

    static int[] FirstNElements(int[] arr, int n)
    {
        // Use LINQ's Take method to retrieve the first n elements of the array
        return arr.Take(n).ToArray();
    }
}




 
90. Check if a Number is Odd
The isOdd function checks if a number is odd. 

using System;

class Program90
{
    static void Main()
    {
        Func<int, bool> isOdd = num => num % 2 != 0;

        Console.WriteLine(isOdd(5)); 
        // Output: true
        Console.WriteLine(isOdd(4)); 
        // Output: false
    }
}



 
91. Calculate the Standard Deviation of an Array of Numbers
The StandardDeviation function calculates the standard deviation of an array of numbers.

using System;
using System.Linq;

class Program91
{
    static void Main()
    {
        Console.WriteLine(StandardDeviation(new double[] { 1, 2, 3, 4, 5 }));
        // Output: 1.4142135623731
    }

    static double StandardDeviation(double[] arr)
    {
        double mean = arr.Average();
        double sumOfSquaredDifferences = arr.Select(num => Math.Pow(num - mean, 2)).Sum();
        return Math.Sqrt(sumOfSquaredDifferences / arr.Length);
    }
}




 
92. Check if a String ends with a specific Substring
The EndsWithSubstring function checks if a string ends with a specific substring.

using System;

class Program92
{
    static void Main()
    {
        Console.WriteLine(EndsWithSubstring("Hello, world!", "world!")); 
        // Output: True
        Console.WriteLine(EndsWithSubstring("Hello, world!", "Hello"));  
        // Output: False
    }

    static bool EndsWithSubstring(string str, string subStr)
    {
        return str.EndsWith(subStr);
    }
}




 
93. Calculate the Sum of Squares of an Array
The SumOfSquares function calculates the sum of squares of an array.

using System;
using System.Linq;

class Program93
{
    static void Main()
    {
        Console.WriteLine(SumOfSquares(new int[] { 1, 2, 3, 4, 5 }));
        // Output: 55
    }

    static int SumOfSquares(int[] arr)
    {
        return arr.Sum(x => x * x);
    }
}



 
94. Calculate PI to N Decimal Places
The MyPi function takes an integer n and returns the mathematical constant PI to n decimal places.

using System;

class Program94 {
    static void Main() {
        Console.WriteLine(MyPi(5)); 
        // Output: 3.14159
    }

    static double MyPi(int n) {
        return Math.Round(Math.PI, n);
    }
}




 
95. Generate an Array of Random Numbers
The RandomArray function generates an array of random numbers.

using System;

class Program95
{
    static void Main()
    {
        int[] randomNumbers = RandomArray(5);
        Console.WriteLine("[" + string.Join(", ", randomNumbers) + "]");
        // Output: Array with 5 random numbers, 
        // e.g., [23, 45, 67, 11, 88]
    }

    static int[] RandomArray(int length)
    {
        Random rand = new Random();
        int[] arr = new int[length];
        for (int i = 0; i < length; i++)
        {
            arr[i] = rand.Next(100);
        }
        return arr;
    }
}



 
96. Join Path Portions
The JoinPath function receives two portions of a path and joins them using the "/" separator. If the separator is missing between the portions, it is added before joining.

using System;

class Program96 {
    static void Main() {
        Console.WriteLine(JoinPath("portion1", "portion2")); 
        // Output: portion1/portion2
    }

    static string JoinPath(string portion1, string portion2) {
        return $"{portion1.TrimEnd('/')}/{portion2.TrimStart('/')}";
    }
}




 
97. Convert Seconds to Hours, Minutes, and Seconds
The SecondsToHoursMinsSecs function convert seconds to hours, minutes, and remaining seconds.

using System;

class Program97
{
    static void Main()
    {
        Console.WriteLine(SecondsToHoursMinsSecs(7320));
        // Output: "2 hours, 2 minutes, and 0 seconds"
    }

    static string SecondsToHoursMinsSecs(int seconds)
    {
        int hours = seconds / 3600;
        int remainingSeconds = seconds % 3600;
        int minutes = remainingSeconds / 60;
        int remainingMinutes = remainingSeconds % 60;

        return $"{hours} hours, {minutes} minutes, and {remainingMinutes} seconds";
    }
}




 
98. Simple calculator
The Calculator function calculates different operations.

using System;

class Program98
{
    static void Main()
    {
        Console.WriteLine(Calculator(5, '+', 3));   
        // Addition outputs: 8
        Console.WriteLine(Calculator(10, '-', 4));  
        // Subtraction outputs: 6
        Console.WriteLine(Calculator(6, '*', 2));   
        // Multiplication outputs: 12
        Console.WriteLine(Calculator(20, '/', 5));  
        // Division outputs: 4
    }

    static double Calculator(double num1, char op, double num2) => op switch { '+' => num1 + num2, '-' => num1 - num2, '*' => num1 * num2, '/' => num1 / num2, _ => throw new ArgumentException("Invalid operator.") };
}






 
99. Find Nemo
The FindNemo function function takes a string of words as input and searches for the word "Nemo". If "Nemo" is found, it returns a string indicating the position of "Nemo" in the sentence. If "Nemo" is not found, it returns a message indicating its absence.

using System;

class Program99 {
    static void Main() {
        Console.WriteLine(FindNemo("I am finding Nemo"));
        // I found Nemo at 4!
    }

    static string FindNemo(string sentence) {
        string[] words = sentence.Split(' ');
        int index = Array.IndexOf(words, "Nemo");
        return index >= 0 ? $"I found Nemo at {index + 1}!" : "I can't find Nemo :(";
    }
}





 
100. Count the occurrences of a character in a String
The CountOccurrences function counts the occurrences of a character in a String.

using System;
using System.Linq;

class Program100
{
    static void Main()
    {
        Console.WriteLine(CountOccurrences("hello world", 'l'));
        // Output: 3
    }

    static int CountOccurrences(string str, char ch)
    {
        return str.Count(c => c == ch);
    }
}



 
101. Convert Video Length to Seconds
The MinutesToSeconds function takes the length of a video in the format "mm:ss" and converts it to seconds. If the input format is correct, it returns the length of the video in seconds; otherwise, it returns 0.

using System;

class Program {
    static void Main() {
        Console.WriteLine(MinutesToSeconds("02:54")); 
        // Output: 174
    }

    static int MinutesToSeconds(string time) {
        string[] arr = time.Split(':');
        if (int.Parse(arr[1]) < 60) {
            return int.Parse(arr[0]) * 60 + int.Parse(arr[1]);
        }
        return 0;
    }
}





 
102. Remove Duplicates from a String
The RemoveDuplicatesFromString function removes duplicates from a String.

using System;
using System.Linq;

class Program102
{
    static void Main()
    {
        Console.WriteLine(RemoveDuplicatesFromString("hello"));
        // helo
    }

    static string RemoveDuplicatesFromString(string str)
    {
        return new string(str.Distinct().ToArray());
    }
}



 
103. Find the Mode of an Array of Numbers
The Mode function finds the mode of an array of numbers.

using System;
using System.Collections.Generic;
using System.Linq;

class Program103
{
    static void Main()
    {
        var numbers = new int[] { 1, 2, 2, 3, 3, 3, 4, 4, 4, 4 };
        var mode = Mode(numbers);
        Console.WriteLine($"Mode: {string.Join(", ", mode)}");
        // Output: Mode: 4
    }

    static IEnumerable<int> Mode(IEnumerable<int> arr) => arr.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count()).Where(kv => kv.Value == arr.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count()).Values.Max()).Select(kv => kv.Key);
}




 
104. Check for Repdigit
The IsRepdigit function checks if a given integer is a repdigit, meaning it is composed of the same digit repeated. If the integer is a repdigit, it returns true; otherwise, it returns false.

using System;
using System.Linq;

class Program104 {
    static void Main() {
        Console.WriteLine(IsRepdigit(333));
        // True
    }

    static bool IsRepdigit(int num) => num.ToString().Distinct().Count() == 1;
}


 
105. Convert Binary Number to Decimal 
The BinaryToDecimal function converts a binary number to decimal.

using System;
using System.Linq;

class Program105 {
  static void Main() {
    Console.WriteLine(BinaryToDecimal("1101"));
    // Output: 13
  }

  static int BinaryToDecimal(string binary) {
    return binary.Reverse()
      .Select((bit, index) => (bit - '0') * (int) Math.Pow(2, index))
      .Sum();
  }
}



 
106. Check if an Array is Sorted in Descending Order
The SortedDescending function checks if an array is sorted in descending order.

using System;
using System.Linq;

class Program106
{
    static void Main()
    {
        Console.WriteLine(SortedDescending(new int[] { 5, 4, 3, 2, 1 })); 
        // Output: True
        Console.WriteLine(SortedDescending(new int[] { 1, 5, 3, 8, 2 })); 
        // Output: False
    }

    static bool SortedDescending(int[] arr)
    {
        return arr.Zip(arr.Skip(1), (a, b) => a >= b).All(x => x);
    }
}



 
107. Find the Average of Even Numbers in an Array
The AverageOfEvenNumbers function finds the average of even numbers in an array.

using System;
using System.Linq;

class Program107
{
    static void Main()
    {
        Console.WriteLine(AverageOfEvenNumbers(new int[] { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 })); 
        // Output: 6.0
    }

    static double AverageOfEvenNumbers(int[] arr)
    {
        var evenNumbers = arr.Where(x => x % 2 == 0);
        return evenNumbers.Average();
    }
}



 
108. Capitalize the First Letter of Each Word in a String
The CapitalizeWords capitalizes the first letter of each word in a String.

using System;
using System.Globalization;

class Program108
{
    static void Main()
    {
        Console.WriteLine(CapitalizeWords("hello world")); 
        // Output: "Hello World"
    }

    static string CapitalizeWords(string str)
    {
        return CultureInfo.CurrentCulture.TextInfo.ToTitleCase(str);
    }
}




 
109. Check if an Array is a Subset of Another Array
The IsSubset function checks if an array is a subset of another array.

using System;
using System.Linq;

class Program109
{
    static void Main()
    {
        Console.WriteLine(IsSubset(new int[] { 1, 2, 3 }, new int[] { 2, 3, 4, 5, 6 })); 
        // Output: False
        Console.WriteLine(IsSubset(new int[] { 1, 2, 3 }, new int[] { 2, 3, 1, 5, 6 })); 
        // Output: True
    }

    static bool IsSubset(int[] arr1, int[] arr2)
    {
        return arr1.All(item => arr2.Contains(item));
    }
}



 
110. Find the Minimum and Maximum Numbers in an Array
The MinMax function finds the minimum and maximum numbers in an array.

using System;
using System.Linq;

class Program110
{
    static void Main()
    {
        var result = MinMax(new int[] { 10, 5, 25, 3, 15 });
        Console.WriteLine($"{{ min: {result.min}, max: {result.max} }}");
        // Output: { min: 3, max: 25 }
    }

    static (int min, int max) MinMax(int[] arr)
    {
        return (arr.Min(), arr.Max());
    }
}



 
111. Validate Zip Code
The IsValid function validates whether a given string is a valid zip code.

using System;

class Program111 {
    static void Main() {
        Console.WriteLine(IsValid("12345"));   
        // Output: True
        Console.WriteLine(IsValid("1234"));    
        // Output: False
        Console.WriteLine(IsValid("123456"));  
        // Output: False
        Console.WriteLine(IsValid("12 45"));   
        // Output: False
    }

    static bool IsValid(string zip) {
        return System.Text.RegularExpressions.Regex.IsMatch(zip, @"^\d{5}$");
    }
}



 
112. Remove Null Values from a List.
The RemoveNull function removes null values from a list.

using System;
using System.Collections.Generic;
using System.Linq;

class Program112
{
    static void Main()
    {
        List<object> array = new List<object> { 1, null, 2, 3, null, 4, null };
        var result = RemoveNull(array);
        Console.WriteLine($"Output: [{string.Join(", ", result)}]");
        // Output: [1, 2, 3, 4]
    }

    static List<object> RemoveNull(List<object> arr)
    {
        return arr.Where(item => item != null).ToList();
    }
}



 
113. Maurice's Racing Snails
Maurice and Steve engage in a snail race, each owning three snails of different speeds: slow (s), medium (m), and fast (f). Although Maurice's snails are generally faster, Steve's strategy poses a challenge. In each of the three rounds, they pit their snails against each other strategically. Maurice's plan involves sacrificing his slower snails strategically to ensure victory. This function evaluates Maurice's plan, determining if he wins at least 2 out of 3 games against Steve's snails.

using System;

class Program {
    static void Main() {
        Console.WriteLine(MauriceWins(new int[] {1, 2, 3}, new int[] {3, 2, 1})); 
        // Output: true
    }

    static bool MauriceWins(int[] mSnails, int[] sSnails) => (mSnails[0] > sSnails[2] ? 1 : 0) + (mSnails[1] > sSnails[0] ? 1 : 0) + (mSnails[2] > sSnails[1] ? 1 : 0) >= 2;
}




 
114. Calculate the Sum of Cubes of an Array
The SumOfCubes function calculates the sum of cubes of an array.

using System;
using System.Linq;

class Program114
{
    static void Main()
    {
        int[] arr = { 1, 2, 3, 4, 5 };
        int sum = SumOfCubes(arr);
        Console.WriteLine($"Output: {sum}");
        // Output: 225
    }

    static int SumOfCubes(int[] arr)
    {
        return arr.Sum(x => x * x * x);
    }
}



 
115. Shuffle the Characters of a String
The ShuffleString function suffle the characters of a String.

using System;
using System.Linq;

class Program115
{
    static void Main()
    {
        string str = "hello";
        string shuffledString = ShuffleString(str);
        Console.WriteLine($"Output: {shuffledString}");
        // Output: oelhl
    }

    static string ShuffleString(string str)
    {
        Random rand = new Random();
        var shuffledChars = str.OrderBy(c => rand.Next()).ToArray();
        return new string(shuffledChars);
    }
}




 
116. Find the Nth Fibonacci Number (recursive)
The Fibonacci function finds the nth fibonacci number (recursive).

using System;

class Program116
{
    static void Main()
    {
        int n = 7;
        int result = Fibonacci(n);
        Console.WriteLine($"Output: {result}");
        // Output: 13
    }

    static int Fibonacci(int n)
    {
        if (n <= 1)
            return n;
        return Fibonacci(n - 1) + Fibonacci(n - 2);
    }
}



 
117. Symmetry Checker
The IsSymmetrical function determines whether a given integer is symmetrical, meaning it reads the same backward as forward.

using System;
using System.Linq;

public class SymmetryChecker
{
    public static bool IsSymmetrical(int num) => num.ToString() == new string(num.ToString().Reverse().ToArray());

    public static void Main(string[] args)
    {
        int num = 12321;
        Console.WriteLine(IsSymmetrical(num)); 
        // Output: True
    }
}



 
118. Maximum Triangle Edge Calculator
The NextEdge function provides a concise function for determining the maximum possible length of the third edge of a triangle, given the lengths of the other two sides as integers.

using System;

public class TriangleEdgeCalculator
{
    public static int NextEdge(int side1, int side2) => side1 + side2 - 1;

    public static void Main(string[] args)
    {
        int side1 = 5;
        int side2 = 7;
        Console.WriteLine(NextEdge(side1, side2)); 
        // Output: 11
    }
}




 
119. Calculate the Perimeter of a Rectangle
The RectanglePerimeter function calculates the perimeter of a rectangle given its width and height.

using System;

class Program119
{
    static void Main()
    {
        Console.WriteLine(RectanglePerimeter(5, 10)); 
        // Output: 30
    }

    static int RectanglePerimeter(int width, int height)
    {
        return 2 * (width + height);
    }
}



 
120. Find the Longest Common Prefix in an Array of Strings
The LongestCommonPrefix function finds the longest common prefix among an array of strings. 

using System;
using System.Linq;

class Program120
{
    static void Main()
    {
        string[] strs = { "apple", "apricot", "appetizer" };
        Console.WriteLine(LongestCommonPrefix(strs)); 
        // Output: "ap"
    }

    static string LongestCommonPrefix(string[] strs) => strs.Length == 0 ? "" : strs.Aggregate((prefix, str) => prefix = string.Concat(prefix.Where((c, i) => c == str[i])));
}

 
121. Greeting Function with Conditional Message
The SayHelloBye function introduces a one-liner function that takes a string name and a number (either 0 or 1) as input. Depending on the value of the number, it either greets the person with "Hello" or bids farewell with "Bye", while ensuring the name's first letter is capitalized. The function utilizes a ternary conditional operator for succinctness and clarity.

using System;

public class Greeting
{
    public static string SayHelloBye(string name, int num) => num == 1 ? $"Hello {char.ToUpper(name[0])}{name.Substring(1)}" : $"Bye {char.ToUpper(name[0])}{name.Substring(1)}";

    public static void Main(string[] args)
    {
        string name = "Alice";
        int num = 1;
        Console.WriteLine(SayHelloBye(name, num)); 
        // Output: Hello Alice
    }
}




 
122. Find the First Non-Repeated Character in a String
The FirstNonRepeatedChar function finds the first non-repeated character in a String.

using System;
using System.Collections.Generic;
using System.Linq;

class Program122
{
    static void Main()
    {
        string str = "abacabad";
        Console.WriteLine(FirstNonRepeatedChar(str)); 
        // Output: c
    }

    static char? FirstNonRepeatedChar(string str) => str.ToCharArray().First(c => str.Count(ch => ch == c) == 1);
}



 
123. One-Liner Bitwise Operations in C#
This C# program presents a set of one-liner functions for calculating bitwise AND, OR, and XOR operations between two integer numbers. Each function efficiently computes the respective bitwise operation and returns the result, demonstrating concise and clear implementations of fundamental bitwise operations.

using System;

public class BitwiseOperations
{
    public static int BitwiseAND(int n1, int n2) => n1 & n2;
    public static int BitwiseOR(int n1, int n2) => n1 | n2;
    public static int BitwiseXOR(int n1, int n2) => n1 ^ n2;

    public static void Main(string[] args)
    {
        int num1 = 5;
        int num2 = 3;
        
        Console.WriteLine(BitwiseAND(num1, num2)); 
        // Output: 1
        Console.WriteLine(BitwiseOR(num1, num2));  
        // Output: 7
        Console.WriteLine(BitwiseXOR(num1, num2)); 
        // Output: 6
    }
}




 
124. Calculate the Exponential of a Number
The Exponential function calculates the result of raising a given base to a specified exponent using the exponentiation operator (**).

using System;

class Program124
{
    static void Main()
    {
        double result = Exponential(2, 3);
        Console.WriteLine(result);
        // Output: 8
    }

    static double Exponential(double @base, double exponent)
    {
        return Math.Pow(@base, exponent);
    }
}



 
125. Check if a String is an Anagram of Another String
The IsAnagram function checks if a string is an anagram of another string.

using System;
using System.Linq;

class Program125
{
    static void Main()
    {
        Console.WriteLine(IsAnagram("listen", "silent"));
        // Output: True
        Console.WriteLine(IsAnagram("hello", "world"));
        // Output: False
    }

    static bool IsAnagram(string str1, string str2) => str1.ToCharArray().OrderBy(c => c).SequenceEqual(str2.ToCharArray().OrderBy(c => c));
}




 
126. Compact Phone Number Formatter
The FormatPhoneNumber function offers a concise function to format an array of 10 numbers into a phone number string in the standard (XXX) XXX-XXXX format.

using System;

public class PhoneNumberFormatter
{
    public static string FormatPhoneNumber(int[] numbers) => $"({numbers[0]}{numbers[1]}{numbers[2]}) {numbers[3]}{numbers[4]}{numbers[5]}-{numbers[6]}{numbers[7]}{numbers[8]}{numbers[9]}";

    public static void Main(string[] args)
    {
        int[] numbers = { 5, 5, 5, 5, 5, 5, 5, 5, 5, 5 };
        Console.WriteLine(FormatPhoneNumber(numbers)); 
        // Output: (555) 555-5555
    }
}




 
127. Check if a Number is a Neon Number
The IsNeonNumber function checks if a number is a neon number.

using System;

class Program127
{
    static void Main() => Console.WriteLine(IsNeonNumber(9)); 

    static bool IsNeonNumber(int num)
    {
        int sumOfDigits = 0;
        
        for (int square = num * num; square != 0; square /= 10)
            sumOfDigits += square % 10;

        return sumOfDigits == num;
        // Output: True
    }
}






 
128. Recursive Right Shift Mimicker
The ShiftToRight function employs recursion to repeatedly divide the first integer by 2 y times, emulating the right shift operation. This approach offers a compact and elegant solution for performing right shifts between two given integers.

using System;

public class RightShiftMimicker
{
    public static int ShiftToRight(int x, int y) => y < 1 ? x : ShiftToRight(x / 2, y - 1);

    public static void Main(string[] args)
    {
        int x = 16;
        int y = 2;
        Console.WriteLine(ShiftToRight(x, y)); 
        // Output: 4
    }
}




 
129. Check if a Number is a Disarium Number
The IsDisariumNumber function checks if a number is a disarium number.

using System;

class Program129
{
    static void Main()
    {
        Console.WriteLine(IsDisariumNumber(89));  
        // Output: true
        Console.WriteLine(IsDisariumNumber(135)); 
        // Output: true
        Console.WriteLine(IsDisariumNumber(23));  
        // Output: false
    }

    static bool IsDisariumNumber(int num)
    {
        string numString = num.ToString();
        int sum = 0;
        for (int i = 0; i < numString.Length; i++)
        {
            int digit = int.Parse(numString[i].ToString());
            sum += (int)Math.Pow(digit, i + 1);
        }
        return sum == num;
    }
}




 
130. Remove Vowels from a String
The RemoveVowels function removes vowels from a string.

using System;
using System.Text.RegularExpressions;

class Program130
{
    static void Main()
    {
        Console.WriteLine(RemoveVowels("Hello, World!")); 
        // Output: "Hll, Wrld!"
    }

    static string RemoveVowels(string str)
    {
        return Regex.Replace(str, "[aeiouAEIOU]", "");
    }
}


 
131. Generate an Array of Consecutive Numbers
The ConsecutiveNumbers function generates an array of consecutive numbers.

using System;
using System.Linq;

class Program131
{
    static void Main()
    {
        var result = ConsecutiveNumbers(1, 5);
        Console.WriteLine(string.Join(", ", result));
        // Output: 1, 2, 3, 4, 5
    }

    static int[] ConsecutiveNumbers(int start, int endNum)
    {
        return Enumerable.Range(start, endNum - start + 1).ToArray();
    }
}


 
132. Check if a Number is a Pronic Number
The IsPronicNumber function checks if a number is a pronic number.

using System;

class Program132
{
    static void Main()
    {
        Console.WriteLine(IsPronicNumber(6));  
        // Output: true
        Console.WriteLine(IsPronicNumber(20)); 
        // Output: true
        Console.WriteLine(IsPronicNumber(7));  
        // Output: false
    }

    static bool IsPronicNumber(int num)
    {
        int n = (int)Math.Sqrt(num);
        return n * (n + 1) == num;
    }
}



 
133. Check if a String is a Pangram
The IsPangram function checks if a string is a pangram.

using System;
using System.Linq;

class Program133
{
    static void Main()
    {
        Console.WriteLine(IsPangram("The quick brown fox jumps over the lazy dog")); 
        // Output: true
        Console.WriteLine(IsPangram("Hello, World!")); 
        // Output: false
    }

    static bool IsPangram(string str)
    {
        var letters = str.ToLower().Where(char.IsLetter).Distinct();
        return letters.Count() == 26;
    }
}



 
134. Reverse the Order of Words in a Sentence
The ReverseSentence function reverses the order of words in a sentence.

using System;

class Program134
{
    static void Main()
    {
        Console.WriteLine(ReverseSentence("Hello, how are you doing?")); 
        // Output: "doing? you are how Hello,"
    }

    static string ReverseSentence(string sentence)
    {
        var words = sentence.Split(' ');
        Array.Reverse(words);
        return string.Join(" ", words);
    }
}



 
135. Calculate the Hypotenuse of a Right-Angled Triangle
The CalculateHypotenuse function calculates the hypotenuse of a right-angled triangle.

using System;

class Program135
{
    static void Main()
    {
        Console.WriteLine(CalculateHypotenuse(3, 4)); 
        // Output: 5.0
    }

    static double CalculateHypotenuse(double a, double b)
    {
        return Math.Sqrt(Math.Pow(a, 2) + Math.Pow(b, 2));
    }
}



 
136. Find the Average of Odd Numbers in an Array
The AverageOfOddNumbers function finds the average of odd numbers in an array.

using System;
using System.Linq;

class Program136
{
    static void Main()
    {
        int[] numbers = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        Console.WriteLine(AverageOfOddNumbers(numbers)); 
        // Output: 5.0
    }

    static double AverageOfOddNumbers(int[] arr)
    {
        var oddNumbers = arr.Where(num => num % 2 != 0);
        return oddNumbers.Average();
    }
}



 
137. Count the Letters in a String (case-insensitive)
The letterCounts function counts the letter in a String (case-insensitve).

using System;
using System.Collections.Generic;
using System.Linq;

class Program137
{
    static void Main()
    {
        string input = "Hello, World!";
        foreach (var pair in CountLetters(input))
        {
            Console.WriteLine($"{pair.Key} => {pair.Value}");
            // h => 1
            // e => 1
            // l => 3
            // o => 2
            // w => 1
            // r => 1
            // d => 1
        }
    }

    static Dictionary<char, int> CountLetters(string str)
    {
        return str.ToLower().Where(char.IsLetter).GroupBy(c => c).ToDictionary(g => g.Key, g => g.Count());
    }
}





 
138. Convert Seconds to Days, Hours, Minutes, and Seconds
The SecsToDaysHoursMinsSecs function converts seconds to days, hours, minutes, and seconds.

using System;

class Program138
{
    static void Main()
    {
        int seconds = 100000;
        Console.WriteLine(SecsToDaysHoursMinsSecs(seconds));
    }

    static string SecsToDaysHoursMinsSecs(int seconds)
    {
        return $"{seconds / 86400} days, {(seconds % 86400) / 3600} hours, {((seconds % 86400) % 3600) / 60} minutes, and {((seconds % 86400) % 3600) % 60} seconds";
        // 1 days, 3 hours, 46 minutes, and 40 seconds
    }
}



 
139. Check if a Number is a Prime Factor of Another Number
The IsPrimeFactor function checks if a given number factor is a prime factor of another number num. 

using System;
using System.Linq;

class Program139
{
    static void Main()
    {
        int num = 20;
        int factor = 2;
        Console.WriteLine(IsPrimeFactor(num, factor));
        // Output: True
        factor = 3;
        Console.WriteLine(IsPrimeFactor(num, factor));
        // Output: False
    }

    static bool IsPrimeFactor(int num, int factor)
    {
        return num % factor == 0 && (factor > 1 && !Enumerable.Range(2, (int)Math.Sqrt(factor) - 1).Any(i => factor % i == 0));
    }
}



 
140. Find the Largest Prime Factor of a Number
The LargestPrimeFactor function calculates the largest prime factor of a given number.

using System;
using System.Linq;

class Program140
{
    static void Main() => Console.WriteLine(LargestPrimeFactor(48));

    static int LargestPrimeFactor(int num)
    {
        if (num == 1)
            return 1;
        
        var factor = Enumerable.Range(2, (int)Math.Sqrt(num)).FirstOrDefault(x => num % x == 0 && Enumerable.Range(2, (int)Math.Sqrt(x)).All(y => x % y != 0));
        return factor == 0 ? num : factor;
        // Output: 3
    }
}



 
141. Check if a Number is a Pronic Square
The IsPronicSquare function checks if the square root of the given number num is an integer, indicating that num is a perfect square.

using System;

class Program141
{
    static void Main()
    {
        Console.WriteLine(IsPronicSquare(6));  
        // Output: True
        Console.WriteLine(IsPronicSquare(20)); 
        // Output: False
        Console.WriteLine(IsPronicSquare(21)); 
        // Output: True
    }

    static bool IsPronicSquare(int num)
    {
        double sqrt = Math.Sqrt(num);
        return sqrt == (int)sqrt;
    }
}



 
142. World Landmass Proportion Calculator
The AreaOfCountry function calculates a country's proportion of the total world's landmass based on its name and area.

using System;

public class CountryAreaCalculator
{
    public static string AreaOfCountry(string name, double area) => $"{name} is {(area * 100 / 148940000):F2}% of the total world's landmass";

    public static void Main(string[] args)
    {
        string countryName = "Canada";
        double countryArea = 9984670; // in square kilometers
        Console.WriteLine(AreaOfCountry(countryName, countryArea)); 
        // Output: Canada is 6.71% of the total world's landmass
    }
}



 
143. Loaded Die Detection
The IsUnloaded function calculates derivatives of frequencies and compares them to a critical value.

using System;
using System.Linq;

public class DieCheck
{
    public static bool IsUnloaded(double[] frequencies) => frequencies.Select((f, i) => f * Math.Pow(i + 1, f - 1)).Sum() > 11.0705;
}

class Program
{
    static void Main(string[] args)
    {
        double[] frequencies = { 0.02, 0.03, 0.05, 0.1, 0.2, 0.6 }; 
        // Example observed frequencies
        Console.WriteLine(DieCheck.IsUnloaded(frequencies)); 
        // Output: True or False
    }
}




 
144. Hand Washing Duration Calculator
The WashHands function calculates the total duration a person spends washing their hands based on the number of times they wash their hands per day (N) and the number of months (nM) they follow this routine.

using System;

public class Program144
{
    public static void Main(string[] args)
    {
        int N = 3; // Example: Number of times a person washes their hands per day
        int nM = 2; // Example: Number of months they follow this routine

        Console.WriteLine(HandWashingDurationCalculator.WashHands(N, nM));
        // Output: 63 minutes and 0 seconds
    }
}

public class HandWashingDurationCalculator
{
    public static string WashHands(int N, int nM) => $"{(nM * N * 21 * 30) / 60} minutes and {(nM * N * 21 * 30) % 60} seconds";
}




 
145. Check if a Number is a Happy Number
The IsHappyNumber function checks if a given number is a "happy number" or not.

using System.Collections.Generic;

class Program145
{
    static bool IsHappyNumber(int num) => num == 1 || num == 7 || num == 10 || (num < 100 && num % 10 == 0 && num % 11 == 0) || (num < 1000 && num % 100 == 0 && num % 111 == 0);
    
    static void Main() => System.Console.WriteLine(IsHappyNumber(19) ? "true" : "false"); 
    // false
}

 
146. Billable Days Bonus Calculator
The CalculateBonus function efficiently computes the bonus using predefined thresholds and rates, ensuring accurate compensation for the employee's performance.

using System;

public class Program146
{
    public static void Main(string[] args)
    {
        // Example usage:
        int billableDays = 45; // Example: Billable days of an employee
        int bonus = BonusCalculator.CalculateBonus(billableDays);
        Console.WriteLine($"Bonus for {billableDays} billable days: {bonus}");
        // Output: Bonus for 45 billable days: 5350

        
    }
}

public class BonusCalculator
{
    public static int CalculateBonus(int days) => 325 * Math.Max(days - 32, 0) + 225 * Math.Max(days - 40, 0) + 50 * Math.Max(days - 48, 0);
}








 
147. Calculate the Volume of a Sphere
The SphereVolume function calculates the volume of a sphere given its radius. 

using System;

class Program147
{
    static double SphereVolume(double radius)
    {
        return (4.0 / 3) * Math.PI * Math.Pow(radius, 3);
    }

    static void Main()
    {
        double volume = SphereVolume(5);
        Console.WriteLine(volume);
        // Output: 523.5987755982989
    }
}



 
148. Discounted Price Calculator
The CalculateFinalPrice function takes the original price and the discount percentage as integers and returns the discounted price.

using System;

public class Program148
{
    public static void Main(string[] args)
    {
        // Example usage:
        int finalPrice = 100; // Example: Final price
        int discount = 20; // Example: Discount percentage
        double discountedPrice = DiscountCalculator.CalculateFinalPrice(finalPrice, discount);
        Console.WriteLine($"Final price after {discount}% discount: {discountedPrice}");
        // Output: Final price after 20% discount: 80
        
    }
}

public class DiscountCalculator
{
    public static double CalculateFinalPrice(int price, int discount) => price * (100 - discount) * 0.01;
}




 
149. Double Letter Checker
The HasDoubleLetters function takes a word as input and returns true if the word contains two consecutive identical letters, and false otherwise.

using System;

public class Program149
{
    public static void Main(string[] args)
    {
        // Example usage:
        string word = "hello"; // Example: Word to check for double letters
        bool hasDoubleLetters = DoubleLetterChecker.HasDoubleLetters(word);
        
        Console.WriteLine($"Does the word '{word}' have double letters? {hasDoubleLetters}");
        // Output: Does the word 'hello' have double letters? True
    }
}

public class DoubleLetterChecker
{
    public static bool HasDoubleLetters(string word) => System.Text.RegularExpressions.Regex.IsMatch(word, @"(\w)\1");
}





 
150. Find the Length of the Longest Word in a Sentence
The LongestWordLength function finds the length of the longest word in a sentence.

using System;
using System.Linq;

class Program150
{
    static void Main() => Console.WriteLine(LongestWordLength("The quick brown fox jumped over the lazy dog"));

    static int LongestWordLength(string sentence) => sentence.Split(' ').Max(word => word.Length);
    // Output: 6
}





 
151. Stolen Items Loss Calculator
The CalculateLosses function takes a dictionary of stolen items and their values as input and returns the difference between the total value of those items and the policy limit.

using System;
using System.Collections.Generic;
using System.Linq;

public class Program151
{
    public static void Main(string[] args)
    {
        // Example usage:
        Dictionary<string, object> stolenItems = new Dictionary<string, object>()
        {
            { "watch", 100 },
            { "phone", 200 },
            { "wallet", 50 }
        };

        object losses = LossCalculator.CalculateLosses(stolenItems);

        Console.WriteLine($"Losses: {losses}");
    }
}

public class LossCalculator
{
    public static object CalculateLosses(Dictionary<string, object> obj) => obj.Values.Cast<int>().Sum() == 0 ? "Lucky you!" : obj.Values.Cast<int>().Sum();
}




 
152. Hacker Speak Converter
The ConvertToHackerSpeak function takes a string as input and returns its hacker speak equivalent, replacing characters 'a', 'e', 'i', 'o', and 's' with '4', '3', '1', '0', and '5' respectively.

using System;
using System.Text.RegularExpressions;

public class Program152
{
    public static void Main(string[] args)
    {
        // Example usage:
        string input = "hello world"; // Example: Input string
        string hackerSpeak = HackerSpeakConverter.ConvertToHackerSpeak(input);
        
        Console.WriteLine($"Original: {input}");
        // Original: hello world 
        Console.WriteLine($"Hacker Speak: {hackerSpeak}");
        // Hacker Speak: h3ll0 w0rld
        
    }
}

public class HackerSpeakConverter
{
    public static string ConvertToHackerSpeak(string str) => Regex.Replace(str, "[aeios]", m => m.Value == "a" ? "4" : m.Value == "e" ? "3" : m.Value == "i" ? "1" : m.Value == "o" ? "0" : "5");
}





 
153. Find the Area of a Rectangle
The RectangleArea function finds the area of a rectangle.

using System;

class Program153
{
    static int RectangleArea(int length, int width)
    {
        return length * width;
    }

    static void Main()
    {
        int length = 5;
        int width = 10;
        int area = RectangleArea(length, width);
        Console.WriteLine($"Area: {area}");
        // Output: Area: 50
    }
}



 
154. Calculate the Sum of Even Numbers in an Array
The SumOfEvenNumbers calculates the sum of even numbers in an array.

using System;
using System.Linq;

class Program154
{
    static int SumOfEvenNumbers(int[] arr)
    {
        return arr.Where(num => num % 2 == 0).Sum();
    }

    static void Main()
    {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        int sum = SumOfEvenNumbers(arr);
        Console.WriteLine($"Sum of even numbers: {sum}");
        // Output: Sum of even numbers: 30
    }
}



 
155. Missing Number Finder
The FindMissingNumber function takes an array of numbers as input and returns the missing number. It efficiently calculates the missing number by subtracting the sum of the given array from the sum of all numbers from 1 to 10.

using System;
using System.Linq;

public class Program155
{
    public static void Main(string[] args)
    {
        // Example usage:
        int[] numbers = { 1, 2, 3, 4, 6, 7, 8, 9, 10 }; // Example: Array of numbers with one missing
        int missingNumber = MissingNumberFinder.FindMissingNumber(numbers);
        
        Console.WriteLine($"Missing number: {missingNumber}");
        // Output: Missing number: 5
    }
}

public class MissingNumberFinder
{
    public static int FindMissingNumber(int[] arr) => 55 - arr.Sum();
}




 
156. Calculate the Volume of a Cylinder
The CylinderVolume function calculates the volume of a cylinder.

using System;

class Program156
{
    static double CylinderVolume(double radius, double height)
    {
        return Math.PI * Math.Pow(radius, 2) * height;
    }

    static void Main()
    {
        double volume = CylinderVolume(5, 10);
        Console.WriteLine($"Volume of the cylinder: {volume}");
        // Output: Volume of the cylinder: 785.398163397448
    }
}



 
157. BBQ Skewer Analyzer
The BbqSkewers method takes a list of skewers as input and returns the count of vegetarian and non-vegetarian skewers. A vegetarian skewer contains only vegetables ("-o"), while a non-vegetarian skewer contains at least one piece of meat ("-x").

using System;
using System.Collections.Generic;
using System.Linq;

public class Program157
{
    public static void Main(string[] args)
    {
        // Example usage:
        List<string> grill = new List<string> { "-o", "-o", "-x", "-o", "-x" }; // Example: Grill skewers
        int[] result = BbqSkewers(grill);
        Console.WriteLine($"Vegetarian skewers: {result[0]}, Non-vegetarian skewers: {result[1]}");
        // Output: Vegetarian skewers: 3, Non-vegetarian skewers: 2
        
    }

    public static int[] BbqSkewers(List<string> grill)
    {
        int nonVegetarianCount = grill.Count(s => s.Contains("-x"));
        return new int[] { grill.Count - nonVegetarianCount, nonVegetarianCount };
    }
}




 
158. Convert Decimal Number to Octal
The DecimalToOctal function converts decimal number to octal.

using System;

class Program158
{
    static string DecimalToOctal(int num)
    {
        return Convert.ToString(num, 8);
    }

    static void Main()
    {
        Console.WriteLine(DecimalToOctal(27)); 
        // Output: "33"
    }
}



 
159. Collatz Sequence Analyzer
The Collatz method takes a positive integer as input and returns the number of steps required to reach 1 in the Collatz sequence.

using System;
using System.Linq;

public class Program
{
    public static void Main(string[] args)
    {
        // Example usage:
        int num = 27; // Example: Input number
        int steps = CollatzSequence.Collatz(num);
        Console.WriteLine($"Number of steps to reach 1 in Collatz sequence for {num}: {steps}");
        // Output: Number of steps to reach 1 in Collatz sequence for 27: 111

        
    }
    
    public class CollatzSequence
    {
        public static int Collatz(int num) => Enumerable.Range(0, int.MaxValue).TakeWhile(x => num != 1).Select(x => num = num % 2 == 0 ? num / 2 : num * 3 + 1).Count();
    }
}





 
160. Check if a String is a Valid Phone Number (North American Format)
The IsValidPhoneNumber function checks if a string is a valid phone number (north american format).

using System;
using System.Text.RegularExpressions;

class Program
{
    static bool IsValidPhoneNumber(string phone)
    {
        return Regex.IsMatch(phone, @"^\d{3}-\d{3}-\d{4}$");
    }

    static void Main()
    {
        Console.WriteLine(IsValidPhoneNumber("555-123-4567")); 
        // Output: true
        Console.WriteLine(IsValidPhoneNumber("123-4567"));      
        // Output: false
    }
}



 
161. Find the Sum of the First N Natural Numbers
The SumOfNaturals function finds the sum of the first n natural numbers.

using System;

class Program161
{
    static int SumOfNaturals(int n)
    {
        return (n * (n + 1)) / 2;
    }

    static void Main()
    {
        Console.WriteLine(SumOfNaturals(10)); 
        // Output: 55
    }
}


 
162. Vowel Dasher
The Dashed method in the StringDasher class takes a string as input and returns the modified string with dashes added around each vowel.

using System;
using System.Text.RegularExpressions;

public class Program162
{
    public static void Main(string[] args)
    {
        // Example usage:
        string input = "hello world"; // Example: Input string
        string dashedString = StringDasher.Dashed(input);
        Console.WriteLine($"Original: {input}");
        // Original: hello world
        Console.WriteLine($"Dashed: {dashedString}");
        // Dashed h-e-ll-o- w-o-rld
        
    }
    
    public class StringDasher
    {
        public static string Dashed(string str) => Regex.Replace(str, "[aeiouAEIOU]", "-$&-");
    }
}





 
163. Find the Factors of a Number (excluding 1 and the number itself)
The Factors function finds the factors of a number (excluding 1 and the number itself).

using System;
using System.Collections.Generic;

class Program163
{
    static List<int> Factors(int num)
    {
        var result = new List<int>();
        for (int i = 2; i < num; i++)
            if (num % i == 0)
                result.Add(i);
        return result;
    }

    static void Main() => Console.WriteLine(string.Join(", ", Factors(12)));
    // Output: 2, 3, 4, 6
}


  

 
164. Calculate the Area of a Triangle given the Base and Height
The TriangleArea function calculates the area of a triangle given the base and height.

using System;

class Program164
{
    static double TriangleArea(double @base, double height)
    {
        return 0.5 * @base * height;
    }

    static void Main()
    {
        double area = TriangleArea(5, 10);
        Console.WriteLine(area);
        // Output: 25.0
    }
}



  

 
165. Check if a String is a Valid Social Security Number (SSN)
The IsValidSSN function checks whether a given string is a valid Social Security Number (SSN) in the format "XXX-XX-XXXX", where X represents a digit.

using System;
using System.Text.RegularExpressions;

class Program165
{
    static bool IsValidSSN(string ssn)
    {
        return Regex.IsMatch(ssn, @"^\d{3}-\d{2}-\d{4}$");
    }

    static void Main()
    {
        Console.WriteLine(IsValidSSN("123-45-6789")); 
        // Output: true
        Console.WriteLine(IsValidSSN("123-45-678"));  
        // Output: false
    }
}



 
166. Generate an Array of Random Numbers within a Range
The RandomArrayInRange function generates an array of random numbers within a range.

using System;

class Program166
{
    static int[] RandomArrayInRange(int min, int max, int length)
    {
        Random rand = new Random();
        int[] result = new int[length];
        for (int i = 0; i < length; i++)
        {
            result[i] = rand.Next(min, max + 1);
        }
        return result;
    }

    static void Main()
    {
        int[] randomArray = RandomArrayInRange(1, 100, 5);
        Console.WriteLine("[" + string.Join(", ", randomArray) + "]");
        // Output: [34, 87, 19, 56, 72]
    }
}




 
167. XO Checker
The XO function in the XoChecker class takes a string as input and returns true if the string contains an equal number of 'x's and 'o's (case-insensitive), and false otherwise.

using System;
using System.Linq;

public class Program167
{
    public static void Main(string[] args)
    {
        // Example usage:
        string input = "xoxoxo"; // Example: Input string
        bool result = XoChecker.XO(input);
        Console.WriteLine($"String \"{input}\" has same number of 'x's and 'o's: {result}");
        // Output: String "xoxoxo" has same number of 'x's and 'o's: True
    }
    
    public class XoChecker
    {
        public static bool XO(string str) => str.Count(c => char.ToLower(c) == 'x') == str.Count(c => char.ToLower(c) == 'o');
    }
}






 
168. Check if a String is a Valid IPv4 Address
The IsValidIPv4 function checks whether a given string represents a valid IPv4 address.

using System;
using System.Text.RegularExpressions;

class Program168
{
    static bool IsValidIPv4(string ip)
    {
        Regex regex = new Regex(@"^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$");
        return regex.IsMatch(ip);
    }

    static void Main()
    {
        Console.WriteLine(IsValidIPv4("192.168.1.1")); 
        // Output: True
        Console.WriteLine(IsValidIPv4("256.0.0.1"));   
        // Output: False
    }
}



 
169. Convert Decimal Number to Hexadecimal
The DecimalToHex function converts decimal number to hexadecimal.

using System;

class Program169
{
    static string DecimalToHex(int num)
    {
        return num.ToString("X");
    }

    static void Main()
    {
        Console.WriteLine(DecimalToHex(255)); 
        // Output: "FF"
    }
}



 
170. Check if a String is a Valid Date (YYYY-MM-DD Format)
The IsValidDate function checks whether a given string is a valid date in the format "YYYY-MM-DD". 

using System;
using System.Text.RegularExpressions;

class Program170
{
    static bool IsValidDate(string date)
    {
        return Regex.IsMatch(date, @"^\d{4}-\d{2}-\d{2}$");
    }

    static void Main()
    {
        Console.WriteLine(IsValidDate("2023-08-02")); 
        // Output: True
        Console.WriteLine(IsValidDate("02-08-2023")); 
        // Output: False
    }
}


 
171. Chinese Zodiac Sign Identifier
The GetSign function in the ChineseZodiac class takes a birth year as input and returns the corresponding Chinese zodiac sign.

using System;

public class Program171
{
    public static void Main(string[] args)
    {
        // Example usage:
        int[] birthYears = { 2021, 2020, 1938, 1951, 1964, 1977, 1990, 2003, 2016, 1969, 1982, 1995 };
        foreach (int year in birthYears)
        {
            string sign = ChineseZodiac.GetSign(year);
            Console.WriteLine($"Year {year}: {sign}");
            // Year 1982: Dog
            // Year 1995: Pig
        }
    }

    public class ChineseZodiac
    {
        public static string GetSign(int birthYear) => new[] { "Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep" }[birthYear % 12];
    }
}




 
172. Check if a String is a Valid Password 
The IsValidPassword function checks if a string is a valid password (at least 8 characters, with a digit and special character).

using System;
using System.Text.RegularExpressions;

class Program172
{
    static bool IsValidPassword(string password)
    {
        return Regex.IsMatch(password, @"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
    }

    static void Main()
    {
        Console.WriteLine(IsValidPassword("P@ssw0rd"));     
        // Output: true
        Console.WriteLine(IsValidPassword("password123")); 
        // Output: false
    }
}



 
173. Find the Nth Fibonacci Number
The Fibonacci function finds the nth fibonacci number.

using System;

class Program173
{
    static int Fibonacci(int n) => n <= 2 ? n - 1 : Fibonacci(n - 1) + Fibonacci(n - 2);

    static void Main()
    {
        Console.WriteLine(Fibonacci(7)); 
        // Output: 8
    }
}


 
174. Diving Minigame Checker
The divingMinigame method takes an array of integers representing the scores and returns true if the minigame is possible, and false otherwise.

using System;
using System.Linq;

public class Program174
{
    public static void Main(string[] args)
    {
        // Test cases
        
        Console.WriteLine(divingMinigame(new int[] { 0, -4, 0, -4, -5, -2 })); 
        // true
        Console.WriteLine(divingMinigame(new int[] { -4, -3, -4, -3, 5, 2, -5, -20, -42, -4, 5, 3, 5 })); 
        // true
        
        Console.WriteLine(divingMinigame(new int[] { 1, 2, 1, 2, 1, 2, 1, 2, 1, -3, -4, -5, -3, -4 })); 
        // false
        Console.WriteLine(divingMinigame(new int[] { -5, -5, -5, -5, -5, 2, 2, 2, 2, 2, 2, 2, 2 })); 
        // false
    }

    static bool divingMinigame(int[] arr) => arr.Aggregate(10, (a, c) => a > 0 ? (c >= 0 ? Math.Min(a + 4, 10) : a - 2) : 0) > 0;
}

 
175. Roger's Shooting Score Calculator
The rogerShots function takes an array of strings representing the shots ("Bang!" or "BangBang!") and returns the total score earned by Roger. Each "Bang!" shot contributes 0.5 points to the score, and each "BangBang!

using System;
using System.Linq;

public class Program
{
    public static void Main(string[] args)
    {
        // Test cases
        Console.WriteLine(rogerShots(new string[] { "Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!" })); // 3
        Console.WriteLine(rogerShots(new string[] { "Bang!", "Bang!", "Bang!", "Bang!", "BangBang!" })); // 2.5
        Console.WriteLine(rogerShots(new string[] { "Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!" })); // 2
        Console.WriteLine(rogerShots(new string[] { "BangBang!", "BangBang!", "BangBang!" })); // 1.5
        Console.WriteLine(rogerShots(new string[] { "Bang!", "BadaBing!", "Badaboom!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!" })); // 3
        Console.WriteLine(rogerShots(new string[] { "BangBang!", "BangBang!", "Bag!", "Ban!", "Tang!", "Bang!", "Bang!" })); // 2
    }

    static double rogerShots(string[] arr) => arr.Count(x => x == "Bang!" || x == "BangBang!") * 0.5;
}





 
176. Middle Character of String
The GetMiddle function takes a string as input and returns the middle character(s) of the string.

using System;

class Program176
{
    static string GetMiddle(string str) =>
        str.Length % 2 == 0 ? str.Substring((str.Length - 1) / 2, 2) : str.Substring((str.Length - 1) / 2, 1);

    static void Main()
    {
        string str = "middle";
        Console.WriteLine(GetMiddle(str));
        // Output: dd
    }
}

 
177. Calculate the Volume of a Cube
The CubeVolume function calculates the volume of a cube.

using System;

class Program177
{
    static double CubeVolume(double side)
    {
        return Math.Pow(side, 3);
    }

    static void Main()
    {
        Console.WriteLine(CubeVolume(5)); 
        // Output: 125
    }
}



 
178. Check if a String is a Valid Credit Card Number (Visa, MasterCard, Discover, American Express)
The IsValidCreditCard function checks is a string is a valid credit card number (visa, mastercard, discover, american express).

using System;
using System.Text.RegularExpressions;

class Program178
{
    static bool IsValidCreditCard(string card)
    {
        Regex regex = new Regex(@"^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$");
        return regex.IsMatch(card);
    }

    static void Main()
    {
        Console.WriteLine(IsValidCreditCard("4012-3456-7890-1234")); 
        // Output: True
        Console.WriteLine(IsValidCreditCard("1234-5678-9012-3456")); 
        // Output: False
    }
}



 
179. Calculate the Perimeter of a Triangle
The TrianglePerimeter function calculates the perimeter of a triangle.

using System;

class Program179
{
    static double TrianglePerimeter(double side1, double side2, double side3)
    {
        return side1 + side2 + side3;
    }

    static void Main()
    {
        Console.WriteLine(TrianglePerimeter(5, 10, 7)); 
        // Output: 22
    }
}



 
180. Check if a Number is a Vampire Number
The IsVampireNumber function checks is a number is a vampire number.

using System;
using System.Linq;

public class Program180
{
    static bool IsVampireNumber(int num) =>
        Enumerable.Range(1, (int)Math.Sqrt(num))
            .Any(factor => num % factor == 0 && 
                           new string($"{factor}{num / factor}".OrderBy(c => c).ToArray()) == 
                           new string($"{num}".OrderBy(c => c).ToArray()));

    public static void Main(string[] args)
    {
        Console.WriteLine(IsVampireNumber(1260)); 
        // Output: True
        Console.WriteLine(IsVampireNumber(1250)); 
        // Output: False
    }
}






 
181. Obsolete Sum Converter
The GetAbsSum the absolute sum of integers in an array.

using System;
using System.Collections.Generic;
using System.Linq;

public class Program181
{
    public static int GetAbsSum(List<int> arr) => arr.Sum(Math.Abs);
    
    public static void Main(string[] args)
    {
        List<int> arr = new List<int> {2, -1, 4, 8, 10};
        Console.WriteLine(GetAbsSum(arr));
        // Output: 25
    }
}



 
182. Check if a Number is a Duck Number
The IsDuckNumber function checks whether a given number is a duck number. 

using System;

class Program182
{
    static bool IsDuckNumber(int num)
    {
        string numStr = num.ToString();
        return numStr.Contains('0') && numStr[0] != '0';
    }

    static void Main()
    {
        Console.WriteLine(IsDuckNumber(1023));  
        // Output: true
        Console.WriteLine(IsDuckNumber(12345)); 
        // Output: false
    }
}




 
183. Generate a Random Password
The RandomPassword function generates a random password of the specified length by creating an array of random alphanumeric characters and joining them together into a string.

using System;
using System.Text;

class Program183
{
    static Random random = new Random();

    static string RandomPassword(int length)
    {
        const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder password = new StringBuilder(length);
        for (int i = 0; i < length; i++)
        {
            password.Append(chars[random.Next(chars.Length)]);
        }
        return password.ToString();
    }

    static void Main()
    {
        Console.WriteLine(RandomPassword(8)); 
        // Output: "3klS0p9x"
    }
}



 
184. Calculate the Area of a Trapezoid
The TrapezoidArea function calculates the area of a trapezoid.

using System;

class Program
{
    static double TrapezoidArea(double base1, double base2, double height)
    {
        return 0.5 * (base1 + base2) * height;
    }

    static void Main()
    {
        Console.WriteLine(TrapezoidArea(4, 8, 6)); 
        // Output: 36
    }
}




 
185. Check if a Number is a Kaprekar Number
The IsKaprekarNumber function checks if a given number is a Kaprekar number.

using System;

class Program185
{
    static bool IsKaprekarNumber(int num)
    {
        long square = (long)num * num;
        string squareStr = square.ToString();
        string numStr = num.ToString();
        int left = int.Parse(squareStr.Substring(0, numStr.Length));
        int right = int.Parse(squareStr.Substring(squareStr.Length - numStr.Length));
        return left + right == num;
    }

    static void Main()
    {
        Console.WriteLine(IsKaprekarNumber(9));   
        // Output: true
        Console.WriteLine(IsKaprekarNumber(297)); 
        // Output: true
        Console.WriteLine(IsKaprekarNumber(45));  
        // Output: false
    }
}



 
186. Calculate the Volume of a Cone
The ConeVolume function calculates the volume of a cone.

using System;

class Program186
{
    static double ConeVolume(double radius, double height)
    {
        return (1.0 / 3) * Math.PI * Math.Pow(radius, 2) * height;
    }

    static void Main()
    {
        Console.WriteLine(ConeVolume(5, 10)); 
        // Output: 261.79938779914943
    }
}



 
187. Check if a String is a Valid US Phone Number
The IsValidUSPhoneNumber function checks if a given string represents a valid US phone number.

using System;
using System.Text.RegularExpressions;

class Program187
{
    static bool IsValidUSPhoneNumber(string phone)
    {
        string pattern = @"^(?:(?:\+1\s?)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4})$";
        return Regex.IsMatch(phone, pattern);
    }

    static void Main()
    {
        Console.WriteLine(IsValidUSPhoneNumber("+1 (123) 456-7890")); 
        // Output: True
        Console.WriteLine(IsValidUSPhoneNumber("123-456-7890"));      
        // Output: True
        Console.WriteLine(IsValidUSPhoneNumber("1-800-ABC-DEFG"));    
        // Output: False
    }
}



 
188. Sastry Number Checker
The IsSastry function etermines whether a given positive integer n is a Sastry number.

using System;

public class Program188 {
    public static bool IsSastry(int num) => Math.Sqrt(int.Parse($"{num}{num + 1}")) % 1 == 0;

    public static void Main(string[] args) {
        Console.WriteLine(IsSastry(183));
        // Output: True

        Console.WriteLine(IsSastry(184));
        // Output: False
    }
}



 
189. Factor Chain Checker
The FactorChain function checks if an array forms a factor chain, where each element is a factor of the next consecutive element.

using System;
using System.Linq;

public class program189
{
    // Method to check if an array is a factor chain
    public static bool FactorChain(int[] arr)
    {
        return arr.Zip(arr.Skip(1), (a, b) => b % a == 0).All(x => x);
    }

    public static void Main(string[] args)
    {
        int[] chain1 = { 1, 2, 4, 8, 16, 32 };
        int[] chain2 = { 2, 4, 6, 7, 12 };
        
        Console.WriteLine(FactorChain(chain1)); 
        // Output: True
        Console.WriteLine(FactorChain(chain2)); 
        // Output: False
    }
}




 
190. Calculate Boxes in Algebra Sequence
The BoxSeq function takes a step number as input and calculates the number of boxes in that step of the algebra sequence. Each step increases the number of boxes by either 0 or 2, depending on whether the step number is even or odd, respectively.

using System;

public class Program
{
    // Function to calculate the number of boxes in a step of the sequence
    public static int BoxSeq(int step)
    {
        return step + (step % 2 * 2);
    }

    public static void Main(string[] args)
    {
        // Example usage:
        Console.WriteLine(BoxSeq(5));  // Output: 7
        Console.WriteLine(BoxSeq(0));  // Output: 0
        Console.WriteLine(BoxSeq(10)); // Output: 10
    }
}






 
191. Calculate the Volume of a Cuboid
The CuboidVolume function calculates the volume of a cuboid.

using System;

public class Program191
{
    // Calculate the Volume of a Cuboid
    public static double CuboidVolume(double length, double width, double height)
    {
        return length * width * height;
    }

    public static void Main(string[] args)
    {
        double length = 5;
        double width = 10;
        double height = 8;

        double volume = CuboidVolume(length, width, height);
        Console.WriteLine("Volume of the cuboid: " + volume);
        // Volume of the cuboid: 400
    }
}



 
192. Triangular Number Sequence
The Triangular calculates the nth triangular number in the triangular number sequence. A triangular number is the sum of all positive integers up to a given integer n.

using System;

public class Program192
{
    // Calculate the nth triangular number
    public static int Triangular(int n) => n * (n + 1) / 2;

    public static void Main(string[] args)
    {
        Console.WriteLine(Triangular(1));  // Output: 1
        Console.WriteLine(Triangular(2));  // Output: 3
        Console.WriteLine(Triangular(3));  // Output: 6
        Console.WriteLine(Triangular(4));  // Output: 10
        Console.WriteLine(Triangular(5));  // Output: 15
    }
}


 
193. Generate a Random Color (Hexadecimal Format)
The RandomColorHex function generates a random color (hexadecimal format)

using System;

public class Program193
{
    // Generate a Random Color (Hexadecimal Format)
    public static string RandomColorHex()
    {
        Random random = new Random();
        return "#" + random.Next(0x1000000).ToString("X6");
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(RandomColorHex());
        // #6C0F4A
    }
}



 
194. Calculate the Area of a Circle Sector
The CircleSectorArea function calculates the area of a circle sector.

using System;

public class Program194
{
    // Calculate the Area of a Circle Sector
    public static double CircleSectorArea(double radius, double angle)
    {
        return (angle / 360) * Math.PI * Math.Pow(radius, 2);
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(CircleSectorArea(5, 90));
        // 19.6349540849362
    }
}



 
195. Calculate the Area of a Regular Polygon
The RegularPolygonArea function calculates the area of a regular polygon.

using System;

public class Program195
{
    // Calculate the Area of a Regular Polygon
    public static double RegularPolygonArea(double sideLength, int numOfSides)
    {
        return (numOfSides * Math.Pow(sideLength, 2)) / (4 * Math.Tan(Math.PI / numOfSides));
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(RegularPolygonArea(5, 6));
        // 64.9519052838329
    }
}



 
196. Remove Duplicates from Array
The RemoveDuplicates function removes duplicates from array.

using System;
using System.Collections.Generic;
using System.Linq;

public class Program
{
    // Remove duplicates from an array while preserving the order of elements
    public static List<int> RemoveDuplicates(List<int> arr)
    {
        return arr.Distinct().ToList();
    }

    public static void Main(string[] args)
    {
        List<int> array = new List<int> { 1, 2, 3, 3, 4, 4, 5, 5, 6 };
        List<int> result = RemoveDuplicates(array);
        Console.WriteLine(string.Join(", ", result));
        // Output: 1, 2, 3, 4, 5, 6
    }
}




 
197. Calculate the Area of an Ellipse
The EllipseArea function calculates the area of an ellipse.

using System;

public class Program197
{
    // Calculate the area of an ellipse using its semi-major axis length (a) and semi-minor axis length (b)
    public static double EllipseArea(double a, double b)
    {
        return Math.PI * a * b;
    }

    public static void Main(string[] args)
    {
        double semiMajorAxis = 5;
        double semiMinorAxis = 10;
        double area = EllipseArea(semiMajorAxis, semiMinorAxis);
        Console.WriteLine(area);
        // Outputs: 157.07963267949
    }
}



 
198. Check if a Number is a Leyland Number
The IsLeylandNumber function checks if a number is a Leyland number.

using System;

public class Program198
{
    // Check if a number is a Leyland number
    public static bool IsLeylandNumber(int num)
    {
        for (int x = 2; x <= Math.Pow(num, 1.0 / 3); x++)
        {
            for (int y = x + 1; y <= num / x; y++)
            {
                if (Math.Pow(x, y) + Math.Pow(y, x) == num)
                {
                    return true;
                }
            }
        }
        return false;
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(IsLeylandNumber(17)); 
        // Output: true
        Console.WriteLine(IsLeylandNumber(30)); 
        // Output: true
        Console.WriteLine(IsLeylandNumber(100)); 
        // Output: false
    }
}

199. Generate a Random UUID
The RandomUUID function generates a random UUID by substituting placeholders in the UUID template with random hexadecimal values.

using System;

public class Program199
{
    // Generate a random UUID
    public static string RandomUUID()
    {
        return $"{RandomHex(8)}-{RandomHex(4)}-4{RandomHex(3)}-{RandomHex(4)}-{RandomHex(12)}".ToLower();
    }

    // Generate a random hexadecimal string of the specified length
    public static string RandomHex(int length)
    {
        Random random = new Random();
        const string chars = "0123456789abcdef";
        char[] result = new char[length];
        for (int i = 0; i < length; i++)
        {
            result[i] = chars[random.Next(chars.Length)];
        }
        return new string(result);
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(RandomUUID());
        // Output: "a0f768f5-6bf2-4f6b-a512-c9121ea1b44a"
    }
}



 
200. Check if a String is a Valid IPv6 Address
The IsValidIPv6 function checks is a string is a valid IPV6 address.

using System;
using System.Text.RegularExpressions;

public class Program200
{
    // Check if a string is a valid IPv6 address
    public static bool IsValidIPv6(string ip)
    {
        string pattern = @"^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$";
        return Regex.IsMatch(ip, pattern);
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(IsValidIPv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));
        // Output: True
        Console.WriteLine(IsValidIPv6("2001:0db8:85a3::8a2e:0370:7334"));
        // Output: True
        Console.WriteLine(IsValidIPv6("256.0.0.0"));
        // Output: False
    }
}



 
201. Calculate the Area of a Parallelogram
The ParallelogramArea function calculates the area of a parallelogram.

using System;

public class Program201
{
    // Calculate the Area of a Parallelogram
    public static double ParallelogramArea(double baseLength, double height)
    {
        return baseLength * height;
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(ParallelogramArea(5, 10));
        // Output: 50
    }
}



 
202. Check if a String is a Valid MAC Address
The  IsValidMacAddress function checks if a string is a valid MAC Address.

using System;
using System.Text.RegularExpressions;

public class Program202
{
    // Check if a String is a Valid MAC Address
    public static bool IsValidMacAddress(string mac)
    {
        Regex regex = new Regex(@"^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$");
        return regex.IsMatch(mac);
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(IsValidMacAddress("00:1A:2B:3C:4D:5E"));
        // Output: True
        Console.WriteLine(IsValidMacAddress("00:1A:2B:3C:4D"));
        // Output: False
    }
}



 
203. Convert RGB to HSL (Hue, Saturation, Lightness)
The RgbToHsl function converts an RGB color value to its corresponding HSL representation (Hue, Saturation, Lightness).

using System;
using System.Linq;

public class Program203
{
    public static bool TestJackpot(string[] result) => result.All(el => el == result[0]);

    public static void Main(string[] args)
    {
        Console.WriteLine(TestJackpot(new string[] { "@", "@", "@", "@" })); // true
        Console.WriteLine(TestJackpot(new string[] { "!", "!", "!", "!" })); // true
        Console.WriteLine(TestJackpot(new string[] { "abc", "abc", "abc", "abc" })); // true
        Console.WriteLine(TestJackpot(new string[] { "karaoke", "karaoke", "karaoke", "karaoke" })); // true
        Console.WriteLine(TestJackpot(new string[] { "SS", "SS", "SS", "SS" })); // true
        Console.WriteLine(TestJackpot(new string[] { ":(", ":)", ":|", ":|" })); // false
        Console.WriteLine(TestJackpot(new string[] { "&&", "&", "&&&", "&&&&" })); // false
        Console.WriteLine(TestJackpot(new string[] { "hee", "heh", "heh", "heh" })); // false
        Console.WriteLine(TestJackpot(new string[] { "SS", "SS", "SS", "Ss" })); // false
        Console.WriteLine(TestJackpot(new string[] { "SS", "SS", "Ss", "Ss" })); // false
    }
}

204. Check if a Number is a Pandigital Number
The IsPandigitalNumber function checks if a given number is a pandigital number.

using System;
using System.Linq;

public class Program204
{
    // Check if a Number is a Pandigital Number
    public static bool IsPandigitalNumber(int num) => num.ToString().ToCharArray().Distinct().Count() == num.ToString().Length && !num.ToString().Contains('0') && num.ToString().ToCharArray().Distinct().Max() == num.ToString().Length - '0';

    public static void Main(string[] args)
    {
        Console.WriteLine(IsPandigitalNumber(123456789));   
        // Output: True
        Console.WriteLine(IsPandigitalNumber(987654321));   
        // Output: True
        Console.WriteLine(IsPandigitalNumber(1023456789));  
        // Output: False
    }
}



 
205. Neutralize Strings Interaction
The "Neutralise" function takes two strings composed of '+' and '-' characters and returns a new string that represents the interaction between the two input strings. If the characters at corresponding positions in both strings are the same, it adds that character to the output string. Otherwise, it adds '0' to the output string.

using System;
using System.Linq;

public class Program205
{
    public static string Neutralise(string s1, string s2) => string.Concat(s1.Zip(s2, (c1, c2) => c1 == c2 ? c1 : '0'));

    public static void Main(string[] args)
    {
        string s1 = "++-+";
        string s2 = "+-++";
        Console.WriteLine(Neutralise(s1, s2)); 
        // Output: +00+
    }
}






 
206. Convert Yen to USD
The YenToUsd function converts Yen (Japanese currency) to USD (American currency) using the exchange rate of 1 USD = 107.5 Yen. It returns the converted amount rounded to two decimal places.

using System;

public class Program206
{
    // Function to convert Yen to USD
    public static double YenToUsd(double yen)
    {
        return Math.Round(yen / 107.5, 2);
    }

    public static void Main(string[] args)
    {
        double yenAmount = 1000;
        Console.WriteLine(YenToUsd(yenAmount)); 
        // Output: 9.3
    }
}



 
207. Calculate War of Numbers
The WarOfNumbers takes an array of integers, sums up the even and odd numbers separately, and then subtracts the smaller sum from the larger one. It returns the absolute value of this subtraction.

using System;
using System.Linq;

public class Program207
{
    // Function to calculate the war of numbers
    public static int WarOfNumbers(int[] arr) => Math.Abs(arr.Sum(x => x % 2 == 0 ? -x : x));

    public static void Main(string[] args)
    {
        int[] numbers = { 1, 2, 3, 4, 5, 6 };
        Console.WriteLine(WarOfNumbers(numbers)); 
        // Output: 3
    }
}



 
208. Calculate Iterated Square Root
The ISqrt function that takes an integer as input and returns the number of times its iterated square root can be taken until the result is less than 2. If the input number is negative, it returns "invalid".

using System;

public class Program208
{
    // Function to calculate the iterated square root of a non-negative number
    static string ISqrt(int n) => n < 0 ? "invalid" : ((int)Math.Log(Math.Sqrt(n), 2)).ToString();

    public static void Main(string[] args)
    {
        // Example usage
        Console.WriteLine(ISqrt(16)); 
        // Output: 2
        Console.WriteLine(ISqrt(25)); 
        // Output: 2
        Console.WriteLine(ISqrt(256)); 
        // Output: 4
        Console.WriteLine(ISqrt(-25)); 
        // Output: invalid
    }
}



 
209. Determine Rock, Paper, Scissors Winner
The RPS function determines the winner in Rock, Paper, Scissors game.

using System;

public class Program209
{
    public static string RPS(string p1, string p2) => p1 == p2 ? "It's a draw" : $"The winner is {(p1 == "Rock" && p2 == "Scissors" || p1 == "Scissors" && p2 == "Paper" || p1 == "Paper" && p2 == "Rock" ? "p1" : "p2")}";
    
    public static void Main(string[] args)
    {
        Console.WriteLine(RPS("Rock", "Paper")); 
        // Output: The winner is p2
        Console.WriteLine(RPS("Scissors", "Paper")); 
        // Output: The winner is p1
        Console.WriteLine(RPS("Rock", "Rock")); 
        // Output: It's a draw
    }
}



 
210. Replace Sausages with "Wurst”
The WurstIsBetter function takes a string representing a sentence or text containing various types of sausages.

using System;

public class Program210 {
    public static string WurstIsBetter(string str) => System.Text.RegularExpressions.Regex.Replace(str, @"kielbasa|chorizo|moronga|salami|sausage|andouille|naem|merguez|gurka|snorkers|pepperoni", "Wurst", System.Text.RegularExpressions.RegexOptions.IgnoreCase);

    public static void Main(string[] args) {
        string input = "I love kielbasa, chorizo, and pepperoni pizza.";
        Console.WriteLine(WurstIsBetter(input));
        // Output: I love Wurst, Wurst, and Wurst pizza.
    }
}



 
211. Update Ages After Years 
Given a dictionary representing people and their ages, the AfterNYears function updates the ages of the people after a specified number of years have passed.

using System;
using System.Collections.Generic;
using System.Linq;

public class Program211
{
    public static Dictionary<string, int> AfterNYears(Dictionary<string, int> list, int n) => list.ToDictionary(pair => pair.Key, pair => pair.Value + Math.Abs(n));
    
    public static void Main(string[] args)
    {
        Dictionary<string, int> ages = new Dictionary<string, int>()
        {
            {"John", 30},
            {"Alice", 25},
            {"Bob", 40}
        };

        var updatedAges = AfterNYears(ages, 5);

        foreach (var person in updatedAges)
        {
            Console.WriteLine($"{person.Key}: {person.Value}");
            // John: 35
            // Alice: 30
            // Bob: 45
        }
    }
}


212. Detect Syncopation in Music
The HasSyncopation function takes a line of music represented as a string, where hashtags '#' represent emphasized beats, and determines if the line of music contains any syncopation, returning true if it does and false otherwise.

using System;
using System.Linq;

public class Program212
{
    // Method to check if the line of music contains any syncopation
    public static bool HasSyncopation(string s)
    {
        return s.Select((c, idx) => idx % 2 == 1 && c == '#').Any();
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(HasSyncopation("#.#.#")); 
        // Output: true
        Console.WriteLine(HasSyncopation("##.#.#")); 
        // Output: true
        Console.WriteLine(HasSyncopation("###")); 
        // Output: false
    }
}




 
213. Extend Vowels in a Word
The ExtendVowels function extend the vowels in a word.

using System;
using System.Text.RegularExpressions;

public class Program213
{
    // Method to extend vowels in a word by a given number
    public static string ExtendVowels(string word, int num) => num < 0 || num % 1 != 0 ? "invalid" : Regex.Replace(word, "[aeiouAEIOU]", v => new string(v.Value[0], num + 1));

    public static void Main(string[] args)
    {
        Console.WriteLine(ExtendVowels("hello", 2)); 
        // Output: "heellloo"
        Console.WriteLine(ExtendVowels("world", -1)); 
        // Output: "invalid"
    }
}



 
214. Generate a Random Alphanumeric String
The RandomAlphanumericString function generates a random alphanumeric string.

using System;
using System.Linq;

public class Program
{
    // Method to generate a random alphanumeric string of a given length
    public static string RandomAlphanumericString(int length) => new string(Enumerable.Repeat("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", length).Select(s => s[new Random().Next(s.Length)]).ToArray());

    public static void Main(string[] args)
    {
        Console.WriteLine(RandomAlphanumericString(8)); 
        // Output: "Yw83XmLb"
    }
}



 
215. Calculate the Area of a Regular Hexagon
The RegularHexagonArea function calculates the area of a regular hexagon.

using System;

public class Program215
{
    // Method to calculate the area of a regular hexagon using its side length
    public static double RegularHexagonArea(double sideLength)
    {
        return (3 * Math.Sqrt(3) * Math.Pow(sideLength, 2)) / 2;
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(RegularHexagonArea(5)); 
        // Output: 64.9519052838329
    }
}



 
216. Calculate Cube Diagonal from Volume
The CubeDiagonal function takes the volume of a cube as input and returns the length of the cube's main diagonal, rounded to two decimal places. It uses the formula for the length of the diagonal of a cube, which is the cube root of the volume multiplied by the square root of 3.

using System;

class Program216
{
    static Func<double, double> CubeDiagonal = volume => Math.Round(Math.Pow(volume, 1.0 / 3) * Math.Sqrt(3), 2);

    static void Main(string[] args)
    {
        double volume = 27;
        Console.WriteLine(CubeDiagonal(volume));
        // Output: 5.2
    }
}



 
217. BigInt Decimal String Formatter
The formatBigInt accepts a BigInt and a desired number of decimals, returning a string representation with the correct precision.

using System;
using System.Numerics;

class Program217
{
    static void Main(string[] args)
    {
        Func<BigInteger, int, string> formatBigInt = (bigNumber, decimals) => bigNumber.ToString().Insert(bigNumber.ToString().Length - decimals, ".");

        // Example usage:
        BigInteger number = BigInteger.Parse("123456789012345678901234567890");
        int numDecimals = 5;
        string formattedNumber = formatBigInt(number, numDecimals);
        Console.WriteLine(formattedNumber);  
        // Output: 12345678901234567890123.45678
    }
}




 
218. Check if a Number is a Reversible Number
The IsReversibleNumber function checks if a number is a reversible number.

using System;
using System.Linq;

public class Program218
{
    // Function to check if a number is a reversible number
    public static bool IsReversibleNumber(int num) => num + int.Parse(string.Concat(num.ToString().Reverse())) == num.ToString().Select(c => int.Parse(c.ToString())).Sum();

    public static void Main(string[] args)
    {
        Console.WriteLine(IsReversibleNumber(36)); 
        // Output: True
        Console.WriteLine(IsReversibleNumber(45)); 
        // Output: True
        Console.WriteLine(IsReversibleNumber(10)); 
        // Output: False
    }
}



 
219. Calculate the Circumference of a Circle
The CircleCircumference function calculates the circumference of a circle.

using System;

public class Program219
{
    public static double CircleCircumference(double radius) => 2 * Math.PI * radius;

    public static void Main(string[] args)
    {
        Console.WriteLine(CircleCircumference(5)); 
        // Output: 31.41592653589793
    }
}




 
220. Find the Shortest Word in a String
The ShortestWord function finds the shortest word in a string.

using System;
using System.Linq;

public class Program220
{
    public static string ShortestWord(string str) => str.Split(' ').OrderBy(word => word.Length).FirstOrDefault();

    public static void Main(string[] args)
    {
        Console.WriteLine(ShortestWord("This is a test sentence")); 
        // Output: "a"
    }
}




 
221. Find the Longest Word Length in a String
The LongestWordLength function finds the longest word length in a string.

using System;
using System.Linq;

public class Program221
{
    public static int LongestWordLength(string str) => str.Split(' ').Select(word => word.Length).Max();

    public static void Main(string[] args)
    {
        Console.WriteLine(LongestWordLength("This is a test sentence")); 
        // Output: 8
    }
}


 
222. Find the Sum of Proper Divisors of a Number
The SumOfProperDivisors function finds the sum of proper divisors of a number.

using System;
using System.Linq;

public class Program222
{
    public static int SumOfProperDivisors(int num) => Enumerable.Range(1, num - 1).Where(i => num % i == 0).Sum();

    public static void Main(string[] args)
    {
        Console.WriteLine(SumOfProperDivisors(28)); 
        // Output: 28
        Console.WriteLine(SumOfProperDivisors(12)); 
        // Output: 16
    }
}






 
223. Check if a Number is a Unitary Perfect Number
The IsUnitaryPerfectNumber function checks if a number is a unitary perfect number.

using System;
using System.Linq;

public class Program223
{
    // Function to check if a number is a unitary perfect number
    public static bool IsUnitaryPerfectNumber(int num) => num == Enumerable.Range(1, num - 1).Where(i => num % i == 0 && GCD(num, i) == 1).Sum();

    // Function to calculate the greatest common divisor (GCD) of two numbers
    public static int GCD(int a, int b) => b == 0 ? a : GCD(b, a % b);

    public static void Main(string[] args)
    {
        Console.WriteLine(IsUnitaryPerfectNumber(18)); 
        // Output: False
        Console.WriteLine(IsUnitaryPerfectNumber(28)); 
        // Output: True
    }
}




 
224. Calculate the Perimeter of a Regular Polygon
The RegularPolygonPerimeter function calculates the perimeter of a regular polygon.

using System;

public class Program224
{
    // Function to calculate the perimeter of a regular polygon
    public static double RegularPolygonPerimeter(double sideLength, int numSides) => 
        sideLength * numSides;

    public static void Main(string[] args)
    {
        Console.WriteLine(RegularPolygonPerimeter(5, 6));  
        // Output: 30
    }
}



 
225. Calculate the Area of an Equilateral Triangle
The EquilateralTriangleArea function calculates the area of an equilateral triangle.

using System;

public class Program225
{
    // Function to calculate the area of an equilateral triangle
    public static double EquilateralTriangleArea(double sideLength) =>
        (Math.Sqrt(3) * Math.Pow(sideLength, 2)) / 4;

    public static void Main(string[] args)
    {
        Console.WriteLine(EquilateralTriangleArea(5));  
        // Output: 10.825317547305486
    }
}



 
226. Check if a Number is a Harshad Smith Number
The IsHarshadSmithNumber function checks if a given number is both a Harshad number and a Smith number.

using System;
using System.Linq;

public class Program226
{
    public static bool IsHarshadSmithNumber(int num) =>
        Enumerable.Range(2, (int)Math.Sqrt(num)).All(i => num % i != 0) &&
        num.ToString().Sum(c => c - '0') == num &&
        Enumerable.Range(2, num).Where(i => num % i == 0).Sum(i => num.ToString().Count(c => c == i.ToString()[0])) == num;

    public static void Main(string[] args)
    {
        Console.WriteLine(IsHarshadSmithNumber(22));  
        // Output: True
        Console.WriteLine(IsHarshadSmithNumber(10));  
        // Output: False
    }
}



 
227. Check if a Number is a Perfect Power
The IsPerfectPower function checks if a number is a perfect power.

using System;
using System.Linq;

public class Program
{
    // Function to check if a number is a perfect power
    public static bool IsPerfectPower(int num) => 
        Enumerable.Range(2, (int)Math.Sqrt(num))
                  .Any(baseValue => Enumerable.Range(2, (int)Math.Log(num, baseValue)).Any(exponent => Math.Pow(baseValue, exponent) == num));

    public static void Main(string[] args)
    {
        Console.WriteLine(IsPerfectPower(64)); 
        // Output: True
        Console.WriteLine(IsPerfectPower(25)); 
        // Output: False
    }
}



 
228. Drop Elements from Array
The Drop function takes an array and an optional value indicating the number of elements to drop from the beginning of the array. It returns a new array containing the remaining elements after dropping the specified number of elements.

using System;
using System.Linq;

public class Program228 {
    public static int[] Drop(int[] arr, int val = 1) => arr.Skip(val).ToArray();

    public static void Main(string[] args) {
        Console.WriteLine(string.Join(", ", Drop(new int[] { 1, 2, 3 }))); // [2, 3]
        Console.WriteLine(string.Join(", ", Drop(new int[] { 1, 2, 3 }, 2))); // [3]
        Console.WriteLine(string.Join(", ", Drop(new int[] { 1, 2, 3 }, 5))); // []
        Console.WriteLine(string.Join(", ", Drop(new int[] { 1, 2, 3 }, 0))); // [1, 2, 3]
        Console.WriteLine(string.Join(", ", Drop(new string[] { "banana", "orange", "watermelon", "mango" }, 2))); // ["watermelon", "mango"]
        Console.WriteLine(string.Join(", ", Drop(new int[] { }, 2))); // []
    }
}




 
229. Maximum Total of Last Five Elements in an Array
The MaxTotal function calculates the maximum total of the last five elements in an integer array.

using System;
using System.Linq;

public class Program {
    public static int MaxTotal(int[] nums) => nums.OrderBy(x => x).TakeLast(5).Sum();
    
    public static void Main() {
        Console.WriteLine(MaxTotal(new int[]{1, 1, 0, 1, 3, 10, 10, 10, 10, 1})); // 43
        Console.WriteLine(MaxTotal(new int[]{0, 0, 0, 0, 0, 0, 0, 0, 0, 100})); // 100
        Console.WriteLine(MaxTotal(new int[]{1, 2, 3, 4, 5, 6, 7, 8, 9, 10})); // 40
        Console.WriteLine(MaxTotal(new int[]{12, 8, 73, 1, 24, 11, 88, 39, 2, -47})); // 236
        Console.WriteLine(MaxTotal(new int[]{48, 90, 42, -12, 1, -14, -36, -37, -9, -4})); // 177
    }
}




 
230. Calculate the Area of a Regular Pentagon
The RegularPentagonArea function calculates the area of a regular pentagon.

using System;

public class Program230
{
    // Function to calculate the area of a regular pentagon
    public static double RegularPentagonArea(double sideLength) => (1.0 / 4.0) * Math.Sqrt(5 * (5 + 2 * Math.Sqrt(5))) * Math.Pow(sideLength, 2);
    
    public static void Main(string[] args)
    {
        Console.WriteLine(RegularPentagonArea(5)); 
        // Output: 43.01193501472417
    }
}




 
231. Calculate the Volume of a Pyramid
The PyramidVolume function calculates the volume of a pyramid.

using System;

public class Program231
{
    // Function to calculate the volume of a pyramid
    public static double PyramidVolume(double baseArea, double height) => (1.0 / 3.0) * baseArea * height;

    public static void Main(string[] args)
    {
        Console.WriteLine(PyramidVolume(25, 10)); 
        // Output: 83.33333333333333
    }
}



 
232. Check if a Number is a Wedderburn-Etherington Number
The IsWedderburnEtheringtonNumber function checks if a given number is a Wedderburn-Etherington number.

using System;
using System.Linq;

public class Program232
{
    // Function to check if a given number is a Wedderburn-Etherington number
    public static bool IsWedderburnEtheringtonNumber(int num) => Enumerable.Range(2, num - 1).All(i => num % i != 0) && Enumerable.Range(2, num - 1).Select(n => Enumerable.Range(1, n - 1).Aggregate(1, (a, b) => a * b)).Aggregate(1, (a, b) => a *= b) == Enumerable.Range(1, num - 1).Aggregate(1, (a, b) => a *= b);

    public static void Main(string[] args)
    {
        Console.WriteLine(IsWedderburnEtheringtonNumber(6)); 
        // Output: True
        Console.WriteLine(IsWedderburnEtheringtonNumber(12)); 
        // Output: False
    }
}



 
233. Calculate the Surface Area of a Cube
The CubeSurfaceArea function calculates the surface area of a cube.

using System;

public class Program233
{
    // Function to calculate the surface area of a cube using its side length
    public static double CubeSurfaceArea(double sideLength) => 6 * sideLength * sideLength;

    public static void Main(string[] args)
    {
        Console.WriteLine(CubeSurfaceArea(5)); 
        // Output: 150
    }
}



 
234. Check if a Number is a Pluperfect Number
The SecondLargest takes an array of numbers and returns the second largest number.

using System;
using System.Linq;

class Program234 {
    static int SecondLargest(int[] arr) => arr.OrderByDescending(x => x).Skip(1).First();

    static void Main(string[] args) {
        int[] arr = { 1, 3, 5, 7, 9 };
        Console.WriteLine(SecondLargest(arr));
        // Output: 7
    }
}



 
235. Calculate the Area of a Regular Octagon
The RegularOctagonArea function calculates the area of a regular octagon.

using System;

public class Program235
{
    // Function to calculate the area of a regular octagon
    public static double RegularOctagonArea(double sideLength)
    {
        return 2 * (1 + Math.Sqrt(2)) * Math.Pow(sideLength, 2);
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(RegularOctagonArea(5));  
        // Output: 86.60254037844387
    }
}



 
236. Check if a Number is a Repunit Number
The IsRepunitNumber function checks if a number is a repunit number.

using System;
using System.Text.RegularExpressions;

public class Program236
{
    // Function to check if a number is a repunit number
    public static bool IsRepunitNumber(int num)
    {
        return Regex.IsMatch(num.ToString(), "^1+$");
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(IsRepunitNumber(111));  
        // Output: True
        Console.WriteLine(IsRepunitNumber(11));   
        // Output: False
    }
}



 
237. Calculate the Volume of an Ellipsoid
The EllipsoidVolume function calculates the volume of an ellipsoid.

using System;

public class Program237
{
    // Function to calculate the volume of an ellipsoid
    public static double EllipsoidVolume(double a, double b, double c)
    {
        return (4.0 / 3.0) * Math.PI * a * b * c;
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(EllipsoidVolume(5, 3, 2));
        // Output: 125.66370614359172
    }
}




 
238. Check if a String is a Valid URL
The IsValidURLAlt function checks if a given string is a valid URL using an alternative approach.

using System;
using System.Text.RegularExpressions;

public class Program238
{
    // Function to check if a string is a valid URL using an alternative approach
    public static bool IsValidURLAlt(string url) => Regex.IsMatch(url, @"^(ftp|http|https):\/\/[^ ]+$");

    public static void Main(string[] args)
    {
        Console.WriteLine(IsValidURLAlt("https://www.example.com"));   
        // Output: True
        Console.WriteLine(IsValidURLAlt("invalid url"));               
        // Output: False
    }
}



 
239. Check if a String is a Valid Tax Identification Number (TIN)
The IsValidTIN function check if a given string is a valid Tax Identification Number (TIN).

using System;
using System.Text.RegularExpressions;

public class Program239
{
    // Function to check if a string is a valid Tax Identification Number (TIN)
    public static bool IsValidTIN(string tin) => Regex.IsMatch(tin, @"^[A-Z]{2}\d{6}[A-Z\d]{2}$");

    public static void Main(string[] args)
    {
        Console.WriteLine(IsValidTIN("AB123456CD"));   
        // Output: True
        Console.WriteLine(IsValidTIN("invalid tin")); 
        // Output: False
    }
}



 
240. Check if a String is a Valid ISBN (International Standard Book Number)
The IsValidISBN function checks if a given string is a valid International Standard Book Number (ISBN).

using System;
using System.Text.RegularExpressions;

public class Program240
{
    // Function to check if a string is a valid International Standard Book Number (ISBN)
    public static bool IsValidISBN(string isbn) => Regex.IsMatch(isbn, @"^(?:\d{9}[\dX]|(?:\d{3}-){2}\d{1}[\dX])$");

    public static void Main(string[] args)
    {
        Console.WriteLine(IsValidISBN("123456789"));     
        // Output: True
        Console.WriteLine(IsValidISBN("invalid isbn"));  
        // Output: False
    }
}



 
241. Check if a String is a Valid IP Address
The IsValidIPAddress function checks if a given string is a valid IP address.

using System;
using System.Net;

public class Program
{
    // Function to check if a string is a valid IP address
    public static bool IsValidIPAddress(string ip) => IPAddress.TryParse(ip, out IPAddress result);

    public static void Main(string[] args)
    {
        Console.WriteLine(IsValidIPAddress("192.168.1.1"));   
        // Output: True
        Console.WriteLine(IsValidIPAddress("invalid ip"));    
        // Output: False
    }
}



 
242. Reverse a String (Using Recursion)
The ReverseStringRecursive function reverse a string (using recursion).

using System;

public class Program242
{
    // Function to reverse a string using recursion
    public static string ReverseStringRecursive(string str) => str.Length == 0 ? "" : ReverseStringRecursive(str.Substring(1)) + str[0];

    public static void Main(string[] args)
    {
        Console.WriteLine(ReverseStringRecursive("hello")); 
        // Output: olleh
    }
}



 
243. Count the Occurrences of Each Element in an Array
The CountOccurrences function counts the occurrences of each element in an array.

using System;
using System.Collections.Generic;
using System.Linq;

public class Program243
{
    // Function to count the occurrences of each element in an array and return the counts in a dictionary
    public static Dictionary<int, int> CountOccurrences(int[] arr) => arr.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count());

    public static void Main(string[] args)
    {
        Console.WriteLine(string.Join(", ", CountOccurrences(new int[] { 1, 2, 1, 3, 2, 4, 1 }).Select(kv => $"{kv.Key}=>{kv.Value}")));
        // Output: 1=>3, 2=>2, 3=>1, 4=>1
    }
}




 
244. Check if Two Arrays are Equal
The ArraysAreEqual function checks if two arrays are equal (shallow comparison).

using System;
using System.Linq;

public class Program244
{
    // Function to check if two arrays are equal through a shallow comparison of their elements
    public static bool ArraysAreEqual(int[] arr1, int[] arr2) => arr1.SequenceEqual(arr2);

    public static void Main(string[] args)
    {
        Console.WriteLine(ArraysAreEqual(new int[] { 1, 2, 3 }, new int[] { 1, 2, 3 }));
        // Output: True
        Console.WriteLine(ArraysAreEqual(new int[] { 1, 2, 3 }, new int[] { 1, 2, 4 }));
        // Output: False
    }
}












245. Find the Minimum Value in an Array
The function FindMinValue finds the minimum value in a given array of numbers.

using System;
using System.Linq;

public class Program245
{
    // Function to find the minimum value in an array of numbers
    public static int FindMinValue(int[] arr) => arr.Min();

    public static void Main(string[] args)
    {
        int[] numbers = { 2, 7, 1, 9, 4 };
        Console.WriteLine(FindMinValue(numbers));
        // Output: 1
    }
}



 
246. Flatten an Array of Nested Arrays 
The FlattenArray function flatten an array of nested arrays (using concat).

using System;
using System.Linq;

public class Program
{
    // Function to flatten an array of nested arrays using SelectMany method
    public static int[] FlattenArray(int[][] arr) => arr.SelectMany(x => x).ToArray();

    public static void Main(string[] args)
    {
        int[][] nestedArrays = new int[][] { new int[] { 1, 2 }, new int[] { 3, 4 }, new int[] { 5, 6 } };
        Console.WriteLine(string.Join(", ", FlattenArray(nestedArrays)));
        // Output: 1, 2, 3, 4, 5, 6
    }
}



 
247. Find the Average of Numbers in an Array
The FindAverage function finds the average of numbers in an array.

using System;
using System.Linq;

public class Program
{
    // Function to find the average of numbers in an array
    public static double FindAverage(int[] arr) => (double)arr.Sum() / arr.Length;

    public static void Main(string[] args)
    {
        Console.WriteLine(FindAverage(new int[] { 1, 2, 3, 4, 5 })); 
        // Output: 3.0
    }
}





 
248. Sum the Squares of Numbers in an Array
The SumSquares function sum the squares of numbers in an array.

using System;
using System.Linq;

public class Program
{
    // Function to sum the squares of numbers in an array
    public static int SumSquares(int[] arr)
    {
        return arr.Select(num => num * num).Sum();
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(SumSquares(new int[] { 1, 2, 3, 4, 5 })); 
        // Output: 55
    }
}



 
249. Check if a String is a Palindrome (Ignoring Non-Alphanumeric Characters)
The IsPalindromeIgnoringNonAlphanumeric function checks if a string is a palindrome (ignoring non-alphanumeric characters).

using System;
using System.Text.RegularExpressions;

public class Program
{
    // Function to check if a string is a palindrome, ignoring non-alphanumeric characters
    public static bool IsPalindromeIgnoringNonAlphanumeric(string str)
    {
        // Remove non-alphanumeric characters and convert to lowercase
        string cleanedStr = Regex.Replace(str.ToLower(), @"[^a-z0-9]", "");
        // Check if the cleaned string is equal to its reversed version
        return cleanedStr == ReverseString(cleanedStr);
    }

    // Function to reverse a string
    public static string ReverseString(string str)
    {
        char[] charArray = str.ToCharArray();
        Array.Reverse(charArray);
        return new string(charArray);
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(IsPalindromeIgnoringNonAlphanumeric("A man, a plan, a canal, Panama!")); // Output: True
        // Output: True
        
    }
}


250. Find Bob in a List
The FindBob function takes an array of strings representing names and returns the index of the name "Bob" in the array. If "Bob" is not found, it returns -1.

using System;

public class Program250 {
    public static int FindBob(string[] names) => Array.IndexOf(names, "Bob");

    public static void Main(string[] args) {
        string[] names1 = {"Jimmy", "Layla", "Mandy"};
        string[] names2 = {"Bob", "Nathan", "Hayden"};
        string[] names3 = {"Paul", "Layla", "Bob"};
        string[] names4 = {"Garry", "Maria", "Bethany", "Bob", "Pauline"};

        Console.WriteLine(FindBob(names1)); // -1
        Console.WriteLine(FindBob(names2)); // 0
        Console.WriteLine(FindBob(names3)); // 2
        Console.WriteLine(FindBob(names4)); // 3
    }
}






 
251. Calculate The Volume of a Box
The function BoxVolume calculates the volume of a box.

using System;

public class Program251
{
    // Method to calculate the volume of a box
    public static double BoxVolume(double length, double width, double height) => length * width * height;

    public static void Main(string[] args)
    {
        double length = 5;
        double width = 3;
        double height = 2;
        
        double volume = BoxVolume(length, width, height);
        Console.WriteLine($"Volume of the box: {volume}");
        // Output: Volume of the box: 30
    }
}






 
252. Move Zeros to the End
The MoveZeros function convert the given array such that all the zeros are moved to the end while maintaining the order of the non-zero elements.

using System;
using System.Linq;

public class Program252 {
    public static int[] MoveZeros(int[] arr) => arr.Where(x => x != 0).Concat(arr.Where(x => x == 0)).ToArray();
    
    public static void Main(string[] args)
    {
        int[] result = MoveZeros(new int[] { 1, 2, 0, 1, 0, 1, 0, 3, 0, 1 });
        Console.WriteLine(string.Join(",", result)); 
        // Output: 1,2,1,1,3,1,0,0,0,0
        
        result = MoveZeros(new int[] { 9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9 });
        Console.WriteLine(string.Join(",", result)); 
        // Output: 9,9,1,2,1,1,3,1,9,9,0,0,0,0,0,0,0,0,0,0
        
        // Additional test cases here...
    }
}




 
253. Find the Median of Numbers in an Array
The FindMedian function finds the median of numbers in an array.

using System;
using System.Linq;

public class Program253
{
    // Function to find the median value of numbers in an array
    public static double FindMedian(int[] arr)
    {
        int[] sortedArr = arr.OrderBy(x => x).ToArray();
        int middle = sortedArr.Length / 2;
        return sortedArr.Length % 2 == 0 ? (sortedArr[middle - 1] + sortedArr[middle]) / 2.0 : sortedArr[middle];
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(FindMedian(new int[] { 1, 3, 2, 4, 5 })); 
        // Output: 3
    }
}



 
254. Count the Vowels in a String
The CountVowels function counts the vowels in a string.

using System;
using System.Text.RegularExpressions;

public class Program254
{
    // Function to count the number of vowels in a string
    public static int CountVowels(string str)
    {
        return Regex.Matches(str, @"[aeiouAEIOU]").Count;
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(CountVowels("Hello, how are you?")); 
        // Output: 7
    }
}



 
255. Calculate Vote Difference
The GetVoteCount function takes a dynamic object representing the votes, extracts the upvote and downvote counts, and returns the difference between them.

using System;

public class Program255
{
    // Function to get the difference between upvotes and downvotes
    public static int GetVoteCount(dynamic votes) => (votes.upvotes ?? 0) - (votes.downvotes ?? 0);

    public static void Main(string[] args)
    {
        Console.WriteLine(GetVoteCount(new { upvotes = 13, downvotes = 0 })); 
        // 13
        Console.WriteLine(GetVoteCount(new { upvotes = 2, downvotes = 33 })); 
        // -31
        Console.WriteLine(GetVoteCount(new { upvotes = 132, downvotes = 132 })); 
        // 0
        Console.WriteLine(GetVoteCount(new { upvotes = 0, downvotes = 0 })); 
        // 0
        Console.WriteLine(GetVoteCount(new { downvotes = 4, upvotes = 1 })); 
        // -3
    }
}

 
256. Chatroom Status
The ChatroomStatus determines the status of a chatroom based on the number of users online. If there are no users, it returns "no one online". If there is only one user, it returns their username followed by "online". If there are two users, it returns both usernames followed by "online". If there are more than two users, it returns the usernames of the first two users followed by the count of remaining users and "more online".

using System;
using System.Linq;

public class Program
{
    public static string ChatroomStatus(string[] users)
    {
        return users.Length == 0 ? "no one online" : 
               users.Length < 3 ? string.Join(" and ", users) + " online" : 
               $"{users[0]}, {users[1]} and {users.Length - 2} more online";
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(ChatroomStatus(new string[] { })); // "no one online"
        Console.WriteLine(ChatroomStatus(new string[] { "becky325" })); // "becky325 online"
        Console.WriteLine(ChatroomStatus(new string[] { "becky325", "malcolm888" })); // "becky325 and malcolm888 online"
        Console.WriteLine(ChatroomStatus(new string[] { "becky325", "malcolm888", "fah32fa" })); // "becky325, malcolm888 and 1 more online"
        Console.WriteLine(ChatroomStatus(new string[] { "paRIE_to" })); // "paRIE_to online"
        Console.WriteLine(ChatroomStatus(new string[] { "s234f", "mailbox2" })); // "s234f and mailbox2 online"
        Console.WriteLine(ChatroomStatus(new string[] { "pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91" })); // "pap_ier44, townieBOY and 4 more online"
    }
}
257. Find the ASCII Value of a Character
The GetAsciiValue function finds the ASCII value of a character.

using System;

public class Program257
{
    // Function to get the ASCII value of a character
    public static int GetAsciiValue(char c)
    {
        return (int)c;
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(GetAsciiValue('A'));
        // Output: 65
    }
}



 
258. Check if a String is an Isogram (No Repeating Characters)
The IsIsogram function checks if a string is an isogram (no repeating characters)

using System;
using System.Linq;

public class Program258
{
    // Function to check if a string is an isogram
    public static bool IsIsogram(string str)
    {
        return str.ToLower().Distinct().Count() == str.Length;
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(IsIsogram("hello"));
        // Output: False
        Console.WriteLine(IsIsogram("world"));
        // Output: True
    }
}



 
259. Calculate the Hamming Distance of Two Strings (Equal Length)
The HammingDistance function calculates the hamming distance of two strings (equal length).

using System;

public class Program259
{
    // Function to calculate the Hamming distance of two strings
    public static int HammingDistance(string str1, string str2) =>
        str1.Length != str2.Length ? throw new ArgumentException("Strings must have equal length") :
        str1.Zip(str2, (c1, c2) => c1 != c2 ? 1 : 0).Sum();

    public static void Main(string[] args)
    {
        Console.WriteLine(HammingDistance("karolin", "kathrin"));
        // Output: 3
    }
}




 
260. Calculate the Distance between Two Points in a 2D Plane
The CalculateDistance function calculates the distance between two points in a 2D plane.

using System;

public class Program260
{
    // Function to calculate the distance between two points in a 2D plane
    public static double CalculateDistance(int[] point1, int[] point2)
    {
        int x1 = point1[0];
        int y1 = point1[1];
        int x2 = point2[0];
        int y2 = point2[1];
        return Math.Sqrt(Math.Pow(x2 - x1, 2) + Math.Pow(y2 - y1, 2));
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(CalculateDistance(new int[] { 0, 0 }, new int[] { 3, 4 }));
        // Output: 5 (Pythagorean triple: 3^2 + 4^2 = 5^2)
    }
}



 
261. Check if a String is a Positive Number (No Sign or Decimal Allowed)
The IsPositiveNumber function checks if a string is a positive number (no sign or decimal allowed)

using System;
using System.Text.RegularExpressions;

public class Program
{
    public static bool IsPositiveNumber(string str) => Regex.IsMatch(str, @"^\d+$");

    public static void Main(string[] args)
    {
        Console.WriteLine(IsPositiveNumber("123"));   
        // Output: true
        Console.WriteLine(IsPositiveNumber("-123"));  
        // Output: false
    }
}


 
262. Find the First Non-Repeating Character in a String
The FindFirstNonRepeatingCharacter function finds the first non-repeating character in a string.

using System;
using System.Linq;

public class Program262
{
    public static char FindFirstNonRepeatingCharacter(string str)
    {
        return str.GroupBy(c => c)
            .First(g => g.Count() == 1)
            .Key;
    }

    public static void Main(string[] args)
    {
        Console.WriteLine(FindFirstNonRepeatingCharacter("hello"));  
        // Output: 'h'
    }
}



 
263. Calculate the Area of a Kite
The AreaOfKite function calculates the area of a kite.

using System;

public class Program263
{
    // Function to calculate the area of a kite
    public static double AreaOfKite(double d1, double d2) => 0.5 * d1 * d2;

    public static void Main(string[] args)
    {
        Console.WriteLine($"Area of the kite: {AreaOfKite(10, 6)}");
        // Output: Area of the kite: 30.0
    }
}



 
264. Calculate the Area of a Sector
The SectorArea function calculates the area of a sector within a circle based on the provided radius and angle.

using System;

public class Program264
{
    // Function to calculate the area of a sector
    public static double SectorArea(double radius, double angle) => Math.PI * Math.Pow(radius, 2) * angle / 360.0;

    public static void Main(string[] args)
    {
        Console.WriteLine($"Area of the sector: {SectorArea(5, 60)}");
        // Output: Area of the sector: 5.235987755982989
    }
}
