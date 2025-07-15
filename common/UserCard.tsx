import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, username, email, address, phone, website, company }) => {
    return(
        <div className="max-w-sm mx-auto my-6 p-6 bg-yellow-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-4 text-red-300">{name}</h2>
            <p className="text-gray-600 mb-2">Username: {username}</p>
            <p className="text-gray-600 mb-2">Email: {email}</p>
            <p className="text-gray-600 mb-2">Phone: {phone}</p>
            <p className="text-gray-600 mb-2">Website: {website}</p>
            <div className="mt-8">
                <h3 className="font-semibold text-gray-700">Address:</h3>
                <p>{address.street}, {address.suite}, {address.city}, {address.zipcode}</p>
                <p>Geo: {address.geo.lat}, {address.geo.lng}</p>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold text-gray-700">Company:</h3>
                <p>{company.name}</p>
                <p>{company.catchPhrase}</p>
                <p>{company.bs}</p>
            </div>
        </div>
    );
};

export default UserCard;
