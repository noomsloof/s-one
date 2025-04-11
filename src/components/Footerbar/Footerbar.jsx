import logo from '../../assets/images/SOne_index_logo.png';


const Footerbar = () => {
    return (
        <>
            <footer className='fixed bottom-0 left-0 w-full text-white text-sm py-2 z-50'>
                <nav className="bg-white w-full z-50 items-center">
                    <div className="mx-auto py-3 flex">
                        <div className="w-32">
                            <img src={logo} alt="Logo" />
                        </div>
                        <div className="bg-gray-900 mx-auto px-4 py-3 flex text-white w-full text-sm px-4 py-2 rounded-lg ml-2">
                            Copyright © 2014
                        </div>
                    </div>
                </nav>
            </footer>
        </>
    );
}

export default Footerbar;