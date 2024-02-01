// import { useEffect, useState } from "react"
// import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom"




// const Cardsdetails =()=>{
//     const[data, setdata] =useState([])
//     const {id} =useParams();
//     const getdata =useSelector((state)=>state.reducers.cards)


//     function compare(){
//         let compareres = getdata.filter((val)=>{
//             return val.id ==id
//         })

//         setdata (compareres)
//     }

//     useEffect(()=>{
//         compare()
//     }, [id])

//     return(
//         <div className="cartddetailsmain">
//             <h1>Card Details</h1>
//             <div>
//                 {
//                     data.map((val)=>{
//                         return(
//                             <div className="carddetails">
//                                 <div className="carddetailsimg">
//                                     <img src={val.imgurl} alt="" />
//                                 </div>

//                                 <div className="carddetailsdesc">
//                                     <h2>{val.cnmae}</h2>
//                                     <h3>{val.title}</h3>
//                                     <h3>{val.price}</h3>
//                                     <img src={val.rating} alt="" />
//                                 </div>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default Cardsdetails