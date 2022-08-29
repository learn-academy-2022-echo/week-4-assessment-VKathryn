# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️ ***Mats Is Nice And So We Are Nice***

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Pseudocoding: create a method that evaluates if an input value is even or odd, and returns the correct output statement. Utilizing def/end, .even?, .odd?

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def num_checker num
    if num.even?
        p "#{num} is even"
    elsif num.odd?
        p "#{num} is odd"
    end
end

num_checker num1
num_checker num2
num_checker num3

# Returns:
#  "7 is odd"
# "42 is even"
# "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Pseudocoding: create a method that takes in a string and deletes all vowels from that string. Inputs are the beatles items provided below, with the expected outputs underneath them.

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remo_vowels string
    p string.delete('aeiouAEIOU')
end
remo_vowels beatles_album1
remo_vowels beatles_album2
remo_vowels beatles_album3

# returns as espected!!


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

# Pseudocoding: I recall working on a similar problem this week, with a difference in the way the output is worded. I will use .downcase and .reverse and ? to evaluate if the value provided is or isn't a palindrome and return the expected coordinating phrase. .downcase ensures that the answer will be accurately reflected regardless of casing. .reverse tells the code to look at the input backwards as well as forward. The I will use string interpolation to pull the value into the output. (I love Ruby, I could cry. I understand this!)

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'


def palindrome?(string)
    if string.downcase == string.reverse.downcase
        p "#{string} is a palindrome"
    else
        p "#{string} is not a palindrome"
    end
end

palindrome? palindrome_tester1
palindrome? palindrome_tester2
palindrome? palindrome_tester3