function SearchBar({ setCity }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        setCity(e.target.city.value)
        e.target.reset()
    }
    return (
        <form onSubmit={handleSubmit} className="text-center my-6">
            <input type="text" placeholder="search for city..." name="city" className="border-4 w-70 h-20 border-[#740058] text-center rounded-xl"/>
            <br /> <br />
            <button type="submit" className=" w-50 text-center bg-[#082351] text-cyan-100 rounded-2xl text-2xl">Search weather in this area</button>
        </form>
    )

}

export default SearchBar