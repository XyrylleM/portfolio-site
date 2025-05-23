export default function Home() {
  return (
    <div>
      <h1>Xyrylle Maputol's Portfolio</h1>
      <p>Mission Statement: Learning how to create a functional and smooth website with fun.</p>
      <button onClick={() => window.location.href='/about'}>About Me →</button>
    </div>
  );
}