#Welcome to nnangpress

- Make sure boot is using clojure version 1.8.0

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
