import './categories-container.styles.scss'
import CategoryItem from '../categories-item/category-item.component'
const CategoriesContainer = ({categories}) => {
  return (
        <div className="categories-container">
            {categories.map((category) => {
            return <CategoryItem key={category.id} category={category} />
          })}
        </div>
  );
}

export default CategoriesContainer