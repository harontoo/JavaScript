let EventMixin = {
/**
 * Subscribe to event,usage:
 * menu.on('select',function(item){...});
 */
on(eventName,handler){
    if(!this._eventHandlers) this._eventHandlers={};
    if(!this._eventHandlers[eventName])
    {
        this._eventHandlers[eventName] = [];
    }

    this._eventHandlers[eventName].push(handler)
},
/**
 * Cancel subscription to event,usage:
 * menu.off('select',handler)
 */
off(eventName,handler)
{
    let handlers = this._eventHandlers?.[eventName];
    if(!handlers) return;
    for(let i = 0; i<handler.length; i++)
    {
        if(handlers[i] === handler)
        {
            handlers.splice(i--,1);
        }
    }
},
/**
 * Generate an event with given name and data
 * this.trigger('select',data1,data2);
 */
trigger(eventName,...args)
{
    if(!this._eventHandlers[eventName])
    {
        return;//No handlers for that event
    }
    //Call the handlers
    this._eventHandlers[eventName].forEach(handler => {
        handler.apply(this,args);
    });
}


};

//Usage
class Menu {
 choose(value){
    this.trigger('select',value);
 }
};


//Add mixin with event-related methods
Object.assign(Menu.prototype,EventMixin);

let menu = new Menu();
menu.on('select',(value)=>console.log(`Value selected : ${value}`));

menu.choose('123');