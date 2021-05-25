const prod = process.env.NODE_ENV === "production";
module.exports = {
  "process.env.BACKEND_URL": prod ? "/Next-gh-page-example" : "",
};

{
    "presets": [
      "next/babel"
    ],
    "plugins": [
      ["transform-define", "./env-config.js"]
    ]
  }

  <Link href='/about' as={ process.env.BACKEND_URL + '/about'}><a>About</a></Link>
