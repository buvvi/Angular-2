<form action="power.php" method="post">
 <p>Enter the  number to find the Power <input type="text" name="input1" /></p>
 <p>Enter the power<input type="text" name="input2" /></p>
 <p><input type="submit" /></p>
</form>


 Entered Value to find power   : <?php echo $_POST['input1']; ?><br>
 Entered  power   : <?php echo $_POST['input2']; ?>

 <br>

 <?php



$d=$c="";

if((int)$_POST['input1'] &&  $b=(int)$_POST['input2'])
{

$d=pow($_POST['input1'],$_POST['input2']);

}

else{

	$c="please enter the valid input";

}



 ?>


<h3>

 <?php  echo $c; ?> <?php  echo $d; ?> 

</h3>



<!-- Output  -->

<!--Test case 1:-->
<!-- 
Enter the number to find the Power 2
Enter the power 5

32 
-->


<!--Test case 2:-->
<!-- 
Enter the number to find the Power -25
Enter the power 5 

-9765625
-->


<!--Test case 3:-->
<!-- 
Enter the number to find the Power ram
Enter the power 2

please enter the valid input 
-->


<!--Test case 4:-->
<!-- 
Enter the number to find the Power ram
Enter the power 2

please enter the valid input 
-->

<!--Test case 4:-->
<!-- 

Entered Value to find power : 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789
Entered power : 123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789


INF 

-->