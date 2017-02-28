#Welcome to nnangpress

Nnangpress (New Nangpress) is a single page application that makes single page applications. Inspired by the 
philosophy of the language it is written in. 

- Make sure boot is using clojure version 1.8.0
- If you encounter problems try this boot version: BOOT_VERSION=2.7.1

#Running and deploying

## Dev mode
- boot dev

## REPL
- boot repl --client
- (start-repl)

###firebase
- (fb-delete (str "/users/" uid "/sites/0"))
- (fb-write (str "/users/" uid "/sites/0") #js {:hi "there"})

- (fb-copy "/nangpress-data/route-widgets/userhome/routes-map/widgets/2" 
        "/nangpress-data/route-widgets/userhome/routes-map/widgets/1")

## Deploy
- boot production build target

#Application architecture

## Monolith

What is the monolith? 

The monolith refers to the data of the app. Conceptually all the data the app needs resides in one large data 
structure that is obtained when the app initializes. Ideally this means that React components don't have 
any local state too.  

-All the data is in a single atom

-Reference cursors are used to create an api to simplify management of this 'monolith' data
structure which may get reasonably complicated.

- A vector with an empty string will count as 'empty', so that we can 
store it in firebase. 

- A 'safe' piece of data means that it is either a vector or a map. This is a requirement 
of om cursors.

- A raw piece of data means that it is not inside a map or vector

### Monolith Init

- In the database the data is split into nnangpress system data and user data. Both must be 
loaded individually and then any session specific data added 

## Broadcast system

- Components should subscrive to edit events that affect them. For example a component that
can have it's text edited should subscribe to the edit mode event

### Routing

Routing is considered part of the application state. There is a master component that will render 
different sub components based on the routing state of the app, stored in the monolith.

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

#Testing 

- All pure functions should have unit tests.

#Coding guideliens 

- In general once a file gets to 1000 lines of code it should broken into smaller namespaces. This is to avoid 
analysis paralysis. 

- Local state is useful for information that we don't want persisted, or for data that we want to rever to a default 
behaviour each time the app starts. 

#Glossary 

! - At the end of a function name means the function makes a change to application state only. 

!! - A function that makes a change outside of application state, such as saving directly to database or 
making a change to the DOM outside of react. Ideally we won't see too many of these.

<< - Means the functions reads data from the outside world

