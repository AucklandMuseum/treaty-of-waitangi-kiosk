define(function(require){
    'use strict'

    var self = {
        states: {},
        moves:0,
        canInteract:true,
        init: function(){
            // self.newState = 'splash';
            // history.pushState({page:self.newState}, null, null);
        },
        fireState: function(){

            self.canInteract = false;
            setTimeout(function (){
                self.canInteract = true;
            },1300)

            if(typeof this.states[''] !== 'undefined') state;

            // console.log(self.currentState);

            if(typeof this.states[self.currentState] !== 'undefined') this.states[self.currentState].out().then(function(){this.states[self.currentState].dump()}.bind(this));
            if(typeof this.states[self.newState] !== 'undefined') this.states[self.newState].in().then(function(){this.states[self.newState].load()}.bind(this));;
        },
        go:function(str){
            if(str == this.newState) return;
            history.pushState({page:str}, null, null);
            this.currentState = self.newState;
            this.newState = str;
            this.fireState();
            this.moves++;
        },
        back: function(){
            if(this.moves == 0) return;
            history.back();
            this.moves--;
            this.currentState = self.newState;
            this.newState = history.state.page;
        },
        register: function(key, obj){
            this.states[key] = obj;
        }

    }

    return self;
});