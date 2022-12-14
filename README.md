This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## CODE SYNTAX NOTES
1. Create a next.js app with typescript flag

```
npx create-next-app --ts
```
2. INSTALLATION tailwind.css
a.install tailwindcss via npm and initiate 
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
b. configure tailwind.config file

```
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
3.add the tailwind directives in global.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
``` 

#### when you are using Image component from next/image library if the source is from en api online source you need to configure next.config.js file 
```
next.config.js file
images: {
    domains:["scontent.fmmx3-1.fna.fbcdn.net"]
  }
}
```

## Sanity deployment
```
sanity deploy
```
will make a instance of that online. 
## PULL INFORMATION TO FRONT END FROM SANITY BACKEND WITH GROQ query language
```
*[_type=="social"] {
  ...,
}
// for example will fetch all data that has social type
```

- next step is a create api endpoints by using next.js fetch data and pull to frontend from backend
Next.js has already api folder that has endpoint so localhost:3000/api/hello

1. We need to install next-sanity to connect frontend with backend
* make sure that we are in right root folder not sanity because sanity has also package.json
```
npm install next-sanity @portabletext/react @sanity/image-url ```
2. create a sanity.ts file in main folder and create client by using next-sanity 
