function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 spacep-y-10 px-32 py-14 bg-gray-300 text-gray-600">
      <div className="mt-4 space-y-4 text-xs text-gray-800">
        <h5 className="font-bold cursor-pointer hover:underline">ABOUT</h5>
        <p className="hover:cursor-pointer hover:underline">How Airbnb works</p>
        <p className="hover:cursor-pointer hover:underline">Newsroom</p>
        <p className="hover:cursor-pointer hover:underline">Investors</p>
        <p className="hover:cursor-pointer hover:underline">Airbnb Plus</p>
        <p className="hover:cursor-pointer hover:underline">Airbnb Luxe</p>
      </div>

      <div className="mt-4 space-y-4 text-xs text-gray-800">
        <h5 className="font-bold cursor-pointer hover:underline">COMMUNITY</h5>
        <p className="hover:cursor-pointer hover:underline">Airbnb Community</p>
        <p className="hover:cursor-pointer hover:underline">
          Reach out to people
        </p>
        <p className="hover:cursor-pointer hover:underline">
          Join the Community
        </p>
        <p className="hover:cursor-pointer hover:underline">
          About the Community
        </p>
        <p className="hover:cursor-pointer hover:underline">
          Community Feedback
        </p>
      </div>

      <div className="mt-4 space-y-4 text-xs text-gray-800">
        <h5 className="font-bold cursor-pointer hover:underline">HOST</h5>
        <p className="hover:cursor-pointer hover:underline">Host on Airbnb</p>
        <p className="hover:cursor-pointer hover:underline">
          How to become a host
        </p>
        <p className="hover:cursor-pointer hover:underline">Docs on Hosting</p>
        <p className="hover:cursor-pointer hover:underline">Hosting tips</p>
        <p className="hover:cursor-pointer hover:underline">Hosting queries</p>
      </div>

      <div className="mt-4 space-y-4 text-xs text-gray-800">
        <h5 className="font-bold cursor-pointer hover:underline">SUPPORT</h5>
        <p className="hover:cursor-pointer hover:underline">Contact Airbnb</p>
        <p className="hover:cursor-pointer hover:underline">
          Frequently asked questions
        </p>
        <p className="hover:cursor-pointer hover:underline">Support staff</p>
        <p className="hover:cursor-pointer hover:underline">Airbnb Feedback</p>
        <p className="hover:cursor-pointer hover:underline">
          How Airbnb support works
        </p>
      </div>
    </div>
  );
}

export default Footer;
