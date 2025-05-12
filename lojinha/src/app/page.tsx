import { BarraPesquisa } from './components/BarraPesquisa';
import { Navbar } from './components/Navbar';
import { Produtos } from './components/Produtos';

export default function Home() {
  return (
    <div>
      <Navbar />
      <BarraPesquisa />
      <Produtos />
    </div>
  );
}