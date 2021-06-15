june 14, 2021

local start:
    cd reactAwadApi2
        so that you at prompt: C:\webdev\reactAwadApi3\reactAwadApi3
    yarn start

This is from 
	Intermediate React.js Coding Interview
from Ben Awad on YouTube

It is an Api built in React. The data goes into a table which can be sorted by country.

deployed at Netlify:
    https://laughing-torvalds-1f552c.netlify.app/
    

automatic update:
    git add . 
    git commit -m "message" 
    git push

note: for successful deployments to Vercel and Netlify, in the package.json under "scripts", 
you should have:
    "build": "CI=false react-scripts build"



this same website is also deployed at Vercel:
    https://awad-api2.vercel.app/

    the code for this deploy is at C:\webdev\reactAwadApi2\reactAwadApi2

    same automatic update