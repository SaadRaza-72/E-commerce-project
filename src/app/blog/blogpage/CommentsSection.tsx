"use client";
import { useState } from "react";

export default function CommentsSection() {
  const comments = [
    { name: "ANSAR", comment: "asdf", date: "November 17, 2024 at 21:28pm", avatar: "/img-1.jpg" },
    { name: "HÙNG ĐỖ", comment: "Comment *", date: "June 11, 2024 at 16:52pm", avatar: "/img-2.jpg" },
    { name: "312", comment: "Ayayayayayya", date: "April 8, 2024 at 15:06pm", avatar: "/img-3.jpg" },
    { name: "TEST", comment: "sdfjljfkjd Comment", date: "March 24, 2024 at 22:43pm", avatar: "/img-4.jpg" },
    { name: "JFGHDF", comment: "jksklfjsdlfhsd f", date: "March 24, 2024 at 22:43pm", avatar: "/img-5.jpg" },
    { name: "ELENA", comment: "Love this!", date: "March 22, 2024 at 10:14am", avatar: "/img-6.jpg" },
    { name: "DAVID", comment: "Great insights!", date: "March 20, 2024 at 19:03pm", avatar: "/img-7.jpg" },
    { name: "AMY", comment: "Very helpful, thanks!", date: "March 18, 2024 at 14:24pm", avatar: "/img-8.jpg" },
    { name: "JACK", comment: "Interesting perspective.", date: "March 15, 2024 at 09:45am", avatar: "/img-1.jpg" },
    { name: "KAREN", comment: "Totally agree!", date: "March 12, 2024 at 11:17am", avatar: "/img-2.jpg" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 5;

  const lastIndex = currentPage * commentsPerPage;
  const firstIndex = lastIndex - commentsPerPage;
  const currentComments = comments.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  return (
    <div className=" flex items-center justify-center">
      <div className="w-full max-w-7xl p-6 bg-white rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-center">10 thoughts on “Spring – Summer Trending 2020”</h2>

        {/* Render Current Comments */}
        {currentComments.map((comment, index) => (
          <div key={index} className="flex items-start gap-4 mb-4">
            <img
              src={comment.avatar}
              alt={comment.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-bold">{comment.name}</h3>
              <p>{comment.comment}</p>
              <p className="text-sm italic text-gray-500">{comment.date}</p>
            </div>
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-4 gap-2">
          <button
            className={`px-3 py-1 border rounded ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "text-red-500 font-semibold" : "hover:bg-gray-200"}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className={`px-3 py-1 border rounded ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-200"}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
