# tpwa (the private web ads)

this is a simple, static site compatible ad library with customizable campaigns, controllable in a json file.

to install it:
1. create a campaigns.json file in the root of your website containing the following:
```json
{
  "example-ad1": [
    {
      "url": "https://example.com",
      "img": "https://example.com/ad1.jpg"
    }
  ],

  "example-ad2": [
    {
        "url": "https://example.com",
        "img": "https://example.com/ad2.jpg"
    }
  ]
}
```

replace the names of the campaign(s), url and img accordingly.

2. download the tpwa.js script from this repository into the root of your website.

3. from there, just add this to where you want your ads:
```html
    <div id="tpwa-ad"></div>
    <script src="tpwa.js"></script>
```

on the web index, we use 960x137 ads (horizontal banner) ads. you can use whatever format you want (eg vertical banner ads, horizontal banner ads etc), just make sure that they would fit the spot where you want to put them.

if you want different size ads, we would recommend making another one of the tpwa.js file and another campaigns.json, and change the top variable accoridingly. eg, one campaigns.json could be for vertical ads, another for horizontal ones, another for hero ads, etc.

we also have a list of what campaigns and ads we run on the web index. check it out here:

# notes

using this system, you CANNOT track users. it's that simple. it is designed to take up as little resources and be as private as possible. that's why it's all client side. all the resources it uses is:
* browser;
* a little bit of JS (not considerably intensive);
* 15kb per ad network (at least on the web index).
