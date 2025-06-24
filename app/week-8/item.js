export default function Item({itemObj, onSelect}) {  
    let {name, quantity, category} = itemObj;

    return (
        <ul onClick={onSelect} className="bg-[#D87280] p-4 text-white mb-4 hover:bg-[#A80507] hover:cursor-pointer">
            <li className="font-semibold text-lg">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    );
}