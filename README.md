### Which image sizes are used in this website ?

If you are administrator and have plan to change our website images, you should use same image size shown in the below.

- Intro: 634x634 (`assets/images/home/main_picture.jpg`)
- Paper: 401x401 (`assets/image/papers/paper_image.png`)
- Paper_large(detail page): 1700x1130 (`assets/image/papers_large/paper_image.png`)
- Lab: 750x750 (`assets/image/home/lab.jpg`)
- Join: 250x250 (`assets/image/home/join.png`)
- Member: 100x100 (`asserts/image/members/profile_img.png`)
- Member_large(professor): 400x400 (`assets/image/members/professor.jpg`)


### What position name should I use ?

You should use one of the following position names.

- Undergraduate Student
- Master Student
- PhD Student
- Professor


### How to modify my profile?

If you want to add or modify your personal information, please follow 3 steps described below. 

1. find and open your profile readme files (see `our_collections/members/your_name.md`)

2. change your personal informations such as `name`, `position`, `github`. 
   - If you want to know about how to use certain tag, see `our_collections/joins/99_test.md`
   - If you are not familiar with markdown(md) file, just use typora, it will help you.
   - If you want to add image in your profile, add it in `assets/images/etc`.

3. (optional) If you want to change your profile image, please change image files whose path was given by `img_url` property.
   - `assets/images/members`: small sized image (100x100)
   - `assets/images/members_large`: large sized image (400x400)
   - If you change image file name, you should also change `img_url` property.
   - You should use same file name for large and small image version.


### How to add/modify your paper?

If you want to add or modify your paper page, please follow 3 steps described below.

1. add or open paper readme files (see `our_collections/_publications/your_paper.md`)

2. change its contents on your style.

3. prepare two image files whose path was given by img property.
   - assets/images/papers: thumbnail image of publication page (401x401)
   - assets/images/papers_large: the background of detail page in publication page (1700x1130)
   - You have to **use same file name** for large and small image version.

### How to add join content

It will be formatted according to the markdown format, so please follow the markdown rule. A more accurate use of the markdown is in the last section of the join.

- A file is required for each section.
- If you want to change the order of the sections, please number them before the file name.
- The location of the file is as follows: `our_collections/_joins/1_sectionName.md`
- 
