### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

1. getElementById - getElementById is a JavaScript method that finds an element with a specific ID from an HTML document.

getElementsByClassName- getElementsByClassName is a JavaScript method that finds all elements with the same class name in an HTML document.

querySelector- querySelector is a javascript method that helps to find a specific part of HTML

querySelectorAll-querySelector is a javascript method that helps to find all matches of any specific part of HTML.



3. **Event Bubbling**- Event Bubbling is a process in JavaScript where an event (like click) progressively “bubbles” from a child element up to its parent elements.

**How it works**

if anyone click on a child element.

then the event is first triggered on that child element.

After that it moves step by step to the parent element, grandparent element and so on until it reaches the document.