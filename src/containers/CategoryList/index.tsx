import { ColumnsType } from 'antd/es/table';
import { useCallback, useEffect, useState } from 'react';
import { CategoryList as CategoryListComponent } from '../../components'
import { Category, GetCategoryResponse } from '../../types';
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom';

const CategoryList = () => {

    const [category, setCategory] = useState<Category[]>([]);
    const navigate = useNavigate();

    const getCategory = useCallback(
        async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                navigate('/login')
                return
            }

            console.log("Auth Token:", token);
            try {
                const response = await fetch('https://mock-api.arikmpt.com/api/category', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                });
                const data = await response.json();

                if (data && data.data) {
                    const datas = data.data.map((category: { id: string; }) => ({
                        ...category,
                        key: category.id
                    }));
                    setCategory(datas);
                } else {
                    setCategory([]);
                }
            } catch (error) {
                console.error("ERROR:", error);
                alert("Failed to fetch Categories!");
            }
        }, [navigate]);

    useEffect(() => {
        getCategory()
    }, [getCategory])

    const removeCategory = async (id: string) => {
        if (confirm('Are you sure wants to DELETE this data ?') === true) {
            try {
                const fetching = await fetch(`https://mock-api.arikmpt.com/api/category/${id}`, {
                    method: 'DELETE',
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })

                if (fetching) {

                    setCategory((prevCategories) =>
                        prevCategories.filter((category) => category.id !== id)
                    );
                    navigate(0)
                    console.log('Successfully Removed category');
                }
            } catch (error) {
                console.error(error)
            }
        }
    }

    const columns: ColumnsType<Category> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (text) => text || 'N/A',  // Render 'N/A' if 'id' is falsy or undefined
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => text || 'N/A',  // Render 'N/A' if 'name' is falsy or undefined
        },
        {
            title: 'Status',
            dataIndex: 'is_active',
            key: 'is_active',
            render: (_, record) => (record.is_active ? 'Active' : 'Deactive')
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <>
                    <Button type='primary' onClick={() => navigate(`/edit/${record.id}`)}>Edit</Button>
                    <Button type='primary' onClick={() => removeCategory(record.id)} htmlType="button" danger>Delete</Button>
                </>
            ),
        },
    ];

    return (
        <>
            <h3>Daftar Category</h3>
            <Button type={'primary'} onClick={() => navigate('/category/new')}>Tambah Category Baru</Button>
            <CategoryListComponent columns={columns} data={category} />
        </>
    )
}

export default CategoryList