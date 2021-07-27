/* Author: 

*/

// Print all possible words from phone number digits.
// For example if input number is 234, possible words which can be formed are (Alphabetical order):
// adg adh adi aeg aeh aei afg afh afi bdg bdh bdi beg beh bei bfg bfh bfi cdg cdh cdi ceg ceh cei cfg cfh cfi

var num = window.prompt("Enter the number: ");
var n = Array.from(String(num), Number);

var mobile = [ "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" ];
var n = num.length;

function words (num, current_no, result, n)
{
    if (current_no == n)
    {
        document.write(result.join("") + " ")
        return;
    }
    for (var i = 0; i < mobile[num[current_no]].length; i++)
    {
        result.push(mobile[num[current_no]][i]);
        words(num, current_no + 1, result, n);
        result.pop();
        if(num[current_no] == 0 || num[current_no == 1])
        return;
    }
}

function display_words(num, n)
{
    words(num, 0, [], n);
}

display_words(num, n);


















