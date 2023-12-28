import './categories-container.styles.scss'
import CategoryItem from '../categories-item/category-item.component'
const CategoriesContainer = ({categories}) => {
  return (
        <div className="categories-container">
            {categories.map((categories) => {
            return <CategoryItem key={categories.id} categories={categories} />
          })}
        </div>
  );
}

export default CategoriesContainer