#Welcome to nnangpress

- Make sure boot is using clojure version 1.8.0

#Running and deploying

## Dev mode
- boot dev

## REPL
- boot repl --client
- (start-repl)

## Deploy
- boot production build target

#Application architecture

-All the data is in a single atom

-Reference cursors are used to create an api to simplify management of this 'monolith' data
structure which may get reasonably complicated.

-

## The routes map

-

## General

- Components should be as self-contained as possible, essentially reject the 'waterfall' data model

## Broadcast system

- Components should subscrive to edit events that affect them. For example a component that
can have it's text edited should subscribe to the edit mode event

### Routing

- Based on http://www.lispcast.com/mastering-client-side-routing-with-secretary-and-goog-history

- Each route has a vector of widgets. Master component will build correct widgets for the
current route. Current route of the app is part of application state.

## Reference Cursors

- Don't get observers and ordinary ref-curosrs mixed up

# Widgets

- Widgets should have their own data type and associated components

# Controls

- Ctrl + q to save text

## Jquery plugins

- In general the html these should be rendered with dangerouslysetinnerhtml.
We are looking to essentially sidestep react, ideally there should be no
jquery plugins.

## Namespace architecture

# Javascript interop noted

- When going js -> clj don't have any empty maps. display inherit for style maps

# Firebase notes

- Unable to store empty values in firebase. Must compensate for this in code

# Bugs and Spec 

- Each bug upon being fixed must be speced to guard against regression

# Monolith

- A vector with an empty string will count as 'empty', so that we can 
store it in firebase. 

