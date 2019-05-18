var Game,game,__hasProp=Object.prototype.hasOwnProperty,__extends=function(t,e){for(var i in e)__hasProp.call(e,i)&&(t[i]=e[i]);function o(){this.constructor=t}return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t};(game=new(Game=function(t){function e(t,i,o){e.__super__.constructor.apply(this,arguments),atom.input.bind(atom.key.LEFT_ARROW,"move_left"),atom.input.bind(atom.key.RIGHT_ARROW,"move_right"),atom.input.bind(atom.key.UP_ARROW,"move_up"),atom.input.bind(atom.key.DOWN_ARROW,"move_down"),atom.input.bind(atom.key.SPACE,"toggle_pause"),this.height=t,this.width=i,this.pixelsize=o,window.onresize=function(t){},document.getElementById("canvas_container").style.width=this.width*this.pixelsize+"px",atom.canvas.style.border="#fff 1px solid",atom.canvas.style.position="relative",atom.canvas.height=this.height*this.pixelsize,atom.canvas.width=this.width*this.pixelsize,this.startGame()}return __extends(e,t),e.prototype.startGame=function(){var t,e,i;return e=Math.floor(this.width/2),i=Math.floor(this.height/2),this.snake=[[e,i],[--e,i],[--e,i],[--e,i]],this.dir="",this.newdir="right",this.score=0,this.gstarted=!0,this.gpaused=!1,this.food=[],this.last_dt=0,this.delay=.08,this.noshow=!0,this.gpaused=!0,t=[this.width*this.pixelsize,this.height*this.pixelsize],this.tx=t[0],this.ty=t[1],this.genFood(),this.showIntro()},e.prototype.genFood=function(){var t,e;for(t=void 0,e=void 0;t=Math.floor(Math.random()*(this.width-1)),e=Math.floor(Math.random()*(this.height-1)),this.testCollision(t,e););return this.food=[t,e]},e.prototype.drawFood=function(){return atom.context.beginPath(),atom.context.arc(this.food[0]*this.pixelsize+this.pixelsize/2,this.food[1]*this.pixelsize+this.pixelsize/2,this.pixelsize/2,0,2*Math.PI,!1),atom.context.fill()},e.prototype.drawSnake=function(){var t,e,i,o,s;for(t=0,e=this.snake.length,s=[];t<e;)i=this.snake[t][0],o=this.snake[t][1],atom.context.fillRect(i*this.pixelsize,o*this.pixelsize,this.pixelsize,this.pixelsize),s.push(t++);return s},e.prototype.testCollision=function(t,e){var i,o;if(t<0||t>this.width-1)return!0;if(e<0||e>this.height-1)return!0;for(i=0,o=this.snake.length;i<o;){if(t===this.snake[i][0]&&e===this.snake[i][1])return!0;i++}return!1},e.prototype.endGame=function(){var t,e,i,o,s;return this.gstarted=!1,this.noshow=!0,atom.context.fillStyle="#fff",atom.context.strokeStyle="#000",t=(o=["Game Over",this.tx/2,this.ty/2.4])[0],e=o[1],i=o[2],atom.context.font="bold 30px monospace",atom.context.textAlign="center",atom.context.fillText(t,e,i),atom.context.strokeText(t,e,i),atom.context.font="bold 25px monospace",t=(s=["Score: "+this.score,this.tx/2,this.ty/1.7])[0],e=s[1],i=s[2],atom.context.fillText(t,e,i),atom.context.strokeText(t,e,i)},e.prototype.togglePause=function(){var t,e,i,o;return this.gpaused?(this.gpaused=!1,this.noshow=!1):(this.noshow=!0,this.gpaused=!0,t=(o=["Paused",this.tx/2,this.ty/2])[0],e=o[1],i=o[2],atom.context.fillStyle="#fff",atom.context.font="bold 30px monospace",atom.context.textAlign="center",atom.context.fillText(t,e,i),atom.context.strokeText(t,e,i))},e.prototype.showIntro=function(){return atom.context.fillStyle="#fff",atom.context.font="30px sans-serif",atom.context.textAlign="center",atom.context.textAlign="left",atom.context.font="30px monospace",atom.context.fillText("Instructions:",2*this.pixelsize,this.ty/3),atom.context.font="18px monospace",atom.context.fillText("Use arrow keys to change direction.",2*this.pixelsize,this.ty/2.3),atom.context.fillText("Press space to start/pause.",2*this.pixelsize,this.ty/2.1),atom.context.fillText("Pro-tip: Press space now!",2*this.pixelsize,this.ty/1.7)},e.prototype.update=function(t){var e,i;if(atom.input.pressed("move_left")?("right"!==this.dir&&(this.newdir="left"),console.log("left")):atom.input.pressed("move_up")?"down"!==this.dir&&(this.newdir="up"):atom.input.pressed("move_right")?"left"!==this.dir&&(this.newdir="right"):atom.input.pressed("move_down")?"up"!==this.dir&&(this.newdir="down"):atom.input.pressed("toggle_pause")&&(this.gstarted?this.togglePause():(this.eraseCanvas(),this.startGame())),this.last_dt<this.delay)this.last_dt+=t;else if(this.last_dt=0,this.gstarted&&!this.gpaused){switch(e=this.snake[0][0],i=this.snake[0][1],this.newdir){case"up":i--;break;case"right":e++;break;case"down":i++;break;case"left":e--}if(!this.testCollision(e,i))return this.snake.unshift([e,i]),e===this.food[0]&&i===this.food[1]?(this.score++,this.genFood()):this.snake.pop(),this.dir=this.newdir;this.endGame()}},e.prototype.eraseCanvas=function(){return atom.context.fillStyle="#000",atom.context.fillRect(0,0,this.width*this.pixelsize,this.height*this.pixelsize),atom.context.fillStyle="#fff"},e.prototype.draw=function(){if(!this.noshow)return this.eraseCanvas(),this.drawFood(),this.drawSnake()},e}(atom.Game))(15,20,30)).run();