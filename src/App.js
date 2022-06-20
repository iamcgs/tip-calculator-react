import Calculator from './components/Calculator';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="md:x-cyan-700 mx-auto h-auto w-full max-w-[500px] rounded-3xl bg-white p-8 drop-shadow-lg md:max-w-[600px] lg:max-w-[1000px]">
        <Calculator />
      </main>
      <Footer />
    </>
  );
}

export default App;
