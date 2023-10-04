# WC3 - West Computing & Cybersecurity Club

This is the main website developed for WC3. It is available at the GH pages for this repository.

## Tech Stack

- Bun for compiling to TS files.
- SvelteKit for frontend.
- TailwindCSS for making styles easier.
- TypeScript for solving bugs beforehand.
- Currently (dev stage) using Github actions and pages for website deployment.

## Repository Documentation
Uses a docker script to have bun compile (Github actions does not have bun as a runtime yet). There are two scripts, build.sh and inside-docker-script.sh. The build.sh script is the script to run for building the website (compiling it to a build directory), while inside-docker-script is a script put inside the docker container to build the app. This is a way to remove the need for a dockerfile/custom container just to build the website.

Has the content of the website in a seperate file than the website code. This is because the content is quite long, and so, it is to avoid cluttering the codebase with things like club descriptions, and also makes it easy to track changes such as spelling errors to the site.

Currently some images are in the static folder. This will be moved to be outside the repository so that these are not committed with code changes.
