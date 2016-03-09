define([
    'modules/agent'
], function(agent) {

    var self = {
        transformStr : '',
        properties:{},
        css: function(obj){
            self.transformStr = '';
            self.properties = {};

            for(var prop in obj){

                var propVal = obj[prop];
                switch(prop){
                    case 'translate3d':
                        self.transformStr += (!Modernizr.csstransforms3d || agent.isAndroid()) ? 'translate('+propVal.x+','+propVal.y+') ' : 'translate3d('+propVal.x+','+propVal.y+','+propVal.z+') ';
                        break;
                    case 'rotateX':
                    case 'rotateY':
                    case 'rotateZ':
                    case 'rotate':
                        self.transformStr += prop + '('+propVal+') ';
                        break;
                    case 'translateX':
                    case 'translateY':
                    case 'translate':
                        self.transformStr += prop + '('+propVal+') ';
                        break
                    case 'scaleX':
                    case 'scaleY':
                    case 'scale':
                        self.transformStr += prop + '('+propVal+') ';
                        break;

                    default:
                        self.properties[prop] = propVal;
                        break;
                }
            }

            if(self.transformStr !== ''){
                self.properties['-webkit-transform'] =
                self.properties['-moz-transform'] =
                self.properties['-o-transform'] =
                self.properties['-ms-transform'] =
                self.properties.transform =
                self.transformStr;
            }
            return self.properties;
        }
    };

    return self;

});