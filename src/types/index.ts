export interface RegisterForm {
    [x: string]: any;
    name: string;
    email: string;
    password: string;
}

export interface LoginForm {
    email: string;
    password: string;
}

export interface LoginResponse {
    [x: string]: any;
    name: string;
    email: string;
    token: string;
}

export interface Category {
    id: string;
    name: string;
    is_active: boolean;
}

export type CategoryForm = Omit<Category, 'id'>

export interface GetCategoryResponse {
    category: CategoryForm[];
    total: number;
    skip: number;
    limit: number;
}