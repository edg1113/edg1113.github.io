---
title: Markdown-Test Section
---

# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Horizontal Rules
___

## Emphasis & Checkbox

**This is bold text**

*This is italic text*

~~Strikethrough~~

- [ ] chekc
- [x] ckckck

## Blockquotes

> Normal Blockquotes

> # Lorem Ipsum is simply dummy text of the printing and typesetting industry.

> ## Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

> ### when an unknown printer took a galley of type and scrambled it to make a type specimen book.

> #### It has survived not only five centuries,

> ##### but also the leap into electronic typesetting, remaining essentially unchanged.


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


## Code

Inline `code`

Syntax highlighting
~~~ python
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
~~~

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)
[link with title](http://nodeca.github.io/pica/demo/ "title text!")

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Alt text][id]
With a reference later in the document defining the URL location:
[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].
Footnote 2 link[^second].
Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**
[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1
:   Definition 1 

    with lazy continuation.

Term 2 with *inline markup*
:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

---