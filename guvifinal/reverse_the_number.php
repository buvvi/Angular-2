<form action="reverse_the_number.php" method="post">
 <p>Enter the  number <input type="text" name="input1" /></p>
 
 <p><input type="submit" /></p>
</form>

Entered  value : <?php echo $_POST['input1']; ?><br>
<?php

$num = $_POST['input1'];


if($num)
{


$rev = 0;

while($num > 1) {
    $temp = $num % 10;  
    $num = (int) $num / 10;
    echo $temp;
}


}


else
{


	echo "please enter the valid input";

}


?>


<!-- Output  -->

<!--Test case 1:-->
<!-- 

Enter the number 123456789

987654321 

-->

<!--Test case 2:-->
<!-- 

Enter the number -123456789

please enter the valid input

-->

<!--Test case 3:-->
<!-- 

Enter the number ramprasath

please enter the valid input

-->

<!--Test case 4:-->
<!-- 

Enter the number ramprasath123

please enter the valid input

-->