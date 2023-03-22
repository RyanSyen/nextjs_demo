import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "@/components/Layout/layout";

/*
    Client-Side Navigation
    - client-side navigation means that the page transition happens using JS.
    - it is faster since it does not perform a full refresh unlike the default navigation - done by the browser
    - the link component replaces react-router library
    - if external page is used then we need to use the <a> tag without the Link component

    Code splitting and prefetching
    - does code splitting automatically where each page loads only on what's necessary for that page
    - when homepage is rendered the code for other pages is not served
    - this allows the page to be isolate from other pages, so when a page throws an errors, the rest still work
    - we can configure the default page to be as bare as possible to provide a fast loading experience
    - the prefetching feature (only in production) improves performance by preloading content like pages, assets, etc. NextJS uses browser APIs such as 'IntersectionObserver', 'Link.prefetch()', and 'Image.prefetch()', etc. It can prefetch content that the user is likely to need, based on factors such as their scrolling behavior, mouse movements, and page interactions. 
    - e.g. if user is scrolling down and there is a link to another page, it will initiate a prefetch of that page so that it is ready to be displayed as soon as the user clicks on the link

    Script component
    - next/script is an extension of the HTML <script> element and optimizes when additional scripts are fetched and executed
    - 
*/
const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Hello World</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Hello World!</h1>
      <Link href="/">Back to home</Link>
    </Layout>
  );
};

export default Index;
