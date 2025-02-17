
# Quantum WordPress
![](docs/pd-quantum-wordpress.png)

<hr>
<div align="center">
  <a href="https://github.com/primitive/quantum-wordpress">
    <img src="docs/primitive.svg" alt="Primitive" width="160" height="80">
  </a>
  <h3 align="center">Quantum WordPress</h3>

  <p align="center">
    A starter theme for Headless-WordPress deployments.
    <br />
    <a href="https://www.sknow.it/posts/how-to-build-a-headless-wordpress-cms-website-with-next-js"><strong>Explore the docs »</strong></a>
    <br>
    <br>
    <a href="https://primitive.press/">View Demo</a>
    ·
    <a href="https://github.com/primitive/quantum-wordpress/issues">Report Bug</a>
    ·
    <a href="https://github.com/primitive/quantum-wordpress/issues">Request Feature</a>
  </p>
  <p align="center">
    Built standing on the <a href="https://wordpress.org">on the shoulders of giants</a> whilst looking to the future and wondering what's <a href="https://nextjs.org/">next</a>...
    <br>
    Made by <a href="https://primitivedigital.uk/">Monkies</a>  ☙ ❦ 🐒 - 🐒 - 🐒 ❦ ❧<br>
    & crafted with ❤️ 🍌 ❤️ <br>
  </p>
</div>
<hr>


#### Table of Contents

- [Features](#features)
- [Development](#development)
- [Customisation](#customisation)
- [Deployment](#deployment)
- [Contributing](#contributing)


## Features
- [WordPress](https://wordpress.org) as a Headless CMS for instant backend, content management portal and API server
- [Next.js](https://nextjs.org/), React Web Framework based for a nippy frontend
- [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) performed server side for fast page loads without the expense of SSR
- [Tailwind CSS](https://tailwindcss.com/) for rapid styling and customisation
- [Tailwindcss animated](https://www.tailwindcss-animated.com/) for easy to impliment animations via the [configurator](https://www.tailwindcss-animated.com/configurator.html) tool
- [WPGraphQL](https://www.wpgraphql.com/) for optimised WordPress data fetching

https://vercel.com/guides/how-to-enable-cors



## Configuration

### Step 1. Get WordPress

First, you need a WordPress site.

We recommend the Super Green, 100% renewable energy powered, Eco Next-Gen WordPress Hosting from [Primitive Hosting](https://primitivehosting.uk/store/wordpress-hosting).

The database and installation will be set up for you and you will be able to access your WordPress website from the URL provided in your welcome email.

Simply follow the final [installation steps](https://developer.wordpress.org/advanced-administration/before-install/howto-install/#finishing-installation) to complete your site configuration.

### Step 2. Add the WPGraphQL plugin

Once the site is ready, you'll need to install the [WPGraphQL](https://www.wpgraphql.com/) plugin to use this repo.

This will add a GraphQL API to your WordPress site, which we'll use to query the posts.

Follow these steps to install it:

- Inside your WordPress admin, go to **Plugins** and then click **Add New**.

![Add new plugin](./docs/plugins-add-new.png)

- Click the **Upload Plugin** button at the top of the page and upload the WPGraphQL plugin.

![Upload new plugin](./docs/plugins-upload-new.png)

- Once the plugin has been added, activate it from either the **Activate Plugin** button displayed after uploading or from the **Plugins** page.

![WPGraphQL installed](./docs/plugin-installed.png)

#### GraphiQL

The [WPGraphQL](https://www.wpgraphql.com/) plugin also gives you access to a GraphQL IDE directly from your WordPress Admin, allowing you to inspect and play around with the GraphQL API.

![WPGraphiQL page](./docs/wp-graphiql.png)

### Step 3. Add some Posts to WordPress

Inside your WordPress admin, go to **Posts** and start adding new posts:

- We recommend creating at least **2 posts**
- Use [dummy data](https://www.lipsum.com/) for the content if you want
- Pick an author from your WordPress users
- Add a **Featured Image**. You can download one from [Unsplash](https://unsplash.com/)
- Fill the **Excerpt** field

![New post](./docs/new-post.png)

When you’re done, make sure to **Publish** the posts.

> **Note:** Only **published** posts and public fields will be rendered by the app unless [Preview Mode](https://nextjs.org/docs/advanced-features/preview-mode) is enabled.

### Step 4. Set up environment variables

Copy the `.env.local.example` file in this directory to `.env.local` (which will be ignored by Git):

```bash
cp .env.local.example .env.local
```

Then open `.env.local` and set `WORDPRESS_API_URL` to be the URL to your GraphQL endpoint in WordPress. For example: `https://myapp.wpengine.com/graphql`.

Your `.env.local` file should look like this:

```bash
WORDPRESS_API_URL=...

# Only required if you want to enable preview mode
# WORDPRESS_AUTH_REFRESH_TOKEN=
# WORDPRESS_PREVIEW_SECRET=
```

### Step 5. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

### Step 5. Add authentication for Preview Mode (Optional)

**This step is optional.** By default, the blog will work with public posts from your WordPress site. Private content such as unpublished posts and private fields cannot be retrieved. To have access to unpublished posts you'll need to set up authentication.

To add [authentication to WPGraphQL](https://docs.wpgraphql.com/guides/authentication-and-authorization/), first you need to add the [WPGraphQL JWT plugin](https://github.com/wp-graphql/wp-graphql-jwt-authentication) to your WordPress Admin following the same process you used to add the WPGraphQL plugin.

> Adding the WPGraphQL JWT plugin will disable your GraphQL API until you add a JWT secret ([GitHub issue](https://github.com/wp-graphql/wp-graphql-jwt-authentication/issues/91)).

Once that's done, you'll need to access the WordPress filesystem to add the secret required to validate JWT tokens. We recommend using SFTP — the instructions vary depending on your hosting provider. For example:

- [SFTP guide for WP Engine](https://wpengine.com/support/sftp/)
- [SFTP guide for WordPress.com](https://wordpress.com/support/sftp/)

Once you have SFTP access, open `wp-config.php` and add a secret for your JWT:

```php
define( 'GRAPHQL_JWT_AUTH_SECRET_KEY', 'YOUR_STRONG_SECRET' );
```

> You can read more about this in the documentation for [WPGraphQL JWT Authentication](https://docs.wpgraphql.com/extensions/wpgraphql-jwt-authentication/).

Now, you need to get a **refresh token** to make authenticated requests with GraphQL. Make the following GraphQL mutation to your WordPress site from the GraphQL IDE (See notes about WPGraphiQL from earlier). Replace `your_username` with the **username** of a user with the `Administrator` role, and `your_password` with the user's password.

```graphql
mutation Login {
  login(
    input: {
      clientMutationId: "uniqueId"
      password: "your_password"
      username: "your_username"
    }
  ) {
    refreshToken
  }
}
```

Copy the `refreshToken` returned by the mutation, then open `.env.local`, and make the following changes:

- Uncomment `WORDPRESS_AUTH_REFRESH_TOKEN` and set it to be the `refreshToken` you just received.
- Uncomment `WORDPRESS_PREVIEW_SECRET` and set it to be any random string (ideally URL friendly).

Your `.env.local` file should look like this:

```bash
WORDPRESS_API_URL=...

# Only required if you want to enable preview mode
WORDPRESS_AUTH_REFRESH_TOKEN=...
WORDPRESS_PREVIEW_SECRET=...
```

**Important:** Restart your Next.js server to update the environment variables.

### Step 6. Try preview mode

On your WordPress admin, create a new post like before, but **do not publish** it.

Now, if you go to `http://localhost:3000`, you won’t see the post. However, if you enable **Preview Mode**, you'll be able to see the change ([Documentation](https://nextjs.org/docs/advanced-features/preview-mode)).

To enable Preview Mode, go to this URL:

```
http://localhost:3000/api/preview?secret=<secret>&id=<id>
```

- `<secret>` should be the string you entered for `WORDPRESS_PREVIEW_SECRET`.
- `<id>` should be the post's `databaseId` field, which is the integer that you usually see in the URL (`?post=18` → 18).
- Alternatively, you can use `<slug>` instead of `<id>`. `<slug>` is generated based on the title.

You should now be able to see this post. To exit Preview Mode, you can click on **Click here to exit preview mode** at the top.


## Deployment

Once you have access to [the environment variables you'll need](#step-3-set-up-environment-variables), deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=quantum-wordpress):


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress&project-name=cms-wordpress&repository-name=cms-wordpress&env=WORDPRESS_API_URL&envDescription=Required%20to%20connect%20the%20app%20with%20WordPress&envLink=https://vercel.link/cms-wordpress-env)


### Step 7. Deploy on Vercel

You can deploy this app to the cloud with [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

#### Deploy Your Local Project to Vercel

To deploy your local project to Vercel, push it to GitHub/GitLab/Bitbucket and [import to Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example).

**Important**: When you import your project on Vercel, make sure to click on **Environment Variables** and set them to match your `.env.local` file.

#### Deploy to Vercel with a Template

Alternatively, you can deploy using our template by clicking on the Deploy button below.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress&project-name=cms-wordpress&repository-name=cms-wordpress&env=WORDPRESS_API_URL&envDescription=Required%20to%20connect%20the%20app%20with%20WordPress&envLink=https://vercel.link/cms-wordpress-env)

### SK: Dev notes and links
- https://vercel.com/templates/next.js/isr-blog-nextjs-wordpress
- https://stackoverflow.com/questions/43281741/how-to-use-paths-in-tsconfig-json
- https://nextjs.org/docs/app/api-reference/next-config-js/assetPrefix
- https://nextjs.org/docs/pages/building-your-application/configuring/absolute-imports-and-module-aliases


### Tasks
- [x] MVP - Basic [Next.js with WP GraphQL](https://vercel.com/guides/wordpress-with-vercel)
- [x] Add Tailwind CSS
- [x] Add [Tailwindcss animated](https://www.tailwindcss-animated.com/)
- [ ] Add [Static pages](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)

- [ ] Content - Publish WP Content (how to make apps content for Dex)
- [x] Style  - Create base theme (no inheritance)
- [x] Style  - Codeblocks https://css-tricks.com/web-component-for-a-code-block/


- [ ] Fix: Animate in view https://codepen.io/jamesdoc/pen/qBbeOym

- [ ] Feat - Add Pages with dynamic content
- [ ] Feat - Add CPTs
- [ ] Feat - Improve 404 page

- [x] SEO - [Add GA](https://nextjs.org/docs/messages/next-script-for-ga)
- [ ] SEO - Sitemaps
- [ ] SEO - Link Tracking
- [ ] SEO - Review Content





- [ ] Migrate old Fronity work: Primitive Mountains | Beautiful Views
- [ ] Migrate old Fronity work: Primitive Rocks / Pebbles
- [ ] Migrate/redo old Fronity work: Primitive Scenes

- [ ] DevOps - Sort repo / branch structure
- [ ] DevOps - Add custom deployment
- [ ] CI/CD - Add GitHub Actions

- [ ] Add [WPGraphQL Content Blocks](https://github.com/wpengine/wp-graphql-content-blocks)
- [ ] Refine/simplify themeable/config: Tailwind, CSS-IN-JS or Sass approached used [Faust.js](https://faustjs.org/)
- [ ] Is [Faust.js](https://faustjs.org/guide/how-to-use-the-faust-example-project) all copied from Frontity?
- [ ] Implement Embeddable mode as per: [Faust.js](https://faustjs.org/) / [Frontity](https://api.frontity.org/frontity-plugins/)

### Test emoji table

Function | MySQL / MariaDB | PostgreSQL | SQLite
:------------ | :-------------| :-------------| :-------------
substr | :heavy_check_mark: |  :white_check_mark: | :heavy_check_mark:


### This is based on the Next.js Starter Example
**[https://next-blog-wordpress.vercel.app](https://next-blog-wordpress.vercel.app)**

## If you would rather Roll your own from Scratch

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example cms-wordpress cms-wordpress-app
```

```bash
yarn create next-app --example cms-wordpress cms-wordpress-app
```

```bash
pnpm create next-app --example cms-wordpress cms-wordpress-app
```

#### Ω - *the end*

 ☙ ❦ 🐒 - 🐒 - 🐒 ❦ ❧    
<pre>                      
._ _  _. _| _  |_    ._ _  _ ._ | o _  _  
| | |(_|(_|(/_ |_)\/ | | |(_)| ||<|(/__>  
                  /                      
</pre>
> [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)