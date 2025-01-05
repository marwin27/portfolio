export default function PrimaryButton({ children }) {
    return (
        <button
            className="text-white text-sm font-bold py-2 px-4 rounded bg-[#003056] hover:bg-[#001f34]"
        >
            {children}
        </button>
    );
}
