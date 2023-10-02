import { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [])
    return (
        <div>
            <SectionTitle
                subTitle={'Popular Products'} title={'Browse Our Products'}
                decs={'the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. '}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    products.map(product => <ProductCard
                        key={product.id} product={product} />)
                }
            </div>
            <div className='text-center mt-6'>
                <button className="btn btn-outline text-[#ff3811] border-2 border-[#ff3811] font-semibold mb-8">More Services</button>
            </div>
        </div>
    );
};

export default Products;