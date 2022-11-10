
## Blogs API

The project was developed at the end of Trybe's 24th block, in which I studied _Sequelize and JWT (JSON Web Token)_.

![some-codes](https://user-images.githubusercontent.com/99998543/192644339-6696a4ad-3a8e-498f-88fe-50b3d37a72d5.png)

### How it works

In this project, I developed an **API Restful** using **Sequelize** and **JWT**. We created a database that simulates a blog, where users, after logged (with JWT verifications), can read, search, delete and add posts.
I produced Sequelize's migrations and models, even as the controller's and service's layers.
After I finished the project, I decided to refactor my codes, splitting them to make them more organized and avoid repeating codes.

### Endpoints

<details>
<summary><h4>POST</h4></summary>

- **`/login`**: to sign in with a user already registered. :zap:
	- requisition body model:
```json
{
  "email": "maybsalvalaio@gmail.com",
  "password": "123456"
}
```

- **`/user`**: to sign up a new user. :zap:
	- requisition body model:
```json
{
  "displayName": "Maysa-B",
  "email": "maybsalvalaio@gmail.com",
  "password": "123456",
//  "image": "not mandatory"
}
```

- **`/categories`**: to create a new category. 
	- requisition body model:
```json
{
  "name": "Typescript"
}
```
- **`/post`**: to create a new post.
	- requisition body model:
```json
{
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
}
```
</details>

<details>
<summary><h4>GET</h4></summary>

- **`/user`**: to list all users.
- **`/user/:id`**: to find a user by their id number.
- **`/categories`**: to list all categories. 
- **`/post/search`**: using a `q` query on the endpoint, you can search by a word, and find all posts that have this word in the title or content.
	- example: `.../post/search?q=searchTerm`.
- **`/post`**: to list all posts.
- **`/post/:id`**: to get a post by its id number.
</details>

<details>
<summary><h4>DELETE</h4></summary>

- **`/user/me`**: to delete your user. 
- **`/post/:id`**: to delete a post that the user wrote, using the id as a parameter.
</details>

<details>
<summary><h4>PUT</h4></summary>

- **`/post/:id`**: to update a post that the user wrote.
</details>

> :zap:: Those are the endpoints that you will receive a token as a response. For all the others you need to send this token by the `Authorization` key on the header.

----------

If you see something that can be improved, don’t hesitate to get in touch with me! All feedback is very welcome.✨
