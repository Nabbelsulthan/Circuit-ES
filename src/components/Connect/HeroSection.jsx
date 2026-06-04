// export default function HeroSection() {
//   return (
//     <section className="bg-gradient-to-r from-black via-zinc-900 to-green-700">

//       <div className="max-w-7xl mx-auto px-6 py-16 text-white">

//         <h1 className="text-5xl font-bold">
//           CES Connect
//         </h1>

//         <p className="mt-4 text-zinc-300 text-lg">
//           Real-time visibility into your control panel projects,
//           documents, testing reports and dispatch status.
//         </p>

//       </div>

//     </section>
//   );
// }



export default function HeroSection() {
  return (
    <section className="ces-hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-badge">
          CIRCUITS ENERGY SYSTEM PVT LTD
        </div>

        <h1>
          CES Connect
        </h1>

        <h2>
          Real-Time Manufacturing Visibility
        </h2>

        <p>
          Monitor project progress, engineering approvals,
          production milestones, FAT reports, dispatch updates
          and technical documents — all from one secure portal.
        </p>

        <div className="hero-stats">

          <div className="hero-stat">
            <span>24/7</span>
            <p>Project Access</p>
          </div>

          <div className="hero-stat">
            <span>100%</span>
            <p>Transparency</p>
          </div>

          <div className="hero-stat">
            <span>Live</span>
            <p>Progress Updates</p>
          </div>

        </div>

      </div>

    </section>
  );
}