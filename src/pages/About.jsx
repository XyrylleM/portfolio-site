import resumePDF from '../assets/resume.pdf'; // my uploaded resume
import profileImg from '../assets/profile.jpg'; // photo

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={profileImg} alt="Xyrylle Maputol" style={{ width: '150px', borderRadius: '50%' }} />
      <p>Hi, I'm Xyrylle Maputol. I am in my second year, third semester of Software Engineering Technology. I enjoy designing and love seeing my websites come to life with every code I write.</p>
      <a href={resumePDF} download style={{ display: 'inline-block', padding: '10px', background: '#4CAF50', color: 'white' }}>
        Download Resume
      </a>
    </div>
  );
}