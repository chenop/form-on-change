## AngularJS ng-change like functionality for the entire form

<b>Use Case:</b> When given a form - we would like to call a method for every change in on of the forms fields.<br>
For example: Update the server for each change in one of our fields.

the form-on-change directive support <input> elements, <textarea> boxes and <select> elements.
by listening to the 'change' event so according to [JQuery documentation](http://api.jquery.com/change/):

> The change event is sent to an element when its value changes. 
> This event is limited to <input> elements, <textarea> boxes and <select> elements. 
> For select boxes, checkboxes, and radio buttons, the event is fired immediately when the user makes a selection with the mouse, but for the other element types the event is deferred until the element loses focus.

### Install
```
bower install form-on-change
```
### Usage
Add form-on-change.js to list of scripts:
```javascript
<script src="bower_components/form-on-change/form-on-change.js"></script>
```

Add module dependence
```javascript
angular.module('your-app-name', ['chenop.form-on-change']);
```
In your HTML it should look something like that:
```html
<form name="form1" form-on-change="doSomething()">
  <input ng-model="formData.a">
  <input ng-model="formData.b">
</form>
```
