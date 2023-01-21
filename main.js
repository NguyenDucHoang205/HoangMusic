var playlist = document.querySelector(".container_sub2-item2__playlist");
const heads = document.querySelectorAll(".header_h1");
const heads1 = document.querySelectorAll(".header_p");

const cd = document.querySelector(".cd_img");
const audio = document.querySelector("#audio");
const playBtn = document.querySelector(".play");
const nextBtn = document.querySelector(".next");
const preBtn = document.querySelector(".previous");
const isPlay = false;
const playingBtn = document.querySelector(".playing");
const timeStart = document.querySelector(".timer_start");
const timeEnd = document.querySelector(".timer_end");
const progessbar = document.querySelector(".progessbar");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const background1 = document.querySelector(".main_sub1");
const footerImg = document.querySelector(".footer_img");
var playlist;
const musicBar = document.querySelector("#music");
const search = document.querySelector('.header_sub-search');
const nameSong = document.querySelector('.nameSong');
const author = document.querySelector('.author');
const app = {
  currentChoice: 1,
  currentIndex: 0,
  songsVN: [
    {
      name: "Đừng quên tên anh",
      singer: "Hoa Vinh",
      path: "./nhac/dungquentenanh.mp3",
      image: "./anh/dungquentenanh.jpg",
    },
    {
      name: "Thu Cuối",
      singer: "YanBi",
      path: "./nhac/thucuoi.mp3",
      image: "./anh/thucuoi.jpg",
    },

    {
      name: "Lửng lơ",
      singer: "MASEW x BRAY",
      path: "./nhac/lunglo.mp3",
      image: "./anh/lunglo.jpg",
    },
    {
      name: "Như anh đã thấy",
      singer: "PhucXp ft. Freak D",
      path: "./nhac/nhuanhdathay.mp3",
      image: "./anh/nhuanhdathay.jpg",
    },
    {
      name: "Người Như Chúng Ta",
      singer: "Mr.Siro",
      path: "./nhac/nguoinhuchungta.mp3",
      image: "./anh/nguoinhuchungta.jpg",
    },
    {
      name: "Dưới Những Cơn Mưa",
      singer: "Mr.Siro",
      path: "./nhac/duoinhungconmua.mp3",
      image: "./anh/duoinhungconmua.jpg",
    },
    {
      name: "LIÊN KHÚC THẤT TÌNH REMAKE",
      singer: "TRỊNH ĐÌNH QUANG",
      path: "./nhac/lkthattinh.mp3",
      image: "./anh/lkthattinh.jpg",
    },
  ],
  songsUSUK: [
    {
      name: "All of me",
      singer: "John Legend",
      path: "./nhac/allofme.mp3",
      image: "./anh/allofme.jpg",
    },
    {
      name: "Despacito",
      singer: "Luis Fonsi",
      path: "./nhac/despacito.mp3",
      image: "./anh/despacito.jpeg",
    },

    {
      name: "Heat Waves",
      singer: "Glass Animals",
      path: "./nhac/heatwaves.mp3",
      image: "./anh/heatwaves.jfif",
    },
    {
      name: "Believer",
      singer: "Blank Space",
      path: "./nhac/believer.mp3",
      image: "./anh/believer.jpg",
    },
    {
      name: "Beggin",
      singer: "Mr.Siro",
      path: "./nhac/beggin.mp3",
      image: "./anh/beggin.jfif",
    },
    {
      name: "Angel Baby",
      singer: "Troye Sivan",
      path: "./nhac/angelbaby.mp3",
      image: "./anh/angelbaby.jfif",
    },
    {
      name: "At My Worst",
      singer: "Pink Sweat$",
      path: "./nhac/atmyworst.mp3",
      image: "./anh/atmyworst.jpg",
    },
  ],
  songsChina: [
    {
      name: "pla",
      singer: "Hoa Vinh",
      path: "./nhac/dungquentenanh.mp3",
      image: "./anh/dungquentenanh.jpg",
    },
    {
      name: "Đừng quên tên anh",
      singer: "Hoa Vinh",
      path: "./nhac/dungquentenanh.mp3",
      image: "./anh/dungquentenanh.jpg",
    },

    {
      name: "Lửng lơ",
      singer: "MASEW x BRAY",
      path: "./nhac/lunglo.mp3",
      image: "./anh/lunglo.jpg",
    },
    {
      name: "Như anh đã thấy",
      singer: "PhucXp ft. Freak D",
      path: "./nhac/nhuanhdathay.mp3",
      image: "./anh/nhuanhdathay.jpg",
    },
    {
      name: "Người Như Chúng Ta",
      singer: "Mr.Siro",
      path: "./nhac/nguoinhuchungta.mp3",
      image: "./anh/nguoinhuchungta.jpg",
    },
    {
      name: "Dưới Những Cơn Mưa",
      singer: "Mr.Siro",
      path: "./nhac/duoinhungconmua.mp3",
      image: "./anh/duoinhungconmua.jpg",
    },
    {
      name: "LIÊN KHÚC THẤT TÌNH REMAKE",
      singer: "TRỊNH ĐÌNH QUANG",
      path: "./nhac/lkthattinh.mp3",
      image: "./anh/lkthattinh.jpg",
    },
  ],
  
  
  getCurrentSong: function () {
    if(app.currentChoice == 1){
      return this.songsVN[app.currentIndex];
    }
    if(app.currentChoice == 2){
      return this.songsUSUK[app.currentIndex];
    }
    if(app.currentChoice == 3){
      return this.songsChina[app.currentIndex];
    }
  },
  setSecondsToTime: function (d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? "" : "") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? "" : "") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? "" : "") : "";
    if (hDisplay != "") {
      return (
        (hDisplay.length > 1 ? hDisplay : "0" + hDisplay) +
        ":" +
        (mDisplay.length > 1 ? mDisplay : "0" + mDisplay) +
        ":" +
        (sDisplay.length > 1 ? sDisplay : "0" + sDisplay)
      );
    } else if (mDisplay != "") {
      return (
        (mDisplay.length > 1 ? mDisplay : "0" + mDisplay) +
        ":" +
        (sDisplay.length > 1 ? sDisplay : "0" + sDisplay)
      );
    } else if (sDisplay != "") {
      return "00:" + (sDisplay.length > 1 ? sDisplay : "0" + sDisplay);
    }
    return "00:00";
  },
  loadCurrentSong: function () {
    for (let i = 0; i < heads.length; i++) {
      heads[i].innerHTML = app.getCurrentSong().name;
      heads1[i].innerHTML = app.getCurrentSong().singer;
    }
    console.log(this.getCurrentSong());
    cd.src = this.getCurrentSong().image;
    audio.src = this.getCurrentSong().path;
    footerImg.src = this.getCurrentSong().image;
  },

  nextSong: function () {
    app.currentIndex++;
    if (app.currentIndex >= app.songsVN.length) {
      app.currentIndex = 0;
    }
    app.loadCurrentSong();
  },
  previousSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songsVN.length - 1;
    }
    this.loadCurrentSong();
  },

  setbackGround: function () {
    background1s.style.backgroundColor = "white";
  },
  // setColorText: function(){
  //   nameSong.style.color = 'red';
  //   author.style.color = 'red';
  // },
  changeMusicBar: function () {
    if (app.isPlay) {
      musicBar.classList.toggle("paused");
    }
  },

  handleEvent: function () {
    window.onload = function () {};

    const playlist = document.querySelector(".playlistt");
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");
      if (songNode || e.target.closest(".option")) {
        if (songNode) {
          app.currentIndex = songNode.dataset.index;
          app.loadCurrentSong();
          audio.play();
          // nameSong.style.color = 'red';
          app.render();
        }
      }
    };
    const choice = document.querySelector(".container_sub2-ul");
    choice.onclick = function (e) {
      const choiceNode = e.target.closest(".container_sub2-li");
      if (choiceNode) {
        app.currentChoice = choiceNode.dataset.index;
        app.render();
      }
    };
    console.log(choice);
    moon.onclick = function () {
      app.setbackGround();
    };
    // quay cd
    const cdAnimate = cd.animate(
      [
        {
          transform: "rotate(360deg)",
        },
      ],
      {
        duration: 12000,
        iterations: Infinity,
      }
    );
    cdAnimate.pause();
    //onclick
    playBtn.onclick = function () {
      if (app.isPlay) {
        audio.pause();
      } else {
        audio.play();
      }
    };
    // play
    audio.onplay = function () {
      app.isPlay = true;
      musicBar.classList.remove("paused");
      playingBtn.classList.add("bx-pause");
      playingBtn.classList.remove("bx-play");
      cdAnimate.play();
    };
    //pause
    audio.onpause = function () {
      app.isPlay = false;
      musicBar.classList.add("paused");
      playingBtn.classList.add("bx-play");
      playingBtn.classList.remove("bx-pause");
      cdAnimate.pause();
    };
    audio.ontimeupdate = function () {
      const progessbarPercent = Math.floor(
        (audio.currentTime / audio.duration) * 100
      );
      progessbar.value = progessbarPercent;
      const timeCr = audio.currentTime;
      timeStart.innerHTML = app.setSecondsToTime(timeCr);
      const timeEd = audio.duration;
      timeEnd.innerHTML = app.setSecondsToTime(timeEd);
    };

    progessbar.onchange = function (e) {
      const changeTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = changeTime;
    };
    //click chuyen bai
    nextBtn.onclick = function () {
      app.nextSong();
      audio.play();
      app.render();
    };
    //click lui bai
    preBtn.onclick = function () {
      app.previousSong();
      audio.play();
      app.render();
    };
    audio.onended = function () {
      nextBtn.click();
    };
    // doi background
  },

  render: function () {
    if ((app.currentChoice == 1)) {
      const htmls = this.songsVN.map((song, index) => {
        if (index < 7) {
          return `<div class="song ${
            index == this.currentIndex ? "active" : ""
          }" data-index="${index}">
                  <div class="p_head">
                      
                      <p class ="stt">0${index+1}</p>
                      <img src="${song.image}" class="head_image" alt="">
                  </div>
                  <div class="p_body">
                      <h1 class="nameSong">
                          ${song.name} 
                      </h1>
                      <p class="author">
                          ${song.singer}
                      </p>
                    
                  </div>
                      <div class="p_option">
                          <i class='bx bx-dots-horizontal-rounded'></i>
                      </div>
                  </div>`;
        }
      });
      playlist.innerHTML = htmls.join("");
    }
    else if(app.currentChoice == 2){
      const htmls = this.songsUSUK.map((song, index) => {
        if (index <7 ) {
          return `<div class="song ${
            index == this.currentIndex ? "active" : ""
          }" data-index="${index}">
                  <div class="p_head">
                      <p class ="stt">0${index+1}</p>
                      <img src="${song.image}" class="head_image" alt="">
                  </div>
                  <div class="p_body">
                      <h1 class="nameSong">
                          ${song.name} 
                      </h1>
                      <p class="author">
                          ${song.singer}
                      </p>
                    
                  </div>
                      <div class="p_option">
                          <i class='bx bx-dots-horizontal-rounded'></i>
                      </div>
                  </div>`;
        }
      });
      playlist.innerHTML = htmls.join("");
    }
    else if(app.currentChoice == 3){
      const htmls = this.songsChina.map((song, index) => {
        if (index <7) {
          return `<div class="song ${
            index == this.currentIndex ? "active" : ""
          }" data-index="${index}">
                  <div class="p_head">
                       <p class ="stt">0${index+1}</p>
                      <img src="${song.image}" class="head_image" alt="">
                  </div>
                  <div class="p_body">
                      <h1 class="nameSong">
                          ${song.name} 
                      </h1>
                      <p class="author">
                          ${song.singer}
                      </p>
                    
                  </div>
                      <div class="p_option">
                          <i class='bx bx-dots-horizontal-rounded'></i>
                      </div>
                  </div>`;
        }
      });
      playlist.innerHTML = htmls.join("");
    }
  },

  start: function () {
    this.loadCurrentSong();
    this.handleEvent();
    this.render();
  },
};

app.start();
// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
// not supported in all browsers though and sometimes needs a prefix, so we need a shim
window.requestAnimFrame = ( function() {
	return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				function( callback ) {
					window.setTimeout( callback, 1000 / 60 );
				};
})();

// now we will setup our basic variables for the demo
var canvas = document.getElementById( 'canvas' ),
		ctx = canvas.getContext( '2d' ),
		// full screen dimensions
		cw = window.innerWidth,
		ch = window.innerHeight,
		// firework collection
		fireworks = [],
		// particle collection
		particles = [],
		// starting hue
		hue = 120,
		// when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
		limiterTotal = 20,
		limiterTick = 0,
		// this will time the auto launches of fireworks, one launch per 80 loop ticks
		timerTotal = 500,
		timerTick = 0,
		mousedown = false,
		// mouse x coordinate,
		mx,
		// mouse y coordinate
		my;

		
// set canvas dimensions
canvas.width = cw;
canvas.height = ch;

// now we are going to setup our function placeholders for the entire demo

// get a random number within a range
function random( min, max ) {
	return Math.random() * ( max - min ) + min;
}

// calculate the distance between two points
function calculateDistance( p1x, p1y, p2x, p2y ) {
	var xDistance = p1x - p2x,
			yDistance = p1y - p2y;
	return Math.sqrt( Math.pow( xDistance, 2 ) + Math.pow( yDistance, 2 ) );
}

// create firework
function Firework( sx, sy, tx, ty ) {
	// actual coordinates
	this.x = sx;
	this.y = sy;
	// starting coordinates
	this.sx = sx;
	this.sy = sy;
	// target coordinates
	this.tx = tx;
	this.ty = ty;
	// distance from starting point to target
	this.distanceToTarget = calculateDistance( sx, sy, tx, ty );
	this.distanceTraveled = 0;
	// track the past coordinates of each firework to create a trail effect, increase the coordinate count to create more prominent trails
	this.coordinates = [];
	this.coordinateCount = 3;
	// populate initial coordinate collection with the current coordinates
	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	this.angle = Math.atan2( ty - sy, tx - sx );
	this.speed = 2;
	this.acceleration = 1.05;
	this.brightness = random( 50, 70 );
	// circle target indicator radius
	this.targetRadius = 1;
}

// update firework
Firework.prototype.update = function( index ) {
	// remove last item in coordinates array
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	
	// cycle the circle target indicator radius
	if( this.targetRadius < 8 ) {
		this.targetRadius += 0.3;
	} else {
		this.targetRadius = 1;
	}
	
	// speed up the firework
	this.speed *= this.acceleration;
	
	// get the current velocities based on angle and speed
	var vx = Math.cos( this.angle ) * this.speed,
			vy = Math.sin( this.angle ) * this.speed;
	// how far will the firework have traveled with velocities applied?
	this.distanceTraveled = calculateDistance( this.sx, this.sy, this.x + vx, this.y + vy );
	
	// if the distance traveled, including velocities, is greater than the initial distance to the target, then the target has been reached
	if( this.distanceTraveled >= this.distanceToTarget ) {
		createParticles( this.tx, this.ty );
		// remove the firework, use the index passed into the update function to determine which to remove
		fireworks.splice( index, 1 );
	} else {
		// target not reached, keep traveling
		this.x += vx;
		this.y += vy;
	}
}

// draw firework
Firework.prototype.draw = function() {
	ctx.beginPath();
	// move to the last tracked coordinate in the set, then draw a line to the current x and y
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1][ 0 ], this.coordinates[ this.coordinates.length - 1][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsl(' + hue + ', 100%, ' + this.brightness + '%)';
	ctx.stroke();
	
	ctx.beginPath();
	// draw the target for this firework with a pulsing circle
	//ctx.arc( this.tx, this.ty, this.targetRadius, 0, Math.PI * 2 );
	ctx.stroke();
}

// create particle
function Particle( x, y ) {
	this.x = x;
	this.y = y;
	// track the past coordinates of each particle to create a trail effect, increase the coordinate count to create more prominent trails
	this.coordinates = [];
	this.coordinateCount = 5;

	while( this.coordinateCount-- ) {
		this.coordinates.push( [ this.x, this.y ] );
	}
	// set a random angle in all possible directions, in radians
	this.angle = random( 0, Math.PI * 2 );
	this.speed = random( 1, 10 );
	// friction will slow the particle down
	this.friction = 0.95;
	// gravity will be applied and pull the particle down
	this.gravity = 0.6;
	// set the hue to a random number +-20 of the overall hue variable
	this.hue = random( hue - 20, hue + 20 );
	this.brightness = random( 50, 80 );
	this.alpha = 1;
	// set how fast the particle fades out
	this.decay = random( 0.0075, 0.009 );
}

// update particle
Particle.prototype.update = function( index ) {
	// remove last item in coordinates array
	this.coordinates.pop();
	// add current coordinates to the start of the array
	this.coordinates.unshift( [ this.x, this.y ] );
	// slow down the particle
	this.speed *= this.friction;
	// apply velocity
	this.x += Math.cos( this.angle ) * this.speed;
	this.y += Math.sin( this.angle ) * this.speed + this.gravity;
	// fade out the particle
	this.alpha -= this.decay;
	
	// remove the particle once the alpha is low enough, based on the passed in index
	if( this.alpha <= this.decay ) {
		particles.splice( index, 1 );
	}
}

// draw particle
Particle.prototype.draw = function() {
	ctx. beginPath();
	// move to the last tracked coordinates in the set, then draw a line to the current x and y
	ctx.moveTo( this.coordinates[ this.coordinates.length - 1 ][ 0 ], this.coordinates[ this.coordinates.length - 1 ][ 1 ] );
	ctx.lineTo( this.x, this.y );
	ctx.strokeStyle = 'hsla(' + this.hue + ', 100%, ' + this.brightness + '%, ' + this.alpha + ')';

	ctx.stroke();
}

// create particle group/explosion
function createParticles( x, y ) {
	// increase the particle count for a bigger explosion, beware of the canvas performance hit with the increased particles though
	var particleCount = 20;
	while( particleCount-- ) {
		particles.push( new Particle( x, y ) );
	}
}


// main demo loop
function loop() {
	// this function will run endlessly with requestAnimationFrame
	requestAnimFrame( loop );
	
	// increase the hue to get different colored fireworks over time
	hue += 0.5;
	
	// normally, clearRect() would be used to clear the canvas
	// we want to create a trailing effect though
	// setting the composite operation to destination-out will allow us to clear the canvas at a specific opacity, rather than wiping it entirely
	ctx.globalCompositeOperation = 'destination-out';
	// decrease the alpha property to create more prominent trails
	ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
	ctx.fillRect( 0, 0, cw, ch );
	// change the composite operation back to our main mode
	// lighter creates bright highlight points as the fireworks and particles overlap each other
	ctx.globalCompositeOperation = 'lighter';
	
	// loop over each firework, draw it, update it
	var i = fireworks.length;
	while( i-- ) {
		fireworks[ i ].draw();
		fireworks[ i ].update( i );
	}
	
	// loop over each particle, draw it, update it
	var i = particles.length;
	while( i-- ) {
		particles[ i ].draw();
		particles[ i ].update( i );

	}

	
	// launch fireworks automatically to random coordinates, when the mouse isn't down
	if( timerTick >= timerTotal ) {
		timerTick = 0;
	} else {
		var temp = timerTick % 400;
		if(temp <= 15){		
			fireworks.push( new Firework( 100, ch, random( 190, 200 ), random(90, 100) ));
			fireworks.push( new Firework( cw - 100, ch, random(cw - 200, cw - 190), random(90, 100) ));
		}

		var temp3 = temp / 10;

		if(temp > 319){
			fireworks.push(new Firework(300 + (temp3 - 31 ) * 100 , ch, 300 + (temp3 - 31) * 100 , 200));
		}

		timerTick++;
	}
	
	// limit the rate at which fireworks get launched when mouse is down
	if( limiterTick >= limiterTotal ) {
		if( mousedown ) {
			// start the firework at the bottom middle of the screen, then set the current mouse coordinates as the target
			fireworks.push( new Firework( cw / 2, ch, mx, my ) );
			limiterTick = 0;
		}
	} else {
		limiterTick++;
	}
}

// mouse event bindings
// update the mouse coordinates on mousemove
canvas.addEventListener( 'mousemove', function( e ) {
	mx = e.pageX - canvas.offsetLeft;
	my = e.pageY - canvas.offsetTop;
});

// toggle mousedown state and prevent canvas from being selected
canvas.addEventListener( 'mousedown', function( e ) {
	e.preventDefault();
	mousedown = true;
});

canvas.addEventListener( 'mouseup', function( e ) {
	e.preventDefault();
	mousedown = false;
});

// once the window loads, we are ready for some fireworks!
window.onload = loop;