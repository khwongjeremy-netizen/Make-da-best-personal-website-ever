This page is for ideas to add on my aesthetic personal website. 

Nothin' - https://www.noth.in/ 
 - Key traits are the ink-splatter curosr which makes moving around wiht it highly appealing and interactive and this serves as a symbol of the comapnies artistic and creative motives.

 -spacing and images are big and fill up the pagee making scrolling an intractable option on the website. 

 -transition intros in switching tabs, doesnt follow a traditonnal navigation bar, let's the user discover the comapny rather than indpendantly select what fo view at. 

 -can seem a bit more of a movie or an animatiion than a website 

 -Makes high usage of images that contrast with the balck and white dominant colours
    - colours match with the comapnie's theme and purpose

//My moves:
- give special effects to the curosr, 
- abolish conventional layouts for contetn replacing them with creative, mysterious, unique layouts
- make high use of images and spacing and videos 
- choose colours that represent my story or the type of person I am

https://tomoyaokada.com/ 

-loading screens build suspense to the actual next page,
- great use of 3d visuals and effects

my moves:
-interperet more 3d visuals and effects 
- use loading screens in my website as well


https://alkemymarket.com/pricing
-an intractive background ehader, 
-glowy aesthetic visuyasl and colour schemes
-design highly reflects the branding 
- good use of hovers and mouse effects

- my moves:
- include more hovers 
have. a background or an interactive cursor feature 
-glowy aeshteitic possibly. 

Going to start drafting up new design of website 










IGLLOOO NOTES

Sites like Igloo.inc look completely different from normal websites because they act more like **video games**.

Instead of a flat webpage, they are built in two layers: a **3D background layer** that runs continuously, and a **transparent text layer** (your normal HTML) floating on top.

Here is the simplified breakdown of the 4 main techniques they use and the exact tools you can use to copy them:

### 1. The Interactive 3D Header (The Igloo)

* **What it is:** That igloo isn't a video; it's a real 3D object rendered live. When you move your mouse, an invisible line detects where you are pointing and rotates the 3D model to follow you.
* **How YOU can do it:** Use **Spline** (spline.design). It is a free, visual tool (like Figma or Canva, but for 3D). You can pick a 3D model, make it look like glass, set it to follow the mouse, and Spline will give you a simple `<script>` tag to paste right into your HTML background.

### 2. Liquid, Wavy Images

* **What it is:** When images ripple, distort, or stretch when you hover or scroll. The browser is treating the image like a physical sheet of rubber rather than a flat digital picture.
* **How YOU can do it:** You don't need to learn complex graphics math. Use a JavaScript library like **Curtains.js** or **HoverEffect.js**. You just link their file, give your normal `<img>` tags a specific class, and the library automatically applies those liquid, wavy distortion effects when you hover over them.

### 3. Seamless Page Transitions (No Reloads)

* **What it is:** Notice how clicking "Projects" doesn't cause the screen to flash white and reload? The 3D background never stops moving; only the HTML text fades out and swaps to the new page.
* **How YOU can do it:** Use **Barba.js**. It is a tool that hijacks the links on your site. Instead of loading a fresh page, Barba keeps your background layer locked in place, slides your old text out, and slides your new text in smoothly.

### 4. Magnetic, Heavy Buttons

* **What it is:** Buttons that feel physical. When your mouse gets close, the button is "pulled" toward your cursor. When you pull away, it snaps back into place like it's on a rubber band.
* **How YOU can do it:** Use the **GSAP** (GreenSock) animation library. You can write a tiny script that calculates the distance between the button and your mouse, and uses GSAP to physically pull the HTML element toward your cursor using simulated spring physics.

**The TL;DR:** You don't have to code a graphics engine from scratch to get this look. You build your normal HTML layout, use **Spline** for the 3D background, **GSAP** for bouncy magnetic elements, and **Barba.js** to make the page changes cinematic.

