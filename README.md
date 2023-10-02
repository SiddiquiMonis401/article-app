# Article App

This is a simple project which focuses on Context API and custom hooks to display the list of articles from https://newsapi.org/

## Fetaures
- Displays the list of articles
- Dark and Light Theming support
- Langauge supported (Arabic and English) for articles
- Pagination support
- UI is powered by Material UI
- Uses Context API to handle theme and Language

## Configuration
Following environment variable should be present in your `.env` file
- REACT_APP_NEWS_APP_API_KEY=<>, value can be retrieved from here 🌐 https://newsapi.org/

## Installing
- Clone the app using the link
- Make sure Node JS is configured on your system and is on version 16>
- Run `npm ci` to install the dependencies

## Usage
To test it locally, follow the following steps
- Run `npm start`
- After your app compiles successfully you will be able to use the article app on `http://localhost:3000/`
- You can switch the theme from the switch on the top right section of the nav
- You can switch between multiples sources from the chips
- You can select langauges (rn Only English and Arabic) is supported
- Right now app only supports 10 articles per page - You can navigate between multiple pages

