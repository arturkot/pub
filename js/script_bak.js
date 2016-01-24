/*

1. Global variables / hide objects

2. Audio

3. Sprites

4. The bartender

5. Various functions

6. Idle animations 

7. Scene 1

8. Scene 2

*/

$(document).ready( function() {

$.preloadCssImages();

/* ##global variables */

    var  //characters
        bartender = $('#bartender'),
        bartender_clone = $('#bartender_clone'),
        sandra    = $('#sandra'), 
        monica    = $('#monica'),
        monica_clone = $('#monica_clone'),
        olivia    = $('#olivia'),
        johnny    = $('#johnny'),
        bully     = $('#bully'),
        
        //restart
        restart = $('#restart'),
        overlay = $('#overlay'),
        
        //click_counter (used in scenes)
        click_counter = 0,
        
        //special scene
        s_scene = $('#special_scene'),
           //prevents from creating to many actions
           action1     = true,
           action2     = true,
           action3     = true,
           action4     = true,
           
        //dialogue box
        text  = $('.text'),
        info  = $('#info'),
       
        //door
        door = $('#door'),
        
        //beer counter
        beer_counter  = 0,
        beer          =  $('#beer');

/* ##hide objects */
$(s_scene).hide();
$(text).hide();
$(overlay).hide();
$('.info').css({ opacity:0 });
$(bartender_clone).css({ opacity:0 });
$(monica_clone).css({ opacity:0 });
$(bully).hide();
$(beer).hide();

/* ##audio */

	function pub_ambience() {
		
    pub_ambience = new Audio('audio/bkg.ogg'); 
    pub_ambience.volume=.1;
    pub_ambience.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    pub_ambience.play();    
		
	}
	
	function sound_door() {
		
    sound_door = new Audio('audio/door.ogg'); 
    sound_door.play();
		
	}
	
	function sound_bam() {
		
    bam = new Audio('audio/bam.ogg'); 
    bam.play();
		
	}
	
	function sound_scary() {
		
    scary = new Audio('audio/scary.ogg'); 
    scary.play();
		
	}
	
	function sound_hit() {
		
    hit = new Audio('audio/hit.ogg'); 
    hit.play();
		
	}   

/* ##sprites */
    
//selects sprite
function sprite(name,sprite,variant) {

  if ( name == bartender || name == bartender_clone ) {

    if ( sprite == 'UR' ) {
      $(name).css({
        'background-position':'0 0'
      });
    } else if ( sprite == 'BR' ) {
      $(name).css({
        'background-position':'0 -110px'
      });
    } else if ( sprite == 'BL' ) {
      $(name).css({
        'background-position':'0 -220px'
      });
    } else if ( sprite == 'UL' ) {
      $(name).css({
        'background-position':'0 -330px'
      });
    } else if ( sprite == 'beer_UL' ) {
      $(name).css({
        'background-position':'0 -440px'
      });
    } else if ( sprite == 'beer_UR' ) {
      $(name).css({
        'background-position':'0 -550px'
      });
    } else if ( sprite == 'beer_BR' ) {
      $(name).css({
        'background-position':'0 -660px'
      });
    } else if ( sprite == 'hand_BR' ) {
      $(name).css({
        'background-position':'0 -770px'
      });
    } else {
      return false;
    } 
  
  } else if ( name == sandra ) {
  
    //selects sprite (sandra sitting)
    
      if ( sprite == 'sitting_BR' ) {
        $(name).css({
          'background-position':'0 0'
        });
      } else if ( sprite == 'drink' ) {
        $(name).css({
          'background-position':'0 -110px'
        });
      } else if ( sprite == 'idle' ) {
        $(name).css({
          'background-position':'0 -220px'
        });
      } else {
        return false;
      }          
  
  } else if ( name == monica || name == monica_clone ) {
  
      if ( variant == 'sitting' ) {
  
      //selects sprite (monica sitting)
      
      $(name).css({
        'background-image':'url(images/monica_sitting.png)',
        width:65,
        height:116
      });
      
        if ( sprite == 'sitting_BR' ) {
          $(name).css({
            'background-position':'0 0'
          });
        } else if ( sprite == 'drink' ) {
          $(name).css({
            'background-position':'0 -116px'
          });
        } else if ( sprite == 'idle' ) {
          $(name).css({
            'background-position':'0 -232px'
          });
        } else {
          return false;
        } 
        
      } else if ( variant == 'standing' ) {
      
      //selects sprite (monica standing)
      
      $(name).css({
        'background-image':'url(images/monica_standing.png)',
        width:56,
        height:119
      });
      
        if ( sprite == 'BR' ) {
          $(name).css({
            'background-position':'0 0'
          });
        } else if ( sprite == 'BL' ) {
          $(name).css({
            'background-position':'0 -119px'
          });
        } else {
          return false;
        } 
      
      } else {
        return false;
      }        
  
  } else if ( name == olivia ) { 
     
      //selects sprite (olivia sitting)
        
        if ( sprite == 'sitting_BR' ) {
          $(name).css({
            'background-position':'0 0'
          });
        } else if ( sprite == 'drink' ) {
          $(name).css({
            'background-position':'0 -120px'
          });
        } else if ( sprite == 'idle' ) {
          $(name).css({
            'background-position':'0 -240px'
          });
        } else {
          return false;
        }          
  
  } else if ( name == bully ) { 
     
      //selects sprite bully
        
        if ( sprite == 'BL' ) {
          $(name).css({
            'background-position':'0 0'
          });
        } else if ( sprite == 'BR' ) {
          $(name).css({
            'background-position':'0 -104px'
          });
        } else {
          return false;
        }          
  
  }  else if ( name == johnny ) {

    if ( variant == 'standing' ) {
      //selects sprite (johnny standing)
  
      $(name).css({
        'background-image':'url(images/johnny.png)'
      });
  
      if ( sprite == 'UR' ) {
        $(name).css({
          'background-position':'0 0'
        });
      } else if ( sprite == 'BR' ) {
        $(name).css({
          'background-position':'0 -110px'
        });
      } else if ( sprite == 'BL' ) {
        $(name).css({
          'background-position':'0 -220px'
        });
      } else if ( sprite == 'UL' ) {
        $(name).css({
          'background-position':'0 -330px'
        });
      } else if ( sprite == 'surprised_UR' ) {
        $(name).css({
          'background-position':'0 -440px'
        });
      } else if ( sprite == 'surprised_BR' ) {
        $(name).css({
          'background-position':'0 -550px'
        });
      } else if ( sprite == 'surprised_BL' ) {
        $(name).css({
          'background-position':'0 -660px'
        });
      } else if ( sprite == 'surprised_UL' ) {
        $(name).css({
          'background-position':'0 -770px'
        });
      } else {
        return false;
      } 
  
    } else if ( variant == 'sitting' ) {
      //selects sprite (johnny sitting)
      
      $(name).css({
        'background-image':'url(images/johnny_sitting.png)',
        width:56
      });
      
      if ( sprite == 'idle' ) {
        $(name).css({
          'background-position':'0 0'
        });
      } else if ( sprite == 'beer_please' ) {
        $(name).css({
          'background-position':'0 -108px'
        });
      } else if ( sprite == 'beer' ) {
        $(name).css({
          'background-position':'0 -216px'
        });
      } else if ( sprite == 'drinks' ) {
        $(name).css({
          'background-position':'0 -324px'
        });
      } else {
        return false;
      } 
      
    } else if ( variant == 'lying' ) {
      //selects sprite (johnny lying)
      
      $(name).css({
        'background-image':'url(images/johnny_lying.png)',
        width:56
      });
      
      if ( sprite == 'kneeling' ) {
        $(name).css({
          width:117,
          'background-position':'0 0'
        });
      } else if ( sprite == 'fours' ) {
        $(name).css({
          width:117,
          'background-position':'0 -110px'
        });
      } else if ( sprite == 'lying' ) {
        $(name).css({
          width:117,
          'background-position':'0 -220px'
        });
      } else {
        return false;
      } 
      
    } else {
      return false; 
    }
  
  } else { 
    return false; 
  }          

}

/* ##the_bartender */

//checks if bartender is serving
var check_if_active = true;

function the_bartender(

start_x,
start_y,

end_x,
end_y,

frequency,
step_height,

time

) {

  //serve beer!
  function serve_beer() {

  $(bartender).click(function() {

  //checks if johnny is sober
  if ( beer_counter < 6 && check_if_active ) {

  check_if_active = false;

  sprite(johnny,'beer_please','sitting');
  setTimeout( function() { sprite(johnny,'idle','sitting'); }, 500 );

  var position = $(this).position();
    
    //hides original bartender
    $(this).css({ opacity:0 });

    //shows clone
     $(bartender_clone).css({
      opacity:1,
      left:position.left,
      top:position.top
     });

    //scene begins!
    
    //goes for glass
    walk(bartender_clone, position.left,position.top, 197,370, 10,5, 500);
    
    //pours beer
    setTimeout( function() { sprite(bartender_clone,'beer_UL') }, 500);
    setTimeout( function() { sprite(bartender_clone,'beer_UR') }, 600);
    setTimeout( function() { sprite(bartender_clone,'beer_BR') }, 700);
    
    walk(bartender_clone, 197,370, 203,389, 10,5, 500);
    
    do_nothing(bartender_clone,500);
    
    //serves beer
    walk(bartender_clone, 203,389, 500,225, 10,5, 500);
    
    setTimeout( function() {
    
      sprite(bartender_clone,'BR');
    
       //beer itself :]
       $(beer).show().css({
       
        left:522,
        top:282
       
       });
      
      //beer goes to johnny
      $('#beer').animate({
        left:550,
        top:311
      },200);
      
      //johnny intercepts
      setTimeout( function() {
      
        sprite(johnny,'beer','sitting');
        
        $(beer).hide();

      }, 200);
      
      //bartender goes back, johnny drinks
      setTimeout( function() {
      
        var position = $(bartender).position();

        walk(bartender_clone, 500,225, position.left,position.top, 10,5, 500);
      
        sprite(johnny,'drinks','sitting');
      
      }, 300)
      
      //bartender idle 
      setTimeout( function() {
      
        clearTimeout('repeat_walking');
        
      },800)
      
      //the end
      setTimeout( function() {
      
        sprite(johnny,'idle','sitting');
        
        beer_counter = beer_counter+1;
        
        //if johnny drinks too much he goes to sleep ;)
        if ( beer_counter > 5 ) {
          
          sprite(johnny,'BL','standing');
          
          //johnny staggers 
          $(johnny)
          .animate({
            left:538,
            top:286
          },200)
          .animate({
            left:573,
            top:306
          },500)
          .find('.info')
          //johnny changes his info - sign
          .css({
            opacity:1,
            'background-position':'0 -200px'
          });
          
          //bartender changes his info - sign
          $(bartender).find('.info').css({
            opacity:1,
            'background-position':'0 -240px'
          });
          
          setTimeout( function() {
          
            sprite(johnny,'BR','standing');
          
          },300);
          
          setTimeout( function() {
          
            sprite(johnny,'UR','standing');
          
          },400);
          
          setTimeout( function() {
          
            sprite(johnny,'UL','standing');
          
          },500);
          
          setTimeout( function() {
          
            sprite(johnny,'BL','standing');
          
          },700);
          
          setTimeout( function() {
          
            sprite(johnny,'BR','standing');
          
          },800);
          
          setTimeout( function() {
          
            sprite(johnny,'UR','standing');
          
          },900);
          
          setTimeout( function() {
          
            sprite(johnny,'BR','standing');
          
          },1000);
          
          setTimeout( function() {
          
            $(johnny).find('.info').css({
              left:23,
              bottom:'100%'
            });
          
            sprite(johnny,'kneeling','lying');
          
            sound_bam();
          
          },1100);
          
          setTimeout( function() {
          
            $(johnny).find('.info').css({
              left:55,
              bottom:'70%'
            });
          
            sprite(johnny,'fours','lying');
          
            sound_bam();
          
          },1500);
          
          setTimeout( function() {
          
            $(johnny).find('.info').css({
              left:79,
              bottom:'70%'
            });
          
            sprite(johnny,'lying','lying');
          
            show_restart();
          
          },1600);

        }
        
        $(bartender_clone).css({ opacity:0 });
        $(bartender).css({ opacity:1 });
        
        check_if_active = true;
        
        //alert(beer_counter);
      
      }, 1100)
     
    }, 2000 )

  } else { return false; }

  });

  }

//waits until johnny sits

setTimeout( function() { serve_beer(); }, 5100 );

var standing   = Math.floor((5000-2999)*Math.random()) + 3000;

//sin function - walking "on wave"
var go_forward = function() {
      this.css = function(p) {
        var s = Math.sin(p*frequency)
        var x = end_x - p * Math.abs( start_x - end_x ) 
        var y = end_y + p * Math.abs( start_y - end_y ) - Math.abs( s * step_height )
        return {top: y + "px", left: x + "px"}
      } 
    },
    go_back = function() { 
      this.css = function(p) {
        var s = Math.sin(p*frequency)
        var x = start_x + p * Math.abs( start_x - end_x ) 
        var y = start_y - p * Math.abs( start_y - end_y ) - Math.abs(s * step_height ) 
        return {top: y + "px", left: x + "px"}
      } 
    };

function move() {

$(bartender)

.animate({

  //left:257,
  //top:356

  path : new go_forward

}, time, 'linear', function() {

  move_sprite = setTimeout(function() { sprite(bartender,'BR') },2500);
  move_sprite = setTimeout(function() { sprite(bartender,'BL') },2600);
  
 } )

.delay(standing)

.animate({

  //left:185,
  //top:397
  
  path : new go_back

}, time, 'linear', function() {

  move_sprite = setTimeout(function() { sprite(bartender,'BR') },2500);
  move_sprite = setTimeout(function() { sprite(bartender,'UR') },2600);
  
 } )

.delay(standing)

; 

//repeat
repeat_walking = setTimeout( function() { move(); },time * 2 + standing);

}

move();

}

  /* ##various functions */

  //restart
  $(restart).click( function() {
      window.location.reload();
  });
  
  function show_restart() {
  
    $(overlay).show();
  
    $(restart).animate({
      top:0
    });
  }

  //talk
  function talk(name,text,hide) {

    if ( hide == 0) {
      $('.text, .info').hide();
    }

    $(name).find('.text')
    .show()
    .css({
      opacity:0
    })
    .animate({
      opacity:1
    },200)
    .find('div')
    .text(text);

  }

  //show icon
  
  $('.character').hover( 
    function() {
    
    $(this).find('.info').animate({
      opacity:1
    });
    
    }, function() {
    
    $(this).find('.info').animate({
      opacity:0
    });
    
    });

    //open/close the door 
    function door_closed() {
      $(door).css({
        'background-position':'0 -508px'
      });
    }
    
    function door_half() {
      $(door).css({
        'background-position':'0 -254px'
      });
    }
    
    function door_opened() {
      $(door).css({
        'background-position':'0 0'
      });
    }
    
    function door_open() {
      setTimeout( function() { door_half(); }, 250 )
      setTimeout( function() { door_opened(); }, 500 )
    }
    
    function door_close() {
      setTimeout( function() { door_half(); }, 250 )
      setTimeout( function() { door_closed(); }, 500 )
    }
    
    //girls drink beer
    function drink_beer(name) {
      
      function idle() { 
      
      var drink = Math.floor((1000-499)*Math.random()) + 500,
          idle_time  = Math.floor((10000-2999)*Math.random()) + 3000;
          
      sprite(name,'idle','sitting');
      setTimeout(function() { sprite(name,'drink','sitting') },idle_time);
      
      //repeat
       setTimeout(function() { idle() },idle_time + drink);
      
      }
      
      idle();
    
    }
    
    //do nothing (delay)
    function do_nothing(
    
      name,
      time
    
    ) {
      $(name).delay(time);
    } 
    
    //walk
    function walk(
    name,
    
    start_x,
    start_y,
    
    end_x,
    end_y,
    
    frequency,
    step_height,
    
    time,
    
    easing
    ) {
    
    var go_forward = function() {
          this.css = function(p) {
            var s = Math.sin(p*frequency)
            var x = end_x + p * ( start_x - end_x ) 
            var y = end_y + p * ( start_y - end_y ) - Math.abs( s * step_height )
            return {top: y + "px", left: x + "px"}
          } 
        }
    
    $(name).animate({
    
      path : new go_forward
    
    }, time, easing)
    
    }
 
    /* ##idle animations */    
  
    the_bartender(185,397, 257,356, 24,5, 2000);
  
    drink_beer(sandra);
    
    drink_beer(monica);
    
    drink_beer(olivia);


    /* ##scene 1: johnny enters the pub */
    
    //scene fades in
    $('#scene').animate({
      opacity:1
    }, 1000);
    
    //walks toward the door
    sprite(johnny,'BL','standing');
    walk(johnny, 1010,155, 805,274, 30,10, 2000, 'linear')
    
    //opens door, walk back
    setTimeout( function() {
    
      door_open(); 
      
      sound_door();
      
      pub_ambience();
      
    }, 2000 )

   
      //changes z-index (johnny is now one index higher than the pub)
      setTimeout( function() { 
  
        $(johnny).css({
          'z-index':3
        });
       }, 2250);
    
    walk(johnny, 805,274, 864,242, 10,5, 500)

    //walks inside, door closes
    walk(johnny, 864,242, 805,274, 10,5, 500, 'linear')
    
    setTimeout( function() { door_close(); }, 3000 ) 
    
    walk(johnny, 805,274, 538,286, 30,10, 2000, 'linear')
    
    //sits down 
    $(johnny).animate({
      top:270
    },100);
    
     setTimeout( function() { sprite(johnny,'idle','sitting') }, 5100)
    $(johnny).animate({
      left:551,
      top:271
    },100);
    
    /* ##scene 2: johnny talks to olivia */
    
    function scene2() {
    
    $(olivia).click( function() { 
  
      if ( beer_counter < 6 && check_if_active ) {
      
      //shows help message
      $(info).animate({
        top:0
      });

      //deactivates other characters
      beer_counter = 6;
      check_if_active = false;
  
      sprite(johnny,'BL','standing'); 
      
      //goes towards olivia
      $(johnny)
      .animate({
        left:538,
        top:286
      },200)
      .animate({
        left:573,
        top:306
      },500) 
      
      walk(johnny, 573,306, 515,340, 20,5, 1000) 
      
      setTimeout( function() {
        sprite(johnny,'UL','standing');
        
        talk(johnny, 'Hi!',0);
        

          //STOP!!!
          $(document).click( function() {
        
          //olivia reacts
          sprite(olivia,'sitting_BR');
          
          talk(olivia, '...',0);
          
          //STOP!!!
          $(document).click( function() {
          
            talk(olivia, 'What do you want?',0); 
            
          //STOP!!! 
          $(document).click( function() {
          
            talk(johnny, 'To spend some time together? ♥', 0); 
            
          //STOP!!! 
          $(document).click( function() {
          
            $(text).hide(); 
            
            $('.info').show();
            $(johnny).find('.info').animate({
              opacity:1
            });
  
          //STOP!!! Here fires a sub scene: HYPNOTYZE
          $(document).click( function() {
            $(text).hide(); 
            
            $('.info').show();
            $(johnny).find('.info').animate({
              opacity:1
            },200);
            
            //image shows up
            $(s_scene)
            .show()
            .css({
              opacity:0,
              background:'url(images/olivia_sub_scene.png)'
            })
            .animate({
             opacity:1 
            }, 500);
            
            //creates eyes, play scary sound
            function create_eyes() {
            
              if ( action1 ) {
              
              action1 = false;
              
                $('<div/>', {
                  id:"eyes",
                  css: {
                    width:68,
                    height:96,
                    position:'absolute',
                    left:253,
                    top:175,
                    background:'url(images/olivia_eyes.png)'
                  }
                }).appendTo(s_scene);
                
                sound_scary();
                
              }
            
            }
            
            create_eyes();
            
            //glow animation
            function glow() {
              $('#eyes')
              .animate({
                opacity:0
              },500)
              .animate({
                opacity:1
              },500);
              
              setTimeout(function() {
                glow();  
              },1000); 
            }
            
            glow();
            
          //STOP
          $(document).click( function() {
          //hides special scene
            
          //hides help message
          $(info).animate({
            top:'-100%'
          });
            
            $('#eyes').remove;
            $(s_scene)
            .animate({
             opacity:0 
            }, 500)
            .hide();
            
            function last_run() {
            
              if ( action2 ) {
              
                action2 = false;

                //johnny is hypnotized
                
                 //johnny changes his info - sign
                $(johnny).find('.info').css({
                  'background-position':'0 -280px'
                });
                
                //spins one time
                setTimeout( function() {
                  sprite(johnny,'UR','standing');
                },200);
                
                setTimeout( function() {
                  sprite(johnny,'BR','standing');
                },400);
                
                setTimeout( function() {
                  sprite(johnny,'BL','standing');
                },600);
                
                setTimeout( function() {
                  sprite(johnny,'UL','standing');
                },800);
                
                //and second time..
                setTimeout( function() {
                  sprite(johnny,'UR','standing');
                },1000);
                
                setTimeout( function() {
                  sprite(johnny,'BR','standing');
                },1100);
                
                setTimeout( function() {
                  sprite(johnny,'BL','standing');
                },1200);
                
                setTimeout( function() {
                  sprite(johnny,'UL','standing');
                },1300);
                
                setTimeout( function() {
                  sprite(johnny,'UR','standing');
                },1400);
                
                //and hits the wall
                setTimeout( function() {
                
                  walk(johnny, 513,340, 701,233, 20,5, 500)
                  
                  setTimeout( function() {
                    sound_hit();
                  }, 500);
                  
                  do_nothing(johnny,100);
                  
                  walk(johnny, 701,233, 666,253, 5,5, 100,'linear')
                  walk(johnny, 666,253, 701,233, 5,5, 100)
                  
                  setTimeout( function() {
                    sound_hit();
                  }, 800);
                  
                  do_nothing(johnny,100);
                  
                  walk(johnny, 701,233, 654,259, 5,5, 100,'linear')
                  walk(johnny, 654,259, 701,233, 5,5, 100)
                  
                  setTimeout( function() {
                    sound_hit();
                  }, 1100);
                  
                  walk(johnny, 701,233, 666,253, 5,5, 100,'linear')
                  walk(johnny, 666,253, 701,233, 5,5, 100)
                  
                  setTimeout( function() {
                    sound_hit();
                  }, 1300);
                  
                  walk(johnny, 701,233, 619,280, 20,5, 800)
                  
                  //lies on the floor
                  setTimeout( function() {
  
                  $(johnny).find('.info').css({
                    'background-position':'0 -200px',
                    left:23,
                    bottom:'100%'
                  });
  
                    sprite(johnny,'kneeling','lying');
                    
                    sound_bam();
                  
                  },1600);
                  
                  setTimeout( function() {
                  
                  $(johnny).find('.info').css({
                    left:55,
                    bottom:'70%'
                  });
                  
                    sprite(johnny,'fours','lying');
                  
                    sound_bam();
                  
                  },2000);
                  
                  setTimeout( function() {
  
                  $(johnny).find('.info').css({
                    left:79,
                    bottom:'70%'
                  });
  
                    sprite(johnny,'lying','lying');
                  
                    show_restart(); 
                  
                  },2100);
                
                }, 1400);
              
              }
            
            }
            
            last_run();
            
          //LAST STOP THE END
          $(document).click( function() {  
              return false;
          }); 
             
          });
  
          });
  
          });
  
          });
  
          });
         
          }); 

    
      }, 1500);
     
    }
       
    });
    
    }
    
    setTimeout( function() { scene2(); }, 5100 );
     
    /* ##scene 3: johnny talks to monica */
    
    function scene3() {
    
    $(monica).click( function() {
    
      if ( beer_counter < 6 && check_if_active ) {
      
      //shows help message
      $(info).animate({
        top:0
      });

      //deactivates other characters
      beer_counter = 6;
      check_if_active = false;
  
      sprite(johnny,'BL','standing'); 
      
      //goes towards monica
      $(johnny)
      .animate({
        left:538,
        top:286
      },200)
      .animate({
        left:573,
        top:306
      },500) 
      
      walk(johnny, 573,306, 433,386, 40,5, 2000) 
      
      setTimeout( function() {
        sprite(johnny,'UL','standing');
        
        talk(johnny, 'Hi!',0);
    
      //STOP!!!
      $(document).click( function() {
      
      //monica reacts
      sprite(monica,'sitting_BR','sitting');
      
      talk(monica, 'Hello handsome! :*',0);
      
      //STOP!!!
      $(document).click( function() {
      
      if ( action1 ) {
      
      action1 = false;
      
      //hides original monica
      $(monica).hide();
      
      //shows clone
      $(monica_clone).css({ opacity:1 });
      
      sprite(monica_clone,'sitting_BR','sitting');
      
      $(monica_clone).animate({
        left:415,
        top:366
      }, function() {
      
        sprite(monica_clone,'BR','standing');
        
        walk(monica_clone, 415,366, 442,383, 5,5, 500)
        
        walk(johnny, 433,386, 461,402, 5,5, 500)
        
        setTimeout( function() {
        
          talk(johnny, '???',0);
          
          walk(monica_clone, 442,383, 491,432, 5,5, 500)
          
          walk(johnny, 461,402, 510,452, 5,5, 500)
          
        }, 500);
        
      });
      
      }
      
      //STOP!!!
      $(document).click( function() {
      
        talk(monica_clone, 'I want you! ♥♥♥',0);

        
        //STOP!!!
        $(document).click( function() {
      
        $('.text').hide();
      
        $(monica_clone).find('.info').show().animate({
          opacity:1,
        },200);
        
        //STOP!!!
        $(document).click( function() {
        
        if ( action2 ) {
        
        action2 = false;
        
        $(bully).show();
        
        //walks toward the door
        sprite(bully,'BL');
        walk(bully, 1010,155, 805,274, 30,10, 2000, 'linear')
        
        setTimeout( function() {
        
          door_open(); 
          
          sound_door = new Audio('audio/door.ogg'); 
          sound_door.play();
          
        }, 2000 )
        
      //changes z-index (bully is now one index higher than the pub)
        setTimeout( function() { 
    
          $(bully).css({
            'z-index':3
          });
         }, 2250);
      
        walk(bully, 805,274, 864,242, 10,5, 500)
        
        //walks inside, door closes
        walk(bully, 864,242, 805,274, 10,5, 500, 'linear')
        
        setTimeout( function() { door_close(); }, 3000 ) 
        
        walk(bully, 811,280, 636,372, 30,10, 2000, 'linear')
        
        setTimeout( function() { talk(bully,'Monica?',0); }, 5000 ) 
        
        }
        
        setTimeout( function() { 
        
        //STOP!!!
        $(document).click( function() {
        
        if ( action3 ) {
        
        action3 = false;
        
        //monice lies ;)
        walk(monica_clone, 491,432, 442,383, 5,5, 500)

        setTimeout( function() { talk(monica_clone,'I don\'t know him!',0)
        
        ; }, 500 )
        
        } 
        
        //STOP!!!
        $(document).click( function() {
        
        if ( action4 ) {
        
        //hides help message
        $(info).animate({
          top:'-100%'
        });
        
        action4 = false;
        
        //bully gest angry...
        
          talk(bully,'GRRRR RRRR RRRRR',0);
          
         //johnny is confused  
          sprite(johnny,'surprised_UL','standing');
          
          setTimeout( function() { 
          
            sprite(johnny,'surprised_UR','standing');
          
          }, 100);
          
          setTimeout( function() { 
          
            sprite(johnny,'surprised_UL','standing');
          
          }, 200);
          
          setTimeout( function() { 
          
            sprite(johnny,'surprised_UL','standing');
          
          }, 300);
          
          setTimeout( function() { 
          
            sprite(johnny,'surprised_UR','standing');
          
          }, 400);
          
          setTimeout( function() { 
          
            sprite(johnny,'surprised_UL','standing');
          
          }, 500);
          
          setTimeout( function() { 
          
            sprite(johnny,'surprised_UL','standing');
          
          }, 600);
          
          setTimeout( function() { 
          
            sprite(johnny,'surprised_UR','standing');
          
          }, 700);
          
          //bully attacks
          setTimeout( function() { 
          
            sprite(bully,'BR');
          
            walk(bully, 636,372, 516,442, 5,10, 200)
            
            setTimeout( function() { 
            
                    sound_bam();
            
            }, 200);
            
            //end!
            setTimeout( function() { 
            
            sprite(bully,'BL');
            
            talk(sandra,'LOL');
            
            talk(bartender,'He\'s out of game');
            
            $(olivia).find('.info').show().css({
              opacity:1
            });

            }, 500)
            
            //johnny is blown away
            setTimeout( function() { 
            
              sprite(johnny,'kneeling','lying');
            
              walk(johnny, 510,452, 55,624, 5,5, 400);
              
            setTimeout( function() { 
            
                    sound_hit();
                    
                    $(johnny).hide('slow');
                    
                    show_restart();
            
            }, 300);
            
            
              //walk(johnny, 510,452, 295,535, 5,5, 200)
              
              /* ///and falls
                setTimeout( function() {
                
                  $(johnny).find('.info').show().css({
                    opacity:1,
                    left:23,
                    bottom:'100%'
                  });
                
                  sprite(johnny,'kneeling','lying');
                
                  sound_bam();
                
                },300);
                
                setTimeout( function() {
                
                  $(johnny).find('.info').css({
                    'background-position':'0 -200px',
                    left:55,
                    bottom:'70%'
                  });
                
                  sprite(johnny,'fours','lying');
                
                  sound_bam();
                
                },500);
                
                setTimeout( function() {
                
                  $(johnny).find('.info').css({
                    left:79,
                    bottom:'70%'
                  });
                
                  sprite(johnny,'lying','lying');
                
                  show_restart();
                
                },600);
                
                */
            
            },200);
          
          }, 800);
        
        }
        
        //STOP!!! THE END
        $(document).click( function() {
        return false;
        });
        
        });
        
        });
        
        }, 5200 )
        
        });
        
        });
        
  
      
      });
      
      });
      
      });
      
      }, 2500);
    
    }
    
    });
    
    }
    
    setTimeout( function() { scene3(); }, 5100 );
     
  //ultimate end!
  });