# waze_for_vax_undocu

## Introduction

I work in public health and I am a software engineer. There are COVID-19 vaccines available from 3 different brands (Pfizer, Moderna, and most recently Johnson&Johnson). In Georgia, the vaccine is available to all residents regardless of citizenship or documentation status. Unfortunately, many noncitizens, documented and undocumented, don't know they are allowed to get the vaccine. Additionally, some vaccine sites turn people away if they don't have ID. In Georgia, the only documentation required is proof of residence, which can be proven through a utility bill or some form of mail. This mobile app will allow noncitizens to report their experiences at vaccine sites not only to hold vaccine sites accountable for discrimination but also help other immigrants access vaccine sites that are safer and more convenient for them. 

Waze is a mapping app that is first and foremost used to give directions, but the differential advantage of Waze for a long time (until Google also adopted the same feature) was that users could report where they saw the police. This helped other users avoid getting stopped by the police. 

In the same way, the first feature of the application is a vaccine site directory. The second feature is a site review for users. Other features include tags such as "Accepts utility bills as proof of residence." 

## STACK
For an MVP, I'll start with a PWA so it's just a website people can go to and enter in their experiences. 
Using React Native for mobile development in the future. 
Ionic with MERN stack is a good idea, because MongoDB is scalable and so you can have objects of different sizes inside each document. 


## PLAN
Using a mapping API only for the vaccination sites in Dekalb County to serve as a proof of concept.
Will note how many noncitizens were turned away in a given day. 

For example: 

"2 people were turned away for not having ID at this site. 1 person was able to get the vaccine without ID"

There should also be away for people to feel comfortable reporting without fear of persecution. There would also need to be a way to encourage people to use it because the usability of the app depends on how many people use it.

