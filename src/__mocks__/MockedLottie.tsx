const expectedOptions = {
  loop: true,
  autoplay: true,
  animationData: expect.any(Object),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function MockedLottie({
  width,
  height,
}: {
  width: string;
  height: string;
}) {
  return (
    <img
      data-testid={"lottie-animation"}
      width={width}
      height={height}
      alt="lottie-animation"
      data-options={expectedOptions}
    />
  );
}
