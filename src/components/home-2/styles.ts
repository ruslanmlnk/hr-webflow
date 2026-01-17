export const webflowStyles = {
  opacity0: { opacity: 0 },
  displayNone: { display: "none" },
  transformReset: {
    WebkitTransform: "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    MozTransform: "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    msTransform: "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
    transform: "translate3d(0px, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
  },
  applePayLogo: {
    backgroundImage: "-webkit-named-image(apple-pay-logo-white)",
    backgroundSize: "100% 50%",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
  },
} as const;
