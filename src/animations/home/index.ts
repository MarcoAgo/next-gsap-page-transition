import gsap from "gsap";

export const mountAnim = () => {
  gsap.from('.homeLeftContent', {
    x: -800,
    duration: 0.8,
  })

  gsap.from('.anim-info', {
    y: '-15vh',
    duration: 0.8,
  })

  gsap.from('.photo-container', {
    x: '-50vw',
    duration: 0.8,
  })

  gsap.from('.anim-photo-enter', {
    x: i => i === 0 ? 0 : `${23.5 * i}vw` as any,
    scale: 0.8,
    duration: 0.8,
  })
}

export const unmountAnim = (callback: () => void) => {
  gsap.to('.homeLeftContent', {
    x: -800,
    duration: 0.8,
  })

  gsap.to('.photo-container', {
    x: '-50vw',
    duration: 0.8,
  })

  gsap.to('.anim-photo-enter', {
    x: i => i === 0 ? 0 : `${23.5 * i}vw` as any,
    // y: -100,
    scale: 0.8,
    duration: 0.8,
  })

  gsap.to('.anim-info', {
    y: '-15vh',
    duration: 0.8,
  }).then(callback)
}

