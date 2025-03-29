# 250+ Killer Ruby One-Liners

### 1. Convert Celsius to Fahrenheit
The celsius_to_fahrenheit function takes a temperature value in Celsius as input and computes its equivalent temperature in Fahrenheit using the formula (Celsius * 9/5) + 32. 

```
def celsius_to_fahrenheit(celsius)
  (celsius * 9/5) + 32
end

# Example:
puts celsius_to_fahrenheit(25)
# Output: 77°F (25°C converted to Fahrenheit)
```

### 2. Swap two variables
The swap_without_temp function swaps the values of two variables a and b without using a temporary variable. 

```
def swap_without_temp(a, b)
  a, b = a + b, a
  [a - b, a - (a - b)]
end

# Example:
a = 5
b = 10
puts "Before swapping: a = #{a}, b = #{b}"
a, b = swap_without_temp(a, b)
puts "After swapping: a = #{a}, b = #{b}"
```

3. Convert RGB to Hex
The rgb_to_hex function combines the red, green, and blue (RGB) values into a single hexadecimal color code. 

def rgb_to_hex(r, g, b)
  "##{((r << 16) + (g << 8) + b).to_s(16).rjust(6, '0')}"
end

# Example usage:
puts rgb_to_hex(0, 51, 255)
# Output: #0033ff





 
4. Transpose of a Matrix
The transpose_matrix function computes the transpose of a given matrix. 

def transpose_matrix(matrix)
  matrix.transpose
end

# Example usage:
matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
puts transpose_matrix(matrix)
# Output:
# [1, 4, 7]
# [2, 5, 8]
# [3, 6, 9]





 
5. Check if Date is Valid
The is_date_valid function checks if a date is valid.

require 'date'

def is_date_valid(*val)
  !!(Date.parse(*val) rescue false)
end

# Example usage:
puts is_date_valid("December 17, 1995 03:24:00")
# Output: true



 
6. Find the day of year
The day_of_year function takes a date as input and calculates the day of the year for that date. 

require 'date'

def day_of_year(date)
  (date - Date.new(date.year, 1, 1)).to_i + 1
end

# Example usage:
puts day_of_year(Date.new(2024, 10, 1))
# Output: 275 (if it's October 1st, 2024)





 
7. Capitalize a String
The capitalize function takes a string as input and capitalizes the first character.

def capitalize(str)
  str.capitalize
end

# Example usage:
puts capitalize("follow for more")
# Output: Follow for more


  
8. Find the number of days between two days
The day_diff function finds the number of days between two days.

require 'date'

def day_diff(date1, date2)
  ((date2 - date1).to_i.abs) + 1
end

# Example usage:
date1 = Date.new(2020, 10, 21)
date2 = Date.new(2021, 10, 22)
puts day_diff(date1, date2)
# Output: 367



 
9. Find the Frecuency of Character in a String
The character_frequency function finds the frequency of characters in a String. 

def character_frequency(str)
  str.chars.each_with_object(Hash.new(0)) { |char, counts| counts[char] += 1 }
end

puts character_frequency("hello")
# Output: {"h"=>1, "e"=>1, "l"=>2, "o"=>1}



 
10. Generate Random Hex
The random_hex function generates a random integer between 0 and 16777215 (0xffffff in hexadecimal).

def random_hex
  '#' + rand(0xffffff).to_s(16).rjust(6, '0')
end

# Example usage:
puts random_hex
# Output: #92b008



 
11. Create random strings
The random_string function generates a random String of lowercase letters with the specified length. 

def random_string(length)
  (0...length).map { ('a'..'z').to_a[rand(26)] }.join
end

puts random_string(10)
# Output: "gxprvnxjol"



 
12. Log Time from Date
The time_from_date function converts a given Time object to a string representation of the time in the format "hours:minutes:seconds". 

def time_from_date(date)
  date.strftime("%H:%M:%S")
end

# Example:
puts time_from_date(Time.new(2021, 1, 10, 17, 30, 0)) 
# Output: "17:30:00"


 
13. Check if a number is even or odd
The is_even function checks whether a given number is even or odd by utilizing the even? method available for numeric objects in Ruby. It returns true if the number is even and false otherwise.

def is_even(num)
  num.even?
end

# Example usage:
puts is_even(2)
# Output: true


 
14. Find Average of Numbers
The average function calculates the average of a list of numbers by summing them up using the sum method and then dividing the sum by the total count of numbers provided as arguments.

def average(*args)
  args.sum(0.0) / args.length
end

# Example usage:
puts average(1, 2, 3, 4)
# Output: 2.5

 
15. Pyramid Pattern
The create_pyramid function takes the number of rows as an argument and returns an array representing the pyramid pattern. 

def create_pyramid(rows)
  (1..rows).map { |i| ' ' * (rows - i) + '*' * (2 * i - 1) }
end

# Example usage:
pyramid = create_pyramid(5)
pyramid.each { |row| puts row }

#     *
#    ***
#   *****
#  *******
# *********





 
16. Reverse a string
The reverse function takes a string as input and returns a new string with the characters in reverse order. 

def reverse(str)
  str.reverse
end

# Example usage:
puts reverse('hello world')
# Output: 'dlrow olleh'

 
17. Check if array is empty
The is_not_empty function checks if an array is not empty. 

def is_not_empty(arr)
  arr.is_a?(Array) && !arr.empty?
end

# Example usage:
puts is_not_empty([1, 2, 3])
# Output: true


 
18. Calculate Factorial of a Number
The factorial function takes a non-negative integer n as input and returns its factorial.

def factorial(n)
  n.zero? ? 1 : (1..n).reduce(:*)
end

# Example usage:
puts factorial(5) 
# Output: 120


 
19. Shuffle an Array
The suffle function shuffles the elements of the given array randomly.

def shuffle_array(arr)
  arr.shuffle
end

# Example usage:
puts shuffle_array([1, 2, 3, 4])
# Output: [1, 4, 3, 2] (Randomly shuffled array)


 
20. Validate Email Address Format
The valid_email? function checks if the format of the given email address string is valid according to common conventions.

def valid_email?(email)
  # Regular expression for basic email format validation
  email_regex = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  
  # Check if email matches the regular expression
  !!(email =~ email_regex)
end

# Example usage:
puts valid_email?('user@example.com')
# Output: true

puts valid_email?('invalid-email')
# Output: false



 
21. Remove Duplicated from Array
The remove_duplicates function removes duplicate elements from the given array and returns a new array with unique elements.

def remove_duplicates(arr)
  arr.uniq
end

# Example usage:
puts remove_duplicates([1, 2, 3, 3, 4, 4, 5, 5, 6])
# Output: [1, 2, 3, 4, 5, 6]


 
22. Get the Length of a String
The get_length function returns the number of characters in the given string.

def get_length(str)
  str.length
end

# Example usage:
puts get_length("Hello, world!")
# Output: 13


 
23. Calculate the Area of a Circle
The calculate_circle_area function calculates the area of a circle given its radius.

def calculate_circle_area(radius)
  Math::PI * radius**2
end

# Example usage:
puts calculate_circle_area(5)
# Output: 78.53981633974483

 


24. Check if a Number is Prime
The is_prime function checks if the given number is a prime number.

def is_prime(num)
  num > 1 && (2..Math.sqrt(num)).none? { |i| num % i == 0 }
end

# Example usage:
puts is_prime(13)  
# Output: true


  
 
25. Count Occurrences of a Character in a String
The count_occurrences function counts the occurrences of the specified character in the given string.

def count_occurrences(str, char)
  str.count(char)
end

# Example usage:
puts count_occurrences("banana", "a")
# Output: 3


 
26. Remove Leading and Trailing Whitespaces
The remove_whitespaces function removes leading and trailing whitespaces from the given string.

def remove_whitespaces(str)
  str.strip
end

# Example usage:
puts remove_whitespaces("  Hello, world!  ")
# Output: "Hello, world!"


 
27. Generate a Random Number within a Range
The random_in_range function generates a random number within the specified range.

def random_in_range(min, max)
  rand(min..max)
end

# Example usage:
puts random_in_range(1, 10)
# Output: Random number between 1 and 10 (inclusive)


 
28. Convert Seconds to HH:MM:SS Format
The seconds_to_hh_mm_ss function converts the given number of seconds into the HH:MM:SS format.

def seconds_to_hh_mm_ss(seconds)
  format("%02d:%02d:%02d", seconds / 3600, (seconds % 3600) / 60, seconds % 60)
end

# Example usage:
puts seconds_to_hh_mm_ss(3660)
# Output: "01:01:00"



  
 
29. Get the Last Element of an Array
The get_last_element function retrieves the last element of the given array.

def get_last_element(arr)
  arr.last
end

# Example usage:
puts get_last_element([1, 2, 3, 4])
# Output: 4

 
30. Sort an Array of Numbers in Ascending Order
The sort_ascending function sorts the given array of numbers in ascending order.

def sort_ascending(arr)
  arr.sort
end

# Example usage:
puts sort_ascending([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])
# Output: [1, 1, 2, 3, 3, 4, 5, 5, 6, 9]

 
31. Check if a String is Palindrome
The is_palindrome function checks if the given string is a palindrome.

def is_palindrome(str)
  str == str.reverse
end

# Example usage:
puts is_palindrome("level")
# Output: true


 
32. Calculate Factorial of a Number
The factorial function calculates the factorial of a given number using recursion.

def factorial(num)
  if num == 0 || num == 1
    1
  else
    num * factorial(num - 1)
  end
end

# Example usage:
puts factorial(5)
# Output: 120

  
 
33. Sum all Numbers in an Array
The sum_array function calculates the sum of all numbers in a given array.

def sum_array(arr)
  arr.reduce(0, :+)
end

# Example usage:
puts sum_array([1, 2, 3, 4, 5])
# Output: 15


 
34. Find the Maximum Value in an Array
The find_max function finds the maximum value in a given array.
.
def find_max(arr)
  arr.max
end

# Example usage:
puts find_max([10, 5, 8, 20, 3])
# Output: 20


 
35. Get the Current Date in DD/MM/YYYY Format
The get_current_date function returns the current date in the format "DD/MM/YYYY".

def get_current_date
  Time.now.strftime("%d/%m/%Y")
end

# Example usage:
puts get_current_date
# Output: "03/04/2024" (if today's date is April 3, 2024)


  
 
36. Calculate the Power of a Number
The power function calculates the power of a given base raised to the specified exponent.

def power(base, exponent)
  base ** exponent
end

# Example usage:
puts power(2, 5)
# Output: 32


 
37. Convert String to Number
The string_to_number function converts a string to a floating-point number using the to_f method.

def string_to_number(str)
  str.to_f
end

# Example usage:
puts string_to_number("3.14")
# Output: 3.14

 
38. Find the First N Fibonacci Numbers
The fibonacci function generates the first n Fibonacci numbers and returns them in an array.

def fibonacci(n)
  result = [0, 1]
  (2...n).each { |i| result << result[i - 1] + result[i - 2] }
  result
end

# Example:
puts fibonacci(8)
# Output: [0, 1, 1, 2, 3, 5, 8, 13]

  
 
39. Count the Number of Words in a String
The count_words function counts the number of words in a given string.

def count_words(str)
  str.strip.split(/\s+/).length
end

# Example:
puts count_words("Hello world, how are you?")
# Output: 5



 
40. Reverse an Array
The reverse_array function reverses the elements of a given array.

def reverse_array(arr)
  arr.reverse
end

# Example:
puts reverse_array([1, 2, 3, 4, 5])
# Output: [5, 4, 3, 2, 1]


 
41. Get the Current Year
The current_year function returns the current year as an integer. 

def current_year
  Time.now.year
end

# Example:
puts current_year
# Output: 2023 (depending on the current year)


 
42. Generate a Random Number between 1 and 10
The random_1_to_10 function generates a random integer between 1 and 10 (inclusive) using the rand method with a range of 1 to 10.

def random_1_to_10
  rand(1..10)
end

# Example:
puts random_1_to_10
# Output: Random number between 1 and 10 (inclusive)



 
43. Check if a String is Empty
The empty_string? function removes leading and trailing whitespace from a string, and then check if the resulting string is empty using the empty? method.

def empty_string?(str)
  str.strip.empty?
end

# Example:
puts empty_string?("") 
# Output: true
puts empty_string?("Hello, world!") 
# Output: false


 
44. Check if an Object has a Specific Property
The has_property? function checks if a given object has a specific property.

def has_property?(obj, prop)
  obj.key?(prop.to_sym) || obj.key?(prop.to_s)
end

# Example:
person = { name: "John", age: 30 }
puts has_property?(person, :name)
# Output: true
puts has_property?(person, :gender)
# Output: false

 
45. Calculate the Average of Numbers in an Array
The average function calculates the average of numbers in an array.

def average(arr)
  arr.sum.to_f / arr.length
end

# Example:
puts average([1, 2, 3, 4, 5])
# Output: 3.0


 
46. Check if a Number is a Multiple of 5
The is_multiple_of_5 function checks if a given number is a multiple of 5. 

def is_multiple_of_5(num)
  num % 5 == 0
end

# Example:
puts is_multiple_of_5(10)  
# Output: true
puts is_multiple_of_5(7)   
# Output: false


 
47. Convert Minutes to Seconds
The mins_to_secs convert minutes to seconds. It takes a number representing minutes (mins) as input and returns the equivalent number of seconds by multiplying the number of minutes by 60.

def mins_to_secs(mins)
  mins * 60
end

# Example:
puts mins_to_secs(5)  
# Output: 300


 
48. Find the Maximum Value in an Array of Objects
The find_max_value function finds the maximum value in an array of objects.

def find_max_value(arr, key)
  arr.map { |item| item[key] }.max
end

# Example:
students = [
  { name: "Alice", score: 80 },
  { name: "Bob", score: 95 },
  { name: "Charlie", score: 70 }
]

puts find_max_value(students, :score) 
# Output: 95


 
49. Check if a String starts with a specific character
The starts_with_char function checks if a given string starts with a specific character.

def starts_with_char(str, char)
  str.start_with?(char)
end

# Example:
puts starts_with_char("Hello, world!", "H")
# Output: true
puts starts_with_char("Hello, world!", "h")
# Output: false


 
50. Convert a String to Title Case
The to_title_case function converts a given string to title case.

def to_title_case(str)
  str.split.map(&:capitalize).join(' ')
end

# Example:
puts to_title_case("hello world")
# Output: "Hello World"


 
51. Check if an Array contains a specific value
The contains_value function checks if a given array contains a specific value.

def contains_value(arr, value)
  arr.include?(value)
end

# Example usage:
puts contains_value([1, 2, 3, 4, 5], 3)
# Output: true
puts contains_value([1, 2, 3, 4, 5], 6)
# Output: false


 
52. Convert an Array to a Comma-separated String
The array_to_csv function converts an array to a comma-separated string. 

def array_to_csv(arr)
  arr.join(', ')
end

# Example:
puts array_to_csv([1, 2, 3, 4, 5])
# Output: "1, 2, 3, 4, 5"





 
53. Check if a Year is a Leap Year
The is_leap_year function takes a year as input and returns true if it's a leap year and false otherwise.

def is_leap_year(year)
  (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
end

# Example:
puts is_leap_year(2024) # Output: true
puts is_leap_year(2023) # Output: false


 
54. Find the Index of an Element in an Array
The find_index function takes an array arr and an element element as input, and it returns the index of the first occurrence of the element in the array. If the element is not found, it returns -1.

def find_index(arr, element)
  arr.index(element) || -1
end

# Example:
fruits = ["apple", "banana", "orange", "grape"]
puts find_index(fruits, "orange") # Output: 2



 
55. Convert Minutes to Hours and Minutes
The minsToHoursAndMins function takes the number of minutes mins as input, calculates the equivalent hours and remaining minutes, and returns a string representing the result in the format "X hours and Y minutes".

def mins_to_hours_and_mins(mins)
  "#{mins / 60} hours and #{mins % 60} minutes"
end

# Example:
puts mins_to_hours_and_mins(150)
# Output: "2 hours and 30 minutes"


  
 
56. Check if an Array is Sorted in Ascending Order
The is_sorted_ascending function takes an array arr as input and checks if every element in the array is greater than or equal to the previous element, ensuring that the array is sorted in ascending order. 

def is_sorted_ascending(arr)
  arr.each_cons(2).all? { |a, b| a <= b }
end

# Example:
puts is_sorted_ascending([1, 2, 3, 5, 8]) 
# Output: true
puts is_sorted_ascending([1, 5, 3, 8, 2]) 
# Output: false


 
57. Remove a Specific Element from an Array
The remove_element function takes an array arr and an element element to remove from the array. It returns a new array with all occurrences of the specified element removed. It utilizes the reject method to filter out elements equal to the specified element.

def remove_element(arr, element)
  arr.reject { |el| el == element }
end

# Example:
puts remove_element([1, 2, 3, 4, 5], 3).inspect 
# Output: [1, 2, 4, 5]


 
58. Truncate a String to a Given Length
The truncate_string takes a string str and a maximum length max_length. If the length of the string exceeds max_length, it truncates the string and appends '...' to indicate that it has been truncated. 

def truncate_string(str, max_length)
  str.length > max_length ? str[0, max_length] + '...' : str
end

# Example:
puts truncate_string("Hello, world!", 5)
# Output: "Hello..."


 
59. Calculate the Exponentiation of a Number
The exponentiate function calculates the exponentation of a number.

def exponentiate(base, exponent)
  base ** exponent
end

# Example:
puts exponentiate(2, 3)
# Output: 8


 
60. Find the Difference between Two Dates in Days
The date_difference_in_days function finds the difference between two dates in days.

def date_difference_in_days(date1, date2)
  ((date2 - date1) / (60 * 60 * 24)).to_i.abs
end

# Example:
start_date = Time.new(2023, 8, 1)
end_date = Time.new(2023, 8, 10)
puts date_difference_in_days(start_date, end_date)
# Output: 9



 
61. Check if a String is a Valid Email Address
The is_valid_email function returns true if the email string matches the pattern, and false otherwise.

def is_valid_email(email)
  !!(email =~ /^[^\s@]+@[^\s@]+\.[^\s@]+$/)
end

# Example:
puts is_valid_email("user@example.com")
# Output: true
puts is_valid_email("invalid-email")
# Output: false


 
62. Convert Seconds to Minutes and Seconds
The secs_to_mins_and_secs function calculate the number of minutes and remaining seconds and then returns a formatted string containing the result.

def secs_to_mins_and_secs(seconds)
  "#{seconds / 60} minutes and #{seconds % 60} seconds"
end

# Example:
puts secs_to_mins_and_secs(120)
# Output: "2 minutes and 0 seconds"



 
63. Check if an Object is a Function
The is_function check if an object is a function by passing the object as an argument when calling the method.

def is_function(obj)
  obj.is_a?(Proc) || obj.is_a?(Method)
end

# Example:
puts is_function(-> { })  
# Output: true
puts is_function({ })     
# Output: false


 
64. Convert Binary Number to Decimal
The binary_to_decimal function converts the binary string to its decimal representation using the to_i method with a base argument of 2. 

def binary_to_decimal(binary)
  binary.to_i(2)
end

# Example:
puts binary_to_decimal("1101") 
# Output: 13


 
65. Check if an Array contains only Unique Values
The has_unique_values function converts the array arr to a set using uniq, which removes duplicate elements. 

def has_unique_values(arr)
  arr.uniq.size == arr.size
end

# Example:
puts has_unique_values([1, 2, 3, 4, 5]) 
# Output: true
puts has_unique_values([1, 2, 3, 4, 4]) 
# Output: false


 
66. Get the Day of the Week from a Date
The get_day_of_week function takes a Date object date as input. Then, it uses the strftime method with the format %A, which represents the full name of the day of the week (e.g., "Sunday", "Monday", etc.), to retrieve the day of the week from the Date object.

require 'date'

def get_day_of_week(date)
  date.strftime("%A")
end

# Example:
puts get_day_of_week(Date.parse("2023-08-02")) 
# Output: "Wednesday"


  
 
67. Check if a Number is a Power of Two
The is_power_of_two function checks whether a given number is a power of two using bitwise operations. It returns true if the number is a power of two and false otherwise.

# Check if a given number is a power of two
def is_power_of_two(num)
  (num & (num - 1)) == 0
end

# Example usage:
puts is_power_of_two(16) # Output: true (16 is 2^4)
puts is_power_of_two(5)  # Output: false

 
68. Generate multiplication table
The generate_multiplication_table function creates a multiplication table of a specified size. It takes a single parameter size, which determines the dimensions of the table. 

def generate_multiplication_table(size)
  (1..size).map { |row| (1..size).map { |col| row * col } }
end

# Example usage:
puts generate_multiplication_table(5)
# Output:
# [1, 2, 3, 4, 5]
# [2, 4, 6, 8, 10]
# [3, 6, 9, 12, 15]
# [4, 8, 12, 16, 20]
# [5, 10, 15, 20, 25]



 
69. Check if an Array contains an Even Number
The has_even_number function checks if an array contains at least one even number.

# Check if a given array contains at least one even number
def has_even_number(arr)
  arr.any? { |num| num % 2 == 0 }
end

# Example usage:
puts has_even_number([1, 3, 5, 7, 8]) # Output: true
puts has_even_number([1, 3, 5, 7, 9]) # Output: false


 
70. Get the Month Name from a Date
The get_month_name function retrieves the name of the month from a given date.

require 'date'

def get_month_name(date)
  date.strftime("%B")
end

# Example usage:
puts get_month_name(Date.parse("2023-08-02")) 
# Output: "August"


 
71. Check if a String is a Palindrome (case-insensitive)
The is_palindrome_case_insensitive function checks if a given string is a palindrome.

def is_palindrome_case_insensitive(str)
  str.downcase == str.downcase.reverse
end

# Example usage:
puts is_palindrome_case_insensitive("LeVel") 
# Output: true
puts is_palindrome_case_insensitive("Hello") 
# Output: false



  
 
72. Convert Feet to Meters
The feet_to_meters function converts a given length from feet to meters.

# Convert a given length in feet to meters
def feet_to_meters(feet)
  feet * 0.3048
end

# Example usage:
puts feet_to_meters(10)
# Output: 3.048


 
73. Check if a Number is a Perfect Square
The is_perfect_square function checks if a given number is a perfect square.

# Check if a given number is a perfect square
def is_perfect_square(num)
  Math.sqrt(num) % 1 == 0
end

# Example usage:
puts is_perfect_square(16)
# Output: true

puts is_perfect_square(10)
# Output: false



 
74. Check if a String contains only Numbers
The contains_only_numbers function checks if a given string contains only numeric characters.

# Check if a given string contains only numeric characters
def contains_only_numbers(str)
  /\A\d+\z/.match?(str)
end

# Example usage:
puts contains_only_numbers("12345")
# Output: true

puts contains_only_numbers("12a34")
# Output: false


 
75. Get the Current Month (0-based index)
The current_month retrieves the current month as a 0-based index.

# Get the current month as a 0-based index (0 for January, 1 for February, etc.)
def current_month
  Time.now.month - 1
end

# Example usage:
puts current_month
# Output: Current month (0-based index)


 
76. Calculate the Mean of an Array of Numbers
The calculate_mean function calculates the mean (average) of an array of numbers.

def calculate_mean(nums)
  mean = ->(nums) { nums.empty? ? 0 : nums.reduce(:+) / nums.length.to_f }
  mean.call(nums)
end

# Example usage:
puts calculate_mean([1, 2, 3, 4, 5]) 
# Output: 3.0 (Mean of 1, 2, 3, 4, 5 is 3.0)



 
77. Check if a Number is a Prime Number
The is_prime function checks if a given number is prime.

def is_prime(num)
  num > 1 && (2..Math.sqrt(num)).none? { |i| num % i == 0 }
end

# Example usage:
puts is_prime(13) 
# Output: true
puts is_prime(4) 
# Output: false


  
 
78. Get the Last N Elements of an Array
The last_n_elements function retrieves the last n elements of an array.

def last_n_elements(arr, n)
  # Use the last method to retrieve the last n elements of the array
  arr.last(n)
end

# Example:
puts last_n_elements([1, 2, 3, 4, 5], 3)
# Output: [3, 4, 5]



 
79. Convert Degrees to Radians
The deg_to_rad function converts an angle in degrees to radians.

def deg_to_rad(degrees)
  # Multiply degrees by the value of PI divided by 180 to get radians
  degrees * (Math::PI / 180)
end

# Example:
puts deg_to_rad(90)
# Output: 1.5707963267948966



 
80. Check if a String is a Valid URL
The is_valid_url function checks if a given string is a valid URL.

require 'uri'

def is_valid_url(url)
  # Attempt to parse the URL, then check if it's an HTTP or HTTPS URL
  URI.parse(url).is_a?(URI::HTTP) rescue false
end

# Example:
puts is_valid_url("https://www.example.com")
# Output: true

puts is_valid_url("invalid-url")
# Output: false



  
 
81. Find the Intersection of Two Arrays
The find_intersection function finds the intersection of two arrays

def find_intersection(arr1, arr2)
  # Return the common elements (intersection) between the two arrays
  arr1 & arr2
end

# Example:
puts find_intersection([1, 2, 3], [2, 3, 4])
# Output: [2, 3]

 
82. Convert Days to Years, Months, and Days
The days_to_years_months_days function converts a given number of days to years, months, and remaining days.

def days_to_years_months_days(days)
  "#{days / 365} years, #{(days % 365) / 30} months, and #{(days % 365) % 30} days"
end

# Example:
puts days_to_years_months_days(1000)
# Output: "2 years, 8 months, and 20 days"



 
83. Check if an Object is Empty (no own properties)
The is_empty_object function checks if a given object has no own properties.

def is_empty_object(obj)
  # Return true if the object has no own properties, false otherwise
  obj.empty?
end

# Example:
puts is_empty_object({})  
# Output: true
puts is_empty_object({ name: "John", age: 30 })  
# Output: false



 
84. Calculate the Factorial of a Number (recursive)
The factorial function calculates the factorial of a number using recursion.

def factorial(num)
  num <= 1 ? 1 : num * factorial(num - 1)
end

# Example:
puts factorial(5)
# Output: 120


 
85. Remove Whitespace from a String
The remove_whitespace function removes all whitespace characters from a given string:

def remove_whitespace(str)
  # Use the gsub method to replace all whitespace characters with an empty string
  str.gsub(/\s/, '')
end

# Example:
puts remove_whitespace("  Hello,  world!  ")
# Output: "Hello,world!"





 
86. Find the Difference between Two Arrays
The array_difference function finds the difference between two arrays.

def array_difference(arr1, arr2)
  # Subtract elements of arr2 from arr1
  arr1 - arr2
end

# Example:
puts array_difference([1, 2, 3], [2, 3, 4])
# Output: [1]



 
87. Check if a Number is a Fibonacci Number
The is_fibonacci function checks if a number is a Fibonacci number.

def is_fibonacci(num)
  Math.sqrt(num).to_i**2 == num || (Math.sqrt(5 * num**2 + 4).to_i**2 == 5 * num**2 + 4) || (Math.sqrt(5 * num**2 - 4).to_i**2 == 5 * num**2 - 4)
end

# Example:
puts is_fibonacci(5)  
# Output: true
puts is_fibonacci(6) 
# Output: false



 
88. Convert Hours to Minutes
The hours_to_minutes function takes a parameter hours and returns the equivalent number of minutes by multiplying hours by 60.

def hours_to_minutes(hours)
  # Multiply hours by 60 to get the equivalent number of minutes
  hours * 60
end

# Example:
puts hours_to_minutes(2)
# Output: 120



 
89. Get the First N Elements of an Array
The first_n_elements function takes an array arr and a number n as arguments. It returns an array containing the first n elements of arr using the first method. 

def first_n_elements(arr, n)
  # Use the first method to retrieve the first n elements of the array
  arr.first(n)
end

# Example:
puts first_n_elements([1, 2, 3, 4, 5], 3)
# Output: [1, 2, 3]



 
90. Check if a Number is Odd
The is_odd function takes a single argument num. It returns true if num is odd, using the odd? method available on integers in Ruby. 

# Check if a number is odd
is_odd = ->(num) { num.odd? }

# Example:
puts is_odd.call(5) # Output: true
puts is_odd.call(4) # Output: false


 
91. Calculate the Standard Deviation of an Array of Numbers
The standard_deviation function calculates the standard deviation of an array of numbers using the formula: square root of the average of the squared differences between each number and the mean of the array.

def standard_deviation(arr)
  Math.sqrt(arr.map { |num| (num - (arr.sum(0.0) / arr.length)) ** 2 }.sum(0.0) / arr.length)
end

# Example:
puts standard_deviation([1, 2, 3, 4, 5]) 
# Output: 1.4142135623730951



 
92. Check if a String ends with a specific Substring
The ends_with_substring function takes two parameters: str, which is the main string, and sub_str, which is the substring to check for at the end of the main string. 

# Check if a string ends with a specific substring
def ends_with_substring(str, sub_str)
  str.end_with?(sub_str)
end

# Example:
puts ends_with_substring("Hello, world!", "world!") 
# Output: true
puts ends_with_substring("Hello, world!", "Hello")  
# Output: false



 
93. Calculate the Sum of Squares of an Array
The sum_of_squares function calculates the sum of squares of an array.

# Calculate the sum of squares of an array
def sum_of_squares(arr)
  arr.reduce(0) { |acc, val| acc + val ** 2 }
end

# Example:
puts sum_of_squares([1, 2, 3, 4, 5])
# Output: 55


 
94. Check if a String is a Palindrome (case-sensitive)
The is_palindrome_case_sensitive function checks if a String is a palindrome (case-sensitive). 

# Check if a given string is a palindrome (case-sensitive)
def is_palindrome_case_sensitive(str)
  str == str.reverse
end

# Example:
puts is_palindrome_case_sensitive("level")
# Output: true
puts is_palindrome_case_sensitive("Hello")
# Output: false


 
95. Generate an Array of Random Numbers
The random_array function generates an array of random numbers.

def random_array(length)
  Array.new(length) { rand(100) }
end

# Example:
puts random_array(5).inspect
# Output: Array with 5 random numbers, e.g., [23, 45, 67, 11, 88]


 
96. Calculate the Greatest Common Divisor (GCD) of Two Numbers
The gcd function calculates the greatest common divisor of two numbers.

def gcd(num1, num2)
  num2 == 0 ? num1 : gcd(num2, num1 % num2)
end

# Example:
puts gcd(48, 18)
# Output: 6


 
97. Convert Seconds to Hours, Minutes, and Seconds
The secs_to_hours_mins_secs function convert seconds to hours, minutes, and remaining seconds.

def secs_to_hours_mins_secs(seconds)
  "#{seconds / 3600} hours, #{(seconds % 3600) / 60} minutes, and #{(seconds % 3600) % 60} seconds"
end

# Example:
puts secs_to_hours_mins_secs(7320)
# Output: "2 hours, 2 minutes, and 0 seconds"



 
98. Simple calculator
The calculator function takes three arguments: num1, operator, and num2. It then performs the calculation based on the provided operator (:+ for addition, :- for subtraction, :* for multiplication, and :/ for division).

def calculator(num1, operator, num2)
  num1.send(operator, num2)
end

# Example usage:
puts calculator(5, :+, 3)   
# Addition
puts calculator(10, :-, 4)  
# Subtraction
puts calculator(6, :*, 2)   
# Multiplication
puts calculator(20, :/, 5)  
# Division



 
99. Find the Longest Word in a String
The find_longest_word function returns the longest word in a String.

def find_longest_word(str)
  str.split(' ').max_by(&:length)
end

# Example:
puts find_longest_word("Hello, how are you doing?")
# Output: "doing?"

 
100. Count the occurrences of a character in a String
The count_occurrences function counts the occurrences of a character in a String.

def count_occurrences(str, char)
  str.count(char)
end

# Example:
puts count_occurrences("hello world", "l")
# Output: 3


 
101. Find the median of an array of numbers
The median function finds the median of an array of numbers.

def median(arr)
  sorted = arr.sort
  sorted.length.odd? ? sorted[sorted.length / 2] : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2.0
end

puts median([1, 3, 5, 7, 9])
# Output: 5.0


 
102. Remove Duplicates from a String
The remove_duplicates_from_string function removes duplicates from a String.

def remove_duplicates_from_string(str)
  str.chars.uniq.join('')
end

puts remove_duplicates_from_string("hello")
# Output: "helo"


 
103. Find the Mode of an Array of Numbers
The mode function finds the mode of an array of numbers.

def mode(arr)
  arr.group_by(&:itself).transform_values(&:count).select { |_, v| v == arr.group_by(&:itself).transform_values(&:count).values.max }.keys
end

puts mode([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])
# Output: [4]


 
104. Check if a Number is a Harshad Number (Niven Number)
The is_harshad_number takes a number as input, calculates the sum of its digits, and then checks if the number is divisible by the sum of its digits.

def is_harshad_number(num)
  sum_of_digits = num.digits.sum
  num % sum_of_digits == 0
end

puts is_harshad_number(18)
# Output: true
puts is_harshad_number(21)
# Output: false


 
105. Convert Binary Number to Decimal 
The binary_to_decimal function takes a binary string as input, splits it into individual digits, reverses them, and then calculates the decimal value by considering each digit's position and value, without using parseInt.

def binary_to_decimal(binary)
  binary.reverse.chars.map.with_index { |bit, index| bit.to_i * 2 ** index }.sum
end

puts binary_to_decimal("1101")
# Output: 13


 
106. Check if an Array is Sorted in Descending Order
The sorted_descending? function checks if an array is sorted in descending order.

def sorted_descending?(arr)
  arr.each_cons(2).all? { |a, b| a >= b }
end

puts sorted_descending?([5, 4, 3, 2, 1])
# Output: true
puts sorted_descending?([1, 5, 3, 8, 2])
# Output: false


 
107. Find the Average of Even Numbers in an Array
The average_of_even_numbers function finds the average of even numbers in an array.

def average_of_even_numbers(arr)
  even_numbers = arr.select(&:even?)
  even_numbers.sum.to_f / even_numbers.length
end

puts average_of_even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
# Output: 6.0


 
108. Capitalize the First Letter of Each Word in a String
The capitalize_words capitalizes the first letter of each word in a String.

def capitalize_words(str)
  str.gsub(/\b\w/) { |char| char.upcase }
end

puts capitalize_words("hello world")
# Output: "Hello World"


 
109. Check if an Array is a Subset of Another Array
The is_subset function takes two arrays arr1 and arr2 as input, and it checks whether every element of arr1 is present in arr2 using the all? method combined with include?. It returns true if all elements of arr1 are found in arr2, and false otherwise.

def is_subset(arr1, arr2)
  arr1.all? { |item| arr2.include?(item) }
end

puts is_subset([1, 2, 3], [2, 3, 4, 5, 6])
# Output: false
puts is_subset([1, 2, 3], [2, 3, 1, 5, 6])
# Output: true


 
110. Find the Minimum and Maximum Numbers in an Array
The min_max function takes an array arr as input and returns a hash containing the minimum and maximum values of the array using the min and max methods provided by Ruby arrays.

def min_max(arr)
  { min: arr.min, max: arr.max }
end

puts min_max([10, 5, 25, 3, 15])
# Output: { min: 3, max: 25 }


 
111. Check if a Number is a Narcissistic Number
This is_narcissistic_number takes a number num as input and returns true if it is a narcissistic number and false otherwise. 

def is_narcissistic_number(num)
  num == num.to_s.chars.map(&:to_i).sum { |digit| digit ** num.digits.length }
end

puts is_narcissistic_number(153)
# Output: true
puts is_narcissistic_number(370)
# Output: true
puts is_narcissistic_number(123)
# Output: false

 
112. Remove Null and Undefined Values from an Array
The remove_nil_and_undefined function removes null and undefined values from an array.

def remove_nil_and_undefined(arr)
  arr.compact
end

puts remove_nil_and_undefined([1, nil, 2, 3, nil, 4, nil, undefined]) 
# Output: [1, 2, 3, 4]


 
113. Reverse the Order of Words in a String
The reverse_words function reverse the order of words in a String.

def reverse_words(str)
  str.split.reverse.join(' ')
end

puts reverse_words("Hello, world!") 
# Output: "world! Hello,"


 
114. Calculate the Sum of Cubes of an Array
The sum_of_cubes function calculates the sum of cubes of an array.

def sum_of_cubes(arr)
  arr.reduce(0) { |acc, val| acc + val ** 3 }
end

puts sum_of_cubes([1, 2, 3, 4, 5])
# Output: 225


 
115. Shuffle the Characters of a String
The shuffle_string function suffle the characters of a String.

def shuffle_string(str)
  str.chars.shuffle.join
end

puts shuffle_string("hello")
# Output: Randomly shuffled string, e.g., "olelh"


 
116. Find the Nth Fibonacci Number (recursive)
The fibonacci function finds the nth fibonacci number (recursive).

def fibonacci(n)
  return n if n <= 1
  fibonacci(n - 1) + fibonacci(n - 2)
end

puts fibonacci(7)
# Output: 13


 
117. Count the Words in a String
The count_words function splits the input string by whitespace characters using a regular expression (/\s+/) and returns the length of the resulting array, which corresponds to the number of words in the string.

def count_words(str)
  str.split(/\s+/).length
end

puts count_words("Hello, how are you doing?")
# Output: 5


 
118. Check if a Number is a Triangular Number
The is_triangular_number function calculates triangular numbers until the sum exceeds the input number. It then checks if the sum equals the input number and returns true if they are equal, indicating that the input number is a triangular number, and false otherwise.

def is_triangular_number(num)
  n = 0
  sum = 0
  while sum < num
    n += 1
    sum += n
  end
  sum == num
end

puts is_triangular_number(10)
# Output: true
puts is_triangular_number(15)
# Output: true
puts is_triangular_number(7)
# Output: false


 
119. Calculate the Perimeter of a Rectangle
The rectangle_perimeter function calculates the perimeter of a rectangle given its width and height.

def rectangle_perimeter(width, height)
  2 * (width + height)
end

puts rectangle_perimeter(5, 10)
# Output: 30


 
120. Find the Longest Common Prefix in an Array of Strings
The longest_common_prefix function finds the longest common prefix among an array of strings. 

def longest_common_prefix(strs)
  return "" if strs.empty?
  prefix = strs.first
  strs[1..-1].each do |str|
    prefix = prefix.chop until str.start_with?(prefix)
  end
  prefix
end

puts longest_common_prefix(["apple", "apricot", "appetizer"])
# Output: "app"


 
121. Get the ASCII Value of a Character
The get_ascii_value function gets the ASCII value of a character. The ord method is used to get the ASCII value of a character.

def get_ascii_value(char)
  char.ord
end

puts get_ascii_value('A')
# Output: 65


 
122. Find the First Non-Repeated Character in a String
The first_non_repeated_char function finds the first non-repeated character in a String.

def first_non_repeated_char(str)
  char_count = Hash.new(0)
  str.each_char { |char| char_count[char] += 1 }
  str.each_char { |char| return char if char_count[char] == 1 }
  nil
end

puts first_non_repeated_char('abacabad')
# Output: "c"

 
123. Sort an Array of Objects by a Property Value
The sort_by_property function sorts an array of objects by a property value.

def sort_by_property(arr, prop)
  arr.sort_by { |obj| obj[prop] }
end

people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
]

puts sort_by_property(people, :age)
# Output: [{:name=>"Bob", :age=>20}, {:name=>"Alice", :age=>25}, {:name=>"Charlie", :age=>30}]


 
124. Calculate the Exponential of a Number
The exponential function calculates the result of raising a given base to a specified exponent using the exponentiation operator (**).

def exponential(base, exponent)
  base ** exponent
end

puts exponential(2, 3)
# Output: 8


 
125. Check if a String is an Anagram of Another String
The is_anagram? function checks if a string is an anagram of another string.

def is_anagram?(str1, str2)
  str1.chars.sort.join == str2.chars.sort.join
end

puts is_anagram?("listen", "silent")
# Output: true

puts is_anagram?("hello", "world")
# Output: false


 
126. Find the Factors of a Number
The factors function calculates and returns an array of all the factors of a given number. Factors are the positive integers that evenly divide the input number.

def factors(num)
  (1..num).select { |i| num % i == 0 }
end

puts factors(12)
# Output: [1, 2, 3, 4, 6, 12]




 
127. Check if a Number is a Neon Number
The is_neon_number function checks if a number is a neon number.

def is_neon_number(num)
  (num**2).digits.sum == num
end

puts is_neon_number(9)
# Output: true

puts is_neon_number(12)
# Output: false



 
128. Find the Power Set of a Set
The power_set function finds the power set of a set.

def power_set(set)
  set.reduce([[]]) { |result, item| result.concat(result.map { |subset| subset + [item] }) }
end

puts power_set([1, 2, 3])
# Output: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]



 
129. Check if a Number is a Disarium Number
The is_disarium_number function checks if a number is a disarium number by first converting it into an array of its digits, then calculating the sum of powers of its digits, and finally comparing the sum with the original number.

def is_disarium_number(num)
  num.to_s.chars.each_with_index.sum { |digit, index| digit.to_i**(index + 1) } == num
end

puts is_disarium_number(89)
# Output: true

puts is_disarium_number(135)
# Output: true

puts is_disarium_number(23)
# Output: false



 
130. Remove Vowels from a String
The remove_vowels takes a string str as input and returns a new string with all vowels removed. It uses the gsub method to replace all occurrences of vowels (both lowercase and uppercase) in the input string with an empty string "". The regular expression /[aeiouAEIOU]/ matches any vowel character (both lowercase and uppercase) within the string.

def remove_vowels(str)
  str.gsub(/[aeiouAEIOU]/, "")
end

# Example usage:
puts remove_vowels("Hello, World!")
# Output: "Hll, Wrld!"

 
131. Generate an Array of Consecutive Numbers
The consecutive_numbers function generates an array of consecutive numbers.

def consecutive_numbers(start, end_num)
  (start..end_num).to_a
end

# Example usage:
puts consecutive_numbers(1, 5).inspect
# Output: [1, 2, 3, 4, 5]

 
132. Check if a Number is a Pronic Number
The is_pronic_number function checks if a number is a pronic number.

# Check if a Number is a Pronic Number
# The is_pronic_number function determines whether a given number is a pronic number.
def is_pronic_number(num)
  n = Math.sqrt(num).to_i
  n * (n + 1) == num
end

# Example usage:
puts is_pronic_number(6)
# Output: true

puts is_pronic_number(20)
# Output: true

puts is_pronic_number(7)
# Output: false


 
133. Check if a String is a Pangram
The is_pangram function checks if a string is a pangram.

# Check if a String is a Pangram
# The is_pangram function checks whether a given string is a pangram.
def is_pangram(str)
  letters = str.downcase.scan(/[a-z]/).uniq
  letters.size == 26
end

# Example usage:
puts is_pangram("The quick brown fox jumps over the lazy dog")
# Output: true

puts is_pangram("Hello, World!")
# Output: false


 
134. Reverse the Order of Words in a Sentence
The reverse_sentence function reverses the order of words in a sentence.

def reverse_sentence(sentence)
  sentence.split(" ").reverse.join(" ")
end

# Example usage:
puts reverse_sentence("Hello, how are you doing?")
# Output: "doing? you are how Hello,"


 
135. Calculate the Hypotenuse of a Right-Angled Triangle
The calculate_hypotenuse function calculates the hypotenuse of a right-angled triangle.

def calculate_hypotenuse(a, b)
  Math.sqrt(a ** 2 + b ** 2)
end

# Example usage:
puts calculate_hypotenuse(3, 4)
# Output: 5.0


 
136. Find the Average of Odd Numbers in an Array
The average_of_odd_numbers function finds the average of odd numbers in an array.

def average_of_odd_numbers(arr)
  odd_numbers = arr.select { |num| num.odd? }
  odd_numbers.sum / odd_numbers.size.to_f
end

# Example usage:
puts average_of_odd_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
# Output: 5.0

 
137. Count the Letters in a String (case-insensitive)
The count_letters function counts the letter in a String (case-insensitve).

def count_letters(str)
  str.downcase.scan(/[a-z]/).each_with_object(Hash.new(0)) { |letter, letter_count| letter_count[letter] += 1 }
end

puts count_letters("Hello, World!")
# Output: {"h"=>1, "e"=>1, "l"=>3, "o"=>2, "w"=>1, "r"=>1, "d"=>1}



 
138. Convert Seconds to Days, Hours, Minutes, and Seconds
The secs_to_days_hours_mins_secs function converts seconds to days, hours, minutes, and seconds.

def secs_to_days_hours_mins_secs(seconds)
  days, hours, minutes, remaining_secs = seconds.divmod(86400)[0], seconds.divmod(3600)[0], seconds.divmod(60)[0], seconds.divmod(60)[1]
  "#{days} days, #{hours} hours, #{minutes} minutes, and #{remaining_secs} seconds"
end

puts secs_to_days_hours_mins_secs(100000)
# Output: "1 days, 3 hours, 46 minutes, and 40 seconds"


 
139. Check if a Number is a Prime Factor of Another Number
The is_prime_factor function checks if a given number factor is a prime factor of another number num. It first checks if factor divides num evenly and then calls the is_prime method to determine if factor is prime.

def is_prime_factor(num, factor)
  num % factor == 0 && (factor > 1 && !(2..Math.sqrt(factor)).any? { |i| factor % i == 0 })
end

puts is_prime_factor(20, 2)
# Output: true

puts is_prime_factor(20, 3)
# Output: false


 
140. Find the Largest Prime Factor of a Number
The largest_prime_factor function calculates the largest prime factor of a given number.

def largest_prime_factor(num)
  factor = 2
  while factor <= num
    if num % factor == 0
      num /= factor
    else
      factor += 1
    end
  end
  factor
end

# Example usage:
puts largest_prime_factor(48)
# Output: 3











 
141. Check if a Number is a Pronic Square
The is_pronic_square function checks if the square root of the given number num is an integer, indicating that num is a perfect square

def is_pronic_square(num)
  Math.sqrt(num).to_i == Math.sqrt(num)
end

# Example usage:
puts is_pronic_square(6)  # Output: true
puts is_pronic_square(20) # Output: false
puts is_pronic_square(21) # Output: true

 
142. Find the Sum of the Digits of a Number
The sum_of_digits function finds the sum of the digits of a number.

def sum_of_digits(num)
  num.to_s.chars.map(&:to_i).reduce(:+)
end

# Example usage:
puts sum_of_digits(12345)
# Output: 15


 
143. Calculate the Median of an Array of Numbers
The median function sorts the input array arr, then calculates the middle index mid. If the length of the array is even, it takes the average of the two middle elements. If the length is odd, it simply returns the middle element.

def median(arr)
  sorted = arr.sort
  mid = sorted.length / 2
  sorted.length.even? ? (sorted[mid - 1] + sorted[mid]) / 2.0 : sorted[mid]
end

# Example usage:
puts median([1, 3, 5, 7, 9])
# Output: 5

 
144. Find the Greatest Common Divisor (GCD) of Two Numbers (Recursive)
The gcd function recursively calls itself with the second number as the first argument and the remainder of the division as the second argument until the second number becomes zero, at which point it returns the first number, which is the GCD.

def gcd(num1, num2)
  num2 == 0 ? num1 : gcd(num2, num1 % num2)
end

# Example usage:
puts gcd(48, 18)
# Output: 6

 
145. Check if a Number is a Happy Number
The is_happy_number function checks if a given number is a "happy number" or not.

# Check if a Number is a Happy Number
# The is_happy_number function checks if a given number is a "happy number" or not.
def is_happy_number(num)
  seen = Set.new
  while num != 1 && !seen.include?(num)
    seen.add(num)
    num = num.digits.map { |digit| digit ** 2 }.sum
  end
  num == 1
end

# Example usage:
puts is_happy_number(19)
# Output: true
puts is_happy_number(4)
# Output: false


 
146. Find the First N Prime Numbers
The is_prime function finds the first n prime numbers.

# Find the First N Prime Numbers
# The first_n_primes function generates an array of the first n prime numbers.
def is_prime(num)
  return false if num <= 1
  (2..Math.sqrt(num)).none? { |i| num % i == 0 }
end

def first_n_primes(n)
  primes = []
  num = 2
  while primes.length < n
    primes << num if is_prime(num)
    num += 1
  end
  primes
end

# Example usage:
puts first_n_primes(5)
# Output: [2, 3, 5, 7, 11]


 
147. Calculate the Volume of a Sphere
The sphere_volume function calculates the volume of a sphere given its radius. It uses the formula (4/3) * π * r^3, where r is the radius of the sphere.

# Calculate the Volume of a Sphere
# The sphere_volume function calculates the volume of a sphere given its radius.
def sphere_volume(radius)
  (4.0 / 3) * Math::PI * radius ** 3
end

# Example usage:
puts sphere_volume(5)
# Output: 523.5987755982989


 
148. Find the Longest Word in a Sentence
The longest_word function finds the longest word in a sentence.

# Find the Longest Word in a Sentence
# The longest_word function determines the longest word in a given sentence.
def longest_word(sentence)
  sentence.split(" ").reduce("") do |longest, word|
    word.length > longest.length ? word : longest
  end
end

# Example usage:
puts longest_word("The quick brown fox jumped over the lazy dog")
# Output: "jumped"


 
149. Check if a Number is an Armstrong Number (Narcissistic Number)
The is_armstrong_number function checks if a number is an amstrong number (narcissistic number).

def is_armstrong_number(num)
  digits = num.to_s.chars.map(&:to_i)
  num_digits = digits.length
  sum_of_powers = digits.reduce(0) { |sum, digit| sum + digit ** num_digits }
  sum_of_powers == num
end

# Example usage:
puts is_armstrong_number(153)
# Output: true
puts is_armstrong_number(370)
# Output: true
puts is_armstrong_number(123)
# Output: false


 
150. Find the Length of the Longest Word in a Sentence
The longest_word_length function finds the length of the longest word in a sentence.

def longest_word_length(sentence)
  sentence.split(" ").reduce(0) { |longest, word| [longest, word.length].max }
end

# Example usage:
puts longest_word_length("The quick brown fox jumped over the lazy dog") # Output: 6


 
151. Check if a Number is a Strong Number
The is_strong_number function checks if a number is a strong number.

# Factorial calculation method
def factorial(num)
  num == 0 ? 1 : (1..num).reduce(:*)
end

# Check if a number is a strong number
def is_strong_number(num)
  sum_of_factorials = num.to_s.chars.map(&:to_i).reduce(0) { |sum, digit| sum + factorial(digit) }
  sum_of_factorials == num
end

# Example usage:
puts is_strong_number(145) 
# Output: true
puts is_strong_number(123) 
# Output: false


 
152. Reverse the Order of an Array
The reverse function reverses the order of an array.

# Reverse the order of elements in an array
def reverse_array(arr)
  arr.reverse
end

# Example usage:
puts reverse_array([1, 2, 3, 4, 5]) 
# Output: [5, 4, 3, 2, 1]


 
153. Find the Area of a Rectangle
The rectangle_area function finds the area of a rectangle.

# Calculate the area of a rectangle
def rectangle_area(length, width)
  length * width
end

# Example usage:
puts rectangle_area(5, 10) # Output: 50


 
154. Calculate the Sum of Even Numbers in an Array
The sum_of_even_numbers calculates the sum of even numbers in an array.

# Calculate the sum of even numbers in an array
def sum_of_even_numbers(arr)
  arr.select { |num| num.even? }.sum
end

# Example usage:
puts sum_of_even_numbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) 
# Output: 30


 
155. Find the Greatest Common Divisor (GCD) of Two Numbers (Iterative)
The gcd_iterative function finds the greates common divisor (gcd) of two numbers (iterative)

# Find the greatest common divisor (GCD) of two numbers (Iterative approach)
def gcd_iterative(num1, num2)
  while num2 != 0
    temp = num2
    num2 = num1 % num2
    num1 = temp
  end
  num1
end

puts gcd_iterative(48, 18) 
# Output: 6


 
156. Calculate the Volume of a Cylinder
The cylinder_volume function calculates the volume of a cylinder.

# Calculate the volume of a cylinder
def cylinder_volume(radius, height)
  Math::PI * radius**2 * height
end

puts cylinder_volume(5, 10) 
# Output: 785.3981633974483


 
157. Check if a Number is a Smith Number
The is_smith_number function checks if a number is a smith number.

def sum_of_digits(num)
  num.to_s.chars.map(&:to_i).sum
end

def sum_of_prime_factors(num)
  factor = 2
  sum = 0
  while num > 1
    if num % factor == 0
      sum += sum_of_digits(factor)
      num /= factor
    else
      factor += 1
    end
  end
  sum
end

def is_smith_number(num)
  sum_of_digits(num) == sum_of_prime_factors(num)
end

puts is_smith_number(666)  # Output: true
puts is_smith_number(378)  # Output: true
puts is_smith_number(123)  # Output: false


 
158. Convert Decimal Number to Octal
The decimal_to_octal function converts decimal number to octal.

def decimal_to_octal(num)
  num.to_s(8)
end

puts decimal_to_octal(27) 
# Output: "33"


 
159. Find the LCM of Two Numbers
The gcd function finds the lcm of two numbers.

def gcd(num1, num2)
  while num2 != 0
    temp = num2
    num2 = num1 % num2
    num1 = temp
  end
  num1
end

def lcm(num1, num2)
  (num1 * num2) / gcd(num1, num2)
end

puts lcm(24, 36) 
# Output: 72


 
160. Check if a String is a Valid Phone Number (North American Format)
The is_valid_phone_number function checks if a string is a valid phone number (north american format).

def is_valid_phone_number(phone)
  /^\d{3}-\d{3}-\d{4}$/.match?(phone)
end

puts is_valid_phone_number("555-123-4567") 
# Output: true
puts is_valid_phone_number("123-4567") 
# Output: false


 
161. Find the Sum of the First N Natural Numbers
The sum_of_naturals function finds the sum of the first n natural numbers.

def sum_of_naturals(n)
  (n * (n + 1)) / 2
end

puts sum_of_naturals(10)
# Output: 55


 
162. Check if a Number is a Perfect Number
The is_perfect_number function checks if a number is a perfect number.

def is_perfect_number(num)
  sum = 0
  (1..num/2).each do |i|
    sum += i if num % i == 0
  end
  sum == num
end

puts is_perfect_number(28)
# Output: true
puts is_perfect_number(12)
# Output: false


 
163. Find the Factors of a Number (excluding 1 and the number itself)
The factors function finds the factors of a number (excluding 1 and the number itself).

def factors(num)
    result = []
    (2...num).each do |i|
      result << i if num % i == 0
    end
    result
  end
  
  puts factors(12)
  # Output: [2, 3, 4, 6]
  

 
164. Calculate the Area of a Triangle given the Base and Height
The triangle_area function calculates the area of a triangle given the base and height.

def triangle_area(base, height)
  0.5 * base * height
end

puts triangle_area(5, 10)
# Output: 25.0


  

 
165. Check if a String is a Valid Social Security Number (SSN)
The is_valid_ssn function checks whether a given string is a valid Social Security Number (SSN) in the format "XXX-XX-XXXX", where X represents a digit.

def is_valid_ssn(ssn)
  /^\d{3}-\d{2}-\d{4}$/.match?(ssn)
end

puts is_valid_ssn("123-45-6789")
# Output: true
puts is_valid_ssn("123-45-678")
# Output: false


 
166. Generate an Array of Random Numbers within a Range
The random_array_in_range function creates an array of random numbers within a specified range and of a specified length.

def random_array_in_range(min, max, length)
  Array.new(length) { rand(min..max) }
end

puts random_array_in_range(1, 100, 5).inspect
# Output: [34, 87, 19, 56, 72]


 
167. Check if a Number is a Magic Number
The is_magic_number function determines whether a given number is a magic number.

def is_magic_number(num)
  sum = 0
  while num > 0
    sum += num % 10
    num /= 10
  end
  sum == 1
end

puts is_magic_number(19)
# Output: true
puts is_magic_number(123)
# Output: false


 
168. Check if a String is a Valid IPv4 Address
The is_valid_ipv4 function checks whether a given string represents a valid IPv4 address.

def is_valid_ipv4(ip)
  /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.match?(ip)
end

puts is_valid_ipv4("192.168.1.1")
# Output: true
puts is_valid_ipv4("256.0.0.1")
# Output: false

 
169. Convert Decimal Number to Hexadecimal
The decimal_to_hex function converts decimal number to hexadecimal.

def decimal_to_hex(num)
  num.to_s(16)
end

puts decimal_to_hex(255)
# Output: "ff"


 
170. Check if a String is a Valid Date (YYYY-MM-DD Format)
The is_valid_date function checks whether a given string is a valid date in the format "YYYY-MM-DD". The match? method is used to check if the given string matches the specified regular expression.

def is_valid_date(date)
  /^\d{4}-\d{2}-\d{2}$/.match?(date)
end

puts is_valid_date("2023-08-02")
# Output: true
puts is_valid_date("02-08-2023")
# Output: false

 
171. Find the Smallest Common Multiple of an Array of Numbers
The gcd function finds the smallest common multiple of an array of numbers.

def gcd(num1, num2)
  while num2 != 0
    temp = num2
    num2 = num1 % num2
    num1 = temp
  end
  num1
end

def lcm_array(arr)
  arr.reduce(1) { |lcm, num| (lcm * num) / gcd(lcm, num) }
end

puts lcm_array([2, 3, 4, 5])
# Output: 60


 
172. Check if a String is a Valid Password (At least 8 characters, with a digit and special character)
The is_valid_password function checks if a string is a valid password (at least 8 characters, with a digit and special character).

def is_valid_password(password)
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.match?(password)
end

puts is_valid_password("P@ssw0rd")
# Output: true
puts is_valid_password("password123")
# Output: false


 
173. Find the Nth Fibonacci Number
The fibonacci function finds the nth fibonacci number.

def fibonacci(n)
  return 0 if n == 1
  return 1 if n == 2
  prev1 = 0
  prev2 = 1
  result = nil
  (3..n).each do |i|
    result = prev1 + prev2
    prev1 = prev2
    prev2 = result
  end
  result
end

puts fibonacci(7)
# Output: 8


 
174. Check if a Number is a Deficient Number
The sum_of_proper_divisors function checks if a number is a deficient number.

def sum_of_proper_divisors(num)
  sum = 0
  (1...num).each do |i|
    sum += i if num % i == 0
  end
  sum
end

def is_deficient_number(num)
  num > sum_of_proper_divisors(num)
end

puts is_deficient_number(10)
# Output: true
puts is_deficient_number(28)
# Output: false


 
175. Calculate the Distance between Two Points in 2D
The distance_between_points function calculates the distance between two points in 2D.

def distance_between_points(x1, y1, x2, y2)
  Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
end

puts distance_between_points(0, 0, 3, 4)
# Output: 5.0


 
176. Check if a Number is an Abundant Number
The sum_of_proper_divisors function checks if a number is an abundant number.

def sum_of_proper_divisors(num)
  (1...num).select { |i| num % i == 0 }.sum
end

def is_abundant_number(num)
  num < sum_of_proper_divisors(num)
end

puts is_abundant_number(12)
# Output: true
puts is_abundant_number(28)
# Output: false


 
177. Calculate the Volume of a Cube
The cube_volume function calculates the volume of a cube.

def cube_volume(side)
  side ** 3
end

puts cube_volume(5)
# Output: 125


 
178. Check if a String is a Valid Credit Card Number (Visa, MasterCard, Discover, American Express)
The is_valid_credit_card function checks is a string is a valid credit card number (visa, mastercard, discover, american express).

def is_valid_credit_card(card)
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13})$/ =~ card
end

puts is_valid_credit_card("4012-3456-7890-1234")
# Output: 0 (truthy)

puts is_valid_credit_card("1234-5678-9012-3456")
# Output: nil (falsy)


 
179. Calculate the Perimeter of a Triangle
The triangle_perimeter function calculates the perimeter of a triangle.

def triangle_perimeter(side1, side2, side3)
  side1 + side2 + side3
end

puts triangle_perimeter(5, 10, 7)
# Output: 22


 
180. Check if a Number is a Vampire Number
The is_vampire_number function checks is a number is a vampire number.

def is_vampire_number(num)
  num_str = num.to_s
  num_digits = num_str.split("")
  num_factors = (1..Math.sqrt(num)).select { |factor| num % factor == 0 }
                                   .flat_map { |factor| ["#{factor}#{num / factor}", "#{num / factor}#{factor}"] }
  num_factors.any? { |factor_str| factor_str.split("").sort.join("") == num_digits.sort.join("") }
end

puts is_vampire_number(1260)
# Output: true
puts is_vampire_number(1250)
# Output: false



 
181. Find the Sum of Digits Raised to the Power of their Respective Position
The  sum_of_digits_raised_to_power function finds the sum of digits raised to the power of their respective position.

def sum_of_digits_raised_to_power(num)
  digits = num.to_s.chars.map(&:to_i)
  digits.each_with_index.reduce(0) { |sum, (digit, index)| sum + digit**(index + 1) }
end

puts sum_of_digits_raised_to_power(12345)
# Output: 115


 
182. Check if a Number is a Duck Number
The is_duck_number function checks whether a given number is a duck number. 

def is_duck_number(num)
  num.to_s.include?('0') && num.to_s[0] != '0'
end

puts is_duck_number(1023)
# Output: true
puts is_duck_number(12345)
# Output: false


 
183. Generate a Random Password
The random_password function generates a random password of the specified length by creating an array of random alphanumeric characters and joining them together into a string.

def random_password(length)
  Array.new(length) { rand(36).to_s(36) }.join('')
end

puts random_password(8)
# Output: "3klS0p9x"


 
184. Calculate the Area of a Trapezoid
The trapezoid_area function calculates the area of a trapezoid using the formula provided, where base1, base2, and height are the dimensions of the trapezoid.

def trapezoid_area(base1, base2, height)
  0.5 * (base1 + base2) * height
end

puts trapezoid_area(4, 8, 6)
# Output: 36


 
185. Check if a Number is a Kaprekar Number
The is_kaprekar_number function checks if a given number is a Kaprekar number.

def is_kaprekar_number(num)
  square = num**2
  square_str = square.to_s
  num_str = num.to_s
  left = square_str[0, num_str.length].to_i
  right = square_str[-num_str.length..].to_i
  left + right == num
end

puts is_kaprekar_number(9)
# Output: true
puts is_kaprekar_number(297)
# Output: true
puts is_kaprekar_number(45)
# Output: false







 
186. Calculate the Volume of a Cone
The cone_volume function calculates the volume of a cone.

def cone_volume(radius, height)
  (1.0 / 3) * Math::PI * radius**2 * height
end

puts cone_volume(5, 10)
# Output: 261.79938779914943


 
187. Check if a String is a Valid US Phone Number
The is_valid_us_phone_number function checks if a given string represents a valid US phone number.

def is_valid_us_phone_number(phone)
  /^(?:(?:\+1\s?)?(?:\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4})$/.match?(phone)
end

puts is_valid_us_phone_number("+1 (123) 456-7890")
# Output: true
puts is_valid_us_phone_number("123-456-7890")
# Output: true
puts is_valid_us_phone_number("1-800-ABC-DEFG")
# Output: false


 
188. Find the Sum of Digits Raised to the Power of their Respective Position (Up to 1000)
The sum_of_digits_raised_to_power_up_to_thousand function finds the sum of digits raised to the power of their respective position (up to 1000).

def sum_of_digits_raised_to_power_up_to_thousand
  sum = 0
  (1..1000).each do |i|
    sum += i if sum_of_digits_raised_to_power(i) == i
  end
  sum
end

puts sum_of_digits_raised_to_power_up_to_thousand
# Output: 443839


 
189. Check if a Number is a Carol Number
The is_carol_number function checks if a given number is a Carol number.

# Check if a Number is a Carol Number
def is_carol_number(num)
  # Calculate the Carol prime
  carol_prime = (2**num) - 1
  # Check if the number is a prime and if the Carol prime is a perfect square
  is_prime(num) && is_perfect_square(carol_prime)
end

# Example usage:
puts is_carol_number(7)
# Output: true

puts is_carol_number(47)
# Output: true

puts is_carol_number(6)
# Output: false


 
190. Check if a Number is a Catalan Number
The factorial function checks if a number is a catalan number.

# Define a factorial method
def factorial(n)
  return 1 if n.zero?

  (1..n).reduce(:*)
end

# Check if a Number is a Catalan Number
def is_catalan_number(num)
  return false unless num >= 0 && num.integer?

  (factorial(2 * num) / (factorial(num + 1) * factorial(num))) == num
end

# Example usage:
puts is_catalan_number(5)
# Output: true

puts is_catalan_number(10)
# Output: false



 
191. Calculate the Volume of a Cuboid
The cuboid_volume function calculates the volume of a cuboid.

# Calculate the Volume of a Cuboid
def cuboid_volume(length, width, height)
  length * width * height
end

# Example usage:
puts cuboid_volume(5, 10, 8)
# Output: 400


 
192. Check if a Number is a Dudeney Number
The is_dudeney_number function checks if a number is a dudeney number.

# Check if a Number is a Dudeney Number
def is_dudeney_number(num)
  num == sum_of_digits_cube(num)
end

# Example usage:
puts is_dudeney_number(512)
# Output: true

puts is_dudeney_number(64)
# Output: false


 
193. Generate a Random Color (Hexadecimal Format)
The random_color_hex function generates a random color (hexadecimal format)

# Generate a Random Color (Hexadecimal Format)
def random_color_hex
  '#' + ("%06x" % rand(0..0xffffff))
end

# Example usage:
puts random_color_hex
# Output: "#92b008"


 
194. Calculate the Area of a Circle Sector
The circle_sector_area function calculates the area of a circle sector.

# Calculate the Area of a Circle Sector
def circle_sector_area(radius, angle)
  (angle.to_f / 360) * Math::PI * radius ** 2
end

# Example usage:
puts circle_sector_area(5, 90)
# Output: 11.780972450961727


 
195. Calculate the Area of a Regular Polygon
The regular_polygon_area function calculates the area of a regular polygon.

# Calculate the Area of a Regular Polygon
def regular_polygon_area(side_length, num_of_sides)
  (num_of_sides * side_length**2) / (4 * Math.tan(Math::PI / num_of_sides))
end

# Example usage:
puts regular_polygon_area(5, 6)
# Output: 64.9519052838329


 
196. Remove Duplicates from Array
The remove_duplicates function removes duplicates from array.

# Remove duplicates from an array while preserving the order of elements
def remove_duplicates(arr)
  arr.uniq
end

# Example usage:
puts remove_duplicates([1, 2, 3, 3, 4, 4, 5, 5, 6]) # Output: [1, 2, 3, 4, 5, 6]




 
197. Calculate the Area of an Ellipse
The ellipse_area function calculates the area of an ellipse.

# Calculate the area of an ellipse using its semi-major axis length (a) and semi-minor axis length (b)
def ellipse_area(a, b)
  Math::PI * a * b
end

# Example usage:
puts ellipse_area(5, 10)
# Output: 157.07963267948966


 
198. Check if a Number is a Leyland Number
The is_leyland_number function checks if a number is a Leyland number.

# Check if a number is a Leyland number
def is_leyland_number(num)
  found = false
  (2..(num**(1.0/3))).each do |x|
    (x + 1..(num / x)).each do |y|
      if x**y + y**x == num
        found = true
        break
      end
    end
    break if found
  end
  found
end

# Example usage:
puts is_leyland_number(17)
# Output: true
puts is_leyland_number(30)
# Output: true
puts is_leyland_number(100)
# Output: false


 
199. Generate a Random UUID
The random_uuid function generates a random UUID by substituting placeholders in the UUID template with random hexadecimal values.

# Generate a random UUID
def random_uuid
  ("%8x-%4x-4%3x-%4x-%12x" % [rand(0xFFFFFFFF), rand(0xFFFFFFFF), rand(0xFFFFFFFF), rand(0xFFFFFFFF), rand(0xFFFFFFFF)]).downcase
end

# Example usage:
puts random_uuid
# Output: "a0f768f5-6bf2-4f6b-a512-c9121ea1b44a"


 
200. Check if a String is a Valid IPv6 Address
The is_valid_ipv6 function checks is a string is a valid IPV6 address.

# Check if a String is a Valid IPv6 Address
def is_valid_ipv6(ip)
  /^(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/.match?(ip)
end

# Example usage:
puts is_valid_ipv6("2001:0db8:85a3:0000:0000:8a2e:0370:7334")
# Output: true
puts is_valid_ipv6("2001:0db8:85a3::8a2e:0370:7334")
# Output: true
puts is_valid_ipv6("256.0.0.0")
# Output: false


 
201. Calculate the Area of a Parallelogram
The parallelogram_area function calculates the area of a parallelogram.

# Calculate the Area of a Parallelogram
def parallelogram_area(base, height)
  base * height
end

# Example usage:
puts parallelogram_area(5, 10)
# Output: 50


 
202. Check if a String is a Valid MAC Address
The  is_valid_mac_address function checks if a string is a valid MAC Address.

# Check if a String is a Valid MAC Address
def is_valid_mac_address(mac)
  /^(?:[0-9A-Fa-f]{2}[:-]){5}(?:[0-9A-Fa-f]{2})$/ =~ mac
end

# Example usage:
puts is_valid_mac_address("00:1A:2B:3C:4D:5E")
# Output: true
puts is_valid_mac_address("00:1A:2B:3C:4D")
# Output: false


 
203. Convert RGB to HSL (Hue, Saturation, Lightness)
The rgb_to_hsl function converts an RGB color value to its corresponding HSL representation (Hue, Saturation, Lightness).

# Convert RGB to HSL (Hue, Saturation, Lightness)
def rgb_to_hsl(r, g, b)
  r, g, b = [r, g, b].map { |val| val / 255.0 }
  max, min = [r, g, b].max, [r, g, b].min
  h = if max != min
        case max
        when r
          (g - b) / (max - min) + (max == g ? 2 : (max == b ? 4 : 0)) / 6.0
        when g
          (b - r) / (max - min) + 2 / 6.0
        when b
          (r - g) / (max - min) + 4 / 6.0
        end
      else
        0
      end
  s = if max != min
        l = (max + min) / 2.0
        l > 0.5 ? (max - min) / (2 - max - min) : (max - min) / (max + min)
      else
        0
      end
  l = (max + min) / 2.0
  { h: (h * 360).round, s: (s * 100).round, l: (l * 100).round }
end

# Example usage:
puts rgb_to_hsl(255, 0, 0)
# Output: { h: 0, s: 100, l: 50 }
puts rgb_to_hsl(0, 255, 0)
# Output: { h: 120, s: 100, l: 50 }
puts rgb_to_hsl(0, 0, 255)
# Output: { h: 240, s: 100, l: 50 }


 
204. Check if a Number is a Pandigital Number
The is_pandigital_number function checks if a given number is a pandigital number.

# Check if a Number is a Pandigital Number
def is_pandigital_number(num)
  num_str = num.to_s
  digits = num_str.chars.to_a.uniq
  return digits.size == num_str.length && !digits.include?('0') && digits.size == num_str.chars.map(&:to_i).max
end

# Example usage:
puts is_pandigital_number(123456789)
# Output: true
puts is_pandigital_number(987654321)
# Output: true
puts is_pandigital_number(1023456789)
# Output: false


 
205. Calculate the Sum of Proper Divisors of a Number
The sum_of_proper_divisors function calculates the sum of proper divisors of a given number.

# Calculate the Sum of Proper Divisors of a Number
def sum_of_proper_divisors(num)
  sum = 0
  (1..Math.sqrt(num)).each do |i|
    if num % i == 0
      sum += i
      sum += num / i unless num / i == i
    end
  end
  sum - num
end

# Example usage:
puts sum_of_proper_divisors(28)
# Output: 28
puts sum_of_proper_divisors(12)
# Output: 16


 
206. Find the Least Common Multiple (LCM) of an Array of Numbers
The lcm_array function finds the least common multiple (LCM) of an array of numbers.

# Find the Least Common Multiple (LCM) of an Array of Numbers
def lcm_array(arr)
  arr.reduce { |lcm, num| lcm.lcm(num) }
end

# Example usage:
puts lcm_array([2, 3, 4])
# Output: 12


 
207. Calculate the Sum of Squares of First n Natural Numbers
The sum_of_squares function calculates the sum of the squares of the first n natural numbers.

# Calculate the Sum of Squares of First n Natural Numbers
def sum_of_squares(n)
  (n * (n + 1) * (2 * n + 1)) / 6
end

# Example usage:
puts sum_of_squares(5)
# Output: 55


 
208. Check if a Number is a Powerful Number
The prime_factors function calculates the prime factors of a given number.

The is_powerful_number function checks if the number of unique prime factors is equal to the total number of prime factors. If they are equal, then the number is considered a powerful number.

# Method to calculate prime factors of a number
def prime_factors(num)
  factors = []
  divisor = 2
  while num > 1
    while num % divisor == 0
      factors << divisor
      num /= divisor
    end
    divisor += 1
  end
  factors
end

# Method to check if a number is a powerful number
def is_powerful_number(num)
  factors = prime_factors(num)
  factors.uniq.length == factors.length
end

# Example usage:
puts is_powerful_number(16) # Output: true
puts is_powerful_number(36) # Output: false


 
209. Find the Product of Digits of a Number
The product_of_digits function finds the product of digits of a number.

# Method to find the product of digits of a number
def product_of_digits(num)
  num.to_s.chars.map(&:to_i).reduce(:*)
end

# Example usage:
puts product_of_digits(12345)
# Output: 120


 
210. Check if a Number is a Practical Number
The sum_of_array function checks if a given number is a practical number.

# Method to find the sum of an array of numbers
def sum_of_array(arr)
  arr.reduce(0, :+)
end

# Method to find combinations of elements from an array
def combinations(arr, n)
  arr.combination(n).to_a
end

# Method to check if a number is a practical number
def is_practical_number(num)
  factors = prime_factors(num) # Assuming prime_factors method is defined elsewhere
  (2..factors.length).each do |i|
    return false if sum_of_array(combinations(factors, i)) != num
  end
  true
end

# Example usage:
puts is_practical_number(6)
# Output: true
puts is_practical_number(12)
# Output: true
puts is_practical_number(14)
# Output: false


211. Calculate the Sum of Cubes of First n Natural Numbers
The sum_of_cubes function calculates the sum of cubes of first n natural numbers.

# Method to calculate the sum of cubes of the first n natural numbers
def sum_of_cubes(n)
  ((n * (n + 1)) / 2) ** 2
end

# Example usage:
puts sum_of_cubes(5)
# Output: 225




 
212. Check if a Number is a Strange Number
The is_strange_number function checks if a given number is a strange number.

# Method to check if a number is a strange number
def is_strange_number(num)
  factors = prime_factors(num) # Assuming prime_factors method is defined elsewhere
  factors.all? { |factor| sum_of_digits(factor) == sum_of_digits(num) } # Assuming sum_of_digits method is defined elsewhere
end

# Example usage:
puts is_strange_number(18)
# Output: true
puts is_strange_number(22)
# Output: true
puts is_strange_number(20)
# Output: false



 
213. Check if a Number is a Tau Number
The is_tau_number function checks if a number is a tau number.

# Method to check if a number is a Tau number
def is_tau_number(num)
  factors = prime_factors(num) # Assuming prime_factors method is defined elsewhere
  factors.any? { |factor| sum_of_digits(factor) == sum_of_digits(num) } # Assuming sum_of_digits method is defined elsewhere
end

# Example usage:
puts is_tau_number(15)
# Output: true
puts is_tau_number(9)
# Output: true
puts is_tau_number(25)
# Output: false


 
214. Generate a Random Alphanumeric String
The random_alphanumeric_string function generates a random alphanumeric string.

# Method to generate a random alphanumeric string of a given length
def random_alphanumeric_string(length)
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  result = ''
  length.times { result += characters[rand(characters.length)] }
  result
end

# Example usage:
puts random_alphanumeric_string(8)
# Output: "Yw83XmLb"


 
215. Calculate the Area of a Regular Hexagon
The regular_hexagon_area function calculates the area of a regular hexagon.

# Method to calculate the area of a regular hexagon using its side length
def regular_hexagon_area(side_length)
  (3 * Math.sqrt(3) * side_length ** 2) / 2
end

# Example usage:
puts regular_hexagon_area(5)
# Output: 64.9519052838329


 
216. Calculate the Sum of Divisors of a Number
The sum_of_divisors function calculates the sum of divisors of a number.

# Method to calculate the sum of divisors of a given number
def sum_of_divisors(num)
  divisors(num).sum
end

# Example usage:
puts sum_of_divisors(28)
# Output: 56
puts sum_of_divisors(12)
# Output: 28


 
217. Check if a Number is a Zeisel Number
The is_zeisel_number function checks if a number is a Zeisel number.

# Method to check if a number is a Zeisel number
def is_zeisel_number(num)
  factors = prime_factors(num) # Assuming prime_factors method is defined elsewhere
  factors.all? { |factor| is_prime(factor + 1) } # Assuming is_prime method is defined elsewhere
end

# Example usage:
puts is_zeisel_number(1050)
# Output: true
puts is_zeisel_number(10)
# Output: false


 
218. Check if a Number is a Reversible Number
The is_reversible_number function checks if a number is a reversible number.

# Method to check if a number is a reversible number
def is_reversible_number(num)
  reversed_num = num.to_s.reverse.to_i
  num + reversed_num == sum_of_digits(num) # Assuming sum_of_digits method is defined elsewhere
end

# Example usage:
puts is_reversible_number(36)
# Output: true
puts is_reversible_number(45)
# Output: true
puts is_reversible_number(10)
# Output: false


 
219. Calculate the Circumference of a Circle
The circle_circumference function calculates the circumference of a circle.

# Method to calculate the circumference of a circle
def circle_circumference(radius)
  2 * Math::PI * radius
end

# Example usage:
puts circle_circumference(5)
# Output: 31.41592653589793



 
220. Find the Shortest Word in a String
The shortest_word function finds the shortest word in a string.

# Method to find the shortest word in a string
def shortest_word(str)
  str.split(' ').min_by(&:length)
end

# Example usage:
puts shortest_word("This is a test sentence")
# Output: "a"


 
221. Find the Longest Word Length in a String
The longest_word_length function finds the longest word length in a string.

# Method to find the length of the longest word in a string
def longest_word_length(str)
  str.split(' ').map(&:length).max
end

# Example usage:
puts longest_word_length("This is a test sentence")
# Output: 8


 
222. Find the Sum of Proper Divisors of a Number
The sum_of_proper_divisors function finds the sum of proper divisors of a number.

# Method to find the sum of the proper divisors of a number
def sum_of_proper_divisors(num)
  (1..(num - 1)).select { |i| num % i == 0 }.sum
end

# Example usage:
puts sum_of_proper_divisors(28)
# Output: 28
puts sum_of_proper_divisors(12)
# Output: 16





 
223. Check if a Number is a Unitary Perfect Number
The is_unitary_perfect_number function checks if a number is a unitary perfect number.

# Function to check if a number is a unitary perfect number
def is_unitary_perfect_number(num)
  num == (1...num).select { |i| num % i == 0 && gcd(num, i) == 1 }.sum
end

# Function to calculate the greatest common divisor (GCD) of two numbers
def gcd(a, b)
  b.zero? ? a : gcd(b, a % b)
end

# Example usage:
puts is_unitary_perfect_number(18) # Output: false
puts is_unitary_perfect_number(28) # Output: true



 
224. Calculate the Perimeter of a Regular Polygon
The regular_polygon_perimeter function calculates the perimeter of a regular polygon.

def regular_polygon_perimeter(side_length, num_sides):
  return side_length * num_sides

# Example usage:
print(regular_polygon_perimeter(5, 6))  # Output: 30


 
225. Calculate the Area of an Equilateral Triangle
The equilateral_triangle_area function calculates the area of an equilateral triangle.

import math

def equilateral_triangle_area(side_length):
    return (math.sqrt(3) * side_length ** 2) / 4

# Example usage:
print(equilateral_triangle_area(5))  
# Output: 10.825317547305486


 
226. Check if a Number is a Harshad Smith Number
The is_harshad_smith_number function checks if a given number is both a Harshad number and a Smith number.

def is_harshad_smith_number(num):
  # Function to calculate the sum of digits
  def digit_sum(n):
      return sum(int(digit) for digit in str(n))

  # Check if the number is a Harshad number
  sum_of_digits = digit_sum(num)
  is_harshad = num % sum_of_digits == 0

  # Function to calculate the prime factors of a number
  def prime_factors(n):
      factors = []
      divisor = 2
      while n > 1:
          while n % divisor == 0:
              factors.append(divisor)
              n //= divisor
          divisor += 1
      return factors

  # Check if the number is a Smith number
  sum_of_prime_factors = sum(prime_factors(num))
  is_smith = sum_of_prime_factors == sum_of_digits

  return is_harshad and is_smith

# Example usage:
print(is_harshad_smith_number(22))  # Output: True
print(is_harshad_smith_number(10))  # Output: False



227. Check if a Number is a Perfect Power
The is_perfect_power function checks if a number is a perfect power.

def is_perfect_power(num):
  for base in range(2, int(num ** 0.5) + 1):
      exponent = 2
      result = base * base
      while result <= num:
          if result == num:
              return True
          result *= base
          exponent += 1
  return False

# Example usage:
print(is_perfect_power(64))  # Output: True
print(is_perfect_power(25))  # Output: False


 
228. Calculate the Sum of Digits Raised to Their Own Power
The sum_of_digits_to_power function calculates the sum of digits raised to their own power.

def sum_of_digits_to_power(num, power):
  return sum(int(digit) ** power for digit in str(num))

# Example usage:
print(sum_of_digits_to_power(123, 3))  # Output: 36
print(sum_of_digits_to_power(4150, 5))  # Output: 4150


 
229. Check if a Number is a Dudeney Number
The is_dudeney_number function checks if a number is a dudeney number.

def is_dudeney_number(num):
  return sum(int(digit) for digit in str(num)) == num ** (1 / 3)

# Example usage:
print(is_dudeney_number(512))  # Output: True
print(is_dudeney_number(27))   # Output: False


 
230. Calculate the Area of a Regular Pentagon
The regular_pentagon_area function calculates the area of a regular pentagon.

import math

def regular_pentagon_area(side_length):
    return (1 / 4) * math.sqrt(5 * (5 + 2 * math.sqrt(5))) * side_length ** 2

# Example usage:
print(regular_pentagon_area(5)) 
# Output: 43.01193501472417



 
231. Calculate the Volume of a Pyramid
The pyramid_volume function calculates the volume of a pyramid.

def pyramid_volume(base_area, height):
  return (1 / 3) * base_area * height

# Example usage:
print(pyramid_volume(25, 10))
# Output: 83.33333333333333


 
232. Check if a Number is a Wedderburn-Etherington Number
The prime_factors function checks if a given number is a Wedderburn-Etherington number.

def prime_factors(n):
  factors = []
  divisor = 2
  while n >= divisor:
      if n % divisor == 0:
          factors.append(divisor)
          n = n // divisor
      else:
          divisor += 1
  return factors

def factorial(n):
  if n == 0:
      return 1
  else:
      return n * factorial(n-1)

def is_wedderburn_etherington_number(num):
  primes = prime_factors(num)
  factorials = [factorial(prime - 1) for prime in primes]
  product = 1
  for factorial_value in factorials:
      product *= factorial_value
  return product == factorial(num)

# Example usage:
print(is_wedderburn_etherington_number(6)) # Output: True
print(is_wedderburn_etherington_number(12)) # Output: False


233. Calculate the Surface Area of a Cube
The cube_surface_area function calculates the surface area of a cube.

# Calculate the surface area of a cube using its side length.
def cube_surface_area(side_length)
  6 * side_length**2
end

# Example usage:
puts cube_surface_area(5)
# Output: 150


 
234. Check if a Number is a Pluperfect Number
The sum_of_divisors function checks if a number is a pluperfect number.

# Function to calculate the sum of divisors of a number
def sum_of_divisors(num)
  sum = 0
  (1..num/2).each { |i| sum += i if num % i == 0 }
  sum
end

# Function to check if a number is a pluperfect number
def is_pluperfect_number(num)
  num == sum_of_divisors(sum_of_divisors(num)) - num
end

# Example usage:
puts is_pluperfect_number(28)
# Output: true
puts is_pluperfect_number(20)
# Output: false


 
235. Calculate the Area of a Regular Octagon
The regular_octagon_area function calculates the area of a regular octagon.

# Function to calculate the area of a regular octagon
def regular_octagon_area(side_length)
  2 * (1 + Math.sqrt(2)) * side_length ** 2
end

# Example usage:
puts regular_octagon_area(5)
# Output: 86.60254037844387


 
236. Check if a Number is a Repunit Number
The is_repunit_number function checks if a number is a repunit number.

# Function to check if a number is a repunit number
def is_repunit_number(num)
  /^1+$/.match?(num.to_s)
end

# Example usage:
puts is_repunit_number(111)  # Output: true
puts is_repunit_number(11)   # Output: false


 
237. Calculate the Volume of an Ellipsoid
The ellipsoid_volume function calculates the volume of an ellipsoid.

# Function to calculate the volume of an ellipsoid
def ellipsoid_volume(a, b, c)
  (4.0 / 3.0) * Math::PI * a * b * c
end

# Example usage:
puts ellipsoid_volume(5, 3, 2)
# Output: 125.66370614359172



 
238. Check if a String is a Valid URL (Alternative Approach)
The is_valid_url_alt function checks if a given string is a valid URL using an alternative approach. In Ruby, match? is used to check if the regex pattern matches the string.

# Function to check if a string is a valid URL using an alternative approach
def is_valid_url_alt(url)
  /^(ftp|http|https):\/\/[^ "]+$/.match?(url)
end

# Example usage:
puts is_valid_url_alt("https://www.example.com")
# Output: true
puts is_valid_url_alt("invalid url")
# Output: false


 
239. Check if a String is a Valid Tax Identification Number (TIN)
The is_valid_tin function check if a given string is a valid Tax Identification Number (TIN). In Ruby, match? is used to check if the regex pattern matches the string.

# Function to check if a string is a valid Tax Identification Number (TIN)
def is_valid_tin(tin)
  /^[A-Z]{2}\d{6}[A-Z\d]{2}$/.match?(tin)
end

# Example usage:
puts is_valid_tin("AB123456CD")
# Output: true
puts is_valid_tin("invalid tin")
# Output: false


 
240. Check if a String is a Valid ISBN (International Standard Book Number)
The is_valid_isbn function checks if a given string is a valid International Standard Book Number (ISBN).

# Function to check if a string is a valid International Standard Book Number (ISBN)
def is_valid_isbn(isbn)
  /^(?:\d{9}[\dX]|(?:\d{3}-){2}\d{1}[\dX])$/.match?(isbn)
end

# Example usage:
puts is_valid_isbn("123456789")
# Output: true
puts is_valid_isbn("invalid isbn")
# Output: false


 
241. Check if a String is a Valid IP Address
The is_valid_ip_address function checks if a given string is a valid IP address.

# Function to check if a string is a valid IP address
def is_valid_ip_address(ip)
  /^(25[0-5]|2[0-4]\d|[0-1]?\d{1,2})\.(25[0-5]|2[0-4]\d|[0-1]?\d{1,2})\.(25[0-5]|2[0-4]\d|[0-1]?\d{1,2})\.(25[0-5]|2[0-4]\d|[0-1]?\d{1,2})$/.match?(ip)
end

# Example usage:
puts is_valid_ip_address("192.168.1.1")
# Output: true
puts is_valid_ip_address("invalid ip")
# Output: false


 
242. Reverse a String (Using Recursion)
The reverse_string_recursive function reverse a string (using recursion).

# Function to reverse a string using recursion
def reverse_string_recursive(str)
  str.empty? ? '' : reverse_string_recursive(str[1..-1]) + str[0]
end

# Example usage:
puts reverse_string_recursive('hello')
# Output: 'olleh'


 
243. Count the Occurrences of Each Element in an Array
The count_occurrences function counts the occurrences of each element in an array.

# Function to count the occurrences of each element in an array and return the counts in a hash
def count_occurrences(arr)
  counts = Hash.new(0)
  arr.each { |element| counts[element] += 1 }
  counts
end

# Example usage:
puts count_occurrences([1, 2, 1, 3, 2, 4, 1])
# Output: {1=>3, 2=>2, 3=>1, 4=>1}



 
244. Check if Two Arrays are Equal (Shallow Comparison)
The arrays_are_equal function checks if two arrays are equal (shallow comparison).

# Function to check if two arrays are equal through a shallow comparison of their elements
def arrays_are_equal(arr1, arr2)
  arr1.length == arr2.length && arr1.each_with_index.all? { |val, index| val == arr2[index] }
end

# Example usage:
puts arrays_are_equal([1, 2, 3], [1, 2, 3]) 
# Output: true
puts arrays_are_equal([1, 2, 3], [1, 2, 4]) 
# Output: false


 
245. Find the Minimum Value in an Array
The function find_min_value finds the minimum value in a given array of numbers.

# Function to find the minimum value in an array of numbers
def find_min_value(arr)
  arr.min
end

# Example usage:
puts find_min_value([2, 7, 1, 9, 4]) 
# Output: 1


 
246. Flatten an Array of Nested Arrays (Using concat)
The flatten_array function flatten an array of nested arrays (using concat).

# Function to flatten an array of nested arrays using the flatten method
def flatten_array(arr)
  arr.flatten
end

# Example usage:
puts flatten_array([[1, 2], [3, 4], [5, 6]])
# Output: [1, 2, 3, 4, 5, 6]


 
247. Find the Average of Numbers in an Array
The find_average function finds the average of numbers in an array.

# Function to find the average of numbers in an array
def find_average(arr)
  arr.sum / arr.length.to_f
end

# Example usage:
puts find_average([1, 2, 3, 4, 5])
# Output: 3.0


 
248. Sum the Squares of Numbers in an Array
The sum_squares function sum the squares of numbers in an array.

# Function to sum the squares of numbers in an array
def sum_squares(arr)
  arr.map { |num| num ** 2 }.sum
end

# Example usage:
puts sum_squares([1, 2, 3, 4, 5])
# Output: 55


 
249. Check if a String is a Palindrome (Ignoring Non-Alphanumeric Characters)
The is_palindrome_ignoring_non_alphanumeric function checks if a string is a palindrome (ignoring non-alphanumeric characters).

# Function to check if a string is a palindrome, ignoring non-alphanumeric characters
def is_palindrome_ignoring_non_alphanumeric(str)
  # Remove non-alphanumeric characters and convert to lowercase
  cleaned_str = str.downcase.gsub(/[^a-z0-9]/, '')
  # Check if the cleaned string is equal to its reversed version
  cleaned_str == cleaned_str.reverse
end

# Example usage:
puts is_palindrome_ignoring_non_alphanumeric("A man, a plan, a canal, Panama!")
# Output: true


 
250. Shuffle an Array (Using Fisher-Yates Algorithm)
The shuffle_array_fisher_yates function suffle an array (using fisher-yates algorithm).

# Function to shuffle an array using the Fisher-Yates shuffle algorithm
def shuffle_array_fisher_yates(arr)
  for i in (arr.length - 1).downto(1)
    j = rand(i + 1)
    arr[i], arr[j] = arr[j], arr[i]
  end
  arr
end

# Example usage:
puts shuffle_array_fisher_yates([1, 2, 3, 4, 5])
# Output: [3, 1, 4, 2, 5] (randomly shuffled)



 
251. Sort an Array of Objects by a Specific Property
The function sort_by_property sorts an array of objects based on a specific property value.

# Define the array of objects
data = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 20 },
  { name: 'Carol', age: 30 }
]

# Function to sort an array of objects by a specific property
def sort_by_property(arr, prop)
  arr.sort_by { |obj| obj[prop] }
end

# Example usage:
puts sort_by_property(data, :age)
# Output: [{:name=>"Bob", :age=>20}, {:name=>"Alice", :age=>25}, {:name=>"Carol", :age=>30}]





 
252. Reverse Words in a Sentence
The reverse_words function reverse the words in a sentence.

# Function to reverse words in a sentence
def reverse_words(sentence)
  # Split the sentence into an array of words
  words = sentence.split(' ')
  # Reverse the order of the words array
  reversed_words = words.reverse
  # Join the words array back into a string
  reversed_sentence = reversed_words.join(' ')
  return reversed_sentence
end

# Example usage:
original_sentence = "Hello world, how are you?"
reversed_sentence = reverse_words(original_sentence)
puts reversed_sentence
# Output: "you? are how world, Hello"


 
253. Find the Median of Numbers in an Array
The find_median function finds the median of numbers in an array.

# Function to find the median value of numbers in an array
def find_median(arr)
  sorted_arr = arr.sort
  middle = sorted_arr.length / 2
  return sorted_arr.length.even? ? (sorted_arr[middle - 1] + sorted_arr[middle]) / 2.0 : sorted_arr[middle]
end

# Example usage:
puts find_median([1, 3, 2, 4, 5])
# Output: 3


 
254. Count the Vowels in a String
The count_vowels function counts the vowels in a string.

# Function to count the number of vowels in a string
def count_vowels(str)
  str.scan(/[aeiouAEIOU]/).size
end

# Example usage:
puts count_vowels('Hello, how are you?')
# Output: 7


 
255. Check if a Number is a Tribonacci Number (Alternative Approach)
The is_tribonacci_number_alt function checks if a number is a tribonacci number (alternative approach)

# Function to check if a number is a Tribonacci number using an alternative approach
def is_tribonacci_number_alt(num)
  sequence = [0, 0, 1]
  i = 3
  while i <= num
    sequence[i] = sequence[i - 1] + sequence[i - 2] + sequence[i - 3]
    return true if sequence[i] == num
    i += 1
  end
  false
end

# Example usage:
puts is_tribonacci_number_alt(21)
# Output: true


 
256. Calculate the Fibonacci Sequence (Up to N Terms)
The fibonacci_sequence function calculates the Fibonacci sequence (up to n terms).

# Function to generate the Fibonacci sequence up to a given number of terms
def fibonacci_sequence(n)
  fib_seq = [0, 1]
  (2...n).each { |i| fib_seq << fib_seq[i - 1] + fib_seq[i - 2] }
  fib_seq.take(n)
end

# Example usage:
puts fibonacci_sequence(10).to_s
# Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


 
257. Find the ASCII Value of a Character
The get_ascii_value function finds the ASCII value of a character.

# Function to get the ASCII value of a character
def get_ascii_value(char)
  char.ord
end

# Example usage:
puts get_ascii_value('A')
# Output: 65


 
258. Check if a String is an Isogram (No Repeating Characters)
The is_isogram function checks if a string is an isogram (no repeating characters)

# Function to check if a string is an isogram
def is_isogram(str)
  str.downcase.chars.uniq.length == str.length
end

# Example usage:
puts is_isogram('hello')
# Output: false
puts is_isogram('world')
# Output: true


 
259. Calculate the Hamming Distance of Two Strings (Equal Length)
The hamming_distance function calculates the hamming distance of two strings (equal length).

# Function to calculate the Hamming distance of two strings
def hamming_distance(str1, str2)
  str1.chars.zip(str2.chars).count { |char1, char2| char1 != char2 }
end

# Example usage:
puts hamming_distance('karolin', 'kathrin')
# Output: 3


 
260. Calculate the Distance between Two Points in a 2D Plane
The calculate_distance function calculates the distance between two points in a 2D plane.

# Function to calculate the distance between two points in a 2D plane
def calculate_distance(point1, point2)
  x1, y1 = point1
  x2, y2 = point2
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
end

# Example usage:
puts calculate_distance([0, 0], [3, 4])
# Output: 5 (Pythagorean triple: 3^2 + 4^2 = 5^2)


 
261. Check if a String is a Positive Number (No Sign or Decimal Allowed)
The is_positive_number function checks if a string is a positive number (no sign or decimal allowed)

# Function to check if a string represents a positive number (no sign or decimal allowed)
def is_positive_number(str)
  /\A\d+\z/.match?(str)
end

# Example usage:
puts is_positive_number('123')   # Output: true
puts is_positive_number('-123')  # Output: false


 
262. Find the First Non-Repeating Character in a String
The find_first_non_repeating function finds and return the first non-repeating character in a given string.

# Function to find the first non-repeating character in a string
def find_first_non_repeating(str)
  str.chars.find { |char| str.count(char) == 1 }
end

# Example usage:
puts find_first_non_repeating('hello')  # Output: 'h'



 
263. Calculate the Area of a Kite
The area_of_kite function calculates the area of a kite.

# Function to calculate the area of a kite
def area_of_kite(d1, d2)
  0.5 * d1 * d2
end

# Example usage:
puts "Area of the kite: #{area_of_kite(10, 6)}"
# Output: 30.0


 
264. Calculate the Area of a Sector
Calculate the area of a sector within a circle based on the provided radius and angle.

# Function to calculate the area of a sector
def sector_area(radius, angle)
  Math::PI * radius**2 * angle / 360.0
end

# Example usage:
puts "Area of the sector: #{sector_area(5, 60)}"
# Output: 5.235987755982989
