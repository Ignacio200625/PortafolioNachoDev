function Input({ placeholder, email, setEmail }) {

    return (

        <div className="w-[45%]">
            <input type="email" name="" id="" placeholder={placeholder} value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#f8f8f8] p-2   rounded-md border-black border-solid border-1" />
        </div>

    )

}

export default Input