define("release/interview/1.0.0/main",["./vector2"],function(a){function b(a,b){return a+Math.floor(Math.random()*(b-a+1))}function c(a,b){return 4*(b*e.width+a)}var d=a("./vector2"),e=document.querySelector("canvas"),f=e.getContext("2d"),g=new Image;g.onload=function(){f.drawImage(g,250,90,215,234,10,0,215,234),e.onmousemove=function(a){for(var g=e.getBoundingClientRect(),h=new d(a.clientX-g.left,a.clientY-g.top),i=f.getImageData(0,0,e.width,e.height),j=i.data,k=4*e.width*e.height,l=0;k>l;l+=4)if(0!=j[l+3]){var m=l/4%e.width,n=parseInt(l/4/e.width),o=new d(m,n);if(o.distanceToSquared(h)<64){m+=Math.round(b(-1,1)),n-=Math.round(b(-1,1));var p=c(m,n);j[p]=j[l],j[p+1]=j[l+1],j[p+2]=j[l+2],j[p+3]=j[l+3]/1.05}}f.putImageData(i,0,0)}},g.src="plum.png"}),function(){var a=function(a,b){this.x=a||0,this.y=b||0};a.prototype={set:function(a,b){return this.x=a,this.y=b,this},sub:function(b){return new a(this.x-b.x,this.y-b.y)},multiplyScalar:function(a){return this.x*=a,this.y*=a,this},divideScalar:function(a){return a?(this.x/=a,this.y/=a):this.set(0,0),this},length:function(){return Math.sqrt(this.lengthSq())},normalize:function(){return this.divideScalar(this.length())},lengthSq:function(){return this.x*this.x+this.y*this.y},distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;return b*b+c*c},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},setLength:function(a){return this.normalize().multiplyScalar(a)}},define("release/interview/1.0.0/vector2",[],function(b,c,d){d.exports=a})}();
