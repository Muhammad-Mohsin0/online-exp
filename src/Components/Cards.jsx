
function Card ({value}) {

    return (
        <div className="max-w-2xl shadow-lg justify-center">
            <div className=" justify-center items-center w-[150% ">
                 <img src={value.imagesource} alt="" /> 
            </div><br />
            <div className="">
                <p>{value.rating}</p>
                <p>{value.description}</p>
                <p>{ value.price}</p>
            </div>
        </div>
       
    )
    
}

export default Card;