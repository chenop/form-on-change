Use Case:

When given a form - we would like to call a method for every change in on of the forms fields.
For example: Update the server for each change in one of our fields.

the form-on-change directive support <input> elements, <textarea> boxes and <select> elements.
We listen to the 'change' event so according to [JQuery documentation](http://api.jquery.com/change/)

> The change event is sent to an element when its value changes. 
> This event is limited to <input> elements, <textarea> boxes and <select> elements. 
> For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the other element types the event is deferred until the element loses focus.
