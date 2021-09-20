import Header from 'containers/layout/header';
import Footer from 'containers/layout/footer';
import { Drawer, CartDrawer } from 'containers/drawer/drawer';

const Layout = (props) => (
  <main
    className="relative min-h-screen flex-grow"
    style={{
      minHeight: '-webkit-fill-available',
      WebkitOverflowScrolling: 'touch',
      ...props.style,
    }}
  >
    <Drawer />
    <Header />
    <div className="flex flex-col w-full h-full min-h-screen flex-grow">
      <div className="pt-90px flex-auto">{props.children}</div>
      <Footer />
    </div>
    <CartDrawer />
  </main>
);

export default Layout;
