import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CategoryCard from './CategoryCard';
import clothes from '../../images/clothe.png';
import cat2 from '../../images/cat2.png';
import laptop from '../../images/labtop.png';
import sale from '../../images/sale.png';
import pic from '../../images/pic.png';

const CategoryContainer = () => {
    return (
        <Container>
            <div className='admin-content-text mt-4'>كل التصنيفات</div>
            <Row className='my-2 d-flex justify-content-around'>
                <CategoryCard title=' ملابس' img={clothes} background='#A4D366' />
                <CategoryCard title='اجهزة منزلية' img={cat2} background='#ff4462' />
                <CategoryCard title=' اجهزة الكترونية' img={laptop} background='#5D6666' />
                <CategoryCard title=' تخفيضات' img={sale} background='#A4D366' />
                <CategoryCard title='ادوات منزلية' img={pic} background='#A4D366' />
                <CategoryCard title='ادوات منزلية' img={pic} background='#A4D366' />
                <CategoryCard title=' ملابس' img={clothes} background='#A4D366' />
                <CategoryCard title='اجهزة منزلية' img={cat2} background='#ff4462' />
                <CategoryCard title=' اجهزة الكترونية' img={laptop} background='#5D6666' />
                <CategoryCard title=' تخفيضات' img={sale} background='#A4D366' />
                <CategoryCard title='ادوات منزلية' img={pic} background='#A4D366' />
                <CategoryCard title='ادوات منزلية' img={pic} background='#A4D366' />
                <CategoryCard title=' ملابس' img={clothes} background='#A4D366' />
                <CategoryCard title='اجهزة منزلية' img={cat2} background='#ff4462' />
                <CategoryCard title=' اجهزة الكترونية' img={laptop} background='#5D6666' />
                <CategoryCard title=' تخفيضات' img={sale} background='#A4D366' />
                <CategoryCard title='ادوات منزلية' img={pic} background='#A4D366' />
                <CategoryCard title='ادوات منزلية' img={pic} background='#A4D366' />
            </Row>
        </Container>
    )
}

export default CategoryContainer