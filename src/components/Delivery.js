import NavBar from "./Navbar";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { BiSolidBank } from "react-icons/bi";

const handleButtonClick = () => {
    fetch('https://ntfy.sh/omikhe', {
        method: 'POST',
        body: 'Your order is on the way!',
        headers: {
            'Title': 'Chirunga Munchies',
            'Priority': 'urgent'
        }
    })
        .then((response) => {
            console.log('Notification sent successfully');
        })
        .catch((error) => {
            console.error('Error sending notification:', error);
        });
};

const Delivery = () => {

    function handleSubmit(e) {
        e.preventDefault();
    }

    const location = useLocation();

    return (
        <>
            <NavBar />
            {/* div supposed to be linked to previous page*/}
            <Link to="/pay" state={{ name: location.state.name, image: location.state.image, price: location.state.price, description: location.state.description }} className="">
                <p className="px-60 mb-1.5 font-bold flex text-3xl items-center">
                    <MdOutlineArrowBackIos className="mr-1 h-6 text-3xl" />
                    Back
                </p>
            </Link>
            <div className="px-60">
                <div className="flex bg-gray-100 items-center py-36 justify-around min-h-96  rounded-lg">
                    <div className="h-96">

                        <img
                            src={require(`${location.state.image}`)}
                            alt="payImage"
                            className="h-96 rounded-lg"
                        />
                    </div>

                    <div className="flex-column pr-1 min-w-16 mr-40">

                        <p className="font-bold mb-5 text-4xl">Choose Delivery Method</p>
                        <form onSubmit={(e => handleSubmit(e))}>
                            <div className="mb-3 flex items-center">
                                <input type="radio" name="pay-method" checked="true" />
                                <BiSolidBank className="bg-black h-6 w-6 text-white ml-3 mr-2 text-sm rounded" />
                                <label className="font-normal ml-1">
                                    Home Delivery
                                </label>
                            </div>
                            <hr className="font-semibold mb-2 mx-3" />
                            <div className="mb-5 flex items-center">
                                <input type="radio" name="pay-method" />
                                <BiSolidBank className="bg-black h-5 w-5 text-white ml-3 mr-2 rounded" />
                                <label className="font-normal ml-1">
                                    Pick up
                                </label>
                            </div>
                            <button onClick={handleButtonClick} className="bg-orange-600 py-4 px-20 text-white mt-5  rounded font-medium text-2xl">
                                Proceed
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Delivery;