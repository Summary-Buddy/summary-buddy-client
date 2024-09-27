
import '../background.scss';
import Hero from '../components/home/Hero';
import Record from '../components/home/Record';
import Start from '../components/home/Start';

export default function Home() {
  return (
    <div className="Home">
      <Hero />
      <Record />
      <Start />
    </div>
  );
};