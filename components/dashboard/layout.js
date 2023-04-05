import styles from '../../styles/ds-layout.module.css'
import Header from './header'
import Footer from '../Footer'


export default function Layout({children}) {

    return (
        <>
            <div className={styles['dashboard']}>
                <Header />
            </div>
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}