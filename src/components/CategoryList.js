import CategoryItem from './CategoryItem';
import categories from '../json/categories.json';

export default function Category() {
    return (
        <article className="category">
            <div className="container ">
                <div className="big_box">
                    <span className="dot"></span>
                    <p className="category_title">分類</p>
                    <span className="dot"></span>
                </div>
                <div className="row">
                {categories.map(category => (
                    <CategoryItem key={category.id} category={category}/>
                ))}
                </div>
            </div>
        </article>
    );
}