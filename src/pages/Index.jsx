import '../components/Navbar/Navbar'
import Navbar from '../components/Navbar/Navbar';
import Footerbar from '../components/Footerbar/Footerbar';
import SearchTires from '../components/SearchTires/SearchTires';
import Banner from '../components/Banner/Banner';
export default function Index() {

    return (
        <>
            <Navbar />
            <div style={{height:'180px'}}></div>
            <div className="grid grid-cols-4 gap-4 h-[450px]">
                <div>
                    <SearchTires />
                </div>
                <div className='col-span-3'> <Banner /> </div>
            </div>
            <Footerbar />

        </>
    );
}