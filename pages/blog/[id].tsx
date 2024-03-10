// pages/blog/[id]/image.tsx
import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogImage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Générer un ID aléatoire pour l'image
  const randomId = Math.floor(Math.random() * 1000);

  return (
    <div>
      <h1>Blog {id} Image</h1>
      <Image
        src={`https://picsum.photos/200/300?random=${randomId}`}
        alt={`Blog ${id} Image`}
        width={200}
        height={300}
      />
    </div>
  );
};

export default BlogImage;
