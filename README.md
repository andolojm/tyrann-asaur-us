# Personal Site

https://tyrann.asaur.us

![TravisCI status](https://travis-ci.org/andolojm/tyrann-asaur-us.svg?branch=master "TravisCI status")

This application is a static frontend configured to deploy to AWS S3.

### Features
  * Contact information
  * Work experience
  * Dinosaurs
  * Writing and Code samples
  * Dinosaurs
  * *BETA*: Print page for resume 
    * For now, page margins need to be set to "None" and background graphics need to be enabled. 
    * I'm still working out browser compatibility kinks on this one. If all else fails, the PDF link works fine!

### Development

Local development: `yarn webpack-start` will start the local dev server

~~Pushing commits to the `develop` branch will deploy to http://tyrann-dev.asaur.us~~ ⚠️ This is currently broken, I need to re-create the bucket. ⚠️

Pushing commits to the `master` branch will deploy to https://tyrann-asaur.us

### Milestones
  * (✔️) Create a set of Sketches, building out from a mobile layout 
  * (✔️) Implement a 1.0 site using sketches
  * (❌ Add features to better utilize desktop screen real estate (1.2 release?)
  * (✔️) Performance / Accessiblity optimization
  * (⚠️) Add content for a 1.1 release
    * (✔️)  Contact info
    * (❌) Projects
  * (⚠️) DevOps-y things.
    * (✔️) Automated deployments with CI
    * (❌) Write some more tests, you lazy sod.
    * (✔️) HTTPS on s3
  * (❌) Progressive web app
