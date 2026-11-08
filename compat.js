/* Saves contain plain JSON values; support iPhones on older Safari releases. */
if(typeof window.structuredClone!=='function')window.structuredClone=function(value){return JSON.parse(JSON.stringify(value));};
if(typeof Object.hasOwn!=='function')Object.hasOwn=function(object,key){return Object.prototype.hasOwnProperty.call(object,key);};
