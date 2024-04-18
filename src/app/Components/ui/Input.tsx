"use client"


interface inputProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
}



 export const Input = ({name, type, placeholder, value}: inputProps) => {
  return (
    <>
    <input className="w-full p-2 borer border-gray-200"
    name={name}
    type={type}
    value={value}
    placeholder={placeholder} />
    
        </>    
)
}
