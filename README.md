# Vanilla JS + HTML Todo List

The same old todo list app, but without any library or framework, just plain vanilla JS and HTML.

## Why this

This little repo is meant to demonstrate how simple and powerful the DOM APIs are.

It can also give you a better understanding of what happens under the hood, now that nowadays we mainly work at a higher level with libraries and framework like React, jQuery, Angular and Vue.


## Run the app

```
yarn install && yarn start
```

## Run the tests

```
yarn test
```

or if you want to play with the Cypress UI:


```
yarn test:interactive
```


# Notes

In some areas the code is intentionally verbose to showcase how we can manipulate the DOM elements, such as:

* Enforcing the CSS [style](https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style), which in most cases can be done in CSS but in some other cases you may want to use JS.
* Setting the `className` of an element.
* Using `appendChild` to add an element inside another element
* Setting onSubmit and onClick events using [addEventListener](https://developer.mozilla.org/it/docs/Web/API/Element/addEventListener)

# Resources

Some useful resources:
- [MDN Docs](https://developer.mozilla.org/it/docs/Web/API/Document_Object_Model)
- [A crash course on youtube](https://www.youtube.com/watch?v=0ik6X4DJKCc)