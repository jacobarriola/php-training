<?php
/*
Plugin Name: Age Verifcation
Description: Verify your age using PHP
Version: 0.1
Author URI: http://jacobarriola.com
*/

function verify_func() {

  // Loop for month
  echo '<div class="medium-4 columns">';
    echo '<label for="month">Month</label>';
    echo '<select class="" name="month">';

    for($m=1; $m<=12; ++$m){
      echo '<option value="option">' . date('M', mktime(0, 0, 0, $m, 1)) . '</option>';
    }

    echo '</select>';
  echo '</div>';

  // Loop for day
  echo '<div class="medium-4 columns">';
    echo '<label for="day">Day</label>';
    echo '<select class="" name="day">';

    for ($d=1; $d < 32; $d++) {
      echo '<option value="option">' . $d . '</option>';
    }

    echo '</select>';
  echo '</div>';

  // Loop for year
  echo '<div class="medium-4 columns">';
    echo '<label for="year">Year</label>';
    echo '<select class="" name="year">';

    for ($y=date('Y'); $y > date('Y') - 100; $y--) {
      echo '<option value="option">' . $y . '</option>';
    }

    echo '</select>';
  echo '</div>';

}

add_shortcode('verify','verify_func');


?>
