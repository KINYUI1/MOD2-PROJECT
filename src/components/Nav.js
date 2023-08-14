function Nav({catGeneral,catBusiness,catEntertainment,catHealth,catScience,catSports,catTechnology}) {
    return ( <>
    <nav>
        <button onClick={catGeneral}>General</button>
        <button onClick={catBusiness}>Business</button>
        <button onClick={catEntertainment}>Entertainment</button>
        <button onClick={catHealth}>Health</button>
        <button onClick={catScience}>Science</button>
        <button onClick={catSports}>Sports</button>
        <button onClick={catTechnology}>Technology</button>
    </nav>
    
    </> );
}

export default Nav;