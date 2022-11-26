import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from './header';


export const siteTitle = 'PetPhotos';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{siteTitle}</title>
                {/* todo: insert site favicon */}
                <link rel="icon" href="/" />
                <meta
                    name="description"
                    content="View a lot of cute pets in the world."
                />
                {/* todo: insert meta tag */}
            </Head>
            <header>
                <Header />
            </header>
            <main>{children}</main>

        </div>
    );
}
