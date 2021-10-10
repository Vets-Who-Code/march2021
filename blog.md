# VWC Job Search App

## About
For the March2021 Cohort of the VetsWhoCode program, there was a focus on project-based learning from the start. The members of the March2021 Cohort "Post-Apocolyptic Coders" wanted to build projects, and the instructors at VetsWhoCode were happy to oblige. They built several projects at the same time they were learning HTML, CSS, JavaScript, React, Gatsby, and many other web development concepts. This gave them real hands-on knowledge of the concepts they were being taught. For their final project, the "Post-Apocolyptic Coders" built a job search app to help veterans find a job in tech. This is journey they took. 

## The App
The app needed to be meaningful and have value. It needed to focus on giving veterans the ability to find jobs quickly. It also needed to focus on easing the job search process by focusing job search results on the technologies taught in the VetsWhoCode program. Furthermore, the app needed to fine-tune search results to match the skill level of VWC graduates. The goal was to use the app for future cohorts, and to expand the abilty of the organization to assist veterans. 

## Technologies
The VWC job search app was not a typical project. It was a learning experience. The project was built, taken apart and refactored, built again, and taken apart and refactored. It was an evolving project which involved a great deal of initiative, self-study, and help from expert volunteers when things got tough. At various stages in the development process, the project was built with the following technologies:
### JavaScript
The VWC Job Search App was first built using Vanilla JavaScript. With help from Azduna by way of donating free use of their API, the app was completed using HTML, CSS, and JavaScript. The data from Adzuna is displayed on cards after the user inputs a zip code, a remote option, and a radius. A demo of this version can be found [here](https://stephanlamoureux.github.io/job-search-mvp/). 

The image below reflects the inputs in the Vanilla Job Search App:
<img width="1440" alt="Screen Shot 2021-08-27 at 15 30 14" src="https://user-images.githubusercontent.com/57218090/131196289-71c7b871-9dd0-418f-9de9-5a518904bde6.png">

The image below reflects the placeholder image seen on the initial screen of the Job Search App prior to using the search feature:
<img width="1440" alt="Screen Shot 2021-08-27 at 15 31 14" src="https://user-images.githubusercontent.com/57218090/131196295-abda7065-7f25-4f5e-a528-e229985dd2a3.png">

### React
Then, in order to compliment the block of instruction on React, the VWC Job Search App was then migrated to React. This involved creating components for each relevant part of the previous Vanilla JS app. 

The video below reflects the React Job Search App:

https://user-images.githubusercontent.com/57218090/131199445-e8b723df-bc3d-46fa-9691-82e6037f1275.mp4

### Gatsby
Finally, used Gatsby for our frontend client because we wanted performance from the start. Also, because the VWC website is built with Gatsby, we wanted to fully integrate with the technologies used on VWC. Also we deployed our site on Netlify. The test site can be seen [here](https://test-vwc-job-app.netlify.app/).

## Challenges + lessons learned
The biggest challenge was pagination. Pagination was a very important part of the project because it is one of the main components that the user interacts with. Also, the pagination component used for the VWC Job Search had to also work for several other features on the site. The pagination changed several times before it could be integrated with the VWC site. For the Vanilla JS version, the pagination was Toast UI. For the React version, it was Material UI. For the production (Gatsby) version, we made a custom pagination, and then had to create another custom pagination that could be used throughout the entire VWC app instead of just job search. 

## Repository
The Github repo for our projects is located [here](https://github.com/Vets-Who-Code/march2021). There you will find the code for all three version of the VWC Job Search App as well as the other projects developed during the cohort.

## Ackowledgements
A big thanks to all who contributed to this great project and all who gave of their time to help fellow veterans.  