import React, { useState } from "react";
import { PostData } from "@/interfaces";

interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

const PostModal: React.FC<PostModalProps> = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, body, userId: 1, id: 0 });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-xl mb-4">Add New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-2 p-2 border rounded"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <textarea
            className="w-full mb-2 p-2 border rounded"
            placeholder="Body"
            value={body}
            onChange={e => setBody(e.target.value)}
            required
          />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
