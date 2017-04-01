# Welcome to nnangpress

Nangpress is a single page application that makes single page applications, a website that makes websites. 

# Technical Overview

As we are using om to render sites from a single large datastructure (monolith), and each change in the data 
causes a re-render, we could consider each render as loading a new and different site, although for example we wouldn't 
typically think of transitioning between pages in a single page application as moving to a new site. Well 
if the change of state is large enough, and we have the logic in the code to render a large change in 
the underlying data stucture, then we could render a change that would be percieved as a new site. 
Then if you wanted to code a new site you would just code a new data structure, and the logic would do the rest. 

In Nangpress the aim is to provide enough logic to render a range of sites, and then render a particular site by 
loading its corresponding data strucutre. Moving the 'coding' of sites to the datastructure level has many advanatges.

For example we can provide a GUI for creating these datastructures, allowing non-coders to create sites. In Nangpress 
this GUI is the site itself. A Nangpress site has two modes, ordinary viewing mode and 'edit mode'. 
Having two people collaborate in real-time on editing a site through this GUI is more or 
less reduced to the problem of keeping their site datastructures synced. Creating sites is very cheap, baring assets 
a site is just a few kb of data. Backing up a site is easy, the user can just download their datastructure. 

# Future 

- Greatly improve UX

- Realtime collaboration

- Have option to allow end users to personalize the site based on their user account. 

- Allow end users to edit the site and send their edits to the site owner as suggestions.

# Running and deploying

## Dev mode
- boot dev

## REPL
- boot repl --client
- (start-repl)

## Deploy
- boot production build target

## Testing 

- boot auto-test 

## Routing

Routing is considered part of the application state. There is a master component that will render 
different sub components based on the routing state of the app, stored in the monolith.

## Jquery plugins

- In general the html for these should be rendered with dangerouslysetinnerhtml.
We are looking to essentially sidestep react, ideally there should be no
jquery plugins.

## Firebase notes

- Unable to store empty values in firebase. Must compensate for this in code

## Glossary 

! - At the end of a function name means the function makes a change to application state only. 

!! - A function that makes a change outside of application state, such as saving directly to database or 
making a change to the DOM outside of react. Ideally we won't see too many of these.

<< - Means the functions reads data from the outside world

