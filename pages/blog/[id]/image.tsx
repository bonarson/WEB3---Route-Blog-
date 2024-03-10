// pages/blog/[id]/image.tsx
import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogImage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Utiliser un ID fixe pour l'image
  const fixedId = 1;

  return (
    <div>
      <h1>Blog {id} Image</h1>
      <Image
        src={`https://picsum.photos/200/300?random=${fixedId}`}
        alt={`Blog ${id} Image`}
        width={200}
        height={300}
      />
    </div>
  );
};

export default BlogImage;
