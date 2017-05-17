
<!-- Factorial of given number  -->
<!--  Formula -->
<!-- n! = n . (n - 1) . (n - 2) ... 3 . 2 . 1 -->

<!-- Example 
.................................
4! =  4 . (4 - 1) . (4 - 2) . (4 - 3)
= 4 . 3 . 2 . 1 = 24

.............................

0! = 1
1! = 1
2! = 2. 1 = 2
3! = 3 . 2. 1 = 6
4! = 4 . 3 . 2 . 1 = 24
5! = 5 . 4 . 3 . 2 . 1 = 120
6! = 6 . 5 . 4 . 3 . 2 . 1 = 720
7! = 7 . 6 . 5 . 4 . 3 . 2 . 1 = 5040

 -->


<?php
/* Function to get Factorial of a Number */
function getFactorial($num)
{
    $fact = 1;
    for($i = 1; $i <= $num ;$i++)
        $fact = $fact * $i;
    return $fact;
}
?>
<!doctype html>
<html>
<head>
<title>Factorial Program using PHP</title>
</head>
<body>
<form action = "" method="post">
Enter Number to calculate Factorial<Br />
<input type="number" name="number" id="number" maxlength="4" autofocus required/>
<input type="submit" name="submit" value="Submit" />
</form>
<?php
if(isset($_POST['submit']) and $_POST['submit'] == "Submit")
{
    if(isset($_POST['number']) and is_numeric($_POST['number']))
    {
        echo 'Factorial Of Number: <strong>'.getFactorial($_POST['number']).'</strong>';
    }
}

?>
</body>
</html>


<!-- Output  -->

<!--Test case 1:-->
<!-- 
Enter Number to calculate Factorial 10
 3628800 
-->

<!--Test case 2:-->
<!-- 
Enter Number to calculate Factorial RAM
please enter a number
-->


<!--Test case 3:-->
<!-- 
Enter Number to calculate Factorial RAM123
please enter a number 
-->

<!--Test case 4:-->
<!-- 
Enter Number to calculate Factorial 123RAM
please enter a number
-->

<!--Test case 5:-->
<!-- 
Enter Number to calculate Factorial 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789
INF
-->


<!--Test case 6:-->
<!-- 
Enter Number to calculate Factorial -1
1
-->