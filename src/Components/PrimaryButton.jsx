export default function PrimaryButton({ children }) {
    return (
        <button
            className=" text-white text-sm font-bold py-2 px-4 rounded"
            style={{ backgroundColor: '#003056' }}
        >
            {children}
        </button>
    );
}
