import CategoryItem from '../category-item/category-item.component';
import './category-container.style.scss'


const CategoryContainer =({categories}) =>{
return(
 <div className='categories-container'>
    {categories.map((categorie)=>{
    return(
     <CategoryItem  key={categorie.id} category={categorie}/>
    );
    })}
 
    </div>
);
}

export default CategoryContainer;