# Detailed Edit Instructions for Updating and Deployment

Welcome to the guide for updating your website’s configuration and images, as well as instructions for compiling and deploying the project.  

After completing these steps, your project will be transformed into a static HTML & JavaScript bundle that you can effortlessly deploy anywhere—providing unparalleled flexibility and convenience.

This document is designed for developers and content managers who need to update the JSON configuration (which controls text, links, and images) and replace faculty images in the `src/assets/view/` folder. Follow these step-by-step instructions to ensure a smooth update and deployment process.

---

## 1. Header Section

- **Field:** `header.title`
    - **Current Value:** `"Sample Lab Name supported by AIM-AHEAD Program for AI Readiness (PAIR)"`
    - **Instruction:** Replace this header title with the new title.
    - **Example:** Change to `"Cancer Health Disparities + AI/ML Lab supported by AIM-AHEAD Program for AI Readiness (PAIR)"`

---

## 2. Hero Area Section

- **Field:** `heroArea.title`
    - **Current Value:** `"Sample Lab Name"`
    - **Instruction:** Update this field with the new lab name.
    - **Example:** Change to `"Cancer Health Disparities + AI/ML Lab"`

- **Field:** `heroArea.subTitle`
    - **Current Value:** `"supported by AIM-AHEAD Program for AI Readiness (PAIR)"`

---

## 3. Main Section

### 3.1. Region One – Overview & Highlights

#### Left Column (Introduction & PI List)

- **Field:** `main.regionOne.title`
    - **Current Value:** `"The Latest"`
    - **Instruction:** Update if needed.


- Change the `PIavatar` here:
    - **Instruction:** Replace image in `"../../src/assets/view/PIavatar1.png"`, `"../../src/assets/view/PIavatar2.png"` ... with the new image file.
        - **Note:** The website uses PI images stored in `src/assets/view/` (e.g., `PIavatar1.png`, `PIavatar2.png`, `PIavatar3.png`, etc.). Please update these files with the new images accordingly. png/jpg is allowed.
        - **Note:** Only the first 3 PI allows to show at this area. 1, 2 or 3 is ok.

- **Field:** `main.regionOne.left.PIList`
    - **Current Value:** A list of PI objects with names and titles.
    - **Instruction:** Update each PI object to reflect the current principal investigators.
    - **Example:**
        - Change `"FirstName1 LastName1, Ph.D."` to `"Jane Doe, M.D., Ph.D."`
        - Change `"Professor"` to `"Distingushed Professor"`
        - Repeat for all PI entries.

- **Field:** `main.regionOne.left.text`
    - **Current Value:** `"Sample Lab Name supported by AIM-AHEAD Program for AI Readiness (PAIR)"`
    - **Instruction:** Replace with an updated description of your lab.
    - **Example:** Change to `"NEW LAB NAME is committed to advancing research in AI and healthcare innovation."`

- **Field:** `main.regionOne.left.textSubsidiary`
    - **Current Value:** A long descriptive paragraph.
    - **Instruction:** Update with a detailed description of your lab’s mission, research focus, and unique strengths.
    - **Example:** Provide a new paragraph detailing your lab.

#### Right Column (Statistics & Links)

- **Group One:**
    - **Field:** `main.regionOne.right.one["text-1-1"]`
        - **Current Value:** `"10+"`
        - **Instruction:** Update or Simply delete the number if the faculty count has changed.
        - **Example:** Change to `""`

    - **Field:** `main.regionOne.right.one["text-1-2"]`
        - **Current Value:** `"Faculty"`
        - **Instruction:** Update the label if necessary.
        - **Example:** Change to `"Projects"` (or leave unchanged)

    - **Field:** `main.regionOne.right.one["text-1-3"]`
        - **Current Value:** `"A diverse team of leading experts drives our academic excellence"`
        - **Instruction:** Revise the description as needed.
        - **Example:** Change to `"An exceptional team dedicated to breakthrough research."`

- **Group Two:**
- **Group Three:**
    - Same as the **Group One**
  

- **Button & Link Controls:**
    - **Field:** `main.regionOne.right.showLinkedinBtn`
        - **Current Value:** `true`
        - **Instruction:** Set to `true` if you want to display the LinkedIn button; otherwise, set to `false`.

    - **Field:** `main.regionOne.right.showXBtn`
        - **Current Value:** `false`
        - **Instruction:** Set to `true` if you want to display the X (formerly Twitter) button; otherwise, leave as `false`.

    - **Field:** `main.regionOne.right.showMoreBtn`
        - **Current Value:** `false`
        - **Instruction:** Set to `true` if you want to display a “More” button; otherwise, leave as `false`.

- **Link Fields:**
    - **Field:** `main.regionOne.right.GoogleScholarLink`
        - **Current Value:** `"https://scholar.google.com/"`
        - **Instruction:** Update with your lab’s Google Scholar profile URL.
        - **Example:** Change to `"https://scholar.google.com/citations?user=YOUR_ID"`

    - **Field:** `main.regionOne.right.LinkedinLink`
        - **Current Value:** `"https://www.linkedin.com/"`
        - **Instruction:** Replace with your organization’s LinkedIn page URL.
        - **Example:** Change to `"https://www.linkedin.com/company/YOUR_COMPANY"`

    - **Field:** `main.regionOne.right.XLink`
        - **Current Value:** `"https://x.com/"`
        - **Instruction:** Update with your organization’s X/Twitter profile URL if applicable.
        - **Example:** Change to `"https://twitter.com/YOUR_PROFILE"`

    - **Field:** `main.regionOne.right.moreBtnLink`
        - **Current Value:** `"https://www.google.com"`
        - **Instruction:** Update this link to point to the page with more information.
        - **Example:** Change to `"https://www.yourwebsite.com/more-info"`

---

### 3.2. Region Two – News & Research

#### Part 1 (News):

- **Field:** `main.regionTwo.part1.title`
    - **Current Value:** `"News"`
    - **Instruction:** Update if needed.
    - **Example:** Remain as `"News"` or change to `"Latest News"`

- **Field:** `main.regionTwo.part1.introducePrimary`
    - **Current Value:** `"Latest News List"`
    - **Instruction:** Update the introductory text for the news section.
    - **Example:** Change to `"Stay updated with our latest news and announcements."`

#### Part 2 (Research):

- **Field:** `main.regionTwo.part2.title`
    - **Current Value:** `"Research"`
    - **Instruction:** Update if needed.
    - **Example:** Change to `"Our Research"`

- **Field:** `main.regionTwo.part2.introducePrimary`
    - **Current Value:** `"Research Projects and Publications"`
    - **Instruction:** Update the introductory text.
    - **Example:** Change to `"Discover our groundbreaking projects and published work."`

---

### 3.3. Region Three – PAIR Program

- **Field:** `main.regionThree.titlePrimary`
    - **Current Value:** `"Program for AI Readiness(PAIR)"`
    - **Instruction:** Update the title for the PAIR program section.

- **Field:** `main.regionThree.titleSecondary`
    - **Current Value:** `"Learn more about PAIR and how you can get involved"`
    - **Instruction:** Update the subtitle to better invite users.

- **Field:** `main.regionThree.buttonText`
    - **Current Value:** `"Learn More"`
    - **Instruction:** Update the call-to-action text if necessary.

- **Field:** `main.regionThree.joinNowLink`
    - **Current Value:** `"https://www.aim-ahead.net/call-for-proposals-year-2/pair/"`
    - **Instruction:** Update the URL to the current PAIR program page.
    - **Notice:** Due to Maintenance, AIM-AHEAD devops teams removed the link temporarily.
---

### 3.4. Region Four – Contact Us

- **Field:** `main.regionFour.titlePrimary`
    - **Current Value:** `"Contact Us"`
    - **Instruction:** Update if needed.

- **Field:** `main.regionFour.titleSecondary`
    - **Current Value:** `"Get in Touch, Let’s Make an Impact Together"`
    - **Instruction:** Update the subtitle.

- **Field:** `main.regionFour.buttonText`
    - **Current Value:** `"Contact Us Now"`
    - **Instruction:** Update the button text.

#### Email Object (Within Region Four)

- **Field:** `main.regionFour.email.address`
    - **Current Value:** `"test@test.edu"`
    - **Instruction:** Replace with the actual contact email address.
    - **Example:** Change to `"contact@yourdomain.com"`

- **Field:** `main.regionFour.email.subject`
    - **Current Value:** `"Sample Lab Name Webpage - Contact Request"`
    - **Instruction:** Update the subject line for emails generated from the contact form.
    - **Example:** Change to `"NEW LAB NAME - Inquiry from Website"`

- **Email Body Fields:**
    - **Field:** `main.regionFour.email.body.greeting`
        - **Current Value:** `"Dear Dr. [PI Name],"`
        - **Instruction:** Update the greeting if needed.

    - **Field:** `main.regionFour.email.body.content`
        - **Current Value:** `"I am interested in contacting you to learn more about your Sample Lab Name."`
        - **Instruction:** Update the content of the email.
      
    - **Field:** `main.regionFour.email.body.closing`
        - **Current Value:** `"Best regards,"`
        - **Instruction:** Update the closing text if desired.

---

### 3.5. Event List

For each event in `main.EventList`, update the following fields:

- **Field:** `col1`
    - **Current Example:** `"Outstanding Faculty Award"`
    - **Instruction:** Update the event title.

- **Field:** `col2`
    - **Current Example:** `"December 30, 2024"`
    - **Instruction:** Update with the correct event date.

- **Field:** `col3`
    - **Current Example:** `"Dr. [PI Name] was awarded the Outstanding Faculty Award, This award is in recognition of her outstanding contributions to XXXXXXX."`
    - **Instruction:** Revise the event description.

- **Field:** `colUrl`
    - **Current Example:** `"None"`
    - **Instruction:** If an event link is available, update this field with the URL; otherwise, leave as `"None"`.

---

### 3.6. Faculty List - For Faculty subpage


- Change the `avatar` in Faculty subpage:
    - **Instruction:** Replace image in `"../../src/assets/view/avatar1.png"`, `"../../src/assets/view/avatar2.png"` ... with the new image file.
        - **Note:** The website uses faculty images stored in `src/assets/view/` (e.g., `avatar1.png`, `avatar2.png`, `avatar3.png`, etc.). Please update these files with the new images accordingly. png/jpg is allowed.

For each faculty entry in `main.FacultyList`, update the following:

- **Field:** `name`
    - **Current Example:** `"FirstName1 LastName1, Ph.D."`
    - **Instruction:** Update the faculty member’s name.

- **Field:** `title`
    - **Current Example:** `"Professor"`
    - **Instruction:** Update the designation as needed.

- **Field:** `introduction`
    - **Current Value:** A descriptive paragraph about the faculty member’s background and achievements.
    - **Instruction:** Replace or update with the latest biography information.

- **Fields:** `col4` and `col5`
    - **Current Value:** Typically empty strings.
    - **Instruction:** Use these fields for any additional information if necessary, or leave them as empty strings.

---

### 3.7. Publications - For Publication subpage

For each publication in `main.publications`, update the following:

- **Field:** `content`
    - **Current Value:** HTML-formatted content containing the title, authors, abstract, publication details, keywords, and DOI.
    - **Instruction:** Update the HTML content with the new publication details.
    - **Note:** Ensure that all HTML tags, classes, and inline styles are preserved or updated as needed.
    - **Example:** Replace the title, author list, abstract, publication source, keywords, and DOI with the updated publication information.

---

## 4. Footer Section

- **Field:** `footer.item1`
    - **Current Value:** `"AIM-AHEAD Program"`
    - **Instruction:** Update the text for the first footer item.
    - **Example:** Change to `"Your New Program Name"`

- **Field:** `footer.item1Link`
    - **Current Value:** `"https://www.aim-ahead.net/"`
    - **Instruction:** Update the URL.
    - **Example:** Change to `"https://www.yourprogramsite.com"`

- **Field:** `footer.item2`
    - **Current Value:** `"AI Readiness (PAIR)"`
    - **Instruction:** Update if necessary.

- **Field:** `footer.item2Link`
    - **Current Value:** `"https://www.aim-ahead.net/call-for-proposals-year-2/pair/"`
    - **Instruction:** Update the URL accordingly.
    - **Notice:** Due to Maintenance, AIM-AHEAD devops teams removed the link temporarily.


- **Field:** `footer.item3`
    - **Current Value:** `"SAMPLE UNIVERSITY"`
    - **Instruction:** Update with the correct institution or organization name.
    - **Example:** Change to `"San Diego State University"`

- **Field:** `footer.item3Link`
    - **Current Value:** `"https://www.example.edu"`
    - **Instruction:** Update to the institution’s website URL.

- **Field:** `footer.copyright`
    - **Current Value:** `"AIM-AHEAD Coordinating Center is funded by NIH, Agreement No.: 1OT2OD032581-01"`
    - **Instruction:** Update the funding or copyright information if necessary.

---

## 5. Faculty Images Replacement

- **Location:** `src/assets/view/`
- **Files:** `avatar1.png`, `avatar2.png`, `avatar3.png`, etc. `PIavatar1.png`, `PIavatar2.png`, `PIavatar3.png`
- **Instruction:** Replace the existing faculty image files with the new images and keep the name

---

## 6. Instruction for Testing / Deploying:


This project requires Node.js. Please visit [Node.js Download](https://nodejs.org/en/download) to download and install it if you haven't already.

After the project is compiled into static files, deploying is a breeze—simply upload the contents of the `dist` folder to your hosting service.

#### To run and preview the project locally:
1. Run `npm install` to install all dependencies.
2. Run `npm run dev` to start the local development server. Usually, the page is localhost:5173

#### To compile the project into static files and deploy:
1. Run `npm install` to install all dependencies.
2. Run `npm run build` to compile the project.
3. The output, located in the `dist` folder, can be deployed to any static hosting service.  
   **Note:** The `index.html` in the `dist` folder cannot be previewed locally.

---

