type PetCardProps = {
    name: string;
    imgurl: string;
    onClick?: () => void;
};

export default function PetCard({ name, imgurl, onClick }: PetCardProps) {
    return (
        <div
            onClick={onClick}
            className="bg-white shadow-lg rounded-lg cursor-pointer hover:scale-105 transform transition flex flex-col items-center overflow-hidden"
        >
            <div className="w-full h-48 overflow-hidden">
                <img
                    src={imgurl}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mt-2 mb-4">{name}</h2>
        </div>
    );
}
