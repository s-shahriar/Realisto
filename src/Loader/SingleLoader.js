const singleLoader = async ({ params }) => {
    const res =  await fetch("/data.json");
    const {listings} = await res.json();
    const singleEstate = listings.filter((estate) => estate.id === params.Id);
    return singleEstate;
};


export default singleLoader