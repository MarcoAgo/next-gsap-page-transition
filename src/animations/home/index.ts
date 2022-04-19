import gsap, {Expo} from "gsap";

export const mountAnim = () => {
  gsap.from('.homeLeftContent', {
    x: -800,
    duration: 0.8,
  })

  gsap.from('.homeRightContent', {
    x: -790,
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

  gsap.to('.homeRightContent', {
    x: -805,
    duration: 0.8,
  })

  gsap.to('.anim-photo-enter', {
    x: i => i === 0 ? 0 : `${23.5 * i}vw` as any,
    // y: -100,
    scale: 0.8,
    duration: 0.8,
  }).then(() => callback())

  gsap.to('.anim-info', {
    // x: i => i === 0 ? 0 : `${23.5 * i}vw` as any,
    y: 0,
    scale: 0.8,
    duration: 0.8,
  }).then(() => callback())
}

