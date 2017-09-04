# Stencil • [TodoMVC](http://todomvc.com)

## This Implementation

This is a **rough, initial, experimental** implementation of TodoMVC in an early
version of Stencil, as of early September 2017. There are many open questions:

* Is this good, idiomatic use of Stencil?
* Are there Stencil idioms yet?
* What about the unsightly flash when changing routes?
* Is this divided in to the "right" number of components?
* The original used UL/LI - but I split the inner component where the LI should
  be - is there anything that can be done to get the LI back?
* Should a better state management solution be used? Redux? MobX?

...and things to improve:

* [Increase the contrast](http://contrastrebellion.com/)
* Figure out localStorage problem and enable it
* Move CSS to component level CSS
* Split the filter controls to a component?
* Use upcoming-Ionic-in-Stencil?
* Follow the TodoMVC spec more closely? https://github.com/tastejs/todomvc/blob/master/app-spec.md
* Make it pass the TodoMVC E2E tests? Or make it more different from TodoMVC, to learn more?

## About Stencil

(from the Stencil documentation)

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into
a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny
virtual DOM layer, efficient one-way data binding, an asynchronous rendering
pipeline (similar to React Fiber), and lazy-loading out of the box, and
generates 100% standards-based Web Components that run in any browser supporting
the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework
or with no framework at all. In many cases, Stencil can be used as a drop in
replacement for traditional frontend frameworks given the capabilities now
available in the browser, though using it as such is certainly not required.

## Who wrote this TodoMVC port?

Ported to Stencil by [Kyle Cordes](http://kylecordes.com)
of [Oasis Digital](https://oasisdigital.com)
