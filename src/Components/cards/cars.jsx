import './cards.css'
import { card_data } from '../../utils/Constants/app'
const Card = ()=>{
    return(
        <>
     <div className="card-container">
         
          {card_data.map((items,index)=>{
             return(
                <>
         <div key={index} class="card-wrapper"> 
         <div class="image-wrapper">
          <img src={items.card_image} alt="" />
          </div>
          <div class="heading-wrapper">
           <h1>{items.card_title}</h1>
          </div>
          <div class="content-wrapper">
           <p>{items.card_Discripton}</p>
          </div> 
       </div>
               </>
            )
          })}
      
     </div>
        </>
    )
}
export default Card

