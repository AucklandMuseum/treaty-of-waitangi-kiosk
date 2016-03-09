define(function(require){
    'use strict'

    /*
    =================================
    Most of the code on this page is extracted from:


    img-touch-canvas - v0.1
    http://github.com/rombdn/img-touch-canvas

    (c) 2013 Romain BEAUDON
    This code may be freely distributed under the MIT License
    =================================
    */



    var Pinch = function(options) {
        if( !options || !options.canvasId || !options.path) {
            throw 'ImgZoom constructor: missing arguments canvas or path';
        }


        this.canvas         = document.getElementById(options.canvasId);
        this.canvas.width   = options.width;
        this.canvas.height  = options.height;
        this.context        = this.canvas.getContext('2d');

        this.zoomPos = {x:this.canvas.width/2,y:this.canvas.height/2};

        this.position = {
            x: 0,
            y: 0
        };

        this.scale = 0.5;

        this.imgTexture = new Image();

        $(this.imgTexture).on('load', function (){
            this.update();
        }.bind(this))

        this.imgTexture.src = options.path;

        this.lastZoomScale = null;
        this.lastX = null;
        this.lastY = null;

        this.init = false;

        this.update();
    };




    Pinch.prototype = {

        reset: function(){
            this.clear();
            this.zoomPos = {x:this.canvas.width/2,y:this.canvas.height/2};

            this.position = {
                x: 0,
                y: 0
            };

            this.scale = 0.5;
            this.lastZoomScale = null;
            this.lastX = null;
            this.lastY = null;

            this.init = false;
        },

        updatefn:[],

        clear: function(){
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
        update: function() {
            if(!this.init) {
                if(this.imgTexture.width) {
                    var scaleRatio = null;
                    scaleRatio = (this.canvas.clientHeight - 100) / this.imgTexture.height;
                    this.initialScale = scaleRatio;

                    this.scale = scaleRatio;
                    this.position.x = (this.canvas.width - this.imgTexture.width*this.scale)/2;
                    this.position.y = (this.canvas.height - this.imgTexture.height*this.scale)/2;
                    this.init = true;
                }
            }

            this.clear();
            this.context.save();

            var transX = this.position.x ;
            var transY = this.position.y ;


            for(var i = 0; i < this.updatefn.length; i++){
                this.updatefn[i]();
            }

            this.context.drawImage(
                this.imgTexture,
                this.position.x, this.position.y,
                this.scale * this.imgTexture.width,
                this.scale * this.imgTexture.height);

            this.context.restore();
        },


        gesturePinchZoom: function(event) {
            var zoom = false;

            if( event.originalEvent.targetTouches.length >= 2 ) {


                var p1 = event.originalEvent.targetTouches[0];
                var p2 = event.originalEvent.targetTouches[1];
                var zoomScale = Math.sqrt(Math.pow(p2.clientX - p1.clientX, 2) + Math.pow(p2.clientY - p1.clientY, 2)); //euclidian distance

                this.zoomPos.x =  (p1.clientX + (p2.clientX-p1.clientX)/2);
                this.zoomPos.y =  (p1.clientY + (p2.clientY-p1.clientY)/2);

                if( this.lastZoomScale ) {
                    zoom = zoomScale - this.lastZoomScale;
                }

                this.lastZoomScale = zoomScale;
            }

            return zoom;
        },

        doZoom: function(zoom, force) {


            if(!zoom) return;

            //new scale
            var currentScale = this.scale;
            var newScale = (typeof force == 'undefined') ?  Math.min(2, this.scale + zoom/100) : Math.min(2, Math.max(zoom, 0.24));

            console.log(newScale);


            //some helpers
            var deltaScale = newScale - currentScale;
            var currentWidth    = (this.imgTexture.width * this.scale);
            var currentHeight   = (this.imgTexture.height * this.scale);
            var deltaWidth  = this.imgTexture.width*deltaScale;
            var deltaHeight = this.imgTexture.height*deltaScale;


            //by default scale doesnt change position and only add/remove pixel to right and bottom
            //so we must move the image to the left to keep the image centered
            //ex: coefX and coefY = 0.5 when image is centered <=> move image to the left 0.5x pixels added to the right
            var canvasmiddleX = this.canvas.clientWidth / 2;
            var canvasmiddleY = this.canvas.clientHeight / 2;
            var xonmap = (-this.position.x) + canvasmiddleX;
            var yonmap = (-this.position.y) + canvasmiddleY;
            var coefX = -xonmap / (currentWidth);
            var coefY = -yonmap / (currentHeight);
            var newPosX = this.position.x + deltaWidth*coefX;
            var newPosY = this.position.y + deltaHeight*coefY;

            //edges cases
            var newWidth = currentWidth + deltaWidth;
            var newHeight = currentHeight + deltaHeight;

            if( newWidth < this.canvas.clientWidth ){
                newPosX = (this.canvas.width - newWidth)/2
            };


            if( newHeight < this.canvas.clientHeight-100 ) return;
            if( newPosY > 50 ) { newPosY = 50; }
            if( newPosY + newHeight < this.canvas.clientHeight ) { newPosY = (this.canvas.clientHeight - newHeight)/2; }


            //finally affectations
            this.scale    = newScale;
            this.prevScale = currentScale;
            this.position.x = newPosX;
            this.position.y = newPosY;

            this.update();
        },

        doMove: function(relativeX, relativeY) {

            console.log(this.lastX , this.lastY);
            if(this.lastX && this.lastY) {

                console.log('up');

                var deltaX = relativeX - this.lastX;
                var deltaY = relativeY - this.lastY;
                var currentWidth = (this.imgTexture.width * this.scale);
                var currentHeight = (this.imgTexture.height * this.scale);

                this.position.x += deltaX;
                this.position.y += deltaY;

                if( currentWidth < this.canvas.width ) {
                    this.position.x = (this.canvas.width - currentWidth)/2;
                }

                if( this.position.y > 50 ) {
                    this.position.y = 50;
                }
                else if( this.position.y + currentHeight < this.canvas.clientHeight-50 ) {
                    this.position.y = this.canvas.clientHeight- 50 - currentHeight;
                }
            }

            this.lastX = relativeX;
            this.lastY = relativeY;
            this.update();
        },

        touchstart: function (e){
            this.lastX          = null;
            this.lastY          = null;
            this.lastZoomScale  = null;
        },

        touchmove:function (e){
            e.preventDefault();
            if(e.originalEvent.targetTouches.length == 2) { //pinch
                this.doZoom(this.gesturePinchZoom(e));

            }
            else if(e.originalEvent.targetTouches.length == 1) {
                var relativeX = e.originalEvent.targetTouches[0].clientX;
                var relativeY = e.originalEvent.targetTouches[0].clientY ;
                this.doMove(relativeX, relativeY);
            }
        }


    };

    return Pinch;
});