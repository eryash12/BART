<?php
/**
 * Created by PhpStorm.
 * User: yash
 * Date: 2/26/16
 * Time: 6:48 PM
 */?>
<!DOCTYPE html>
    <html lang = "en">
        <head>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <script src="<?php echo base_url()?>files/jquery.xml2json.js"></script>
            <script src="<?php echo base_url()?>files/Main_page.js?>"></script>
            <link rel="icon" type="image/png" href="<?php echo base_url()?>files/pics/bartlogo.png" />
<!--            Bootstrap-->
            <!-- Latest compiled and minified CSS -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

            <!-- Optional theme -->
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

            <!-- Latest compiled and minified JavaScript -->
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
            <link rel="stylesheet" href="<?php echo base_url()?>files/styles.css">

        </head>
        <title>
            Bart Train Scheduling
        </title>

        <body id="body" style="z-index: 0">
        <header>
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="<?php echo base_url()?>">
                            <img alt="Brand" src="<?php echo base_url()?>files/pics/bartlogo.png" height = "30px" width="50px">
                        </a>
                    </div>
                </div>
            </nav>
        </header>
        <main>
            <div class="container">
            <div class="jumbotron selection-panel" style="">
                <ul class="nav nav-tabs">

                    <li role="presentation" class="active"><a data-toggle="tab" href="#all-stations">All Stations</a></li>
                    <li role="presentation" ><a data-toggle="tab" href="#search">Search Route</a></li>
                    <li role="presentation"><a data-toggle="tab" href="#">Messages</a></li>
                </ul>
<!--                <h2>All Bart Stations</h2>-->

                <div class="tab-content">
                    <div id="search" class="tab-pane fade ">
                        <h2>Choose your stations to get started!</h2>
                        <form class="form-inline" style="margin-top: 30px">
                            <div class="form-group">
                                <!--                        <label for="exampleInputName2">Source</label>-->
                                <input type="text" id="src-input" class="form-control station-box"  placeholder="Source">
                                <div class="list-group" id="src-list" style="display: none;">

                                </div>
                            </div>
                            <div class="form-group" style="margin-left: 40px">
                                <!--                        <label for="exampleInputEmail2">Destination</label>-->
                                <input type="email" id="dest-input" class=" station-box form-control"  placeholder="Destination">
                                <div class="list-group" id="dest-list" style="display: none">

                                </div>
                            </div>

                        </form>
                        <button id="search-submit" type="submit" class="btn btn-default" style="margin-top: 50px">Search Routes</button>
                        <div id="route-display" style="display: none">
                            <h3>All routes from fremont to SFIA</h3>
                            <p>Fremont Departure time :  SFIA arrival time : Total Fare </p>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Source</th>
                                    <th>Destination</th>
                                    <th>Dep Time</th>
                                    <th>Arr Time</th>
                                    <th>Line</th>
                                    <th>Towards</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>Moe</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>Dooley</td>
                                    <td>july@example.com</td>
                                </tr>
                                </tbody>
                            </table>

                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Firstname</th>
                                    <th>Lastname</th>
                                    <th>Email</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>John</td>
                                    <td>Doe</td>
                                    <td>john@example.com</td>
                                </tr>
                                <tr>
                                    <td>Mary</td>
                                    <td>Moe</td>
                                    <td>mary@example.com</td>
                                </tr>
                                <tr>
                                    <td>July</td>
                                    <td>Dooley</td>
                                    <td>july@example.com</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="all-stations" class="tab-pane fade in active">
                        <h3>All Bart Stations</h3>
                        <p>Some content in menu 1.</p>
                    </div>
                    <div id="menu2" class="tab-pane fade">
                        <h3>Menu 2</h3>
                        <p>Some content in menu 2.</p>
                    </div>
                </div>


<!--                <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>-->

            </div>
            </div>
        </main>
        <footer>

        </footer>
        </body>
    </html>