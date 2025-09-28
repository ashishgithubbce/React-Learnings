const Contact = () => {
  return (
    <div className="contact w-3/4 m-auto mt-5 p-5 border-2 border-blue-400 rounded-lg shadow-lg">
      <h1 className="font-bold text-3xl p-3 m-4">Contact Us</h1>
      <form className="flex flex-col m-4 p-4">
        <input
          className="border border-gray-300 rounded-lg p-2 m-2"
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <input
          className="border border-gray-300 rounded-lg p-2 m-2"
          type="email"
          name="email"
          placeholder="Email"
          required
        />{" "}
        <input
          className="border border-gray-300 rounded-lg p-2 m-2"
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />{" "}
        <textarea
          className="border border-gray-300 rounded-lg p-2 m-2"
          name="message"
          rows="5"
          placeholder="Message"
          required
        ></textarea>{" "}
        <button
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg m-2 hover:bg-blue-700  w-2xs "
          type="submit"
        >
          {" "}
          Submit{" "}
        </button>{" "}
      </form>
    </div>
  );
};
export default Contact;
