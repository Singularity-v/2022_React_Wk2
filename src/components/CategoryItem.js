export default function CategoryItem( { category }) {
    return (

            <div className="col-lg-4 col-md-6">
                <a className="category-link" href="#">
                    <div className="container_test card">
                        <img src={category.imgURL} alt={category.title} />
                        <p className="category_name">{category.title}</p>
                        <div className="overlay">
                            <span className="dot"></span>
                            <div className="category_info">
                            {category.tools.map(items => (
                                <div key={category.id} items={items}>
                                    <span>{items.tool}</span>
                                </div>
                            ))}
                            {/* <span>{category.tools[0].tool}</span> */}
                            {/* <span>- Figma -</span>
                            <span>- Visual Studio Code -</span> */}
                            </div>
        
                            <img src="image/Arrow 1.png" alt="" />
                        </div>
                    </div>
                </a>
            </div>

    );
  }