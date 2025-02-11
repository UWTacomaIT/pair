# PAIR Lab website template
## React + Vite + TailwindCSS

## How to edit the website

For detailed instructions on how to edit the website, refer to the Edit_instructions.md /pdf file. The content of the website is dynamically sourced from public/data.json, allowing for easy updates without altering the codebase.

## How to deploy the website

### Non-Technical Users:
See the AWS Deployment Instructions.docx for a step-by-step guide on deploying the website on AWS Amplify without using GitHub.

### Developers:

This project requires Node.js. Please visit [Node.js Download](https://nodejs.org/en/download) to download and install it if you haven't already.

#### To run and preview the project locally:
1. Run `npm install` to install all dependencies.
2. Run `npm run dev` to start the local development server.

#### To compile the project into static files and deploy:
1. Run `npm install` to install all dependencies.
2. Run `npm run build` to compile the project.
3. The output, located in the `dist` folder, can be deployed to any static hosting service.  
   **Note:** The `index.html` in the `dist` folder cannot be previewed locally.
