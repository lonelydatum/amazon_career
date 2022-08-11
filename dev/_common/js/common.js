const banner = document.getElementById('banner')
import {canvasMaker} from './mask.js'
const data = {
	t1: { id: "t1", read: 1.5 }	,
	t2: { id: "t2", read: 1.8 }	,
	t3: { id: "t3", read: 2.5 }	,
	t4: { id: "t4", read: 2.5 }	,
}

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





function text(data){
	const {id, read} = data
	const tl = new TimelineMax()
	tl.set(`#${id} img`, {display:"block"})
	tl.fromTo(`#${id}`, {duration:.5, opacity:0}, {opacity:1})

	tl.add( ()=>{
		canvasMaker(id, .38) 
	}, `+=${read}`)

	return tl
}



function start(){
	const tl = new TimelineMax({

	})

	tl.set(".frame1", {opacity:1})

	tl.add(text(data.t1), 0)
	tl.add(text(data.t2), "+=.6")
	tl.add(text(data.t3), "+=.6")
	tl.add(text(data.t4), "+=.6")

	tl.from("#t5", {duration: .3, opacity:0}, "+=.6")


}


export {start}