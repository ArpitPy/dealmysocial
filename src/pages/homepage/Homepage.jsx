import Topbar from '../../components/topbar/Topbar';
import Heroimage from '../../components/heroimage/Heroimage';
import Howitworks from '../../components/howitworks/Howitworks';
import Footer from '../../components/footer/Footer';
import CategoriesHome from '../../components/categories-home/CategoriesHome';

function Homepage() {
  return (
    <div>
      <Topbar />
      <Heroimage />
      <Howitworks />
      <CategoriesHome />
      <Footer />
    </div>
  )
}

export default Homepage