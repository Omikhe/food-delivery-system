import Navbar from "./Navbar";

function About() {
    return (
        <>
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold mb-4">About Chirunga Munchies</h1>
                <p className="text-gray-700 mb-8">
                    Welcome to Chirunga Munchies, your go-to food delivery service designed specifically for UNIMA students. We understand the daily challenges you face balancing academics and campus life, which is why we're dedicated to providing a convenient solution for satisfying your hunger pangs.
                </p>

                <h1 className="text-3xl font-bold mb-4">Our Mission</h1>
                <p className="text-gray-700 mb-8">
                    At Chirunga Munchies, our mission is to revolutionize the way UNIMA students access food on campus. We strive to create a seamless and hassle-free dining experience that fits seamlessly into your busy schedule. Whether you're studying late into the night or rushing between classes, we're here to ensure you never go hungry.
                </p>

                <p className="text-gray-700 mb-4 font-bold">How It Works</p>
                <p className="text-gray-700 mb-8">
                    Getting delicious meals delivered to your doorstep has never been easier. Simply sign up for a Chirunga Munchies account and log in to explore our curated selection of on-campus food providers. With just a few taps, you can browse menus, place orders, and track deliveries right from your smartphone or computer.
                </p>

                <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                <ul className="list-disc pl-5 mb-8">
                    <li className="mb-2"><strong>Doorstep Delivery:</strong> Enjoy the convenience of having freshly prepared meals delivered straight to your room, saving you time and hassle.</li>
                    <li className="mb-2"><strong>Order Reservation:</strong> Need to plan ahead? Reserve your favorite dishes for later collection, ensuring you always have a satisfying meal waiting for you.</li>
                    <li className="mb-2"><strong>Secure Payments:</strong> Rest assured that your transactions are safe and secure. Choose from a variety of mobile money services to pay for your orders with ease.</li>
                    <li className="mb-2"><strong>Real-Time Notifications:</strong> Stay updated on the status of your orders with instant SMS notifications. From confirmation to delivery, we'll keep you informed every step of the way.</li>
                </ul>

                <h1 className="text-3xl font-bold mb-4">Meet the Team</h1>
                <p className="text-gray-700 mb-8">
                    Chirunga Munchies was founded by a team of passionate UNIMA students who saw an opportunity to improve campus dining. With a diverse range of skills and expertise, we're committed to delivering a superior food delivery experience tailored to the needs of our fellow students.
                </p>

                <h1 className="text-3xl font-bold mb-4">Get Started Today</h1>
                <p className="text-gray-700 mb-8">
                    Ready to satisfy your cravings with Chirunga Munchies? Sign up now and discover a world of delicious possibilities right at your fingertips. Whether you're in the mood for a quick snack or a hearty meal, we've got something for everyone. Join us in redefining campus dining and make your next meal a memorable one with Chirunga Munchies!
                </p>
            </div>
        </>
    );
}

export default About;