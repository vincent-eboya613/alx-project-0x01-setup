
import React, { useState } from "react";

type UserModalProps = {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
};

type UserData = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [post, setPost] = useState<UserData>({
    id: 1,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: 0,
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: 0,
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const parsedValue = ["number", "tel"].includes(type)
      ? Number(value)
      : value;

    setPost((prevPost) => {
      const keys = name.split(".");
      const updatedPost: UserData = { ...prevPost };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let obj: any = updatedPost;

      for (let i = 0; i < keys.length - 1; i++) {
        obj[keys[i]] = { ...obj[keys[i]] };
        obj = obj[keys[i]];
      }

      obj[keys[keys.length - 1]] = parsedValue;
      return updatedPost;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(post);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ID */}
          <Input
            label="ID"
            name="id"
            type="number"
            value={post.id}
            onChange={handleChange}
          />

          {/* Name */}
          <Input
            label="Name"
            name="name"
            value={post.name}
            onChange={handleChange}
          />

          {/* Username */}
          <Input
            label="Username"
            name="username"
            value={post.username}
            onChange={handleChange}
          />

          {/* Email */}
          <Input
            label="Email"
            name="email"
            type="email"
            value={post.email}
            onChange={handleChange}
          />

          {/* Address */}
          <Input
            label="Street"
            name="address.street"
            value={post.address.street}
            onChange={handleChange}
          />
          <Input
            label="Suite"
            name="address.suite"
            value={post.address.suite}
            onChange={handleChange}
          />
          <Input
            label="City"
            name="address.city"
            value={post.address.city}
            onChange={handleChange}
          />
          <Input
            label="Zipcode"
            name="address.zipcode"
            type="number"
            value={post.address.zipcode}
            onChange={handleChange}
          />
          <Input
            label="Latitude"
            name="address.geo.lat"
            value={post.address.geo.lat}
            onChange={handleChange}
          />
          <Input
            label="Longitude"
            name="address.geo.lng"
            value={post.address.geo.lng}
            onChange={handleChange}
          />

          {/* Phone */}
          <Input
            label="Phone"
            name="phone"
            type="tel"
            value={post.phone}
            onChange={handleChange}
          />

          {/* Website */}
          <Input
            label="Website"
            name="website"
            value={post.website}
            onChange={handleChange}
          />

          {/* Company */}
          <Input
            label="Company Name"
            name="company.name"
            value={post.company.name}
            onChange={handleChange}
          />
          <Input
            label="Catch Phrase"
            name="company.catchPhrase"
            value={post.company.catchPhrase}
            onChange={handleChange}
          />
          <Input
            label="Business (BS)"
            name="company.bs"
            value={post.company.bs}
            onChange={handleChange}
          />

          {/* Actions */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

type InputProps = {
  label: string;
  name: string;
  value: string | number;
  type?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
}) => (
  <div>
    <label htmlFor={name} className="block text-gray-700 font-medium mb-1">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder={`Enter ${label}`}
    />
  </div>
);
