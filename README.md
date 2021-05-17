### Date

May 17, 2021, Monday

### Location of deployed application

https://weather-app-eight-coral.vercel.app/

### Time spent

Approximately 8 hours, not including setup / deployment.
Setup of the boilerplate probably took around 1-2 hours.

### Assumptions made

- The app currently does not know where in the world you are viewing from and just assumes you're in Vancouver and speak/understand English.
- Assumes that the data received by the API is always organized chronologically, In the `groupByDay()` function we process the data so that it's organized in arrays which represent a whole 'day', we don't actually check to make sure that the timestamps are ordered correctly from the data, we just assume that it is.

### Shortcuts/Compromises made

- It'd be nice to have the data get re-fetched in intervals so that if the tab gets left open, it at least is up to date with current conditiions.
- I'm not a huge fan of the icons against a white background since the white of the clouds is hard to see. It would be nice to use a different icon pack that had some sort of outline so that I can still use light/grey background colors. However I'd have to figure out how to map the current conditions to the correct icon which is a whole technical challenge within itself.
- My tests aren't very rigorous, would be nice to have some more in-depth tests that test the accuracy of the data returned.

### Instructions to run assignment locally

1. Clone the repo from https://github.com/vivchen/weather-app, make sure to pull the `master` branch.
2. Run `npm i`
3. Run `npm run dev` to start the local server, then view at https://localhost:3000

### What did you not include in your solution that you want us to know about?

Were you short on time and not able to include something that you want us to know
about? Please list it here so that we know that you considered it.

- If I had more time I would have laid out the 3hr increment weather data in a more aesthetically pleasing way but for now it's kind of just dumped in there, but I figure this is an MVP and being able to see a breakdown of the weather over the course of the day would be an important feature to have so I included it but didn't spend too much time tinkering with styling.

- I think a nice feature to have would be to include the breakdown 3-hour step forecast for the current day since users will likely want to know what the weather will be like later in the day, but unfortunately ran out of time for that.

### Other information about your submission that you feel it's important that we know if applicable.

- I chose to leave the alt text empty for the weather icons since there is adjacent text describing the weather conditions and which could end up as duplicated text when announced by screen readers.
- My scss/css strategy is not ideal. For components that have their own folder I am using css modules to style them. And components that exist solely in the markup of the index page I did not bother creating a separate folder and breaking those out into separate files since it seemed like overkill for the purposes of this challenge. Those "component" styles live within the global.scss file which is not a css module and therefore uses a different css convention in the markup which can make things confusing. This is not a great real-world practice since we have component styles living in two places without a super clear rule/principle. This would become quite annoying as the app scales and the codebase grows.
- I wrote some super basic tests with Cypress in home_page_spec.js
  - Testing that the city and country strings match with "Vancouver" and "CA" respectively
  - Clicking and expanding all the buttons on the page

### Your feedback on this technical challenge

- The amount of time that someone could take on doing this assignment can really balloon when running into technical issues in setting up their framework or making sense of the data. I do however understand you are leaving it vague intentionally to see how they deal with roadblocks and challenges, but for folks that might be at a loss for a decent boilerplate/framework to use, you could potentially suggest a couple. Otherwise, it was quite a fun challenge and is probably reflective of the work done for the Front-End Engineer role, so it's nice to get a sense of the kind of work I'd be doing rather than doing live algorithm coding challenges under a lot of pressure (which I find are usually not indicative of how someone performs on the job, so I appreciate that).
