import BlogList from '../components/BlogList';
import Book from '../components/Book';
import useFetch from '../useFetch';
import banner from '../images/banner_top_.webp';

function Home() {
    const { data: tours, isPending, error } = useFetch("http://localhost:8000/tours");
  
    return (
    <div className="wrap home" >
      <div className="banner_top">
        <img src={ banner } alt="" />
      </div>
      <section className="section_home">
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { tours && <BlogList tours={tours.filter((tour) => tour.datePost === 'recent')} title="Ours Tours" /> }
        <Book />
      </section>
    </div>
    );
  }
  export default Home;