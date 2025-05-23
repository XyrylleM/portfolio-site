const services = [
  { name: "Web Development", icon: "💻" },
  { name: "Game Development", icon: "🕹️" },
  { name: "Computer Repair", icon: "🔧" },
];

export default function Services() {
  return (
    <div>
      <h1>My Services</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {services.map((service, index) => (
          <li key={index} style={{ margin: '10px', fontSize: '1.2rem' }}>
            {service.icon} {service.name}
          </li>
        ))}
      </ul>
    </div>
  );
}