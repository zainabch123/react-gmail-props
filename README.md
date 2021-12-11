# React Props

In this exercise, you are going to practice props.

You'll use props to break down our email list into smaller components by passing down relevant data.

You'll use props to break down our app into smaller components by passing down relevant functions.

## Setup

1. Fork this repository
2. Clone the forked repository onto your local machines
3. In the root directory, type `npm install`, which installs dependencies for the project
4. Finally, type `npm run start`, which starts a development server that runs your website in the browser. That server will reload your website whenever you make any changes to source files

## Instructions

- Break down `app.js` into components
    - You should have an `Emails` component that renders a list
    - You should have an `Email` component that is a list item
- Break down `app.css` into stylesheets
- Pass through the relevant **data as props** to each component
- Pass through the relevant **functions as props** to each component
- Get the **search** input to work in the `header` section so that users can **search for emails by title**

## Tips

- Break down the App component by component and make sure the functionality continues to work before moving onto the next section.

## Extra Challenge

- Get the emails to open and display an email using **conditional rendering** and a component similar to day one
- You'll need to use the state to keep track of which email is selected and you'll need a component to display the email
- Add a back button so users can return to their inbox
