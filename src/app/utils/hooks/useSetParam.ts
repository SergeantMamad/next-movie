"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface QueryParams {
  [key: string]: string | null;
}

const useUpdateQueryParams = () => {
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const updateQueryParams = (newParams: QueryParams) => {
    if (typeof window === 'undefined') {
      return; // Ensure that this code only runs on the client side
    }

    const currentParams = new URLSearchParams(searchParams.toString());

    Object.keys(newParams).forEach(key => {
      if (newParams[key]) {
        currentParams.set(key, newParams[key]!);
      } else {
        currentParams.delete(key);
      }
    });

    useEffect(() => {
      router.replace(`${pathname}?${currentParams.toString()}`,{
        scroll:false
      });
    }, [pathname, currentParams, router]);
  };

  return updateQueryParams;
};

export default useUpdateQueryParams;