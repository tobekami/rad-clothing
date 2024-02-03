import './home-directory.styles.scss'
import CategoryItem from '../categories-item/category-item.component'
const HomeDirectory = ({categories}) => {
  return (
        <div className="categories-container">
            {categories.map((category) => {
            return <CategoryItem key={category.id} category={category} />
          })}
        </div>
  );
}

export default HomeDirectory