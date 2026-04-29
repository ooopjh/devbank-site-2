import HudVideoCard from "./HudVideoCard";

export default function HudLab() {
  const labs = [
    { id: "TX-1", title: "Latent Fluidity", src: "/lab-1.mp4" },
    { id: "TX-2", title: "Kinetic Lock", src: "/lab-2.mp4" },
    { id: "TX-3", title: "Neural Drift", src: "/lab-3.mp4" },
  ];
  return (
    <section id="research" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {labs.map((l) => <HudVideoCard key={l.id} {...l} />)}
      </div>
    </section>
  );
}
