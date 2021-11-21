import { useEffect } from 'react';
import { sendRead } from 'src/api/blogs';
import IBlog from 'src/entities/blog';

const DURATION = 30 * 1000; // 30秒

/**
 * 30秒間ページを開いていたら既読を送信
 */
export const useRead = (blog: IBlog) => {
  useEffect(() => {
    const id = window.setTimeout(() => {
      sendRead(blog.id)
    }, DURATION);
    return () => {
      window.clearTimeout(id)
    }
  }, [blog.id])
}
