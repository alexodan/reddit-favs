# Reddit Favs

## How to run the Front End

In the front-reddit-favs project directory, you can run:

`npm install` and then `npm start`.

This runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

## Running the Back End

Go to back-reddit-favs folder.

Build the image with docker `docker build . -t go-dock`.

Run the image `docker run -p 8080:8080 go-dock`.

## Architectural decisions

- First, I opted to use React as the frontend library to manage the UI. Mainly because I'm comfortable using it and is very suitable for small applications.
- I chose not to use external libraries to manage state because I considered it was simple to manage without them. With that being said I am doing some prop drilling but is not a big deal, given it is just for two layers.
- I am using [Theme UI](https://theme-ui.com/getting-started/) because it is fun to use and really powerful. It allows you to create theme objects and use them in your components. It also handles scoping and injecting CSS into your app. It is really extensible and versatile.
- In the back end I used Go, Gin and Gorm. For the database I wanted to keep it really simple so I used sqlite. I gave Go a try because I never used it before and wanted to experiment with it. And also if I had to serve to millions of users (which this is not the case), that language could be able to handle it very well.
- In this scenario I'm not supporting multiple users because there isn't even a User entity in the back end model, just posts.
- If this solution had to serve millions of users, I would need to add more entities, specially a User to handle multiple users and their posts. I could use some caching for the posts instead of hammer another API (reddit). As I said Go could handle very well by its own the scaling but it could be useful to introduce cloud services for scaling as well. Finally in the front end as the application scales and new features are added it could be possible the need to add a state management library such as redux if the context api wasn't enough to manage it. 
