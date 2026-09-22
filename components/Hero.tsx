export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/backgroundport.jpeg"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      {/* <div className="absolute inset-0 -z-10">
  <video
    src="/videos/portfolio-bg.mp4"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="h-full w-full object-cover"
  />

  <div className="absolute inset-0 bg-black/20" />
</div> */}
    </section>
  );
}