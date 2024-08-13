'use client'

import FooterMain from '../components/footer/FooterMain';
import { usePathname } from 'next/navigation';

export const LayoutProvider = ({ children }:{children:React.ReactNode}) => {
    const pathname = usePathname();
    return (
        <>
            {children}
            {pathname !== "/discover" && <FooterMain />}
        </>
    )
};
export default LayoutProvider