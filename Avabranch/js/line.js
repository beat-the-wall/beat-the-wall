function Line(t,i,s,h,e,a,r,o){this.game=t,this.x=s||canvas.width/2,this.y=h||canvas.height/2,this.r=e||5,this.color=i||"#E67373",this.points=[],this.keys=a||["A","S"],this.clearCount=200,this.tarX=-1,this.tarXRate=-1,this.tarXTime=0,this.speed=r||4,this.ySpeed=o||4,this.isDead=!1,this.clearGone=function(){for(var t=this.points.length-1;t>=0;t--)if(this.points[t].y>canvas.height+2*this.r){this.points.splice(0,t);break}},this.revive=function(){for(var t=this.game.objects.player.lines,i=t.length-1;i>=0;i--)if(!t[i].isDead){this.x=t[i].x+2*t[i].r;break}this.isDead=!1},this.physics=function(i){this.points.length>=this.clearCount&&this.clearGone();for(var s=0;s<this.points.length;s++)this.points[s].y+=.05*i*this.ySpeed;if(-1==this.tarX)keyState[this.keys[0]]?this.x-=this.speed*i*.05:keyState[this.keys[1]]&&(this.x+=this.speed*i*.05);else{if(-1==this.tarXRate){this.tarXTime=20;var h=Math.abs(this.x-this.tarX);this.tarXRate=h/this.tarXTime}this.x+=this.tarXRate*(this.x<this.tarX?1:-1),this.tarXTime-=1,this.tarXTime<=0&&(this.x=this.tarX,this.tarX=-1,this.tarXRate=-1)}if(this.isDead||this.points.push({y:this.y,x:this.x,r:this.r,color:this.color}),t.objects.spawner&&!this.isDead){if(this.x-this.r<0||this.x+this.r>canvas.width)return void(this.isDead=!0);var e=t.objects.spawner.blocks;for(s=0;s<e.length;s++)if(collideRoundSquare(this,e[s])){this.isDead=!0;break}var a=t.objects.power_spawn.powerups;for(s=0;s<a.length;s++)if(!a[s].isDead&&collideRoundRound(this,a[s])){a[s].act(),a[s].isDead=!0;break}}},this.draw=function(t){var i=this.points[0],s=this.points[this.points.length-1];if(i&&s){t.beginPath(),t.lineWidth=2*s.r,t.lineCap="round",t.lineJoin="round",t.moveTo(i.x,i.y),t.strokeStyle=i.color;for(var h=1;h<this.points.length;h++){var e=this.points[h];t.lineTo(e.x,e.y)}t.stroke(),t.closePath()}}}