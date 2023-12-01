type ButtonPropsType = {
    label: string
    iconUrl?: string
    backgroundColor?: string
    borderColor?: string
    textColor?: string
    fullWidth?: boolean
}
export const Button = ({label, iconUrl, backgroundColor, borderColor, textColor, fullWidth}: ButtonPropsType) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none hover:bg-white rounded-full hover:text-coral-red ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : `bg-coral-red  text-white border-coral-red`} ${fullWidth && 'w-full'}`}>
            {label}
            {iconUrl && <img
                src={iconUrl}
                alt="arrow Right icon"
                className='ml-2 rounded-full w-5 h-5 '/>}
        </button>
    );
};
