# Paradise Nursery

A polished plant shop built with React, Vite, Redux Toolkit, and React Redux. Browse three plant collections, add favorites to your bag, adjust quantities, and see item subtotals and the order total update instantly.

## Features

- Landing page with a photographic background, Paradise Nursery branding, and a **Get started** call to action.
- Company story and values in `src/AboutUs.jsx`.
- Three product categories with six plants each in `src/ProductList.jsx`.
- Redux Toolkit cart state in `src/CartSlice.jsx`; added plants become disabled in the catalog until removed from the bag.
- Responsive navigation with a live bag quantity, cart item controls, subtotals, total, free shipping, continue shopping, and a checkout Coming Soon message.

## Run locally

Install [Node.js](https://nodejs.org/) (18 or newer), then from this folder run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. To create a production build, run `npm run build`; to preview that build, run `npm run preview`.

## Project files

```text
src/
  AboutUs.jsx
  App.css
  App.jsx
  CartItem.jsx
  CartSlice.jsx
  ProductList.jsx
  main.jsx
  store.js
index.html
package.json
```

## Publish to GitHub

1. Create a new **public** repository on GitHub, for example `paradise-nursery` (do not initialize it with a README if you already have this one).
2. Open a terminal in this project folder and run:

   ```bash
   git init
   git add .
   git commit -m "Build Paradise Nursery shopping application"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/paradise-nursery.git
   git push -u origin main
   ```

3. Replace `YOUR_USERNAME` with your GitHub username. In the repository, open each file and use **Copy permalink** or **Copy path**. Make sure the repository is public so the assignment grader can open the links.

## Assignment submission URLs

Replace `YOUR_USERNAME` with your GitHub username. These URLs match the seven requested filenames:

1. README: `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/README.md`
2. AboutUs.jsx: `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/AboutUs.jsx`
3. App.css: `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/App.css`
4. App.jsx: `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/App.jsx`
5. CartSlice.jsx: `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/CartSlice.jsx`
6. ProductList.jsx: `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/ProductList.jsx`
7. CartItem.jsx: `https://github.com/YOUR_USERNAME/paradise-nursery/blob/main/src/CartItem.jsx`

Submit the matching link in each assignment question after the push succeeds.
