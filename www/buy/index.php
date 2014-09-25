<?php
    $type = $_GET['type']; 
?>

<!doctype html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>StoreMaps</title>
    <link rel="stylesheet" href="../css/foundation.css" />
    <script src="../js/vendor/modernizr.js"></script>
    <script src="../resources/values/strings.json"></script>
    <script src="../js/in-house/app.js"></script>
    <script src="../js/stackoverflows.js"></script>
  </head>
  <body>
  
      <nav class="top-bar" data-topbar role="navigation">
  <ul class="title-area">
    <li class="name">
      <h1><a href="http://storemaps.nu"><script>document.write(string_appName);</script></a></h1> 
    </li>
    <li class="toggle-topbar menu-icon"><a href="#"><span></span></a></li>
  </ul>

  <section class="top-bar-section">
    <!-- Right Nav Section -->
    <ul class="right">
      <li class="active"><a href="#">Right Button Active</a></li>
      <li class="has-dropdown">
        <a href="#">Right Button Dropdown</a>
        <ul class="dropdown">
          <li><a href="#">First link in dropdown</a></li>
          <li class="active"><a href="#">Active link in dropdown</a></li>
        </ul>
      </li>
    </ul>

    <!-- Left Nav Section -->
    <ul class="left">
      <li><a href="#">Left Nav Button</a></li>
    </ul>
  </section>
</nav>
      
      <div class="row">
      <h1>Pay for StoreMaps!</h1>
          
          <!-- FORM -->
<form data-abide action="../functions/send_buy_email.php" method="POST">
  <div class="name-field">
    <label>Your name <small>required</small>
      <input name="name" type="text" required pattern="[a-zA-Z]+">
    </label>
    <small class="error">Name is required and must be a string.</small>
  </div>
    <div class="storename-field">
    <label>Store name <small>required</small>
      <input name="storeName" type="text" required pattern="[a-zA-Z]+">
    </label>
    <small class="error">Store name is required and must be a string.</small>
  </div>
  <div class="email-field">
    <label>Email <small>required</small>
      <input name="email" type="email" required>
    </label>
    <small class="error">An email address is required.</small>
  </div>
    <div class="select-field">
    <label>Service length <small>required</small>
        <select required name="serviceLength">
            <option value="0" disabled <?php if(!isset($type)){echo "selected";}?>>Choose one</option>
            <option value="monthly" <?php if($type == "monthly"){echo "selected";}?>>monthly - 50 kr</option>
            <option value="yearly" <?php if($type == "yearly"){echo "selected";}?>>yearly - 100 kr</option>
        </select>
        </label>
        <small class="error">Service length is required.</small>
    </div>
  <button type="submit">Submit</button>
</form>   
          <!-- END FORM -->
     </div> 
      
    <script src="../js/vendor/jquery.js"></script>
    <script src="../js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
      </body>
    </html>