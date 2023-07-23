import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Section } from 'components/Section/Section';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Section>
          <Outlet />
        </Section>
      </main>
    </>
  );
};

export default Layout;
