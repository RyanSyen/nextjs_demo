import axios from "axios";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const NewsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const apiKey = "pub_1935792d941d7d43298419db0eda50e4619c1";
const newsUrl = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=social`;

const News = (props) => {
  return (
    <NewsWrapper>
      {/* {props.results.map((info) => {
        console.log(info);
        return <div key={uuidv4()}>{info.title}</div>;
      })} */}
      <div>{props.fact}</div>
    </NewsWrapper>
  );
};

export default News;

// static site generation
// getStaticProps only runs on the server side
// not suitable for dynamic data that changes frequently or data that is large that will slow down the build process
// export async function getStaticProps() {
//   try {
//     const { data } = await axios.get(newsUrl);
//     let newData = data;
//     newData.results = data.results.slice(0, 5);
//     console.log(newData);
//     return {
//       props: newData,
//     };
//   } catch (err) {
// throw new Error(`Error: ${err}, received status ${res.status}`);
//     console.log(err);
//   }
// }

// server side rendering
// since getServerSideProps is called at req time, its param "context" has request specific params
// use only if you need to pre-render every page where data must be fetched at request time when the data is not known ahead of time
export async function getServerSideProps(context) {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact");
    // const { data } = await axios.get(newsUrl);
    let newData = data;
    // newData.results = data.results.slice(0, 5);
    // console.log(newData);
    return {
      props: newData,
    };
  } catch (err) {
    throw new Error(`Error: ${err}, received status ${res.status}`);
    // throw new Error(`Failed to fetch posts, received status ${res.status}`)
    // console.log(err);
  }
}
