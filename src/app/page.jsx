import Header from '@/components/Header/Header'
import Description from '@/components/Description/Description'
import ShortURL from '@/components/ShortURL/ShortURL'
import GetStarted from '@/components/GetStarted/GetStarted'
import Footer from '@/components/Footer/Footer'

export default function app() {
    return(
        <>
            <Header />
            <Description />
            <ShortURL />
            <GetStarted />
            <Footer />
        </>
    )
}