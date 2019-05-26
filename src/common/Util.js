const Util={
    searchAPI(router,searchText){
        if(searchText!=="") router.push(`/search/${searchText}`)
    }
}
export default Util;