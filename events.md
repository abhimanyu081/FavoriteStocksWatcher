# Events in javascript

### When you click the button, you’re clicking not only the button but also the button’s container, the div, and the whole webpage.

### There are two main event models: event bubbling and event capturing.

### Event Bubbling

Event bubbling
In the event bubbling model, an event starts at the most specific element and then flows upward toward the least specific element (the document or even window).

### Event capturing

In the event capturing model, an event starts at the least specific element and flows downward toward the most specific element.

### DOM Level 2 Event flow

DOM level 2 events specify that event flow has three phases:

First, event capturing occurs, which provides the opportunity to intercept the event.
Then, the actual target receives the event.
Finally, event bubbling occurs, which allows a final response to the event.

### TODO

Apply debouncing
