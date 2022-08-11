
function canvasMaker(maskFX="maskFX", duration= 2){
	
	const tl = new TimelineMax()

	

	const el = document.getElementById(maskFX)
	const canvas = el.querySelector("canvas")

	const img = el.querySelector("img")

	const context = canvas.getContext("2d")


	gsap.set(img, {display: "none"})

	context.drawImage(img, 0, 0, img.width, img.height, 0,0, img.width, img.height);
	
	console.log(duration);
	
	
	context.globalCompositeOperation = "destination-out";
	let obj = {wow:0}
	tl.to(obj, {duration, wow:1,  onUpdate:()=>{
		
		const gradient = context.createLinearGradient(0, 0, img.width, 0);	
		gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
		gradient.addColorStop(obj.wow, "rgba(255, 255, 255, 0)");
		context.fillStyle = gradient;
		context.fillRect(0, 0, img.width, img.height);
	}})
	tl.set(el, {opacity:0})



}



// function svgMaker(){

// 	const tl = new TimelineMax()



// 		tl.set(".frame1", {opacity:1})
// 		gsap.set("#theSVG", { 
// 			attr:{
// 				viewBox:`"0 0 ${size.ww} ${size.hh}"`,
// 				width: size.ww,
// 				height: size.hh
// 			} 
// 		});




// 		gsap.set(["#theGradient", "#patternImage","#gradientBox", "#pattern"], { attr: { width: size.ww, height: size.hh } });
		
// 		gsap.set("#theGradient", { attr: { 
// 			y1: size.w, 
// 			y2: size.h, 
// 			x1: size.ww, 
// 			x2: size.ww*2 } });
// 	gsap.to("#theGradient", {
// 	  duration: 2,
// 	  attr: { x1: -size.ww, x2: 1 },
// 	  repeat: -1,
// 	  yoyo: true,
// 	  repeatDelay: 0.5,
// 	  ease: "power2.inOut"
// 	});

// }



export {canvasMaker}