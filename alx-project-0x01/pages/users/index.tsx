import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
    const [post, setPost] = useState<UserData | null>(null);
  
  
    const handleAddPost = (newPost: UserData) => {
      setPost({ ...newPost, id: posts.length + 1 });
    };
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div>
        <button onClick={() => setModalOpen(true)} className="bg-blue-700 px-4 py-2 rounded-full text-white border border-red">
            Add User
          </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {
          posts.map(({ id, name, username, email, address, phone, website, company }: UserProps, key: number) => (
            <UserCard
              key={key}
              id={id}
              username={username}
              name={name}
              email={email}
              address={address}
              phone={phone}
              website={website}
              company={company}
            />
          ))
        }
      </div>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts: posts
    }
  };
}

export default Users;
