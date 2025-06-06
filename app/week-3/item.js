export default function Item({itemObj}) {
    let { name, quantity, category } = itemObj;
    
    return (
        <ul className="bg-[#D87280] p-4 text-white hover:bg-[#A80507]">
            <li className="font-semibold text-lg">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    );
}