// pages/blog/[id].tsx
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Blog.module.css';

const Blog = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <h1>Blog {id} Details</h1>
      <p>Details of blog {id}.</p>
      <Link href={`/blog/${id}/image`}>
        <a>View Image</a>
      </Link>
    </div>
  );
};

export default Blog;
