## DEV localy
This is standard Next.js build, to run locally: 
npm run dev

## Prod build localy
This is standard Next.js build, to run locally: 
npm run build
npm run start

## CMS forestry integration
Forestry creates .md files (markdown) in your github folder /_posts/
During build Next.js find all .md files in that folder and creates Blog post for each, sorting them by date.
As each change is git commit, then aws automatically rebuilds static files and deploys them to prod. 

You have 3 ways to add new blog post:
1. https://forestry.io/
2. usercience.org/admin 
3. You can copy .md file, edit it and commit to github. 

Adding new post from https://www.userscience.org/admin/
1. navigate to url
2. Login with your github
3. In sidebar select _posts and press Create New -> _posts
4. You can populate title, add cover image, excrpt and on right side you write the blog post. 
5. Pressing save will commit this to github and trigger rebuild. 

In sidebar -> Front matter you can find template for .md file fields. You can add new ones, but to display them in blog code changes required. 
