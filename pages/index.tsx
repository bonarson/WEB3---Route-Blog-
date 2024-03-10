// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from "./page.module.css";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, []);

  return null;
};

export default Index;
