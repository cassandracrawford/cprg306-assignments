export default function Item({itemObj}) {  
    let {name, quantity, category} = itemObj;

    return (
        <ul className="bg-[#D87280] p-4 text-white mb-4 w-md">
            <li className="font-semibold text-lg">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    );
}