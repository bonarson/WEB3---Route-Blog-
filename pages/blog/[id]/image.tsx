// pages/blog/[id]/image.tsx
import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogImage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Blog {id} Image</h1>
      <Image
        src={`/blog${id}.jpg`} // Chemin relatif à partir du répertoire public
        alt={`Blog ${id} Image`}
        width={200}
        height={300}
      />
    </div>
  );
};

export default BlogImage;
