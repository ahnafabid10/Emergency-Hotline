### Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

1. getElementById - getElementById is a JavaScript method that finds an element with a specific ID from an HTML document.

getElementsByClassName- getElementsByClassName is a JavaScript method that finds all elements with the same class name in an HTML document.

querySelector- querySelector is a javascript method that helps to find a specific part of HTML

querySelectorAll-querySelector is a javascript method that helps to find all matches of any specific part of HTML.

2. **create and insert a new element into the DOM**
const hello = document.getElementById('hello');
helloJi.appendChild(hello)

3. **Event Bubbling**- Event Bubbling is a process in JavaScript where an event (like click) progressively “bubbles” from a child element up to its parent elements.

**How it works**

if anyone click on a child element.

then the event is first triggered on that child element.

After that it moves step by step to the parent element, grandparent element and so on until it reaches the document.

4. **Event Delegation** in JavaScript? Why is it useful?

Event Delegation is a JavaScript technique where, instead of adding an event listener to every child element, anyone use a single event listener on the parent element, and that listener can handle events of the child elements.

**Why is it useful?**
Instead of using many listeners for multiple child elements, you can use a single listener.

Even if new elements are added to the DOM later, the listener will still work.

The code becomes much cleaner and more manageable.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

**preventDefault()** - It prevents the default action of the event. For example: it disables link navigation, form submission.

**stopPropagation()** - It stops event bubbling/capturing. For example: It prevents the event from reaching the parent element's listener.
