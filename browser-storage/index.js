// All Browser storage Common Point 
// You can use these to improve the user experiecne but we should always know that user can clear this things with just click 


// Local Storage and Session Storage Common point
// Can only be cleared by user and js, Key value storage, quite bad for complex data.
// Lets say we have method in object which we want to store in localStorage, then after saving
// it will get lost as it can't be encoded into JSON. and browsers can automatically delete
// it if browsers are running out of disk space. So be cautious.

// Local Storage - origin specific
// is actually syncrhonous and not asynchronous while it may look like that.
// LocalStorage is origin specific and even sub domain specific unless domain and sub-domain
// share the cookies explicity. It is also not shared in chrome profiles also. It is chrome
// profile that shares the browser storage not gmail or whatever. And incognito tab is also
// different chrome profile right ? 
// LocalStorage is also origin specific. The localStorage set by google willn't be visible to amazon. even it differ between http and https
// and subdomain are also not same origin
// - privacy extension can clear the localStorage
// - some browser can prevent writing to localStorage in strict mode. like firefox, safari and icongito mode
// - it can hold 5 - 10 MB per origin but it also depends on browser. Mobile browser can hold up to 2.5 - 5 MB. There is no global total quota but it works on per domain.
// - sometimes it may works in global basis for inPrivate profiles. 

// Session Storage
// It lives as logn as it is in a active tab even if you reload the page. However browser should
// n't be closed. that is it.

// Cookies
// also a key value store and have some config option, used to manage basic preferences, can also be cleared by user and js
// a bit clunk to  use, quite versatile, sent to server and bad for complex data, 
// - attached to HTTP Requests.
let allCookiesStoredAndNotSingleCookieDespiteConfusingName = document.cookie
allCookiesStoredAndNotSingleCookieDespiteConfusingName = `cookie=${"real"}`; // Unless server is connected it will n't set
// But interesting thing is if you try to set the cookie then it will n't set at all.
// Why ? They are only set and available if your webpage is getting served with a real server.
// Which is quite unlike Local and Session Storage. File protocol simply just doesn't simulate real 
// cirucmmstances under which our page would be served.
// - per domain 4kb

// Indexed - async
// Client Side Database and it is quite complex actualy We can perform queries against IndexedDB
// We can have different table with records so that we can manage complex data in there.
// We can use js to put and clear data in indexedDB and like all data Storage, user can
// also clear it with button in the preferences (so they should n't be storage to rely on)
// It is bit clunky to use however is great for complex data and provide good performance.
// However don't use it for simple site. Only use it for big websites like Google sheets level 
// where rich client side experiences is key.(Desktop level application). for whatever reason you don't want to 
// save the data in server and provide offline experiences. Most of the application in real
// world don't need any use of IndexedDB.
// - may enforce global limits.

// We can see WebSQL, it is deprecieated We shouldn't use it anymore.

