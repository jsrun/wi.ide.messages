/**
 *  __          __  _    _____ _____  ______ 
 *  \ \        / / | |  |_   _|  __ \|  ____|
 *   \ \  /\  / /__| |__  | | | |  | | |__   
 *    \ \/  \/ / _ \ '_ \ | | | |  | |  __|  
 *     \  /\  /  __/ |_) || |_| |__| | |____ 
 *      \/  \/ \___|_.__/_____|_____/|______|
 *                                                                            
 *  @author André Ferreira <andrehrf@gmail.com>
 *  @license MIT
 */

"use strict";

(function(){
    /**
     * Function create alert message
     * 
     * @param string msg
     * @return void
     */
    webide.alert = function(msg){
        
    };
    
    /**
     * Function create snackbar
     * 
     * @param string msg
     * @return void
     */
    webide.snackbar = function(msg, timeout){
        $(".wi-snackbar-message").html(msg);
        $(".wi-snackbar").css("display", "block");
        $(".wi-snackbar").click(function(){
            $(".wi-snackbar").animateCss("slideOutDown", function(){
                $(".wi-snackbar").css("display", "none");
            });
        });
        
        if(timeout > 0){
            setTimeout(function(){
                $(".wi-snackbar").animateCss("slideOutDown", function(){
                    $(".wi-snackbar").css("display", "none");
                });
            }, timeout);
        }
    };
})();


