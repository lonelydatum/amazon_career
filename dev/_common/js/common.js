const banner = document.getElementById('banner')
import {canvasMaker} from './mask.js'


gsap.defaults({
  ease: "power2.out"
});



const size = {
	w:banner.offsetWidth, 
	h:banner.offsetHeight,
	ww:banner.offsetWidth*2, 
	hh:banner.offsetHeight*2
}

gsap.defaults({
  ease: "power2.out"
});



function text2(){
	const tl = new TimelineMax({})
	tl.set(".frame1", {opacity:1})
	tl.from(".t1", {duration:.3, opacity:0}, "+=.4")
	tl.from(".t2", {duration:.3, opacity:0}, "+=2")
}




function text1(maskTime=.38, paddingRight=30){
	
	// function text(data){
	// 	const {id, read} = data
	// 	const tl = new TimelineMax()
	// 	tl.set(`#${id} img`, {display:"block"})
	// 	tl.fromTo(`#${id}`, {duration:.5, opacity:0}, {opacity:1})

	// 	tl.add( ()=>{
	// 		canvasMaker(id, maskTime, paddingRight) 
	// 	}, `+=${read}`)

	// 	return tl
	// }

	function text(data){
		const {id, read} = data
		const tl = new TimelineMax()
		

		return tl
	}

	const data = {
		t1: { id: "t1", read: 1.5 }	,
		t2: { id: "t2", read: 1.8 }	,
		t3: { id: "t3", read: 2.5 }	,
		t4: { id: "t4", read: 2.8 }	,
	}
	const tl = new TimelineMax({})
	tl.set(".frame1", {opacity:1})

	const maskTimePadding = .2
	tl.from(`#${data.t1.id} img`, {duration:.3, opacity:0} )
	tl.to(`#${data.t1.id} img`, {duration:.3, opacity:0}, `+=${data.t1.read}` )

	tl.from(`#${data.t2.id} img`, {duration:.3, opacity:0} )
	tl.to(`#${data.t2.id} img`, {duration:.3, opacity:0}, `+=${data.t2.read}` )

	tl.from(`#${data.t3.id} img`, {duration:.3, opacity:0} )
	tl.to(`#${data.t3.id} img`, {duration:.3, opacity:0}, `+=${data.t3.read}` )

	tl.from(`#${data.t4.id} img`, {duration:.3, opacity:0} )
	tl.to(`#${data.t4.id} img`, {duration:.3, opacity:0}, `+=${data.t4.read}` )
	// tl.add(text(data.t1), 0)
	// tl.add(text(data.t2), `+=${maskTime+maskTimePadding}`)
	// tl.add("t3", `+=${maskTime+maskTimePadding}`)
	// tl.add(text(data.t3), "t3")
	// const version = globalBanner.name.split("-")
	// if(version.length===2){
		
	// 	if(version[1]==="b"){
	// 		tl.from("#legal", {duration:.3, opacity:0}, "t3")
	// 	}
	// }
	
	// tl.add(text(data.t4), `+=${maskTime+maskTimePadding}`)

	tl.to(`#${data.t1.id} img`, {duration:.3, opacity:1} )


}

function photo(){
	const tl = new TimelineMax({})
	tl.set(".frame1", {opacity:1})
	// tl.set(".photo", {x:}, "+=.4")
	tl.from(".photo", {duration:2, scale:.56})
	tl.from(".text", {duration:.3, opacity:0}, "-=.6")
}


export {text1, text2, size, photo}