"use client";

export default function CommentForm() {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-white">
      <h3 className="text-lg font-bold mb-1 text-center md:text-left">LEAVE A COMMENT</h3>
      <p className="text-gray-500 text-sm mb-4 text-center md:text-left">
        Your email address will not be published. Required fields are marked{" "}
        <span className="text-red-500">*</span>
      </p>

      <form className="space-y-4">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
          </div>
        </div>

        {/* Comment Field */}
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="comment">
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            id="comment"
            rows={4}
            className="w-full border border-gray-300 p-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center md:justify-start">
          <button
            type="submit"
            className="px-6 py-2 border border-black text-black font-medium rounded-full hover:bg-gray-100 transition"
          >
            Post Comment
          </button>
        </div>
      </form>
    </div>
  );
}
