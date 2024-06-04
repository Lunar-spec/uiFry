const Navbar = () => {
    return (
        <nav className="px-32 py-2 h-24 flex justify-between items-center">
            <div className="flex gap-8">
                <div>Logo</div>
                <div>Links</div>
            </div>
            <div>
                <button className="button-black px-4 py-2 font-medium">
                    Download
                </button>
            </div>
        </nav>
    )
}

export default Navbar