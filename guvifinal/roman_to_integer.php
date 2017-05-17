

<?php

$romans = array(
    'XII' => 12,
    'XI' => 11,
    'X' => 10,
    'IX' => 9,
    'VIII' => 8,
    'VII' => 7,
    'VI' => 6,
    'V' => 5,
    'IV' => 4,
    'III' => 3,
    'II' => 2,
    'I' => 1,
);

$roman = 'XXII';
$result = 0;

foreach ($romans as $key => $value) {
    while (strpos($roman, $key) === 0) {
        $result += $value;
        $roman = substr($roman, strlen($key));
    }

}
echo $result;



?>




<!-- Output  -->

<!--Test case 1:-->
<!-- 

input :XIX

output : 21 


-->

<!--Test case 1:-->
<!-- 

input :XXII

output : 22


-->