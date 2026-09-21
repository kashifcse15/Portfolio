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
    </section>
  );
}