// pages/home.tsx
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogs = [
  { id: '1', title: 'Blog 1' },
  { id: '2', title: 'Blog 2' },
  { id: '3', title: 'Blog 3' },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <h1>Blog List</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <a href={`/blog/${blog.id}/image`}>
              <a>{blog.title}</a>
            </a>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>
  );
};

export default Home;
export const getServerSideProps = async () => {
  return { props: {} };
};
