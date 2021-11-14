import CategoryItem from "./CategoryItems"
import style from "./cards.module.css";
const ListItems = ()=>{
    return (
        <>
         <div className={style.card}>
            <CategoryItem title="Electronics" url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Electronic._SY232_CB431401553_.jpg"/>
         </div>
         <div className={style.card}>
           <CategoryItem title="Fashion" url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fashion._SY232_CB431401553_.jpg"/>
         </div>
         <div className={style.card}>
           <CategoryItem title="Fresh" url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Fresh._SY232_CB431401553_.jpg"/>
         </div>
         <div className={style.card}>
            <CategoryItem title="Mobiles" url="https://images-eu.ssl-images-amazon.com/images/G/31/img19/2020/PC/Mobile._SY232_CB431401553_.jpg"/>
         </div>
        </>
    )
}

export default ListItems