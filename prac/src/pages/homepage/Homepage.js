import React from "react";
import Head1 from "../../components/Homepage/Head1";
import Head2 from "../../components/Homepage/Head2";
import Head3 from "../../components/Homepage/Head3";
import Head4 from "../../components/Homepage/Head4";
import Head5 from "../../components/Homepage/Head5";
import Head6 from "../../components/Homepage/Head6";
import Top from "../../components/top/Top";
import Nav from '../../components/nav/Nav'
import NavLogOut from '../../components/nav/NavLogOut'
import Footer from "../../components/footer/Footer";
import memoryUtils from '../../utils/memoryUtils'

const Homepage = () => {
  const username = memoryUtils.user.username ||memoryUtils.user.displayName || '';
  return (
    <>
      {username ?<Nav />:<NavLogOut/>}
      <Head1 />
      <Head2 />
      <Head3 />
      <Head4 />
      <Head5 />
      <Head6 />
      <Top />
      <Footer/>
    </>
  );
};
export default Homepage;
